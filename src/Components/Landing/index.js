import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import "./styles.css";

function Landing() {
  useEffect(() =>{
    AOS.init();
    
  }, []);
  return (
   
      
      <div className="background" data-aos="fade-in" data-aos-duration="1500" 
      id="enter">

      
        <div className="header center">
        <h1 className="landingHeader white-text" data-aos="zoom-in" data-aos-duration="1000">
        Hi there,
        </h1>
        <h2 className="landingText white-text"
        data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">I'M</h2>
        <h3 className="landingTitle red-text"data-aos="fade-left" data-aos-delay="1000">Daniel Molina-Power</h3>
        <span class="landingScroll white-text" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1500">
				Scroll down <br />
				<i class="material-icons" id="carrot">arrow_drop_down</i>
			</span>
        </div> 
       
      </div>
    
  );
}

export default Landing;
