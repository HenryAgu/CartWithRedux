import React, { useState } from "react";

// react icon
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GrAdd } from "react-icons/gr";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem,increaseQuantity } from "../features/CartItems";

// stylesheet
import "../css/Item.css";

const items = () => {
  const [input, setInput] = useState("");

  const itemList = useSelector((state) => state.items.value);
  const dispatch = useDispatch();

  const itemDispatch = (input) => {
    if(input.length < 1 || input.trim() === ""){
      alert("Enter an item before clicking me")
    }else{
      dispatch(
        addItem({ id: itemList[itemList.length - 1].id + 1, item: input, quantity: 1 })
      );
    }
    console.log({ id: itemList[itemList.length - 1].id + 1, item: input, quantity: 1 })
    setInput("");
  };
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
              itemDispatch(input);
            }}
          />
        </div>
      </div>
      <div className="item_container">
        {itemList.map((item) => (
          <div className="item"  key={item.id}>
            <div className="item_name">
              <RiDeleteBin5Line
                className="delete_icon"
                onClick={() => {
                  dispatch(deleteItem({ id: item.id }));
                }}
              />
              <span>{item.item}</span>
            </div>
            <div className="item_quantity">
              <span>
                <IoIosArrowBack />
              </span>
              <b>{item.quantity}</b>
              <span>
                <IoIosArrowForward onClick={()=>{
                }}/>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default items;
