import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

import Tabs from "./Tabs";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    // eslint-disable-next-line
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    const companyProjects = this.props.data.companyProjects.map(function (companyProjects) {
      let projectImage = "images/portfolio/" + companyProjects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={companyProjects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{companyProjects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>

              <p hidden>Will be posted soon.</p>

              <Tabs>
                <div label="Outside Projects">
                  {<div
                    id="portfolio-wrapper"
                    className="bgrid-quarters s-bgrid-thirds cf"
                  >
                    {projects}
                  </div>}
                </div>
                <div label="Company Projects">
                  {<div
                    id="portfolio-wrapper"
                    className="bgrid-quarters s-bgrid-thirds cf"
                  >
                    {companyProjects}
                  </div>}
                </div>
              </Tabs>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
