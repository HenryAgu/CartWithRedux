import React from "react";

// react icon
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// stylesheet
import "../css/Item.css";

const items = () => {
  return (
    <>
      <div className="item">
        <div className="item_name">
          <RiDeleteBin5Line />
          <span>Carrot</span>
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
      <div className="item">
        <div className="item_name">
          <RiDeleteBin5Line />
          <span>Carrot</span>
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
    </>
  );
};

export default items;
