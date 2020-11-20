import React from "react";
import Keg from "./Keg";

function KegList(){
  return (
    <React.Fragment>
      <Keg 
        name="Keg One"
        brand="Brand"
        price="3.99"
        alcoholContent="8"
        pintsRemaining="10"/>
      <Keg
        name="Keg Two"
        brand="Brand Two"
        price="5.99"
        alcoholContent="6"
        pintsRemaining="9"/>
    </React.Fragment>
  );
}

export default KegList;