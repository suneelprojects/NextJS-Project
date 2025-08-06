/** @format */
"use client"
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import style from "./CareerSlection.module.css";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { quizData } from "@/app/career-quiz/quizData";
import { useRouter } from "next/navigation";
import jsPDF from 'jspdf';

const CareerQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(600);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const router = useRouter();
    const [userAnswers, setUserAnswers] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', mobile: '' });
    const [loading, setLoading] = useState(false);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const resultRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
        
        // Initialize Salesmax script
        if (!window.salesmaxScriptLoaded && !document.querySelector('script[src*="salesmax.ai"]')) {
            const script = document.createElement('script');
            script.src = 'https://salesmax.ai/formdata/js/index.js';
            script.async = true;
            script.onload = () => { 
                window.salesmaxScriptLoaded = true;
            };
            script.onerror = () => {
                console.error('Failed to load Salesmax script');
            };
            document.head.appendChild(script);
        }

        // Set initial window width
        setWindowWidth(window.innerWidth);

        // Add resize listener
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isFormSubmitted && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev === 1) {
                        clearInterval(timer);
                        handleFinishQuiz();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isFormSubmitted, timeLeft]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [quizData[currentQuestion].id]: option,
        }));
    };

    const handleFormSubmit = () => {
        setShowForm(true);
        setIsFormSubmitted(true);
    };

    const handleNextQuestion = () => {
        if (selectedOption) {
            setResponses((prevResponses) => [...prevResponses, selectedOption]);
            setSelectedOption(null);
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion((prev) => prev + 1);
            } else {
                handleFinishQuiz();
            }
        }
    };

    useEffect(() => {
        if (selectedOption !== null) {
            setTimeout(() => {
                handleNextQuestion();
            }, 500);
        }
    }, [selectedOption]);

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
            setResponses((prevResponses) => prevResponses.slice(0, -1));
            setSelectedOption(null);
        }
    };

    const sheetURL = "https://script.google.com/macros/s/AKfycbwq2ZtrNBCozKx_A23Ab4k02yCsxt5v1Wx7OQsY2RRzECvEnieV98bYm5rmWch0ZjcIag/exec";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name)) {
            alert("Please enter a valid name (alphabets only).");
            return;
        }

        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        setLoading(true);

        const formDataEncoded = new FormData();
        formDataEncoded.append('name', formData.name);
        formDataEncoded.append('phone', formData.mobile);
        formDataEncoded.append('sheetName', 'careerQuiz');

        fetch(sheetURL, {
            method: 'POST',
            body: formDataEncoded
        })
            .then((response) => {
                if (response.ok) {
                    try {
                        if (!window.salesmaxScriptLoaded) {
                            const script = document.createElement('script');
                            script.src = 'https://salesmax.ai/formdata/js/index.js';
                            script.async = true;
                            script.onload = () => { 
                                window.salesmaxScriptLoaded = true;
                                initializeSalesmax();
                            };
                            document.body.appendChild(script);
                        } else {
                            initializeSalesmax();
                        }

                        function initializeSalesmax() {
                            window.salesmaxDataLayer = window.salesmaxDataLayer || [];
                            function salesmax() {
                                window.salesmaxDataLayer.push(arguments);
                            }
                            
                            salesmax('form-id', 'Career Quiz Form');
                            salesmax('account', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJqdGkiOiI0NDQ2MzgwNC1mZTMwLTRhZWYtOGRmMS00OWE3ZmJlNTBlNDAiLCJzdWIiOiJiMmI4MzM2OC01M2QxLTQyOGMtYmEzNC02NDZjZDZlNTExMjMiLCJpYXQiOjE3NTM3MDU0NDZ9.k07Y0TJwp6al2RQAOqbnS4d2JIyqdRLj1des0bYFeBuecEz2CG6ZHboL0z1WS9ko');
                            
                            salesmax('event', 'form_submit', { 
                                name: formData.name, 
                                mobile: formData.mobile,
                                form_type: 'Career Quiz Form',
                                page_url: window.location.href,
                                timestamp: new Date().toISOString()
                            });
                        }
                    } catch (error) {
                        console.error('Error in SalesMax integration:', error);
                    }
                    alert('Form submitted successfully!');
                    setIsFormSubmitted(true);
                    setShowForm(false);
                } else {
                    alert('Error submitting form. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            })
            .finally(() => setLoading(false));
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const calculateResult = () => {
        if (responses.length === 0) {
            return {
                resultText1: "You haven't answered any questions.",
                redirectPath: "/Career-Success-workshop",
                chartData: []
            };
        }
        const counts = { A: 0, B: 0, C: 0 };
        responses.forEach((response) => {
            if (response.startsWith("A")) counts.A++;
            else if (response.startsWith("B")) counts.B++;
            else if (response.startsWith("C")) counts.C++;
        });

        const maxCount = Math.max(counts.A, counts.B, counts.C);
        let resultText1 = "";
        let resultText2 = "";
        let resultText3 = "";
        let redirectPath = "";

        if (maxCount === counts.A) {
            resultText1 = "You're a Creative Tech Innovator!";
            resultText2 = "Full Stack Web Development";
            resultText3 = "Your passion for coding and user-focused design makes you ideal for building dynamic web experiences.";
            redirectPath = "/courses";
        } else if (maxCount === counts.B) {
            resultText1 = "You're an Analytical Trailblazer!";
            resultText2 = "Data Science & AI";
            resultText3 = "Your knack for data analysis and problem-solving aligns perfectly with cutting-edge AI and data science roles.";
            redirectPath = "/courses";
        } else {
            resultText1 = "You're a Versatile Tech Star!";
            resultText2 = "Tech Generalist Roles";
            resultText3 = "Your diverse skills suit roles like Data Engineer or AI-Powered Web Developer.";
            redirectPath = "/courses";
        }

        const chartData = [
            { name: 'Web Development', value: counts.A },
            { name: 'Data Science/AI', value: counts.B },
            { name: 'Tech Generalist', value: counts.C }
        ];

        return { resultText1, resultText2, resultText3, redirectPath, chartData };
    };
    
    const result = calculateResult();
    const COLORS = ['#10b981', '#f59e0b', '#3b82f6'];

    const handleFinishQuiz = () => {
        setShowResult(true);
    };

    const generatePDF = async () => {
        setIsGeneratingPDF(true);
        try {
            // Validate that we have results to generate PDF
            if (!result || !result.resultText1) {
                alert('No results available to generate PDF. Please complete the quiz first.');
                return;
            }

            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const margin = 20;
            const contentWidth = pageWidth - (2 * margin);
            let yPosition = margin;

            // Add professional header with logo placeholder
            pdf.setFillColor(44, 62, 80);
            pdf.rect(0, 0, pageWidth, 40, 'F');
            
            pdf.setFontSize(28);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(255, 255, 255);
            pdf.text('Social Prachar', pageWidth / 2, 20, { align: 'center' });
            
            pdf.setFontSize(14);
            pdf.setFont('helvetica', 'normal');
            pdf.text('Career Assessment Report', pageWidth / 2, 30, { align: 'center' });

            yPosition = 50;

            // Add date and user info with better styling
            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(52, 73, 94);
            
            const currentDate = new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            pdf.text(`Report Generated: ${currentDate}`, margin, yPosition);
            yPosition += 8;

            if (formData.name && formData.name.trim()) {
                pdf.text(`Participant Name: ${formData.name.trim()}`, margin, yPosition);
                yPosition += 8;
            }

            if (formData.mobile && formData.mobile.trim()) {
                pdf.text(`Contact: ${formData.mobile.trim()}`, margin, yPosition);
                yPosition += 8;
            }

            // Add separator
            yPosition += 5;
            pdf.setDrawColor(52, 73, 94);
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 10;

            // Executive Summary Section
            pdf.setFontSize(16);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(44, 62, 80);
            pdf.text('Executive Summary', margin, yPosition);
            yPosition += 12;

            // Add subtle background for section
            pdf.setFillColor(248, 249, 250);
            pdf.rect(margin - 3, yPosition - 3, contentWidth + 6, 25, 'F');

            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(52, 73, 94);

            const summaryText = [
                `Based on your responses to our comprehensive 20-question career assessment,`,
                `we've identified your optimal career path in the technology sector.`,
                `This report provides detailed insights and actionable recommendations.`
            ];

            summaryText.forEach(text => {
                const lines = pdf.splitTextToSize(text, contentWidth);
                if (yPosition + (lines.length * 5) > pageHeight - margin) {
                    pdf.addPage();
                    yPosition = margin;
                }
                pdf.text(lines, margin, yPosition);
                yPosition += lines.length * 5 + 2;
            });

            yPosition += 8;

            // Add section separator
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.3);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 10;

            // Career Recommendation Section with enhanced styling
            if (yPosition > pageHeight - 80) {
                pdf.addPage();
                yPosition = margin;
            }

            pdf.setFontSize(18);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(44, 62, 80);
            pdf.text('Career Recommendation', margin, yPosition);
            yPosition += 12;

            // Add colored background for recommendation
            pdf.setFillColor(240, 248, 255);
            pdf.rect(margin - 5, yPosition - 5, contentWidth + 10, 35, 'F');
            
            pdf.setFontSize(14);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(44, 62, 80);
            pdf.text(result.resultText1, margin, yPosition);
            yPosition += 8;

            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(52, 73, 94);
            
            const recommendationDetails = [
                `Career Path: ${result.resultText2}`,
                `Description: ${result.resultText3}`
            ];

            recommendationDetails.forEach(text => {
                const lines = pdf.splitTextToSize(text, contentWidth);
                if (yPosition + (lines.length * 6) > pageHeight - margin) {
                    pdf.addPage();
                    yPosition = margin;
                }
                pdf.text(lines, margin, yPosition);
                yPosition += lines.length * 6 + 3;
            });

            yPosition += 15;

            // Add section separator
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.3);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 10;

            // Response Analysis Section with charts
            if (yPosition > pageHeight - 100) {
                pdf.addPage();
                yPosition = margin;
            }

            pdf.setFontSize(18);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(44, 62, 80);
            pdf.text('Response Analysis', margin, yPosition);
            yPosition += 12;

            // Add subtle background for section
            pdf.setFillColor(248, 249, 250);
            pdf.rect(margin - 3, yPosition - 3, contentWidth + 6, 15, 'F');

            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(52, 73, 94);

            if (result.chartData && result.chartData.length > 0) {
                result.chartData.forEach((item, index) => {
                    if (yPosition > pageHeight - 50) {
                        pdf.addPage();
                        yPosition = margin;
                    }
                    
                    const percentage = ((item.value / quizData.length) * 100).toFixed(1);
                    const totalResponses = quizData.length;
                    
                    // Add colored bullet point
                    pdf.setFillColor(COLORS[index % COLORS.length]);
                    pdf.circle(margin + 2, yPosition - 1, 1.5, 'F');
                    
                    const text = `${item.name}: ${item.value} out of ${totalResponses} responses (${percentage}%)`;
                    const lines = pdf.splitTextToSize(text, contentWidth - 10);
                    pdf.text(lines, margin + 8, yPosition);
                    yPosition += lines.length * 6 + 3;
                });
            } else {
                pdf.text('No response data available for analysis.', margin, yPosition);
                yPosition += 8;
            }

            yPosition += 10;

            // Add section separator
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.3);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 10;

            // Skills Assessment Section
            if (yPosition > pageHeight - 80) {
                pdf.addPage();
                yPosition = margin;
            }

            pdf.setFontSize(18);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(44, 62, 80);
            pdf.text('Skills Assessment', margin, yPosition);
            yPosition += 12;

            // Add subtle background for section
            pdf.setFillColor(248, 249, 250);
            pdf.rect(margin - 3, yPosition - 3, contentWidth + 6, 15, 'F');

            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(52, 73, 94);

            const skillsText = [
                'Based on your responses, here are the key skills and traits identified:',
                '',
                '• Problem-solving abilities',
                '• Technical aptitude',
                '• Analytical thinking',
                '• Creative problem-solving',
                '• Adaptability to new technologies',
                '• Attention to detail',
                '• Logical reasoning'
            ];

            skillsText.forEach(text => {
                if (yPosition > pageHeight - 30) {
                    pdf.addPage();
                    yPosition = margin;
                }
                const lines = pdf.splitTextToSize(text, contentWidth);
                pdf.text(lines, margin, yPosition);
                yPosition += lines.length * 5 + 2;
            });

            yPosition += 10;

            // Add section separator
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.3);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 10;

            // Detailed Responses Section
            if (yPosition > pageHeight - 60) {
                pdf.addPage();
                yPosition = margin;
            }

            pdf.setFontSize(18);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(44, 62, 80);
            pdf.text('Detailed Response Analysis', margin, yPosition);
            yPosition += 12;

            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(52, 73, 94);

            if (quizData && quizData.length > 0) {
                quizData.forEach((quizItem, index) => {
                    if (yPosition > pageHeight - 60) {
                        pdf.addPage();
                        yPosition = margin;
                    }

                    // Question with background
                    pdf.setFillColor(248, 249, 250);
                    pdf.rect(margin - 3, yPosition - 3, contentWidth + 6, 15, 'F');
                    
                    pdf.setFont('helvetica', 'bold');
                    const questionText = `Question ${index + 1}: ${quizItem.question}`;
                    const questionLines = pdf.splitTextToSize(questionText, contentWidth);
                    pdf.text(questionLines, margin, yPosition);
                    yPosition += questionLines.length * 4 + 3;

                    // Answer
                    pdf.setFont('helvetica', 'normal');
                    const userAnswer = userAnswers[quizItem.id] || 'Not answered';
                    const answerText = `Your Answer: ${userAnswer}`;
                    const answerLines = pdf.splitTextToSize(answerText, contentWidth);
                    pdf.text(answerLines, margin + 5, yPosition);
                    yPosition += answerLines.length * 4 + 5;

                    // Add subtle separator
                    if (index < quizData.length - 1) {
                        pdf.setDrawColor(220, 220, 220);
                        pdf.setLineWidth(0.2);
                        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
                        yPosition += 5;
                    }
                });
            } else {
                pdf.text('No quiz data available.', margin, yPosition);
                yPosition += 8;
            }

            yPosition += 10;

            // Next Steps Section with enhanced recommendations
            if (yPosition > pageHeight - 120) {
                pdf.addPage();
                yPosition = margin;
            }

            pdf.setFontSize(18);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(44, 62, 80);
            pdf.text('Next Steps & Action Plan', margin, yPosition);
            yPosition += 12;

            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(52, 73, 94);

            const nextSteps = [
                '1. Explore our comprehensive courses at Social Prachar',
                '2. Get your personalized career roadmap',
                '3. Connect with industry mentors and professionals',
                '4. Join our tech community for networking',
                '5. Start with foundational skills and build up',
                '6. Consider our career counseling services',
                '7. Attend our workshops and events',
                '8. Build a portfolio of projects in your chosen field',
                '9. Stay updated with latest industry trends',
                '10. Set specific career goals and milestones'
            ];

            nextSteps.forEach(step => {
                if (yPosition > pageHeight - 30) {
                    pdf.addPage();
                    yPosition = margin;
                }
                const lines = pdf.splitTextToSize(step, contentWidth);
                pdf.text(lines, margin, yPosition);
                yPosition += lines.length * 5 + 2;
            });

            yPosition += 10;

            // Contact Information Section
            if (yPosition > pageHeight - 60) {
                pdf.addPage();
                yPosition = margin;
            }

            pdf.setFillColor(44, 62, 80);
            pdf.rect(margin - 5, yPosition - 5, contentWidth + 10, 40, 'F');
            
            pdf.setFontSize(14);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(255, 255, 255);
            pdf.text('Get In Touch', margin, yPosition + 5);
            yPosition += 10;

            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');
            const contactInfo = [
                'Website: www.socialprachar.com',
                'Email: info@socialprachar.com',
                'Phone: +91-XXXXXXXXXX',
                'Location: Hyderabad, India'
            ];

            contactInfo.forEach(info => {
                pdf.text(info, margin, yPosition);
                yPosition += 5;
            });

            // Footer
            yPosition += 10;
            pdf.setDrawColor(52, 73, 94);
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 8;

            pdf.setFontSize(9);
            pdf.setFont('helvetica', 'italic');
            pdf.setTextColor(128, 128, 128);
            pdf.text('Generated by Social Prachar - Your Career Development Partner', pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 4;
            pdf.text('This report is confidential and intended for personal career development use only.', pageWidth / 2, yPosition, { align: 'center' });

            // Save the PDF with better naming
            const timestamp = new Date().toISOString().split('T')[0];
            const sanitizedName = formData.name ? formData.name.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').toLowerCase() : 'user';
            const fileName = `career_assessment_${sanitizedName}_${timestamp}.pdf`;
            pdf.save(fileName);

            // Show success message
            console.log('PDF generated successfully:', fileName);

        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF. Please try again. If the problem persists, please contact support.');
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    return (
        <div className={style.container}>
            {!isFormSubmitted ? (
                <div className={style.heroSection} data-aos="fade-up">
                    <div className={style.heroContent}>
                        <h1 className={style.heroTitle}>
                            Discover Your Dream Tech Career
                        </h1>
                        <p className={style.heroSubtitle}>
                            Take our 10-minute quiz to unlock personalized career insights
                        </p>
                        
                        <div className={style.featuresGrid}>
                            <div className={style.featureCard} data-aos="zoom-in">
                                <div className={style.featureIcon}>🌟</div>
                                <h3>Custom Insights</h3>
                                <p>Tailored career paths based on your unique strengths</p>
                            </div>
                            <div className={style.featureCard} data-aos="zoom-in" data-aos-delay="100">
                                <div className={style.featureIcon}>🎓</div>
                                <h3>Expert-Backed</h3>
                                <p>Designed by top industry professionals</p>
                            </div>
                            <div className={style.featureCard} data-aos="zoom-in" data-aos-delay="200">
                                <div className={style.featureIcon}>🚀</div>
                                <h3>Actionable Plan</h3>
                                <p>Clear steps to launch your tech journey</p>
                            </div>
                        </div>

                        <button className={style.ctaButton} onClick={handleFormSubmit} data-aos="fade-up" data-aos-delay="300">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            ) : !showResult ? (
                <div className={style.quizContainer} >
                    <div className={style.quizHeader}>
                        <h1 className={style.quizTitle}>Career Path Quiz</h1>
                        <div className={style.timerContainer}>
                            <div className={style.timer}>
                                <span className={style.timerIcon}>⏱️</span>
                                <span className={style.timerText}>{formatTime(timeLeft)}</span>
                            </div>
                        </div>
                        <div className={style.progressContainer}>
                            <div className={style.progressBar}>
                                <div 
                                    className={style.progressFill} 
                                    style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                                ></div>
                            </div>
                            <span className={style.progressText}>
                                Question {currentQuestion + 1} of {quizData.length}
                            </span>
                        </div>
                    </div>

                    <div className={style.questionSection}>
                        <div className={style.questionCard}  >
                            <h2 className={style.questionText}>
                                {quizData[currentQuestion].question}
                            </h2>
                            <div className={style.optionsContainer}>
                                {quizData[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`${style.optionButton} ${selectedOption === option ? style.selected : ''}`}
                                        onClick={() => handleOptionClick(option)}
                                        
                                        
                                    >
                                        <div className={style.optionContent}>
                                            <span className={style.optionText}>{option}</span>
                                            {selectedOption === option && (
                                                <span className={style.checkmark}>✓</span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={style.navigationContainer}>
                        <button
                            className={`${style.navButton} ${style.prevButton}`}
                            onClick={handlePrevQuestion}
                            disabled={currentQuestion === 0}
                        >
                            ← Previous
                        </button>
                        <button
                            className={`${style.navButton} ${style.nextButton}`}
                            onClick={handleNextQuestion}
                            disabled={!selectedOption}
                        >
                            {currentQuestion + 1 === quizData.length ? "Finish Quiz" : "Next →"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className={style.resultsContainer} ref={resultRef} data-aos="fade-up">
                    <div className={style.resultsHeader}>
                        <h1 className={style.resultsTitle}>Your Tech Career Path</h1>
                        <p className={style.resultsSubtitle}>
                            Explore your personalized career recommendations
                        </p>
                    </div>

                    <div className={style.resultsContent}>
                        <div className={style.recommendationCard} data-aos="fade-up" >
                            <div className={style.recommendationContent}>
                                <h2 className={style.recommendationTitle}>
                                    {result.resultText1}
                                </h2>
                                <h3 className={style.careerPath}>
                                    {result.resultText2}
                                </h3>
                                <p className={style.recommendationDescription}>
                                    {result.resultText3}
                                </p>
                            </div>
                        </div>

                        <div className={style.chartContainer} data-aos="fade-up" >
                            {result.chartData && result.chartData.length > 0 ? (
                                <div className={style.chartWrapper}>
                                    <h3 className={style.chartTitle}>Career Fit Analysis</h3>
                                    <ResponsiveContainer width="100%" height={windowWidth <= 480 ? 300 : windowWidth <= 768 ? 320 : 350}>
                                        <PieChart>
                                            <Pie
                                                dataKey="value"
                                                data={result.chartData}
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={windowWidth <= 480 ? 60 : windowWidth <= 768 ? 70 : 80}
                                                innerRadius={windowWidth <= 480 ? 25 : windowWidth <= 768 ? 30 : 35}
                                                fill="#8884d8"
                                                label={({ name, value, percent }) => {
                                                    if (value === 0) return '';
                                                    // For mobile screens, show shorter labels
                                                    if (windowWidth <= 480) {
                                                        const shortName = name.includes(' ') ? name.split(' ')[0] : name.substring(0, 8);
                                                        return `${shortName}: ${value}`;
                                                    } else if (windowWidth <= 768) {
                                                        const shortName = name.includes(' ') ? name.split(' ')[0] : name.substring(0, 12);
                                                        return `${shortName}: ${value}`;
                                                    } else {
                                                        return `${name}: ${value} (${(percent * 100).toFixed(0)}%)`;
                                                    }
                                                }}
                                                labelLine={false}
                                            >
                                                {result.chartData.map((entry, index) => (
                                                    <Cell 
                                                        key={`cell-${index}`} 
                                                        fill={COLORS[index % COLORS.length]}
                                                        stroke="#fff"
                                                        strokeWidth={2}
                                                    />
                                                ))}
                                            </Pie>
                                            <Tooltip 
                                                contentStyle={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                    border: 'none',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                                    padding: '10px',
                                                    fontSize: windowWidth <= 480 ? '12px' : '14px'
                                                }}
                                                formatter={(value, name) => [`${value} responses`, name]}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            ) : (
                                <div className={style.noDataMessage}>
                                    <h3>No data to display</h3>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={style.actionButtons}>
                        <button
                            className={`${style.actionButton} ${style.exploreButton}`}
                            onClick={() => router.push(result.redirectPath)}
                            data-aos="fade-up"
                           
                        >
                            Discover Courses
                        </button>
                        {responses.length > 0 && (
                            <button 
                                className={`${style.actionButton} ${style.downloadButton}`} 
                                onClick={generatePDF}
                                disabled={isGeneratingPDF}
                                data-aos="fade-up"
                                
                                
                            >
                                {isGeneratingPDF ? (
                                    <>
                                        <span className={style.spinner}></span>
                                        Generating PDF...
                                    </>
                                ) : (
                                    <>
                                        📄 Download Detailed Report
                                    </>
                                )}
                            </button>
                        )}
                        <button
                            className={`${style.actionButton} ${style.roadmapButton}`}
                            onClick={() => router.push("/career-roadmaps")}
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            🗺️ Career Roadmap
                        </button>
                    </div>


                </div>
            )}

            {showForm && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContent} data-aos="zoom-in">
                        <div className={style.modalHeader}>
                            <h2>Begin Your Tech Adventure</h2>
                           
                        </div>
                        <div className={style.modalBody}>
                            <form onSubmit={handleSubmit} className={style.registrationForm}>
                                <div className={style.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={style.formInput}
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={style.formGroup}>
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        className={style.formInput}
                                        placeholder="Your 10-digit mobile number"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={style.submitButton}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className={style.spinner}></span>
                                            Starting...
                                        </>
                                    ) : (
                                        'Launch Quiz'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CareerQuiz;
