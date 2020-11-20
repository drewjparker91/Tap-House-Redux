import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      alcoholContent: event.target.alcoholContent.value, 
      pintsRemaining: event.target.pintsRemaining.value, 
      id: keg.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleEditKegFormSubmission}
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      alcoholContent={keg.alcoholContent}
      pintsRemaining={keg.pintsRemaining}
      buttonText = "Save Updates" 
      />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
}

export default EditKegForm;