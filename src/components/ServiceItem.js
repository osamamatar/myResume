import React from "react";

function ServiceItem({ service }) {
  return (
    <>
      <div className='service'>
        <div className='icon'>
          <img src={service.img} alt='' />
        </div>
        <h2>{service.title}</h2>
        {service.text}
      </div>
    </>
  );
}

export default ServiceItem;
