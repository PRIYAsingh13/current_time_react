import React, { useState } from "react";
import "./App.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const updatedTime = () => {
    let newTime = new Date().toLocaleTimeString();

    setCtime(newTime);
  };
  return (
    <>
      <div>
        <h1>{ctime}</h1>
        <button onClick = {updatedTime}>Get Time</button>
      </div>
    </>
  );
};

export default App;
