import React from "react";
import PropTypes from "prop-types"

function Keg(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>Crafted By: {props.brand}</h5>
        {/* <h5>${props.price}</h5>
        <h5>{props.alcoholContent}% ABV</h5>
        <h5>{props.pintsRemaining} Pints Remaining</h5> */}
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;