import React from "react";
import { Link } from "react-router-dom";
import programmer from "../assets/5eKX.gif";

function Home() {
  return (
    <>
      <section className='home'>
        <img src={programmer} className='home-img' alt='' />
        <div className='home-content'>
          <h1 style={{ color: "brown" }}>
            Hi, I am Osama
            <br />
          </h1>
          <h3 style={{ color: "brown" }}>Software Engineer from Egypt.</h3>
          <h4 className='bio-h'>
            {" "}
            I Have ability To Work Full Or Part Time In Full Stack Applications
          </h4>

          <div>
            <a
              href='https://www.facebook.com/osama.matar.75457'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-facebook-official w3-hover-opacity'></i>
            </a>
            <a
              href='https://github.com/osamamatar'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i
                className='fa fa-github  w3-hover-opacity'
                aria-hidden='true'
              ></i>
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-twitter w3-hover-opacity'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/osama-mohamed-44131311a'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-linkedin w3-hover-opacity'></i>
            </a>
          </div>

          <Link to='/work' className='btn'>
            See More
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
