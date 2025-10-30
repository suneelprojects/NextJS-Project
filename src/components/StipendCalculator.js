"use client";
import { useState } from "react";
import { Calculator, TrendingUp, Award } from "lucide-react";

export default function StipendCalculator() {
  const [internshipType, setInternshipType] = useState("");
  const [performance, setPerformance] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const base = {
      "data-analyst": 15000,
      "data-scientist": 25000,
      "ai-engineer": 30000,
      "ml-engineer": 28000,
      "python-dev": 20000,
    }[internshipType];

    const multiplier = { average: 1, good: 1.2, excellent: 1.5 }[performance];
    const total = Math.min(base * multiplier, 45000);
    setResult(total);
  };

  return (
    <div className="border rounded-lg p-6 bg-gray-50 space-y-4">
      <div>
        <label className="block mb-1 font-medium">Target Role</label>
        <select
          value={internshipType}
          onChange={(e) => setInternshipType(e.target.value)}
          className="w-full border p-2 rounded-md"
        >
          <option value="">Select role</option>
          <option value="data-analyst">Data Analyst</option>
          <option value="data-scientist">Data Scientist</option>
          <option value="ai-engineer">AI Engineer</option>
          <option value="ml-engineer">ML Engineer</option>
          <option value="python-dev">Python Developer</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Performance Level</label>
        <select
          value={performance}
          onChange={(e) => setPerformance(e.target.value)}
          className="w-full border p-2 rounded-md"
        >
          <option value="">Select performance</option>
          <option value="average">Average</option>
          <option value="good">Good</option>
          <option value="excellent">Excellent</option>
        </select>
      </div>

      <button
        onClick={calculate}
        disabled={!internshipType || !performance}
        className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition"
      >
        <Calculator className="inline w-4 h-4 mr-2" />
        Calculate Stipend
      </button>

      {result && (
        <div className="text-center bg-white border rounded-lg p-4 mt-4 shadow-sm">
          <div className="flex justify-center items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h3 className="font-semibold text-lg">Estimated Monthly Stipend</h3>
          </div>
          <div className="text-3xl font-bold text-orange-600">₹{result.toLocaleString("en-IN")}</div>
          <p className="text-sm text-gray-600 mt-1">
            3-month total: ₹{(result * 2.5).toLocaleString("en-IN")}
          </p>
          <div className="mt-2 text-xs text-gray-500 flex justify-center items-center gap-1">
            <Award className="w-3 h-3" /> Maximum ₹45,000/month
          </div>
        </div>
      )}
    </div>
  );
}
