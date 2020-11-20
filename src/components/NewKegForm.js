import React from "react";
import { v4 } from "uuid";
import Button from "react-bootstrap/button";


const ticket = {};
ticket.id = v4()

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.pintsRemaining.value);
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

export default NewKegForm;
