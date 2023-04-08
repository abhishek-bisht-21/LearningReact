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
JSX code is transpiled before it reaches the javacript engine. 
Transpiled means that it is converted to the code which the browser and react can understand.
Parcel is responsible for transpiling this code. Parcel further delegates this transpilation job
to a Package called as "Babel".
*/

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 className="head"> Namaste React using JSX ⚡</h1>
root.render(jsxHeading);

console.log(jsxHeading);

