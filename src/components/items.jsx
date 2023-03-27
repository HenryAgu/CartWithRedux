import React, { useState } from "react";

// react icon
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GrAdd } from "react-icons/gr";

// redux
import { useSelector } from "react-redux";

// stylesheet
import "../css/Item.css";

const items = () => {
  const [input, setInput] = useState("");

  const itemList = useSelector((state) => state.items.value);
  return (
    <div className="top">
      <div className="input">
        <div className="input_text">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter an item in cart"
          />
        </div>
        <div className="input_icon">
          <GrAdd className="add" />
        </div>
      </div>
      <div className="item_container">
        {itemList.map((item) => (
          <div className="item">
            <div className="item_name">
              <RiDeleteBin5Line className="delete_icon" />
              <span>{item.item}</span>
            </div>
            <div className="item_quantity">
              <span>
                <IoIosArrowBack />
              </span>
              <b>1</b>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default items;
