// const heading = React.createElement("h1", { id: "heading" }, "hello form React ji");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            { id: "heading" },
            "I'm from Heading one!!"
        )
    )
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);