import React from "react";
import "./Progress.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Progress = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 21;
  } else if (page === "pagetwo") {
    stepPercentage = 53.5;
  } else if (page === "pagethree") {
    stepPercentage = 80.5;
  } else if (page === "pagefour") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div className="size">
      <ProgressBar percent={stepPercentage}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              onClick={() => onPageNumberClick("1")}
            >
              <img src="icons/bulb.png"  alt="bulb"/>
            </div>
          )}
        </Step>

        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              onClick={() => onPageNumberClick("2")}
            >
              <img src="icons/vector.png"/>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              onClick={() => onPageNumberClick("3")}
            >
              <img src="icons/vector2.png"/>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              onClick={() => onPageNumberClick("4")}
            >
              <img src="icons/vector3.png"/>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default Progress;
