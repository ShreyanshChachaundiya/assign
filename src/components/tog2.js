import React from "react";
import "./Switch.css";
import SwitchSelector from "react-switch-selector";

const options = [
  {
    label: "location",
    value: "rent",
    selectedBackgroundColor: "#0F6EFF",
    innerHeight: 20,
  },
  {
    label: "Radius",
    value: "purchase",
    selectedBackgroundColor: "#0F6EFF",
  },
];

const onChange = (newValue) => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

function Switchx1() {
  return (
    <div className="switch">
      <p style={{ height: "37px", width: "228px" }}>
        <SwitchSelector
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          backgroundColor="#F0F0F0"
          fontColor="#999999"
        />
      </p>
    </div>
  );
}

export default Switchx1;
