import React, { Component } from "react";
import M from "materialize-css";
import frameworks from "../../frameworks.json";
import "./styles.css";

export class FrameWorks extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        indicators: true,
        duration: 300,
        autoPlay: true,
      });
      let indicatorItems = document.querySelectorAll(
          ".carousel .indicator-item"
        ),
        slideTime = 1000,
        activeClass = "active";

      setInterval(() => {
        indicatorItems.forEach((el) => {
          if (el.classList.contains(activeClass)) {
            M = el.nextElementSibling;
            if (M == null) {
              indicatorItems[0].click();
            } else {
              M.click();
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
          
            {frameworks.map((framework) => (
            <a href="link"class="carousel-item">
              <img alt="images on carousel"
              id={framework.id} 
              key={framework.id} 
              src={framework.image}
              /> 
              </a>
            ))}
         
        </div>
      </div>
    );
  }
}
export default FrameWorks;
