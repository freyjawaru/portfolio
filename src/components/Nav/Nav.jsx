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
        <a className="link" href={cv} target="_blank" rel="cv">
          CV
        </a>
        <NavLink className="link" to="/Contact_me">
          Contact me
        </NavLink>
      </div>
      <div className="logo_pics">
        <FaGithub /> <FaReact /> <FaHtml5 /> <FaCss3 /> <FaJs />{" "}
        <img
          className="rails"
          src="https://i.imgur.com/PIb5QHb.png"
          alt="rails"
        ></img>
         <img
          className="rails"
          src="https://i.imgur.com/lzSwntS.png"
          alt="rails"
        ></img>
          <img
          className="rails"
          src="https://i.imgur.com/LaOOO9m.png"
          alt="rails"
        ></img>
          <img
          className="rails"
          src="https://i.imgur.com/CRYyCdi.png"
          alt="rails"
        ></img>
          <img
          className="rails"
          src="https://i.imgur.com/iSP6rV9.png"
          alt="rails"
        ></img>
        <img
          className="rails"
          src="https://i.imgur.com/YgN7lXs.png"
          alts="mongo"
        ></img>
        <img className="rails" src="https://i.imgur.com/DVSKzQD.png"></img>
        <img
          className="rails"
          src="https://i.imgur.com/p7Oe9PW.png"
          alt="logo"
        ></img>
        <img
          className="rails"
          src="https://i.imgur.com/0POfHYs.png"
          alt="logo"
        ></img>
        <img
          className="rails"
          src="https://i.imgur.com/5RXeemB.jpg"
          alt="logo"
        ></img>
      </div>
    </nav>
  );
};

export default Nav;
