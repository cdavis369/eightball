import answers from "./answers.js";
import React, {useState} from "react";

const EightBall = () => {
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('Think of a Question');

  const getAnswer = () => {
    const i = Math.floor(Math.random() * answers.length);
    const answer = answers[i];
    setMessage(answer.msg);
    setColor(answer.color);
  }

  return(
    <div className="eightball" style={{backgroundColor: color}} onClick={getAnswer}>
      <p className="message">{message}</p>
    </div>
  );

};

export default EightBall;