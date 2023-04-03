import React, { useState } from "react";

function AnimalType(props) {

  const [allNames , setAllNames] = useState(false);

  function handleShowAll(){
    setAllNames(!allNames);
  }

  return (
    <div className="listWindow">
      <div className="listWindowItems">
      <button onClick={handleShowAll} type="submit">
        <div className="img">
        {!allNames ? <img src="images/down.png" alt="" />: 
          <img src="images/up.png" alt="" />}
          </div> 
          <div className="animalName">{props.animalKind}</div>
        </button>

      </div>
      { allNames && <div className="listItemContent">
        <ul className="two-column-list">
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
          <li className="animal">Elephant</li>
        </ul>
      </div>}
    </div>
  );
}

export default AnimalType;
