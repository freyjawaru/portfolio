import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FaGithub, FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import cv from "../../KC.Chandler.resume.pdf";

const Nav = () => {
  return (
    <nav>
      <div className="links">
        <NavLink className="link" to="/">
          Main
        </NavLink>
       
          <NavLink className="link" to="/list">
          Projects
          </NavLink>
          <a href={cv} target="_blank" rel="noopener noreferrer">CV</a>
          <NavLink className="link" to="/Contact_me">
          Contact me
          </NavLink>
        <FaGithub /> <FaReact /> <FaHtml5 /> <FaCss3 /> <FaJs /> <img className="rails" src="https://i.imgur.com/PIb5QHb.png"></img>
        <img className="mongo" src="https://i.imgur.com/YgN7lXs.png"></img><img className="sql" src="https://i.imgur.com/DVSKzQD.png"></img>
        <img className="rails" src="https://i.imgur.com/p7Oe9PW.png"></img>
        <img className="rails" src="https://i.imgur.com/0POfHYs.png"></img>
        <img className="rails" src="https://i.imgur.com/5RXeemB.jpg"></img>
         </div>
       
    </nav>
  );
};

export default Nav;
