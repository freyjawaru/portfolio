import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="links">
        <NavLink className="logo" to="/">
          Main
        </NavLink>
       
          <NavLink className="link" to="/list">
          Projects
          </NavLink>
          <NavLink className="link" to="/CV">
          CV
          </NavLink>
          <NavLink className="link" to="/Contact me">
           Contact me
          </NavLink>
         </div>
       
    </nav>
  );
};

export default Nav;
