import React, { useEffect, useState } from "react";
import "./App.css";
import UseContext from "./components/UseContext";

export const ToggleTheme = React.createContext();

const App = () => {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <div className="main">
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext />
      </ToggleTheme.Provider>
    </div>
  );
};

export default App;
