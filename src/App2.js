import React from "react";

let name1 = "Pauladasdsas"
let name2 = "Jessica"

const App = () => {
    return (
      <>
        <Person name={name1}/>
        <Person name={name2}/>

        <Greetings />
      </>
    );
}

// PROPS - Children
// function Person(props) {
//   return (
//     <>
//       <h2>Name:</h2>
//       <h1 className="name">{props.children}</h1>
//     </>
//   );
// }


// PROPS - Own props
function Person({name}) {
  return (
    <>
      <h2>Name:</h2>
      <h1 className="name">{name}</h1>
    </>
  );
}

const Greetings = () => {
  return <h2>Hello World</h2>;
};

export default App;


// function Greetings() {

// }

// Component
// RULES:
// - Always capitalize the component name
// - Always return a single parent element



// JSX RULES:
// - Always return a single parent element
// - Awlays close every element </>
// - Use camelCase for html attribute (e.g., className, htmlFor, etc.)
// - Format with () if returning a parent element with child: Pro tip - Install Prettier Auto Formatter and enable "format on save"

