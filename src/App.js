import React, { Component } from "react";
import M from "materialize-css";
import Footer from "./Components/Footer/index";
import Card from "./Components/Card/index";
import projects from "./projects.json";
import Frameworks from "./Components/Frameworks";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Grid from "@material-ui/core/Grid";

// import { Router, Route } from 'react-router';

import "./App.css";

// import About from "./Pages/About";

export class App extends Component {
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
        <Navbar />
        <Landing />
        <div className="section black" id="aboutMe">
          <div className="row">
            <div className="col s12 m4 center">
              <img
                src="https://i.postimg.cc/MKW6gC5z/53-A1247-A-3555-49-BA-981-C-15306-A54913-B.jpg"
                alt=""
                className="circle responsive-img z-depth-5"
                data-aos="fade-up-right"
              />
            </div>
            <div className="col s12 m8 center">
              <p className="grey-text text-darken-3 lighten-3">
                Originally raised in Miami, Growing up surrounded by the pop art
                culture.I have developed a deep passion for style, however, I
                construct my art via code.To connect my passion of creating a
                more beautiful world via design I have completed the Full -
                Stack development course via the University of Arizona.I am
                confidently able to create and coordinate dynamic user
                experiences via front end and back languages like, HTML, CSS,
                JavaScript, Node, and React.js.Today’ s trends go mobile first,
                so a cohesive and responsive design is always on my mind.I am
                known for collaborating, working hard and getting things
                done.Every project is unique and I will craft your site for the
                target audience.
              </p>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="parallax-1"
            />
          </div>
        </div>
        <div className="section black">
          <div className="row">
            <div className="col s12">
              <Frameworks />
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax 2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="parallax-2"
            />
          </div>
        </div>
        <div className="section black white-text" id="portfolio">
          <div className="row container white-text">
            <h2 className="portfolio-header white-text"> Portfolio </h2>
            <p className="portfolio-tag">
              Come view my personal work and project collaborations!
            </p>
          </div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={10}
            style={{ paddingLeft: "25px", padding: "35px" }}
          >
            
            {this.state.projects.map((project) => (
              <Grid key={project.id} item sm={12} md={6} lg={4} xl={4}>
                <Card
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  content={project.content}
                  link={project.link}
                  gitHubLink={project.gitHubLink}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="parallax-container">
          <div className="parallax 3">
            <img
              src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="parallax-3"
            />
          </div>
        </div>
        <Footer />
        {/* <Router>
<Route exact path="./about" component={About}/>
   </Router> */}
      </div>
    );
  }
}

export default App;
