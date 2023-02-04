import React, { useState } from "react";
import "./Card.css";

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

  return (
    <div onClick={handleBorder} onBlur={handleBlur}>
      <div
        className="card"
        onClick={() => props.onClick()}
        style={{
          border: fillBord(),
        }}
      >
        <div className="left">{props.image}</div>
        <div className="right">
          <div>{props.title}</div>
          <div>{props.descr}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
