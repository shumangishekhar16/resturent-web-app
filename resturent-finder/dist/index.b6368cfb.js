// import React from "react";
// import ReactDOM from "react-dom/client"
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "hlo h1 tagg"),
        React.createElement("h2", {}, "hlo h2 tagg")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "hlo h1 tagg"),
        React.createElement("h2", {}, "hlo h2 tagg")
    ])
]);
const hading = React.createElement("h1", {
    id: "hading"
}, "hlow word");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.b6368cfb.js.map
