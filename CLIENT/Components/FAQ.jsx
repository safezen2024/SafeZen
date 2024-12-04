import React, { useState } from "react";
import '../Styles/FAQ.scss';

const FAQ = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Everything you need to know about the product and billing.</p>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`faq-answer-wrapper ${
                activeIndex === index ? "open" : "closed"
              }`}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
