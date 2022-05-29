import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { init } from "ityped";
import { initialize } from "react-ga";

class Header extends Component {

  constructor() {
    super();
    this.state = { screenWidth: null };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions());
  }
  
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions)
  }

  componentDidUpdate() {
    const myElement = document.querySelector('#myElement')
      // console.log(myElement);
      if (myElement != null) {
        init(myElement, { showCursor: false, strings: ['John Edgar Francisco', 'a Backend Web Developer', 'a Software Developer' ] })
      }
      // init(myElement, { showCursor: false, strings: ['John Edgar Francisco', 'a Backend Web Developer' ] })
  }
  
  updateWindowDimensions() {
     this.setState({ screenWidth: window.innerWidth });
  }


  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const linkin = this.props.data.linkin;
    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image1;
    const profilepic2 = "images/" + this.props.data.image2;
    const description = this.props.data.description;

    var mobilePic;
    var desktopPic;
    var mainCol;
    var fNameFontSize;

    if (this.state.screenWidth <= 768) {
      mobilePic = <div style={{ textAlign: "center" }}><img style={{borderRadius: "30px", width: "190px", marginBottom: "20px", border: "3px solid #000524"}} src={profilepic} alt="alter"/></div>;
      mainCol = "";
      desktopPic = "";
      fNameFontSize = "25px";
    } else {
      mobilePic = "";
      mainCol = "eight columns";
      fNameFontSize = "35px";
      // main-col
      desktopPic = <div className="four columns" style={{ textAlign: "right" }}><img style={{borderRadius: "30px", width: "300px", border: "5px solid #000524", transform: "rotate(-10deg)" }} src={profilepic2} alt="alter"/></div>;
    }

    return (
      <header id="home">
        {/* <ParticlesBg type="lines" bg={true} /> */}

        <nav id="nav-wrap">
        {/* <div className="under-development-sign-div">
          <h6 className="under-development-sign"><i className="fa fa-wrench"></i> Under Development</h6>
        </div> */}
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
              <a className="smoothscroll" href="#education-content">
                Education
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Skills
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#work-content">
                Working Experience
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#achievements">
                Certificates
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
          <div className={mainCol}>
            <div className="banner-text">
                {mobilePic}
              {/* <Fade bottom> */}
                <big className="responsive-headline header-name" style={{fontSize: fNameFontSize }}>I'm <span id="myElement"></span></big>
              {/* </Fade> */}
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
          {desktopPic}
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
