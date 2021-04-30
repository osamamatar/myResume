import React from "react";
import not from "../assets/not.gif";
function NotFound() {
  return (
    <div>
      <img src={not} alt='not found' style={{ width: "100%" }} />
    </div>
  );
}

export default NotFound;
