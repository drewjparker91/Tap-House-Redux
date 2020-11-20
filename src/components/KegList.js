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
  }
  
  return (
    <React.Fragment>
      
      <hr/>
      <Row>
        {props.kegList.map((keg) =>
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
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}
export default KegList;