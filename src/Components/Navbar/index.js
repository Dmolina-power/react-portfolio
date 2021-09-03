import React from "react";
import "./styles.css";

function Navbar(){
    return(
        <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper black">
            <ul class="right hide-on-med-and-down">
            <li>
                <a href="/" class="breadcrumb">
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutMe" class="breadcrumb">
                  About Me
                </a>
              </li>
              <li>
                <a href="#portfolio" class="breadcrumb">
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
    )
}

export default Navbar;