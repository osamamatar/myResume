import React from "react";
import Exper from "../components/Exper";
import Skills from "../components/Skills";

function Resum() {
  return (
    <>
      <div
        className='w3-content w3-margin-top'
        style={{
          maxWidth: "1200px",
          paddingTop: "100PX",
        }}
      >
        <div className='w3-row-padding'>
          <Skills />
          <Exper />
        </div>
      </div>
      <footer className='w3-container w3-dark-gray w3-center w3-margin-top'>
        <p>Find me on social media.</p>
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
          <i className='fa fa-github  w3-hover-opacity' aria-hidden='true'></i>
        </a>
        <i className='fa fa-linkedin w3-hover-opacity'></i>
        <p>
          Powered by
          <a href='/'>osama mohamed</a>
        </p>
      </footer>
    </>
  );
}

export default Resum;
