import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button"

function KegDetail(props){

  const { keg, onClickingDelete } = props;

  let pintsRemaining = keg.pintsRemaining;
  if (pintsRemaining === 0){
    pintsRemaining = "This Keg is Tapped, Better Buy Another";
  }

  function handleBuyAPint(keg, isSub, dif) {
    dif = parseInt(dif);
    props.onClickingBuyAPint({
      name: keg.name,
      brand: keg.brand,
      price: keg.price,
      alcoholContent: keg.alcoholContent,
      pintsRemaining: isSub ? (keg.pintsRemaining === 0 ? 0 : keg.pintsRemaining = keg.pintsRemaining - dif) : keg.pintsRemaining = keg.pintsRemaining + dif,
      id: keg.id
    });
  }

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <h5>Crafted By: {keg.brand}</h5>
      <h5>${keg.price}</h5>
      <h5>{keg.alcoholContent}% ABV</h5>
      <h5>{keg.pintsRemaining} Pints Remaining</h5>
      <Button variant="warning" onClick={props.onClickingEdit}>Edit Keg</Button>
      <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
      <Button variant="primary" onClick={() => handleBuyAPint(keg, true, 1)}>Buy a Pint</Button>
      <Button variant="info" onClick={() =>handleBuyAPint(keg, false, (124 - keg.pintsRemaining))}>Refill Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuyAPint: PropTypes.func
}

export default KegDetail;