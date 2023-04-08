import React from "react";
import InfoPoints from "./InfoPoints";

function AnimalInfo() {
  return (
    <div className="animalInfo">
      <div
        className="animalImage"
        style={{ backgroundImage: "url(../public/images/background1.jpg)" }}
      >
        <h2>Name</h2>
      </div>
      <div className="animalInformation">
        <div className="allInfoPoints">
        <InfoPoints/>
        <InfoPoints/>
        <InfoPoints/>
        <InfoPoints/>
        <InfoPoints/>
        </div>
        
      </div>
    </div>
  );
}

export default AnimalInfo;
