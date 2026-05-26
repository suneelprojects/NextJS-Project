import React from 'react';
import styles from './SpecialFaqs.module.css';

const DS_FAQS = [
    { q: "What is Data Science and why is it important?", a: "Data Science is a multidisciplinary field that uses statistics, programming, and domain knowledge to extract insights from data. It powers decision-making across industries like finance, healthcare, marketing, and technology." },
    { q: "What topics are covered in the Data Science course at SocialPrachar?", a: "The course includes Python programming, statistics, machine learning, data visualization, SQL, data cleaning, model evaluation, and real-world project work." },
    { q: "Who can enroll in the Data Science course?", a: "This course is suitable for beginners, engineering graduates, working professionals, analysts, and anyone interested in building a career in data science." },
    { q: "Do I need prior programming experience?", a: "Basic programming knowledge helps but is not mandatory. The course starts with fundamentals and gradually progresses to advanced topics." },
    { q: "What is the duration of the Data Science course?", a: "The course duration varies depending on the mode of training (online or classroom) and whether you choose weekend or weekday batches. Contact the admissions team for exact schedule details." },
    { q: "Can I take the Data Science course online?", a: "Yes, SocialPrachar offers both online and offline classroom training options for the Data Science course to suit different learning needs." },
    { q: "Will I receive a certificate after completing the course?", a: "Yes, learners receive a course completion certificate from SocialPrachar after successfully finishing the training and project assessments." },
    { q: "What tools and technologies will I learn?", a: "You will work with Python libraries like Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, and tools like Jupyter Notebook and SQL databases." },
    { q: "Does the Data Science course include hands-on projects?", a: "Yes, the course includes multiple real-world projects that help you build a practical portfolio for job interviews and industry roles." },
    { q: "What career opportunities are available after completing this course?", a: "Graduates can pursue roles such as Data Analyst, Data Scientist, Machine Learning Engineer, Business Intelligence Analyst, and Data Engineer." },
    { q: "Does this course prepare me for job interviews?", a: "Yes, the course includes interview preparation support with mock interviews, resume guidance, and real interview questions." },
    { q: "What are the eligibility criteria for the Data Science course?", a: "There are no strict eligibility criteria; however, basic math and logical thinking skills are beneficial. Anyone eager to learn data science can enroll." },
    { q: "Can working professionals join this course?", a: "Yes, flexible batch timings are available for working professionals so they can balance work and learning effectively." },
    { q: "Is the curriculum up-to-date with industry trends?", a: "Yes, the curriculum is regularly updated to include the latest tools, techniques, and industry best practices in data science." },
    { q: "What kind of datasets will I work with?", a: "You will work with real-world datasets from finance, healthcare, retail, and other industries to build and evaluate models." },
    { q: "Do I get real-time support during the course?", a: "Yes, learners receive support from experienced trainers through live sessions, doubt-clearing, and mentorship." },
    { q: "Are there assessments and quizzes in the course?", a: "Yes, regular assessments and quizzes help track your progress and reinforce your learning throughout the program." },
    { q: "Can I switch between online and offline modes?", a: "Yes, subject to availability, you may be able to switch between online and offline batch modes during the course duration." },
    { q: "What projects will I build?", a: "Projects include data cleaning, predictive modeling, customer segmentation, visualization dashboards, and machine learning model deployment." },
    { q: "Does the course include SQL Database training?", a: "Yes, core SQL concepts and database handling are part of the Data Science training curriculum." },
    { q: "What is the fee for the Data Science course?", a: "The fee depends on the training mode and batch timing. Contact SocialPrachar admissions for the latest fee details and offers." },
    { q: "Is internship support available?", a: "Yes, internship guidance is available to help learners gain industry experience and build a portfolio during the course." },
    { q: "Do I need to install any software?", a: "Basic tools like Python and Jupyter Notebook are recommended. Your trainer will guide you through setup steps during the initial sessions." },
    { q: "Will I get career guidance after the course?", a: "Yes, SocialPrachar provides career support with job listings, resume review, and placement assistance to help learners secure opportunities." },
    { q: "Is there a demo class available?", a: "Yes, you can request a demo class to understand the teaching methodology and course expectations before enrolling." },
    { q: "How do I register for the Data Science course?", a: "You can register online through the SocialPrachar website or by contacting the admissions team for guidance." },
    { q: "Will I learn machine learning algorithms in this course?", a: "Yes, you will learn key machine learning algorithms like regression, classification, clustering, decision trees, and model optimization." },
    { q: "Does the course include data visualization training?", a: "Yes, data visualization using Python libraries like Matplotlib and Seaborn is part of the curriculum to help you communicate insights effectively." },
    { q: "How much time should I dedicate per week?", a: "It is recommended to spend at least 8–10 hours per week practicing concepts and working on projects to get maximum benefit from the course." },
    { q: "Will this course help me transition careers?", a: "Yes, learners from non-technical and technical backgrounds have successfully transitioned into data science roles after completing this course." },
    { q: "Are there any prerequisites for this course?", a: "The only prerequisites are a basic understanding of math and a willingness to learn data analysis and machine learning concepts." },
    { q: "What learning resources are provided?", a: "SocialPrachar provides study materials, video recordings, project files, and continuous support to help you learn at your own pace." }
];

