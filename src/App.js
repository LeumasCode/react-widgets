import React from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search'

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

const App = () => {
  return (
    <div>
      <Search/>
    </div>
  );
};

export default App;
