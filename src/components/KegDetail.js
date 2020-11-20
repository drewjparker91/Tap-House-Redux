import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button"

function KegDetail(props){

  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <h5>Crafted By: {keg.brand}</h5>
      <h5>${keg.price}</h5>
      <h5>{keg.alcoholContent}% ABV</h5>
      <h5>{keg.pintsRemaining} Pints Remaining</h5>
      <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;