import React from "react";
import PropTypes from "prop-types"

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h5>{props.brand} - ${props.price}</h5>
      <h5>{props.alcoholContent}% ABV - {props.pintsRemaining} Pints Remaining</h5>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.func.isRequired,
  id: PropTypes.string,
};
export default Keg;