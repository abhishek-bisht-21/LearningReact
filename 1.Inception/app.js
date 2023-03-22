
/**
 * 
 * <div id="parent">
 * 	<div id="child">
 * 		<h1>I'm h1 Tag</h1> 
 * 	</div>
 * </div>
 */

const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I'm an h1 Tag"))
);



const heading = React.createElement("h1", { id: "Heading", xyz: "abc" }, "Hello World From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

// root.render(heading);
root.render(parent);