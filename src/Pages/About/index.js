import React from "react";
import Nav from "../../Components/Nav"

//styles
import "./styles.css"


function About() {
  return( 
      <>
     <Nav/>
     <div class="col s12 m7">
    <h2 class="header center-align">About Me</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://i.postimg.cc/MKW6gC5z/53-A1247-A-3555-49-BA-981-C-15306-A54913-B.jpg"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Originally raised in Miami, Growing up surrounded by the pop art
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
                  target audience.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  </>
)
}
export default About;
