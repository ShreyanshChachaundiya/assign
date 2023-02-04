import React from "react";
import "./Dashboard.css";
import bag from "../image/bag.png";
import { NavLink, Link } from "react-router-dom";

const Dashboard = () => {
  //   const NavLinkStyles = ({ isActive }) => {
  //     return {
  //       background: isActive ? "#1977f3" : "#001738",
  //     };
  //   };

  return (
    <div className="dashboard">
      <div className="logo">
        <img src="icons/logo.png" />
      </div>
      <ul className="all-dash">
        <li>
          <Link to="/" className="link">
            <button className="dash-button one">
              <img src="icons/house.png" alt="hello" className="dash_icon" />
              <div>Home</div>
            </button>
          </Link>
        </li>

        <NavLink to="/campaign" className="link" activeClassName="active">
          <li className="nav">
            <button className="dash-button two">
              <img
                src="icons/volume-high.png"
                alt="hello"
                className="dash_icon"
              />
              <div>campaign</div>
            </button>
          </li>
        </NavLink>

        <li>
          <button className="dash-button">
            <img src={bag} alt="hello" className="dash_icon" />
            <div>Products</div>
          </button>
        </li>
        <li>
          <button className="dash-button">
            <img
              src="icons/profile-2user.png"
              alt="hello"
              className="dash_icon"
            />
            <div>Customers</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
