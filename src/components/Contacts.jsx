import "./components.css";
import React from "react";
  import MapChart from "./map";

const contacts = () => {
  return (
    <div className="herosection">
      <div className="belownavbar4">
        <div className="leftcontact">
          <form className="contactme">
            <h1 >Contact me</h1>
            <input className="contactname" placeholder="Name" />
            <input className="contactemail" placeholder="Email" />
            <textarea className="contactmessage"placeholder="Write your message" rows={10} />
            <button className="sendbutton">Send</button>
          </form>
        </div>
        <div className="rightcontact"><MapChart/></div>
      </div>
    </div>
  );
};

export default contacts;
