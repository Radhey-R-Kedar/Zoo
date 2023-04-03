import React from "react";
import AnimalInfo from "./AnimalInfo";

import ContentBar from "./ContentBar";

function MainContent() {
  return (
    <div className="allContent">
      <div className="mainContentBar">
      <ContentBar />
      </div>
      <div className="mainContent">
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
        <AnimalInfo/>
      </div>
    </div>
  );
}

export default MainContent;
