const parent = React.createElement("div",{ id: "parent"},[
    React.createElement("div",{id:"Child1"},[
     React.createElement("h1",{id:"heding"}, "Heading1"),
     React.createElement("h2",{id:"heding"}, "Heading2")
    ]),
    React.createElement("div",{id:"Child1"},[
     React.createElement("h1",{id:"heding"}, "Heading1"),
     React.createElement("h2",{id:"heding"}, "Heading2")
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);