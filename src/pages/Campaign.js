import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import "./Campaign.css";
import { Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Campaign = () => {
  const [searchItem, setSearchItem] = useState("");

  const [Filter, setFilter] = useState("All Plateform");
  const [Filter1, setFilter1] = useState("All Status");
  const [Filter2, setFilter2] = useState("Last 30 days");

  const [plateform, setPlateform] = useState("All Plateform");
  const [Status, setStatus] = useState("All Status");
  const [Duration, setDuration] = useState("Last 30 days");

  useEffect(() => {
    setFilter(plateform);
    setFilter1(Status);
    setFilter2(Duration);
  }, [plateform, Status, Duration, Filter, Filter1]);

  console.log(searchItem);
  return (
    <div className="all">
      <div className="c-top1">
        <div className="c-left">
          <span>Your Campaigns</span>
          <span>Check the list of campaign you created</span>
        </div>
        <div className="c-right">
          <Link to="/campFir">
            <button className="button">
              <img src="icons/add-circle.png" />
              Create new campaign
            </button>
          </Link>
        </div>
      </div>

      <div className="campaign">
        <div className="toppest">
          <div className="search-top">
            <input
              className="s-input"
              type="text"
              placeholder="Search For The Campaign"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          <div className="all-search-right">
            <div className="search-right">
              <label>Platform: </label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: 132, height: 33 }}
                value={plateform}
                onChange={(e) => setPlateform(e.target.value)}
              >
                <MenuItem value={"All Plateform"}>All Platform</MenuItem>
                <MenuItem value={"facebook"}>facebook</MenuItem>
                <MenuItem value={"instagram"}>Instagram</MenuItem>
                <MenuItem value={"youtube"}>youtube</MenuItem>
              </Select>
            </div>

            <div className="search-right">
              <label>Status: </label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: 118, height: 33 }}
                value={Status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={"All Status"}>All Status</MenuItem>
                <MenuItem value={"live"}>Live</MenuItem>
                <MenuItem value={"paused"}>Paused</MenuItem>
                <MenuItem value={"exhausted"}>Exhausted</MenuItem>
              </Select>
            </div>

            <div className="search-right">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: 132, height: 33 }}
                value={Duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <MenuItem value={"Last 30 days"}>Last 30 days</MenuItem>
                <MenuItem value={"facebook"}>facebook</MenuItem>
                <MenuItem value={"instagram"}>Instagram</MenuItem>
                <MenuItem value={"youtube"}>youtube</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="s-top"></div>
        <div className="table">
          <Table
            searchData={searchItem}
            Filter={Filter}
            Filter1={Filter1}
            Filter2={Filter2}
          />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
