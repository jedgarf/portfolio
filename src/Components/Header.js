import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { init } from "ityped";
import { initialize } from "react-ga";

class Header extends Component {

  componentDidMount(){
    const myElement = document.querySelector('#header-name-text')
    if (myElement) {
        myElement.textContent = ""
    }
    init(myElement, { showCursor: false, strings: ['John Edgar Francisco', 'a Backend Web Developer', 'a Application Developer' ] })
  }

  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const linkin = this.props.data.linkin;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        {/* <ParticlesBg type="lines" bg={true} /> */}

        <nav id="nav-wrap">
        <div className="under-development-sign-div">
          <h6 className="under-development-sign"><i className="fa fa-wrench"></i> Under Development</h6>
        </div>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Education, Work Experience and Skills
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <big className="responsive-headline header-name">I'm <span id="header-name-text"></span></big>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn btn-rounded project-btn">
                  <i className="fa fa-desktop"></i>Projects
                </a>
                <a href={linkin} className="button btn btn-rounded linkedin-btn">
                  <i className="fa fa-linkedin"></i>LinkIn
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
