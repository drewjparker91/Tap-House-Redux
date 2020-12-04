import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button"

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuyAPint } = props;

  const kegDetailStyle = {
    color: "white"
  }
  

  // let pintsRemaining = keg.pintsRemaining;
  // if (parseInt(pintsRemaining) >10){
  //   pintsRemaining = pintsRemaining
  // } else if (parseInt(pintsRemaining) > 0){
  //   pintsRemaining = (pintsRemaining + "... Keg is almost tapped!")
  // } else {
  //   pintsRemaining = pintsRemaining + "... Keg is Tapped Out";
  // }
  
  

  // function handleBuyAPint(keg, isSub, dif) {
  //   dif = parseInt(dif);
  //   props.onClickingBuyAPint({
  //     name: keg.name,
  //     brand: keg.brand,
  //     price: keg.price,
  //     alcoholContent: keg.alcoholContent,
  //     pintsRemaining: keg.pintsRemaining,
  //     // pintsRemaining: isSub ? (keg.pintsRemaining === 0 ? 0 : keg.pintsRemaining = keg.pintsRemaining - dif) : keg.pintsRemaining = keg.pintsRemaining + dif,
  //     id: keg.id
  //   });
  // }

  return (
    <React.Fragment>
      <div style={kegDetailStyle}>
        <h1>Keg Details</h1>
        <h3>Name: {keg.name}</h3>
        <h5>Crafted By: {keg.brand}</h5>
        <h5>Price: ${keg.price}</h5>
        <h5>Alcohol By Volume: {keg.alcoholContent}%</h5>
        <h5>Pints Remaining: {keg.pintsRemaining}</h5>
        <Button variant="warning" onClick={props.onClickingEdit}>Edit Keg</Button>
        <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
        {/* <Button variant="primary" onClick={() => handleBuyAPint(keg, true, 1)}>Buy a Pint</Button>
        <Button variant="info" onClick={() =>handleBuyAPint(keg, false, (124 - keg.pintsRemaining))}>Refill Keg</Button> */}
        <Button variant="primary" onClick={() => onClickingBuyAPint(keg)}>Buy A Pint!</Button>
        <hr/>
      </div>
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