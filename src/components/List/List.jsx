import "./List.css";
import { Link } from "react-router-dom";
import React from "react";

class List extends React.Component {
  render() {
    return (
      <div>
        <p className="list p">Please choose a repository from the list below.</p>
        <ul className="projects">
          <li>
            <a target="_blank" href="https://keen-nobel-9fdcda.netlify.app/">Full CRUD: CKF's Classical Music Recording Recommendations</a>
            <br /> <br />
          <img src='https://i.imgur.com/XGCaX1e.png' />
          </li>
          <li>
            <a target="_blank" href="https://faremarket.netlify.app/storefront-social">Full-stack app, group project: Storefront Social</a>
            <br /> <br />
          <img src="https://i.imgur.com/Q4uWeMe.png" />
          </li>
         
          <li>
            <a target="_blank" href="https://elegant-joliot-87b4b3.netlify.app/">Full-stack app: Manuscripts from the Chartreuse de Champmol</a>
            <br /> <br />
          <img src="https://i.imgur.com/aEVlENh.png" />
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
