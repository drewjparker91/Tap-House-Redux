import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

function ReusableForm(props){

  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
        type="text"
        name="name"
        defaultValue = {props.name ? props.name : ''}
        placeholder="Enter Name of Beer"
        />
        <input
        type="text"
        name="brand"
        defaultValue = {props.brand ? props.brand : ''}
        placeholder="Enter Brand of Beer"
        />
        <input
        type="text"
        name="price"
        defaultValue = {props.price ? props.price : ''}
        placeholder="Enter Price of Beer"
        />
        <input
        type="text"
        name="alcoholContent"
        defaultValue = {props.alcoholContent ? props.alcoholContent : ''}
        placeholder="Enter Alcohol Content of Beer"
        />
        <input
        type="text"
        name="pintsRemaining"
        defaultValue = {props.pintsRemaining ? props.pintsRemaining : ''}
        placeholder="Enter Number of Pints In Keg"
        />
        <Button variant="success" type="submit">{props.buttonText}</Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;