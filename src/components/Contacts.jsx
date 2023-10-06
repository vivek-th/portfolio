import "./components.css";
import React from "react";
  import Map from "./map";

  const handleSubmit =e=>{
    e.preventDefault()
  }
const contacts = () => {
  return (
    <div className="herosection">
      <div className="belownavbar4">
        <div className="leftcontact">
          <form className="contactme" onSubmit={handleSubmit}>
            <h1 >Contact me</h1>
            <input className="contactname" placeholder="Name" />
            <input className="contactemail" placeholder="Email" />
            <textarea className="contactmessage"placeholder="Write your message" rows={10} />
            <button className="sendbutton" type="submit">Send</button>
          </form>
        </div>
        <div className="rightcontact"><Map/></div>
      </div>
    </div>
  );
};

export default contacts;
