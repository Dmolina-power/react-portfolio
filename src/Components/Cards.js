import React from 'react'

function Cards() {
    return (
        <div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="/images/Screen Shot 2020-06-30 at 10.30.52 PM.png"alt="project2"/>
                  <span className="card-header">Project/collaboration - Send Moods</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light teal" href="https://project-2-mood-music.herokuapp.com/"><i className="material-icons">add</i></a>
                 </div>
                 <div className="card-content">
                   <p>A group project that was music inspired and built with: HTML
                    Bootstrap/CSS,JavaScript,Handlebars,Sequelize,JQuery
                    Express, Passport, MySql2, bcryptjs, Sequelize packages. created with Three other WebDev's.Click tab to view the site or to view Repo click below.</p>
                   <a href="https://github.com/Dmolina-power/Project2">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png"alt="github"/></a>
                  </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="/images/Screen Shot 2020-06-30 at 10.54.13 PM.png" alt="burgertime" />
                  <span className="card-header">Burger Time!</span>
                  <a
                    className="btn-floating halfway-fab waves-effect waves-light teal"
                    href="https://secure-stream-71691.herokuapp.com/"
                  >
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    A simple burger logger with MySQL, Node, Express, Handlebars
                    and a homemade ORM. user can add burgers of their own,
                    devour burgers. Burger Time! highlights Database usuage and
                    interactions. Click tab to view the site or to view Repo
                    click below.
                  </p>
                  <a href="https://github.com/Dmolina-power/burger-time">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="/images/Screen Shot 2020-06-30 at 11.12.53 PM.png" alt="fitness"/>
                  <span className="card-header">Fitness Tracker</span>
                  <a
                    className="btn-floating halfway-fab waves-effect waves-light teal"
                    href="https://limitless-sea-51961.herokuapp.com/"
                  >
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    View, create, and track daily workouts. A user should be
                    able to log multiple exercises in a workout on a given day.
                    Built with MongoDB, Node.js, HTML5, CSS.Click tab to view
                    the site or to view Repo click below.
                  </p>
                  <a href="https://github.com/Dmolina-power/fitness-Tracker">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="/images/Screen Shot 2020-06-30 at 11.41.19 PM.png" alt="project1" />
                  <span className="card-title">
                    Project/collaboration - Whats PoppIn
                  </span>
                  <a
                    className="btn-floating halfway-fab waves-effect waves-light teal"
                    href="https://cheesekate.github.io/Project-1/"
                  >
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    A group project that was created with CSS,HTML,
                    JavaScript.Running web API's.With the Corona virus, we are
                    trying to figure out what is PoppIn in your area and the
                    weather.Created with Three other WebDev's. Click tab to view
                    the site or to view Repo click below.
                  </p>
                  <a href="https://github.com/Cheesekate/Project-1">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        
    )
}

export default Cards
