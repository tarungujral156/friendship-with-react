import React from "react";
import ReactDOM from "react-dom/client";

//JSX - it is not html. it is like html or xml like syntax

//Title
const Title = () => {
  return (
    <div>
      <h1>I'm a React component</h1>
    </div>
  );
};
const Heading = () => {
  return (
    <div>
      <Title />
      <h1 id="heading">Namaste React using JSX</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root)

root.render(<Heading />);
