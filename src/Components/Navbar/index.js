import React, { useEffect, useRef } from "react";
import "./styles.css";

const Navbar = () => {
  const ref = useRef();

  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].intersectionRatio === 0)
          document.querySelectorAll(".navbar").classList.add(".navbar-sticky");
        else if (entries[0].intersectionRatio === 1)
          document
            .querySelectorAll(".navbar")
            .classList.remove(".navbar-sticky");
      },
      { threshold: [0, 1] }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div class="navbar">
      <nav>
        <div class="nav-wrapper black">
          <ul class="right">
            <li>
              <a href="/" class="breadcrumb">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" class="breadcrumb">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" class="breadcrumb">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