const GENAI_FAQS = [
    { q: "What is Generative AI and how does it work?", a: "Generative AI is a branch of artificial intelligence that focuses on creating new content such as text, images, code, audio, and data insights using large language models (LLMs). These models learn patterns from vast datasets and generate human-like outputs, powering tools like AI chatbots, content generators, and automation systems." },
    { q: "Why should I learn Generative AI in 2025?", a: "Generative AI is one of the fastest-growing skills in the tech industry. Companies are actively hiring professionals who can build AI-powered products, automate workflows, and integrate AI into business systems. Learning Generative AI in 2025 helps you stay future-ready and relevant in the job market." },
    { q: "What topics are covered in the Generative AI course at SocialPrachar?", a: "The course covers Generative AI fundamentals, prompt engineering, large language models, AI-powered application development, AI automation workflows, and real-world use cases. The focus is on practical implementation rather than theory alone." },
    { q: "Who is this Generative AI training program designed for?", a: "This program is designed for fresh graduates, working professionals, software developers, data science aspirants, and non-technical learners who want to build a career in AI. The course structure is beginner-friendly and industry-oriented." },
    { q: "Is this course suitable for beginners with no AI experience?", a: "Yes, no prior AI experience is required. The Generative AI course at SocialPrachar starts from the basics and gradually moves to advanced concepts, making it suitable for beginners as well as experienced professionals." },
    { q: "What real-world projects are included in the Generative AI course?", a: "Learners work on practical projects such as AI chat applications, AI-powered automation tools, content generation systems, and real-world business use cases that reflect industry requirements." },
    { q: "How long is the Generative AI course at SocialPrachar?", a: "The course duration is designed to provide in-depth learning with sufficient hands-on practice. Exact timelines may vary based on learning mode, but the focus remains on skill mastery rather than rushed completion." },
    { q: "What skills will I gain after completing this Generative AI course?", a: "You will gain skills in prompt engineering, working with large language models, AI application development, AI automation, and deploying AI-driven solutions for real-world scenarios." },
    { q: "Can I take this course if I am not based in Hyderabad?", a: "Yes, SocialPrachar offers online learning options, allowing students from across India to enroll in the Generative AI course without being physically present in Hyderabad." },
    { q: "Does SocialPrachar offer online and offline training modes?", a: "Yes, the Generative AI course is available in both online and offline classroom modes in Hyderabad, giving learners flexibility based on their schedule and preference." },
    { q: "What makes SocialPrachar’s Generative AI course different?", a: "SocialPrachar focuses on practical, job-oriented training with real-world projects, industry mentorship, and placement support. The curriculum is aligned with current industry demands rather than outdated theory." },
    { q: "Are internships included as part of the Generative AI training?", a: "Yes, learners get exposure to internship opportunities and practical assignments that simulate real industry environments, helping them gain hands-on experience." },
    { q: "Will I receive a certificate after completing the course?", a: "Yes, learners receive a course completion certificate from SocialPrachar after successfully finishing the Generative AI program." },
    { q: "What career opportunities are available after learning Generative AI?", a: "Graduates can pursue roles such as Generative AI Engineer, AI Developer, Prompt Engineer, AI Automation Specialist, and AI Product Associate across startups and enterprise organizations." },
    { q: "Do I need prior programming knowledge to join?", a: "Basic programming knowledge is helpful but not mandatory. The course is structured to help learners understand concepts step by step, even if they come from non-programming backgrounds." },
    { q: "What placement support is provided after course completion?", a: "SocialPrachar offers job-assistance support including resume guidance, interview preparation, and career mentoring to help learners transition into AI roles." },
    { q: "Does the course cover prompt engineering?", a: "Yes, prompt engineering is a core component of the course, teaching learners how to interact effectively with large language models to generate accurate and useful outputs." },
    { q: "How practical is the Generative AI training?", a: "The training is highly practical, with a strong emphasis on hands-on learning, real-world projects, assignments, and implementation-focused sessions." },
    { q: "Are industry tools included in the training?", a: "Yes, learners are trained using industry-relevant tools and platforms commonly used in AI development and automation workflows." },
    { q: "Is the curriculum updated with the latest Generative AI trends?", a: "Yes, the curriculum is regularly updated to reflect the latest advancements and trends in Generative AI and AI-driven technologies." },
    { q: "What are the admission requirements for this course?", a: "There are no strict admission requirements. Anyone interested in learning Generative AI and building a career in AI can enroll in the course." },
    { q: "Can working professionals join this course?", a: "Yes, the course is suitable for working professionals, with flexible schedules and online learning options to balance work and study." },
    { q: "Is a demo class available?", a: "Yes, SocialPrachar provides demo sessions to help learners understand the course structure, teaching approach, and learning outcomes before enrolling." },
    { q: "How can I register for the Generative AI course?", a: "You can register by contacting SocialPrachar through the official website or by speaking with the admissions team for enrollment guidance." },
    { q: "Will this course help me build an AI project portfolio?", a: "Yes, learners work on multiple real-world projects that can be added to their portfolio to showcase practical Generative AI skills." },
    { q: "Are flexible payment options available?", a: "Yes, SocialPrachar offers flexible payment options and installment plans to make the course accessible to more learners." },
    { q: "What is the fee structure for the Generative AI course?", a: "The fee structure varies based on learning mode and offers. For the latest pricing and discounts, learners are advised to contact the admissions team." },
    { q: "Will I get personalized mentorship during the course?", a: "Yes, learners receive mentorship and guidance from experienced trainers and industry professionals throughout the program." },
    { q: "Does the course prepare me for AI job interviews?", a: "Yes, the course includes interview preparation support, mock interviews, and guidance on AI-related interview questions." },
    { q: "Are assessments included during the training?", a: "Yes, regular assessments, assignments, and quizzes are conducted to track learning progress and reinforce key concepts." },
    { q: "What career growth can I expect after becoming a Generative AI professional?", a: "Generative AI professionals can experience rapid career growth with opportunities to move into senior AI engineering, automation leadership, and AI product roles." },
    { q: "Does SocialPrachar provide post-course support?", a: "Yes, SocialPrachar continues to support learners even after course completion through career guidance, alumni support, and upskilling opportunities." }
];

