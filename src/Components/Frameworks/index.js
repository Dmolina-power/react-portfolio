import React, { Component } from "react";
import M from "materialize-css";
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

export class FrameWorks extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        indicators: true,
        duration: 300,
        autoPlay: true
      });
      let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
      slideTime = 1000,
      activeClass = "active";

  setInterval(() => {
    indicatorItems.forEach(el => {
      if (el.classList.contains(activeClass)) {
        M = el.nextElementSibling;
        if (M == null) {
          indicatorItems[0].click();
        } else {
          M.click()
        }
      }
    });
  }, slideTime);
    });
  }

  render() {
    return (
      <div>
        <h1 className="carouselTitle center white-text">
          The tools of the Trade!
        </h1>
        <div class="carousel">
          <a class="carousel-item">
            <img src={jquery} />
          </a>
          <a class="carousel-item">
            <img src={react} />
          </a>
          <a class="carousel-item">
            <img src={mongoDB} />
          </a>
          <a class="carousel-item">
            <img src={MYSQL} />
          </a>
          <a class="carousel-item">
            <img src={materialUi} />
          </a>
          <a class="carousel-item">
            <img src={nodeJS} />
          </a>
          <a class="carousel-item">
            <img src={foundation} />
          </a>
          <a class="carousel-item">
            <img src={bootstrap} />
          </a>
          <a class="carousel-item">
            <img src={materialize} />
          </a>
          <a class="carousel-item">
            <img src={javascript} />
          </a>
          <a class="carousel-item">
            <img src={css} />
          </a>
          <a class="carousel-item">
            <img src={html} />
          </a>
        </div>
      </div>
    );
  }
}
export default FrameWorks;
