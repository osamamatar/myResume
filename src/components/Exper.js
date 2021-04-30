import React from "react";

function Exper() {
  return (
    <>
      <div className='w3-twothird'>
        <div className='w3-container w3-card w3-white w3-margin-bottom'>
          <h2 className='w3-text-grey w3-padding-16'>
            <i className='fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-black'></i>
            Work Experience
          </h2>
          <div className='w3-container'>
            <h5 className='w3-opacity'>
              <b>Front End Developer / w3schools.com</b>
            </h5>
            <h6 className='w3-text-brown'>
              <i className='fa fa-calendar fa-fw w3-margin-right'></i>Jan 2015 -
              <span className='w3-tag w3-green w3-round'>Current</span>
            </h6>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
              deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <hr />
          </div>
          <div className='w3-container'>
            <h5 className='w3-opacity'>
              <b>Web Developer / something.com</b>
            </h5>
            <h6 className='w3-text-brown'>
              <i className='fa fa-calendar fa-fw w3-margin-right'></i>Mar 2012 -
              Dec 2014
            </h6>
            <p>
              Consectetur adipisicing elit. Praesentium magnam consectetur vel
              in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <hr />
          </div>
        </div>

        <div className='w3-container w3-card w3-white'>
          <h2 className='w3-text-grey w3-padding-16'>
            <i className='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-black'></i>
            Education
          </h2>
          <div className='w3-container'>
            <h5 className='w3-opacity'>
              <b>W3Schools.com</b>
            </h5>
            <h6 className='w3-text-brown'>
              <i className='fa fa-calendar fa-fw w3-margin-right'></i>Forever
            </h6>
            <p>Web Development! All I need to know in one place</p>
            <hr />
          </div>
          <div className='w3-container'>
            <h5 className='w3-opacity'>
              <b>London Business School</b>
            </h5>
            <h6 className='w3-text-brown'>
              <i className='fa fa-calendar fa-fw w3-margin-right'></i>2013 -
              2015
            </h6>
            <p>Master Degree</p>
            <hr />
          </div>
        </div>
        <br />
        <div className='w3-container  w3-card w3-white'>
          <p className='w3-large w3-text-theme'>
            <b>
              <i className='fa fa-globe fa-fw w3-margin-right w3-text-black'></i>
              Languages
            </b>
          </p>
          <p>Arabic</p>
          <div className='w3-light-grey w3-round-xlarge'>
            <div
              className='w3-round-xlarge w3-green'
              style={{ height: "24px", width: "100%" }}
            ></div>
          </div>
          <p>English</p>
          <div className='w3-light-grey w3-round-xlarge'>
            <div
              className='w3-round-xlarge w3-green'
              style={{ height: "24px", width: "60%" }}
            ></div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Exper;
