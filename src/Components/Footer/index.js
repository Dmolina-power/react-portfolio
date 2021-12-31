import React from "react";
import MyForm from "../Form";
import Resume from "../../images/Resume 2021.pdf";


const Footer = () => {
  return (
    <>
      <footer className="page-footer black white-text" id="contact">
        <div className="container">
          <div className="row">
            <div className="col s12 m12 white-text">
              <h4 className="white-text"> Got a project idea ? </h4>
              <p className="white-text">
                I help brands turn big ideas into beautiful digital products and
                experiences.
              </p>
              <div className="card black">
                <div className="card-content white-text black">
                  <span className="card-title center white-text">
                    Let 's Connect!
                  </span>
                  <div className="col s12 m6">
                    <h6 className="white-text">
                      <i className="material-icons"> email </i>
                      danielmolinapower@gmail.com
                    </h6>
                    <h6 className="white-text">
                      <i className="material-icons"> map </i> San Tan Valley,
                      Arizona
                    </h6>
                    <a className="red-text" href={Resume} download>
                                Download a Resume
                              </a>
                  </div>
                  <a href="https://github.com/Dmolina-power">
                    <img src="https://img.icons8.com/fluent/96/000000/github.png" alt="github link"/>
                  </a>
                  <a
                    className="LI-simple-link"
                    href="https://www.linkedin.com/in/daniel-molina-power-b7705b1a6?trk=profile-badge"
                  >
                    <img src="https://img.icons8.com/cute-clipart/96/000000/linkedin.png" alt="linked in link"/>
                  </a>
                </div>
              </div>
              <MyForm />
            </div>
          </div>
        </div>
        <div className="footer-copyright black-text">
          <div className="container">
            <h6 className="footerText white-text">
              © 2020 Copyright Daniel Molina - Power ALL RIGHTS RESERVED{" "}
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
