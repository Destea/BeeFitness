import React, { Component }  from 'react';
import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

const FAQ = ({question, answer}) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faqtoicon">
          {
            isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ
