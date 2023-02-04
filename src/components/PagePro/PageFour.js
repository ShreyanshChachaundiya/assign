import React, { useState } from "react";
import "./PageOne.css";
import "./PageFour.css";

import List1 from "../List1";
import { data3 } from "../data3";

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
      <div className="one-top-four">
        <div className="text">
          <h2>Ready to go?</h2> <span>(Step 4 of 4)</span>
        </div>
        <List1 data={data3} />
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
              value="Start Campaign"
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
