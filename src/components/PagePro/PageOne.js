import React, { useState } from "react";
import "./PageOne.css";
import { data1 } from "../data1";
import List from "../List";

const PageOne = ({ onButtonClick }) => {
  const [disabled, setEnabled] = useState(true);

  const backColor = () => {
    if (disabled) {
      return "#808080";
    } else {
      return "#0F6EFF";
    }
  };

  const handleDisabler = () => {
    setEnabled(false);
  };

  return (
    <div>
      <div className="one-top">
        <div className="text">
          <h2>What do you want to do?</h2> <span>(Step 1 of 4)</span>
        </div>
        <List data={data1} onClick={handleDisabler} />
      </div>
      <div>
        <form>
          <div>
            <input
              className="f6 grow br2 ph3 pv2 mb2 dib white measure"
              style={{
                borderStyle: "none",
                backgroundColor: backColor(),
                color: "white",
                cursor: "pointer",
              }}
              type="submit"
              value="Continue"
              onClick={() => onButtonClick("pagetwo")}
              disabled={disabled}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageOne;
