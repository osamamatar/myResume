import React, { Fragment, useState } from "react";
import logo from "../assets/RM+Logo+small.png";
import mail from "../assets/email.png";
import f from "../assets/facebook.png";
import tw from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import ln from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [tog, settog] = useState("toggle");
  const [nav, setnav] = useState("navigation");
  const toggle = () => {
    if (tog === "toggle") {
      settog("toggle active");
      setnav("navigation active");
    } else {
      settog("toggle");
      setnav("navigation");
    }
  };
  return (
    <Fragment>
      <div className='logo '>
        <div className='img-title-logo'>
          <img src={logo} alt='' />
          <span> MATAR</span>
        </div>

        <div className={tog} onClick={toggle}></div>
        <div className={nav}>
          <ul>
            <li onClick={toggle}>
              <Link to='/'>Home</Link>
            </li>
            <li onClick={toggle}>
              <Link to='/Services'>Services</Link>
            </li>
            <li onClick={toggle}>
              <Link to='/Work'>Work</Link>
            </li>
            <li onClick={toggle}>
              <Link to='/resume'>Resume</Link>
            </li>
          </ul>
          <div className='social-bar'>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/osama.matar.75457'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={f} alt='' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <img src={tw} alt='' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/osama-mohamed-44131311a'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={ln} alt='' />
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={insta} alt='' />
                </a>
              </li>
              <li>
                <a
                  href='mailto:osamamatar7@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  onClick={toggle}
                >
                  <img src={mail} alt='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
