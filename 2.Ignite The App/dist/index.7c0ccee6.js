const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag")
    ])
]);
// JSX -> To make our work easy in writing html tags we use it.
const heading = React.createElement("h1", {
    id: "Heading",
    xyz: "abc"
}, "Hello World From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
// root.render(heading);
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
