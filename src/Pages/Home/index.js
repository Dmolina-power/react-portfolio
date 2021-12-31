import React, { useEffect } from "react";
import M from "materialize-css";
import Footer from "../../Components/Footer/index";
import Frameworks from "../../Components/Frameworks";
import Landing from "../../Components/Landing";
import Navbar from "../../Components/Navbar";


import "./styles.css";

const Home = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }, []);

  return (
    <div>
      <Landing />
      <Navbar />
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
          <div className="col s12 m8 center-align">
            <h3 className="grey-text text-darken-3 lighten-3">
              Full Stack MERN Developer <br />| Coding Bootcamp Instructor
            </h3>
            <p className="white-text">
              Currently an Instructor for a coding bootcamp sharing my passion
              for coding and molding the minds of Junior MERN Stack Developers.
              When I leave the classroom I work on my own projects. Today’s
              trends go mobile first, so a cohesive and responsive design is
              always on my mind.I am known for collaborating, working hard and
              getting things done.Every project is unique and I will craft your
              App for the target audience.
              <br />
              <br />
              I’m actively pursuing a UX Design Certificate through Grow with
              Google Courses.
            </p>

            <a className="red-text" href="/about">
              Want to get to know me more!
            </a>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
        <div className="parallax 3">
          <img
            src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbm5lY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="parallax-3"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
