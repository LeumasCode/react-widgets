import React from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  { title: "what is react", content: "React is a javascript framework" },
  {
    title: "why use react",
    content: "React is a favorite library among engineer",
  },
  {
    title: "how do you use react",
    content: "You use react by creating components",
  },
];

const options = [
  { label: "The Color Red", value: "Red" },
  { label: "The Color Green", value: "Green" },
  { label: "The Color Blue", value: "Blue" },
];

const App = () => {
  return (
    <div>
      <Dropdown options = {options}/>
    </div>
  );
};

export default App;
