import React from "react";

// stylesheet
import "../css/Input.css";

// react icon
import { GrAdd } from "react-icons/gr";

const input = () => {
  return (
    <div className="input">
      <div className="input_text">
        <input type="text" placeholder="Enter an item in cart" />
      </div>
      <div className="input_icon">
        <GrAdd className="add"/>
      </div>
    </div>
  );
};

export default input;
