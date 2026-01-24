"use client";
import { useState, useEffect } from "react";
import styles from "@/app/scholarship-test/PopUpForm.module.css";
import StipendCalculator from "@/components/StipendCalculator";

export default function EmiFormDialog({ isOpen, onClose }) {
    const [showCalculator, setShowCalculator] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        graduation: "",
        mode: "",
        Page_Url: "",
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            setFormData((prev) => ({ ...prev, Page_Url: window.location.href }));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://integration.pqa.salesmax.ai/salesmax/leads?token=dUi0kkBphtCG78rBsKr3Fg",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...formData, pageUrl: window.location.href }),
                }
            );

            if (response.ok) {
                console.log("Form submitted successfully");
                // Trigger PDF download
                const link = document.createElement('a');
                link.href = '/curriculum_pdfs/Easy-EMI-Guide-Career-Programs.pdf';
                link.download = 'Easy-EMI-Guide-Career-Programs.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Close dialog after successful submission
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                console.error("Failed to submit form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const cleaned = value.replace(/\D/g, "").slice(0, 10);
            setFormData({ ...formData, [name]: cleaned });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close Form"
                >
                    &times;
                </button>

                <form onSubmit={handleSubmit}>
                    <h2>Enroll for EMI Details</h2>
                    <input type="hidden" name="Page_Url" value={formData.Page_Url} />

                    <div className={styles.formGroup}>
                        <input
                            className={styles.input}
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <select
                            className={styles.select}
                            name="graduation"
                            value={formData.graduation}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Graduation Year</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <select
                            className={styles.select}
                            name="mode"
                            value={formData.mode}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Training Mode</option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                    >
                        Get EMI Details
                    </button>
                </form>
            </div>
        </div>
    );
}
