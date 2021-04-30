import React, { useState } from "react";
import ServiceItem from "../components/ServiceItem";
import des from "../assets/001.png";
import dev from "../assets/002.png";
import seo from "../assets/003.png";
import desk from "../assets/004.png";
import mob from "../assets/005.png";
import iot from "../assets/006.png";

function Services() {
  const [services] = useState([
    {
      id: 1,
      img: des,
      title: "Design",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
    nemo sapiente in quidem sed dolores cumque! Ut, est aliquid`,
    },
    {
      id: 2,
      img: dev,
      title: "Wep Development",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
    nemo sapiente in quidem sed dolores cumque! Ut, est aliquid`,
    },
    {
      id: 3,
      img: seo,
      title: "SEO",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
    nemo sapiente in quidem sed dolores cumque! Ut, est aliquid`,
    },
    {
      id: 4,
      img: mob,
      title: "Mobile Development ",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
    nemo sapiente in quidem sed dolores cumque! Ut, est aliquid`,
    },
    {
      id: 5,
      img: desk,
      title: "Desktop Applications ",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
    nemo sapiente in quidem sed dolores cumque! Ut, est aliquid`,
    },
    {
      id: 6,
      img: iot,
      title: "IOT Applications ",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
    nemo sapiente in quidem sed dolores cumque! Ut, est aliquid`,
    },
  ]);
  return (
    <>
      <section>
        <div className='title'>
          <h1>Services that we can help you with</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non
          </p>
        </div>
        <div className='services'>
          {services.map((serv) => (
            <ServiceItem key={serv.id} service={serv} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
