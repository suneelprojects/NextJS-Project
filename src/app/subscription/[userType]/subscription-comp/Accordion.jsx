'use client';

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({faqs=[]}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
                    {faqs.map((item, index) => (
                        <div key={index} className="border-bottom">
                            <button
                                className="w-100 text-left d-flex justify-content-between align-items-center py-3 border-0 bg-transparent"
                                onClick={() => toggleAccordion(index)}
                                style={{ fontSize: "18px", fontWeight: "500"}}
                            >
                                {item.question}
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </button>
                            {openIndex === index && (
                                <div className=" p-3 text-muted">{item.answer}</div>
                            )}
                        </div>
                    ))}
          
        </>
    );
};

export default Accordion;
