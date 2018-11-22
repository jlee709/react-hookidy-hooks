import React, { useState } from "react";
import "./App.css";

// small standar DC that renders the hooklist props
const HookList = ({ hookList }) => (
  <div className="hook-list">{hookList.mumble}</div>
);

// const HookBeers = ({ beers }) => <div className="beer-list">{beers}</div>;

// form w/hooks takes adds item
// set 2 variables to empty string with useState Function
function HookForm({ addHookItem }) {
  const [value, setValue] = useState("");

  // standard React Submit function
  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addHookItem(value);
    setValue("");
  };
  // standard form render using setValue according to the state vars assigned up top
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder={"mumbles GO here"}
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
}
// Consider setting variables sim to normal oops

// initialization of app main render mumble
function App() {
  const [hookList, hookListItems, isGoodMumble] = useState([
    {
      mumble: "hooks, also known as left hook, right hook",
      isGoodMumble: false
    },
    {
      mumble: "fishing, or is it phising?? or fssssshing???",
      isGoodMumble: false
    },
    {
      mumble: "can you make sense of the mumbles in this rumble?",
      isGoodMumble: false
    },
    { mumble: "mumbling again, mumble Mc Mo Mumble", isGoodMumble: false },
    {
      mumble: "An Alliteration-Sensation! With an exclamation!",
      isGoodMumble: false
    }
  ]);

  const addHookItem = mumble => {
    const newHookItems = [...hookList, { mumble }];
    hookListItems(newHookItems);
  };

  const updateMumble = mumble => {
    const updatedMumble = [...hookList];
    updatedMumble[mumble].isGoodMumble = true;
    hookListItems(updatedMumble);
  };
  // Standard map render
  return (
    <div className="app">
      <div className="hook-list">
        <h1>Mumble List</h1>
        {hookList.map((hookList, index) => (
          <HookList key={index} index={index} hookList={hookList} />
        ))}
        <HookForm addHookItem={addHookItem} />
      </div>
    </div>
  );
}
export default App;
