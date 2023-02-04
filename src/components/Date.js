import react, { useState } from "react";
import "./Date.css";

const Datex = ({ title }) => {
  const [date, setDate] = useState();

  return (
    <div className="box">
      <span>{title}</span>
      <input
        className="date"
        type="date"
        placeholder=" "
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default Datex;
