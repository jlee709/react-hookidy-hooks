import React, { useState } from "react";
import "./App.css";

function App() {
  const [hookList] = useState([
    { text: "hooks" },
    { text: "fishing" },
    { text: "fish for fishing" }
  ]);

  const HookList = ({ hookList }) => (
    <div className="hook-list">{hookList.text}</div>
  );

  // Starting some hooks or so i think
  return (
    <div className="app">
      <div className="hook-list">
        {hookList.map((hookList, index) => (
          <HookList key={index} index={index} hookList={hookList} />
        ))}
      </div>
    </div>
  );
}
export default App;
