import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ ...question }) => {
  const { title, info } = question;
  const [display, setDisplay] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          {display ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {display && <p>{info}</p>}
    </article>
  );
};

export default Question;
