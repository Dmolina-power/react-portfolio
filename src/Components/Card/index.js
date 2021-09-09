import React from "react";

function Card(props) {
  return (
    <>
      
        <div className="card z-depth-4">
          <div className="card-image">
            <img src={props.image} alt={props.name} />
            <span className="card-header black-text"> {props.name}</span>
            <a
              className="btn-floating halfway-fab waves-effect waves-light"
              href={props.link}
            >
              <i className="material-icons">explore</i>
            </a>
          </div>
          <div className="card-content">
            <p>{props.content}</p>
            <a href={props.gitHubLink}>
              <img
                src="https://img.icons8.com/fluent/48/000000/github.png"
                alt="github"
                className="githubIcon"
              />
            </a>
          </div>
        </div>
      
    </>
  );
}

export default Card;
