const questions = [
  {
    question: "From which version of JS let and const was introduced ?",
    option_1: "ES3",
    option_2: "ES4",
    option_3: "ES5",
    option_4: "ES6",
  },
  {
    question: "Number of primary datatype in JavaScript ?",
    option_1: "5",
    option_2: "6",
    option_3: "7",
    option_4: "8",
  },
  {
    question:
      "What type of value a varaiable(argument variable) hold when we didn't pass the arugument to the variable in a function ?",
    option_1: "null",
    option_2: "undefined",
    option_3: "number",
    option_4: "string",
  },
  {
    question: "choose a wrong one ",
    option_1: "varaibles declared using var are having global scope",
    option_2: "varaibles declared using let are having local scope",
    option_3: "varaibles declared using const are having local scope",
    option_4: "value assingned to a const variable can be changed",
  },
  {
    question: `Perdict the output ?
             console.log(2+"2")`,
    option_1: "2",
    option_2: "22",
    option_3: "2+2",
    option_4: "4",
  },
  {
    question: "What is the purpose of the === operator in JavaScript ?",
    option_1: "It assigns a value to a variable.",
    option_2:
      " It compares two values for equality, including their data type.",
    option_3: "It concatenates two strings.",
    option_4: "It declares a new function.",
  },
  {
    question:
      "What does the DOM stand for in JavaScript, and what is its primary purpose in web development?",
    option_1: "Document Object Model, used for rendering 3D graphics.",
    option_2:
      "Document Object Model, used for defining the structure and content of web documents.",
    option_3:
      "Data Object Model, used for managing data in JavaScript applications.",
    option_4:
      " Dynamic Object Manipulation, used for creating interactive user interfaces.",
  },
  {
    question: "What does the acronym JSON stand for in JavaScript?",
    option_1: "JavaScript Object Notation",
    option_2: "JavaScript Oriented Networking",
    option_3: "JavaScript Operator Navigator",
    option_4: "JavaScript Object Networking",
  },
  {
    question:
      "Which JavaScript function is used to schedule a function to run at a specified time in the future?",
    option_1: "setInterval()",
    option_2: "setTimeout()",
    option_3: " setTime()",
    option_4: "schedule()",
  },
  {
    question:
      "Which JavaScript method is used to remove the last element from an array and return that element?  ",
    option_1: "pop()",
    option_2: "shift()",
    option_3: "unshift()",
    option_4: "slice()",
  },
];
const answered = new Array(10);
for (let i = 0; i < 10; i++) answered[i] = true;
export { questions, answered };
