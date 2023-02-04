import React, { useState } from "react";
import "./PageThree.css";
import { data2 } from "../data2";
import List from "../List";
import Setting from "../Setting";

const PageOne = ({ onButtonClick }) => {
  const [disabled, setEnabled] = useState(false);

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
      <div className="one-top-three">
        <div className="text-three">
          <h2>Campaign Settings</h2> <span>(Step 3 of 4)</span>
        </div>
        {/* <List data={data2} onClick={handleDisabler} /> */}
        <Setting />
      </div>
      <div>
        <form>
          <div>
            <input
              className="f6 grow br2 ph3 pv2 mb2 dib white measure-three"
              style={{
                borderStyle: "none",
                backgroundColor: backColor(),
                color: "white",
                cursor: "pointer",
              }}
              type="submit"
              value="Continue"
              onClick={() => onButtonClick("pagefour")}
              disabled={disabled}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageOne;
