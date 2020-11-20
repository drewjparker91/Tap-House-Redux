import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
    name: "Keg One",
    brand: "Brand",
    price: "3.99",
    alcoholContent: "8",
    pintsRemaining: "10"
  },
  {
    name: "Keg Two",
    brand: "Brand Two",
    price: "5.99",
    alcoholContent: "6",
    pintsRemaining: "9"
  },
  {
    name: "Keg Three",
    brand: "Brand Three",
    price: "1.99",
    alcoholContent: "4",
    pintsRemaining: "3"
  }

]

function KegList(){
  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg 
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        pintsRemaining={keg.pintsRemaining}
        key={index} 
        />
      )}
    </React.Fragment>
  );
}

export default KegList;