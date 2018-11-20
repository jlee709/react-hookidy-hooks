import React, { useState } from "react";
import "./App.css";

// small standar DC that renders the hooklist props
const HookList = ({ hookList }) => (
  <div className="hook-list">{hookList.mumble}</div>
);

function HookForm({ addHookItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addHookItem(value);
    setValue("");
  };
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

// initialization of app
function App() {
  const [hookList, hookListItems] = useState([
    { mumble: "hooks, also know as left hook, right hook" },
    { mumble: "fishing, or is it phising?? or fssssshing???" },
    { mumble: "can you make sense of the mumbles in this rumble?" },
    { mumble: "mumbling again, mumble Mc Mo Mumble" }
  ]);

  const addHookItem = mumble => {
    const newHookItems = [...hookList, { mumble }];
    hookListItems(newHookItems);
  };
  // Standard map render
  return (
    <div className="app">
      <div className="hook-list">
        {hookList.map((hookList, index) => (
          <HookList key={index} index={index} hookList={hookList} />
        ))}
        <HookForm addHookItem={addHookItem} />
      </div>
    </div>
  );
}
export default App;
