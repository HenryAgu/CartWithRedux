import React, { useState } from "react";

// react icon
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GrAdd } from "react-icons/gr";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/CartItems";

// stylesheet
import "../css/Item.css";

const items = () => {
  const [input, setInput] = useState("");

  const itemList = useSelector((state) => state.items.value);
  const dispatch = useDispatch();

  const itemDispatch = (input)=>{
    dispatch(addItem({ id: 0, item: input, quantity: 1 }));
    setInput("")
  }
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
          <GrAdd
            className="add"
            onClick={() => {
              itemDispatch(input)
            }}
          />
        </div>
      </div>
      <div className="item_container">
        {itemList.map((item) => (
          <div className="item">
            <div className="item_name" key={item.id}>
              <RiDeleteBin5Line className="delete_icon" />
              <span>{item.item}</span>
            </div>
            <div className="item_quantity">
              <span>
                <IoIosArrowBack />
              </span>
              <b>{item.quantity}</b>
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