const AI_FAQS = [
    { q: "What is Artificial Intelligence and how is it used?", a: "Artificial Intelligence is a field of computer science that enables machines to perform tasks such as learning, reasoning, prediction, and decision-making using data and algorithms." },
    { q: "Who should join the Artificial Intelligence course at SocialPrachar?", a: "The course is suitable for fresh graduates, working professionals, software developers, data enthusiasts, and beginners who want to build a career in AI." },
    { q: "What topics are covered in the Artificial Intelligence course?", a: "The course covers Python, machine learning, deep learning, neural networks, natural language processing, computer vision, and real-world AI applications." },
    { q: "Does the Artificial Intelligence course include hands-on projects?", a: "Yes, learners work on real-world AI projects such as prediction models, intelligent systems, and practical business use cases." },
    { q: "Is the Artificial Intelligence course available online and offline?", a: "Yes, SocialPrachar offers both online and offline classroom training options in Hyderabad for the Artificial Intelligence course." }
];

const SpecialFaqs = ({ slug }) => {
    let faqs = [];
    let title = "";
    let schema = null;

    if (slug === 'data-science') {
        faqs = DS_FAQS;
        title = "Frequently Asked Questions – Data Science Course in Hyderabad";
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": DS_FAQS.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
        };
    } else if (slug === 'generative-ai-course-training-institute-hyderabad') {
        faqs = GENAI_FAQS;
        title = "Frequently Asked Questions – Generative AI Course in Hyderabad";
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": GENAI_FAQS.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
        };
    } else if (slug === 'artificial-intelligence-course-training-institute-in-hyderabad') {
        faqs = AI_FAQS;
        title = "Frequently Asked Questions – Artificial Intelligence Course in Hyderabad";
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": AI_FAQS.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
        };
    }

    if (faqs.length === 0) return null;

    return (
        <div className={styles.faqContainer}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <h2 className={styles.faqTitle}>{title}</h2>
            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.question}>
                            <span>{index + 1}.</span> {faq.q}
                        </div>
                        <div className={styles.answer}>{faq.a}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialFaqs;
