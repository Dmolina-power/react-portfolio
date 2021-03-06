import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import react from "../../images/React.png";
import jquery from "../../images/Jquery.png";
import materialize from "../../images/materialize.png";
import bootstrap from "../../images/bootstrap.png";
import foundation from "../../images/zurb foundation.png";
import nodeJS from "../../images/nodeJS.png";
import materialUi from "../../images/materialUi.png";
import MYSQL from "../../images/MYSQL.png";
import mongoDB from "../../images/mongoDB.png";
import "./styles.css";

function FrameWorks() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card z-depth-5">
            <div className="card-content center">
              <span className="card-title center">Languages:</span>
              <img className="mini" src={html} />
              <img className="mini" src={css} />
              <img className="mini" src={javascript} />
            </div>
          </div>
        </div>

        <div className="col s12 m6">
          <div className="card z-depth-5">
            <div className="card-content center">
              <span className="card-title center">Frameworks:</span>
              <img className="mini" src={materialize} />
              <img className="mini" src={bootstrap} />
              <img className="mini" src={foundation} />
              <img className="mini" src={nodeJS} />
              <img className="mini" src={materialUi} />
            </div>
          </div>
        </div>

        <div className="col s12 m6">
          <div className="card z-depth-5">
            <div className="card-content center">
              <span className="card-title center">Databases:</span>
              <img className="mini" src={MYSQL} />
              <img className="mini" src={mongoDB} />
            </div>
          </div>
        </div>

        <div className="col s12 m6">
          <div className="card z-depth-5">
            <div className="card-content center">
              <span className="card-title center">Libraries:</span>
              <img className="mini" src={react} />
              <img className="mini" src={jquery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrameWorks;


