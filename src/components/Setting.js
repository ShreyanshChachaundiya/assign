import React from "react";
import Datex from "./Date";
import { Select, MenuItem } from "@mui/material";
import "./Setting.css";
import Switchx from "./tog";
import NumSlider from "./NumSlider";
import Switchx1 from "./tog2";

const Setting = () => {
  return (
    <div className="s-full">
      <div className="s-up">
        <div className="s-up-cover">
          <img
            src="icons/icon1.png"
            alt=""
            style={{ display: "inline", paddingRight: "6px" }}
          />
          <span>Budget and dates info</span>
        </div>
        <div className="timeline">
          <span>Budget Timeline</span>
          <Switchx />
          <div className="datex">
            <Datex title="Start date" />
            <Datex title="End date" />
          </div>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="currency"
            >
              <MenuItem value={"INR"} className="menuitem">
                <div>
                  <img
                    src="icons/India.png"
                    alt="error"
                    style={{ transform: "scale(0.7)" }}
                  />
                </div>
                <div>INR</div>
              </MenuItem>
            </Select>
          </div>
          <div className="text5">Enter campaign budget</div>
          <div className="slider">
            <NumSlider />
          </div>
        </div>
      </div>

      <div className="s-down">
        <div className="s-up-cover">
          <img
            src="icons/icon2.png"
            alt=""
            style={{ display: "inline", paddingRight: "6px" }}
          />
          <span>Location info</span>
        </div>
        <div className="timeline">
          <span>Location type</span>
          <Switchx1 />
          <div className="lab-loc">Select Location</div>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="curr"
          >
            <div className="location">
              <MenuItem value={"unknown"} className="loc">
                <div>unknown</div>
              </MenuItem>
            </div>
          </Select>
          <div className="text6">Select target radius</div>
          <div className="slider1">
            <NumSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
