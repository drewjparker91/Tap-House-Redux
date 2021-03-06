import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button"

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuyAPint, onClickingRefillKeg } = props;

  const kegDetailStyle = {
    color: "white"
  }
  

  let pintsRemaining = keg.pintsRemaining;
  if (parseInt(pintsRemaining) >10){
    pintsRemaining = pintsRemaining
  } else if (parseInt(pintsRemaining) > 0){
    pintsRemaining = (pintsRemaining + "... Keg is almost tapped!")
  } else {
    pintsRemaining = "Keg is Tapped Out";
  }

  return (
    <React.Fragment>
      <div style={kegDetailStyle}>
        <h1>Keg Details</h1>
        <h3>Name: {keg.name}</h3>
        <h5>Crafted By: {keg.brand}</h5>
        <h5>Price: ${keg.price}</h5>
        <h5>Alcohol By Volume: {keg.alcoholContent}%</h5>
        <h5>Pints Remaining: {pintsRemaining}</h5>
        <Button variant="warning" onClick={props.onClickingEdit}>Edit Keg</Button>
        <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
        <Button variant="primary" onClick={() => onClickingBuyAPint(keg)}>Buy A Pint!</Button>
        <Button variant="info" onClick={() => onClickingRefillKeg(keg)}>Refill Keg</Button>
        <hr/>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuyAPint: PropTypes.func,
  onClickingRefillKeg: PropTypes.func
}

export default KegDetail;