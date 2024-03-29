import { useState } from "react";

// components
import Items from "./components/Items";
import Total from "./components/Total";

// stylesheet
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <Items/>
        <Total/>
      </div>
    </div>
  );
}

export default App;
