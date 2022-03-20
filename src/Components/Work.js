import React, { Component } from "react";
import Slide from "react-reveal";

class Work extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const work = this.props.data.map(function (work) {
      return (
        <div key={work.company}>
          <h3><a href={work.website} target="_blank" className="company-name">{work.company}</a></h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p className="info">{work.description}</p>
        </div>
      );
    });

    return (
      <section id="work-content">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span style={{fontSize:"16px"}}>Working Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Work;
