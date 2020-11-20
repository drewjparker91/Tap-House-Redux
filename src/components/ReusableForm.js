import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

function ReusableForm(props){

  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <h5> Name </h5> 
        <input
        type="text"
        name="name"
        defaultValue = {props.name ? props.name : ''}
        placeholder="Enter Name of Beer"
        />
        <hr/>
        <h5> Brand </h5> 
        <input
        type="text"
        name="brand"
        defaultValue = {props.brand ? props.brand : ''}
        placeholder="Enter Brand of Beer"
        />
        <hr/>
        <h5> Price </h5> 
        <input
        type="text"
        name="price"
        defaultValue = {props.price ? props.price : ''}
        placeholder="Enter Price of Beer"
        />
        <hr/>
        <h5> Alcohol Content </h5> 
        <input
        type="text"
        name="alcoholContent"
        defaultValue = {props.alcoholContent ? props.alcoholContent : ''}
        placeholder="Enter Alcohol Content of Beer"
        />
        <hr/>
        <h5> Pints Remaining In Keg</h5>
        <input
        type="text"
        name="pintsRemaining"
        defaultValue = {props.pintsRemaining ? props.pintsRemaining : ''}
        placeholder="Enter Number of Pints In Keg"
        />
        <hr/>
        <Button variant="success" type="submit">{props.buttonText}</Button>
        <hr/>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;