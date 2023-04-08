import React from "react";
import ReactDOM from "react-dom/client";

//  React Element => Object => When we render this Object into our DOM it becomes HTML.

const heading = React.createElement("h1", {id:"heading"}, "Namaste React �");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading); // To see createElement is just an object only.
root.render(heading);


/*
JSX
It's a javascript syntax which is easier to create reactElement.
JSX is separate from react. It just makes the dev experience better.
JSX is a HTML like Syntax.
*/

const jsxHeading = <h1 id="heading"> Namaste React using JSX ⚡</h1>
console.log(jsxHeading);

