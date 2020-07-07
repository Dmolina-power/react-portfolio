import React, { Component } from "react";
import M from "materialize-css";
import Footer from "./Components/Footer";
import "./App.css";

export class Parallax extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems);
    });
  }

  render() {
    return (
      <div>
        <div class="parallax-container">
          <div class="parallax">
            <img src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80" />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <h2 class="header">Daniel Molina-Power</h2>
            <p class="header-title">Full Stack Web Developer</p>

            <div class="col s6">
              <img
                src="https://i.postimg.cc/MKW6gC5z/53-A1247-A-3555-49-BA-981-C-15306-A54913-B.jpg"
                alt=""
                class="circle responsive-img"
              />
              <a
                class="waves-effect waves-light btn-large"
                href="https://docs.google.com/document/d/1DldWUaF821mOasAmYpFahvvmb6H1u6i5GdBH1nFRROs/"
              >
                View My Resume
              </a>
            </div>
            <div class="col s6">
              <p class="grey-text text-darken-3 lighten-3">
                Originally raised in Miami by an Artistic family, not able to
                escape the heat, driven to Arizona. Growing up sounded by the
                pop art in Miami I have developed a deep passion for style. To
                fulfill my passion of creating a more beautiful world via design
                I have completed the Full-Stack development course via the
                University of Arizona. Currently, an expert in creating dynamic
                user experiences via front end languages like, HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div class="parallax-container">
          <div class="parallax">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <h2 class="portfolio-header">Portfolio</h2>
            <p class="portfolio-tag">
              Come view my personal work and project collaborations!
            </p>

            <div class="col s6">
              <div class="card">
                <div class="card-image">
                  <img
                    src="public/images/Screen Shot 2020-06-30 at 10.30.52 PM.png
                  "
                  />
                  <span class="card-title">
                    Project/collaboration - Send Moods
                  </span>
                  <a
                    class="btn-floating halfway-fab waves-effect waves-light teal"
                    href="https://project-2-mood-music.herokuapp.com/"
                  >
                    <i class="material-icons">add</i>
                  </a>
                </div>
                <div class="card-content">
                  <p>
                    A group project that was music inspired and built with: HTML
                    Bootstrap/CSS,JavaScript,Handlebars,Sequelize,JQuery
                    Express, Passport, MySql2, bcryptjs, Sequelize packages.
                    created with Three other WebDev's.Click tab to view the site
                    or to view Repo click below.
                  </p>
                  <a href="https://github.com/Dmolina-power/Project2">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s6">
              <div class="card">
                <div class="card-image">
                  <img src="public/images/Screen Shot 2020-06-30 at 10.54.13 PM.png" />
                  <span class="card-title">Burger Time!</span>
                  <a
                    class="btn-floating halfway-fab waves-effect waves-light teal"
                    href="https://secure-stream-71691.herokuapp.com/"
                  >
                    <i class="material-icons">add</i>
                  </a>
                </div>
                <div class="card-content">
                  <p>
                    A simple burger logger with MySQL, Node, Express, Handlebars
                    and a homemade ORM. user can add burgers of their own,
                    devour burgers. Burger Time! highlights Database usuage and
                    interactions. Click tab to view the site or to view Repo
                    click below.
                  </p>
                  <a href="https://github.com/Dmolina-power/burger-time">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" />
                  </a>
                </div>
              </div>
            </div>

            <div class="col s6">
              <div class="card">
                <div class="card-image">
                  <img src="src/images/Screen Shot 2020-06-30 at 11.12.53 PM.png" />
                  <span class="card-title">Fitness Tracker</span>
                  <a
                    class="btn-floating halfway-fab waves-effect waves-light teal"
                    href="https://limitless-sea-51961.herokuapp.com/"
                  >
                    <i class="material-icons">add</i>
                  </a>
                </div>
                <div class="card-content">
                  <p>
                    View, create, and track daily workouts. A user should be
                    able to log multiple exercises in a workout on a given day.
                    Built with MongoDB, Node.js, HTML5, CSS.Click tab to view
                    the site or to view Repo click below.
                  </p>
                  <a href="https://github.com/Dmolina-power/fitness-Tracker">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s6">
              <div class="card">
                <div class="card-image">
                  <img src="src/images/Screen Shot 2020-06-30 at 11.41.19 PM.png" />
                  <span class="card-title">
                    Project/collaboration - Whats PoppIn
                  </span>
                  <a
                    class="btn-floating halfway-fab waves-effect waves-light teal"
                    href="https://cheesekate.github.io/Project-1/"
                  >
                    <i class="material-icons">add</i>
                  </a>
                </div>
                <div class="card-content">
                  <p>
                    A group project that was created with CSS,HTML,
                    JavaScript.Running web API's.With the Corona virus, we are
                    trying to figure out what is PoppIn in your area and the
                    weather.Created with Three other WebDev's. Click tab to view
                    the site or to view Repo click below.
                  </p>
                  <a href="https://github.com/Cheesekate/Project-1">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-container">
          <div class="parallax">
            <img src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Parallax;
