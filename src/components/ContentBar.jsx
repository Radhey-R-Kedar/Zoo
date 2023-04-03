import React from "react";
import AnimalType from "./AnimalType";

function ContentBar(){
    return(
         <div className="contentbar">
            <div className="searchbar">
                <input type="text" name="searchinfo" id="searchinfo" placeholder="Search here.." />
                <button type="submit">
                  <img src="images/search1.png" alt="" />
                </button>
            </div>
            <div className="contenrBarItems">
              <AnimalType animalKind ="Mammal"/>
              <AnimalType animalKind ="Reptiles"/>
              <AnimalType animalKind ="Birds"/>
            </div>
            
         </div>
    );
}

export default ContentBar;