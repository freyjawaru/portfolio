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
           
          </li>
          <li>
          <a target="_blank" href="https://faremarket.netlify.app/storefront-social">Full-stack app, group project: Storefront Social</a>
           
          </li>
        
          <li>
          <a target="_blank" href="https://elegant-joliot-87b4b3.netlify.app/">Full-stack app: Manuscripts from the Chartreuse de Champmol</a>
           
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
