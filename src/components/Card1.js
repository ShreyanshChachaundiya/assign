import React, { useState } from "react";
import "./Card1.css";

const Card = (props) => {
  const [isCansf, setIsCan] = useState(false);
  const handleBorder = () => {
    setIsCan(true);
  };

  const handleBlur = () => {
    setIsCan(false);
  };

  const fillBord = () => {
    return isCansf ? "#0F6EFF solid" : "#f3f3f3 solid";
  };

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div
      onClick={() => {
        handleBorder();
        toggleVisible();
      }}
      onBlur={handleBlur}
    >
      <div
        className="card1"
        onClick={() => props.onClick()}
        style={{
          border: fillBord(),
        }}
      >
        <div className="c-top">
          {props.image}
          <div className="c-head">
            <span>{props.title}</span>
            <span>sponsored</span>
          </div>
        </div>
        <div className="c-mid">
          <span>We are the best bakery around</span>
          <span> you. Please like my page to</span>
          <span>get updates on exciting offers </span>
          <span>and discounts.</span>
        </div>
        <div className="c-mid-img">
          <img src="icons/mukund.png" />
        </div>
        <div className="c-bot">
          <span> Mukund Cake Shop</span>

          <button className="c-but">
            <span>
              <img src="icons/thumb.png" />
            </span>
            <span>like</span>
          </button>
        </div>
        {visible ? (
          <div className="flex flex-row gap-2 py-2">
            <button className="bg-blue-500 w-32 px-2 py-2 rounded outline-none margin-none text-xs text-white">
              Change Image
            </button>
            <button className="bg-blue-500 w-32 px-2 py-2 rounded outline-none margin-none text-xs text-white">
              Edit Text
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
