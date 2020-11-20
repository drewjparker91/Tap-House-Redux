import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){

  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <h5>Crafted By: {keg.brand}</h5>
      <h5>${keg.price}</h5>
      <h5>{keg.alcoholContent}% ABV</h5>
      <h5>{keg.pintsRemaining} Pints Remaining</h5>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;