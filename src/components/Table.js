import React, { useEffect, useState } from "react";
import "./Table.css";
import { data } from "./data";
import Toggle from "./Toggle";
import Button from "./Button";

const Table = (props) => {
  const [List, setList] = useState(data);
  const ButtonStyle = (status) => {
    return <Button status={status} />;
  };

  const handleRemove = (id) => {
    const newList = List.filter((item) => item.id !== id);
    setList(newList);
  };

  const search = props.searchData;
  const filter = props.Filter;
  const filter1 = props.Filter1;
  const filter2 = props.Filter2;

  return (
    <div className="b-table">
      <div className="col-md-12">
        <table className="i-table">
          <thead className="head">
            {/* <div> */}
            <tr>
              <th>On/Off </th>
              <th>Campaign</th>
              <th>Date Range</th>
              <th>Clicks</th>
              <th>Budget</th>
              <th>Location</th>
              <th>Platform</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            {/* </div> */}
          </thead>
          <tbody>
            {filter === "All Plateform" &&
              filter1 == "All Status" &&
              filter2 === "Last 30 days" &&
              List.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.campaign.toLowerCase().includes(search);
              }).map((List, index) => (
                <tr key={index}>
                  <td>{List.On === "on" ? <Toggle /> : null} </td>
                  <td>
                    {List.icon}
                    {List.campaign}
                  </td>
                  <td>{List.date}</td>
                  <td>{List.clicks}</td>
                  <td>{List.Budget}</td>
                  <td>{List.location}</td>
                  <td>{List.platform}</td>
                  <td>{ButtonStyle("live")}</td>
                  <td>
                    <button>{List.actions[0]}</button>
                    <button onClick={() => handleRemove(List.id)}>
                      {List.actions[1]}
                    </button>
                  </td>
                </tr>
              ))}

            {filter !== "All Plateform" &&
              filter1 == "All Status" &&
              List.filter((item) => {
                return item.plateform === filter;
              }).map((List, index) => (
                <tr key={index}>
                  <td>{List.On === "on" ? <Toggle /> : null} </td>
                  <td>
                    {List.icon}
                    {List.campaign}
                  </td>
                  <td>{List.date}</td>
                  <td>{List.clicks}</td>
                  <td>{List.Budget}</td>
                  <td>{List.location}</td>
                  <td>{List.platform}</td>
                  <td>{ButtonStyle("live")}</td>
                  <td>
                    <button>{List.actions[0]}</button>
                    <button onClick={() => handleRemove(List.id)}>
                      {List.actions[1]}
                    </button>
                  </td>
                </tr>
              ))}

            {filter !== "All Plateform" &&
              filter1 !== "All Status" &&
              List.filter((item) => {
                return item.plateform === filter && item.status === filter1;
              }).map((List, index) => (
                <tr key={index}>
                  <td>{List.On === "on" ? <Toggle /> : null} </td>
                  <td>
                    {List.icon}
                    {List.campaign}
                  </td>
                  <td>{List.date}</td>
                  <td>{List.clicks}</td>
                  <td>{List.Budget}</td>
                  <td>{List.location}</td>
                  <td>{List.platform}</td>
                  <td>{ButtonStyle("live")}</td>
                  <td>
                    <button>{List.actions[0]}</button>
                    <button onClick={() => handleRemove(List.id)}>
                      {List.actions[1]}
                    </button>
                  </td>
                </tr>
              ))}

            {filter1 !== "All Status" &&
              filter === "All Plateform" &&
              List.filter((item) => {
                return item.status === filter1;
              }).map((List, index) => (
                <tr key={index}>
                  <td>{List.On === "on" ? <Toggle /> : null} </td>
                  <td>
                    {List.icon}
                    {List.campaign}
                  </td>
                  <td>{List.date}</td>
                  <td>{List.clicks}</td>
                  <td>{List.Budget}</td>
                  <td>{List.location}</td>
                  <td>{List.platform}</td>
                  <td>{ButtonStyle("live")}</td>
                  <td>
                    <button>{List.actions[0]}</button>
                    <button onClick={() => handleRemove(List.id)}>
                      {List.actions[1]}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
