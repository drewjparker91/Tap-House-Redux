import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col"

function KegList(props){

  const listCardStyle = {
    marginBottom: "30px",
    marginLeft: "15px",
    marginTop: "15px",
    marginRight: "15px",
    backgroundColor: 'rgba(52, 52, 52, .3)',
    color: "white",
    fontFamily: 'Kalam'
  } 
  const topListStyle = {
    color: "white",
    fontFamily: 'Kalam'
  }

  return (
    <React.Fragment>
      <div style={topListStyle}>
        <h1>Current Spirits On Tap</h1>
      </div>
      <hr/>
      <Row>
        {Object.values(props.kegList).map((keg) =>
          <Col xs={4}>
            <div className="card" style={listCardStyle}>
              <div className="container">
                <Keg 
                  whenKegClicked={ props.onKegSelection }
                  name={keg.name}
                  brand={keg.brand}
                  price={keg.price}
                  alcoholContent={keg.alcoholContent}
                  pintsRemaining={keg.pintsRemaining}
                  id={keg.id}
                  key={keg.id} 
                />
              </div>
            </div>
          </Col>
        )}
      </Row>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
}
export default KegList;