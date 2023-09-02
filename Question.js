import { useState } from "react";
import { questions, answered } from "./QuizQuestion";
export default function Question() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [mark, setMark] = useState(0);
  function validation(e) {
    console.log(e.target.value, questionIndex);
    switch (questionIndex) {
      case 0:
        if (answered[questionIndex] === true && e.target.value === "ES6") {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 1:
        if (answered[questionIndex] === true && e.target.value === "6") {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 2:
        if (
          answered[questionIndex] === true &&
          e.target.value === "undefined"
        ) {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 3:
        if (
          answered[questionIndex] === true &&
          e.target.value ===
            "value assingned to a const variable can be changed"
        ) {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 4:
        if (answered[questionIndex] === true && e.target.value === "22") {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 5:
        if (
          answered[questionIndex] === true &&
          e.target.value ===
            "It compares two values for equality, including their data type."
        ) {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 6:
        if (
          answered[questionIndex] === true &&
          e.target.value ===
            "Document Object Model, used for defining the structure and content of web documents."
        ) {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 7:
        if (
          answered[questionIndex] === true &&
          e.target.value === "JavaScript Object Notation"
        ) {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 8:
        if (
          answered[questionIndex] === true &&
          e.target.value === "setTimeOut"
        ) {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      case 9:
        if (answered[questionIndex] === true && e.target.value === "pop()") {
          setMark(mark + 1);
          answered[questionIndex] = false;
        }
        break;
      default:
        console.log("hello");
    }
  }

  function optionHandler(e) {
    setSelectedValue(e.target.value);
    validation(e);
  }
  function indexIncrementHandler() {
    if (questionIndex < questions.length - 1)
      setQuestionIndex(questionIndex + 1);
  }
  function indexDecrementHandler() {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }
  return (
    <div>
      <h2>Question NO : {questionIndex + 1}</h2>
      <h4>Question Statement:</h4>
      <p>{questions[questionIndex].question}</p>
      <p>
        <input
          type="radio"
          value={questions[questionIndex].option_1}
          onChange={optionHandler}
          checked={selectedValue === questions[questionIndex].option_1}
        />
        {questions[questionIndex].option_1}
      </p>
      <p>
        <input
          type="radio"
          value={questions[questionIndex].option_2}
          onChange={optionHandler}
          checked={selectedValue === questions[questionIndex].option_2}
        />
        {questions[questionIndex].option_2}
      </p>
      <p>
        <input
          type="radio"
          value={questions[questionIndex].option_3}
          onChange={optionHandler}
          checked={selectedValue === questions[questionIndex].option_3}
        />
        {questions[questionIndex].option_3}
      </p>
      <p>
        <input
          type="radio"
          value={questions[questionIndex].option_4}
          onChange={optionHandler}
          checked={selectedValue === questions[questionIndex].option_4}
        />
        {questions[questionIndex].option_4}
      </p>
      <button type="button" onClick={indexDecrementHandler}>
        Prev
      </button>
      <button
        type="button"
        onClick={indexIncrementHandler}
        style={{ marginLeft: "20px" }}
      >
        Next
      </button>{" "}
      <br />
      <h1>Mark : {mark}</h1>
    </div>
  );
}
