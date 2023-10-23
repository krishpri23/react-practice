{
  /* <div id="parent">
  <div id="child1">
    <h1> I'm a heading</h1>
    <h2> I'm heading 2</h2>
  </div>
  <div id="child2">
    <h1> I'm a heading 2</h1>
  </div>
  
</div>; */
}

// const heading = React.createElement("h1", {}, "Hello world");
// console.log(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello form heading 1"),
    React.createElement("h2", { id: "heading2" }, "Hello form heading 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// React element is just plain objects. render() converts objects to html tags
