/*
<div>
  <div>
    <h1></h1>
    <h2></h2>
  </div>
  <div>
    <h1></h1>
    <h2></h2>
  </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im an h1 tag bruv"),
    React.createElement("h2", { className: "h2" }, "Im an H2 tag bruv"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im an h1 tag bruv of child2"),
    React.createElement("h2", {}, "Im an H2 tag bruv of child2"),
  ]),
]);

const h1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Atharva learn React!"
); // javascript object

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); //selecting an element

root.render(parent);
