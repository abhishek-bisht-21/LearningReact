/**
 *
 * <div id="parent">
 * 	<div id="child">
 * 		<h1>I'm h1 Tag</h1>
 * 		<h2>I'm a h2 Tag</h2>
 * 	</div>
 * </div>
 *
 * ReactElement -> Is a Object => While It into the DOM it Becomes HTML
 */

const parent = React.createElement(
	"div",
	{ id: "parent" }, // Attribute
	[React.createElement("div", { id: "child1" }, [
		React.createElement("h1", {}, "I'm an h1 Tag"),
		React.createElement("h2", {}, "I'm an h2 Tag"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "I'm an h1 Tag"),
		React.createElement("h2", {}, "I'm an h2 Tag"),
	])]

);

// JSX -> To make our work easy in writing html tags we use it.

const heading = React.createElement(
	"h1",
	{ id: "Heading", xyz: "abc" },
	"Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

// root.render(heading);
root.render(parent);
