import React, { Component } from "react";
import Slide from "react-reveal";

class Achievements extends Component {
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
    // this.props.data.achievements
    return (
      <section id="achievements">

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="twelve columns collapsed">
              <h1>
                <span>Certificates</span>
              </h1>
            </div>

            <div className="twelve columns collapsed">
              {/* <p>{skillmessage}</p> */}
              <p>Will be posted soon.</p>

              <div className="bars">
                {/* <ul className="skills">{skills}</ul> */}
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Achievements;
