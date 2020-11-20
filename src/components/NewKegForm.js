import React from "react";
import { v4 } from "uuid";
import Button from "react-bootstrap/button";
import PropTypes from "prop-types";


const keg = {};
keg.id = v4()

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      alcoholContent: event.target.alcoholContent.value, 
      pintsRemaining: event.target.pintsRemaining.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
        type="text"
        name="name"
        placeholder="Enter Name of Beer"
        />
        <input
        type="text"
        name="brand"
        placeholder="Enter Brand of Beer"
        />
        <input
        type="text"
        name="price"
        placeholder="Enter Price of Beer"
        />
        <input
        type="text"
        name="alcoholContent"
        placeholder="Enter Alcohol Content of Beer"
        />
        <input
        type="text"
        name="pintsRemaining"
        placeholder="Enter Number of Pints In Keg"
        />
        <Button variant="success" type="submit">Add This Keg</Button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
