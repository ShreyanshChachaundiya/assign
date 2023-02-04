import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="end">
        <ul>
          <li>free trial ends in two days</li>
          <li>
            <img src="icons/king.png" alt="error" />
            Buy plan
          </li>
          <li>
            <img src="icons/gift.png" alt="error" />
          </li>
          <li>
            <img src="icons/notification.png" alt="error" />
          </li>
          <li>
            <img src="icons/dish.png" alt="error" />
          </li>
          <li>
            Mukund cafe shop
            <img src="icons/down.png" alt="error" />
          </li>
          <li>
            <img src="icons/circle.png" alt="error" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
