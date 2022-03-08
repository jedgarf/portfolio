import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <center>
                <img
                  // className="profile-pic"
                  style={{borderRadius: "10px", margin: "30px", width: "300px"}}
                  src={profilepic}
                  alt="alter"
                />
              </center>
            </div>
            <div className="nine columns main-col">
              <h2 style={{marginLeft: "30px"}}>About Me</h2>

              <p className="lead" style={{marginLeft: "30px"}}>{bio}</p>
              <div className="row">
                <div className="columns contact-details" style={{marginLeft: "30px"}}>
                  <h2>Address & Contact Details</h2>
                  <p className="address">
                    {/* <span>{name}</span>
                    <br /> */}
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    {/* <span>{phone}</span>
                    <br /> */}
                    <span><a href={"mailto:" + email}>{email}</a></span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
