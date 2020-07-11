import React, { Component } from "react";
import M from "materialize-css";
import Footer from "./Components/Footer/index";
import Card from "./Components/Card/index";
import projects from "./projects.json";
import "./App.css";


export class Parallax extends Component {
  state = {
    projects,
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems);
    });
  }

  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
              alt="parallax-1"
            />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Daniel Molina-Power</h2>
            <p className="header-title">Full Stack Web Developer</p>

            <div className="col s6">
              <img
                src="https://i.postimg.cc/MKW6gC5z/53-A1247-A-3555-49-BA-981-C-15306-A54913-B.jpg"
                alt=""
                className="circle responsive-img z-depth-5"
              />
              <a
                className="waves-effect waves-light btn  z-depth-5"
                href="https://docs.google.com/document/d/1DldWUaF821mOasAmYpFahvvmb6H1u6i5GdBH1nFRROs/"
              >
                View My Resume
              </a>
            </div>
            <div className="col s6">
              <p className="grey-text text-darken-3 lighten-3">
                Originally raised in Miami by an Artistic family, not able to
                escape the heat, driven to Arizona. Growing up sounded by the
                pop art in Miami I have developed a deep passion for style. To
                fulfill my passion of creating a more beautiful world via design
                I have completed the Full-Stack development course via the
                University of Arizona. Currently, an expert in creating dynamic
                user experiences via React.
              </p>
            </div>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="parallax-2"
            />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="portfolio-header">Portfolio</h2>
            <p className="portfolio-tag">
              Come view my personal work and project collaborations!
            </p>
            {this.state.projects.map((project) => (
              <Card
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                content={project.content}
                link={project.link}
                gitHubLink={project.gitHubLink}
              />
            ))}
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="parallax-3"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Parallax;
