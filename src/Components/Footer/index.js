import React from "react";
import Form from "../Form/index"

function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
              <h4>Got a project idea?</h4>
              <p>
                I help brands turn big ideas into beautiful digital products and
                experiences.
              </p>
              <div className="card lighten-1">
                <div className="card-content black-text">
                  <span className="card-title center"> Let's Connect!</span>
                  <div className="col s12 m6">
                    
                    <h6>
                      <i className="material-icons">email</i>
                       <br></br>bigdpower@icloud.com 
                    </h6>
                    <h6>
                      <i className="material-icons">map</i><br></br>San Tan Valley,
                      Arizona
                    </h6>
                  </div>

                  <a href="https://github.com/Dmolina-power">
                    <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                  </a>
                  <a
                    className="LI-simple-link"
                    href="https://www.linkedin.com/in/daniel-molina-power-b7705b1a6?trk=profile-badge"
                  >
                    <img src="https://img.icons8.com/cute-clipart/96/000000/linkedin.png" />
                  </a>
                </div>
              </div>
   
                        
            </div>
          {/* <Form /> */}
          </div>
        </div>
        <div className="footer-copyright black-text">
          <div className="container">
            <h6 className="footerText">© 2020 Copyright Daniel Molina-Power ALL RIGHTS RESERVED</h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
