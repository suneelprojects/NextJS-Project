"use client";
import { useState } from "react";
import { Calculator, TrendingUp, Award } from "lucide-react";
import styles from "@/app/scholarship-test/PopUpForm.module.css";

export default function StipendCalculator() {
  const [internshipType, setInternshipType] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const stipendPerMonth = 15000;
    const total = stipendPerMonth * parseInt(months);
    setResult({ monthly: stipendPerMonth, total: total, months: parseInt(months) });
  };

  return (
    <div style={{
    background: "#fff",
    color: "black",
    padding: "10px",
    borderRadius: "10px",

    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }}
>
      {!result && (
        <>
          <h2>Stipend Calculator</h2>

          <div className={styles.formGroup}>
            <select
              className={styles.select}
              value={internshipType}
              onChange={(e) => setInternshipType(e.target.value)}
              required
            >
              <option value="">Select role</option>
              <option value="data-analyst">Data Analyst</option>
              <option value="data-scientist">Data Scientist</option>
              <option value="ai-engineer">AI Engineer</option>
              <option value="ml-engineer">ML Engineer</option>
              <option value="python-dev">Python Developer</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <select
              className={styles.select}
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              required
            >
              <option value="">Months of Internship</option>
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
            </select>
          </div>

          <button
            onClick={calculate}
            disabled={!internshipType || !months}
            className={styles.submitButton}
          >
            <Calculator className="inline w-4 h-4 mr-2" />
            Calculate Stipend
          </button>
        </>
      )}

      {result && (
        <div className="text-center bg-white p-4">
          <div className="flex justify-center items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h3 className="font-semibold text-lg">Estimated Monthly Stipend</h3>
          </div>
          <div className="text-3xl font-bold text-orange-600"> upto ₹{result.monthly.toLocaleString("en-IN")}</div>
          <p className="text-sm text-gray-800 mt-3">
            Total Stipend for {result.months} month{result.months > 1 ? 's' : ''}: upto <span className="text-orange-600 font-bold">₹{result.total.toLocaleString("en-IN")}</span> 
          </p>
          
        </div>
      )}
    </div>
  );
}
