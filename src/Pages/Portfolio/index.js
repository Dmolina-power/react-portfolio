import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../Components/Card/index";
import Nav from "../../Components/Nav";

//Json
import comingsoon from "../../comingsoon.json";
import projects from "../../projects.json";

class Portfolio extends Component {
  state = {
    projects,
    comingsoon,
  };

  render() {
    return (
      <>
        <Nav />
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
        <div className="row container white-text">
          <h2 className="portfolio-header white-text"> Coming Soon!</h2>
          <p className="portfolio-tag">
            Projects that are in the development phase.
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
          {this.state.comingsoon.map((project) => (
            <Grid key={project.id} item sm={12} md={6} lg={4} xl={4}>
              <Card
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                content={project.content}
                gitHubLink={project.gitHubLink}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}
export default Portfolio;
