import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Button from "react-bootstrap/button"
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

const buttonStyle = {
  fontFamily: 'Kalam'
}

class KegControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props
    if (this.props.selectedKeg != null) {
      const action = a.noKeg
      dispatch(action);
      const action2 = a.hideEditForm
      dispatch(action2)    
    } else {
      const action = a.toggleForm
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm;
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const keg = this.props.masterKegList[id];
    const action = a.selectedKeg(keg);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id)
    dispatch(action);
    const action2 = a.noKeg;
    dispatch(action2)
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.showEditForm;
    dispatch(action);
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.noKeg;
    dispatch(action2);
    const action3 = a.hideEditForm;
    dispatch(action3)
  }

  handleBuyAPint = (kegToEdit) => {
    kegToEdit.pintsRemaining-=1;
    this.setState({});
  }

  handleRefillKeg = (kegToEdit) => {
    kegToEdit.pintsRemaining = 124;
    this.setState({});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {
      currentlyVisibleState = 
      <EditKegForm 
      keg = {this.props.selectedKeg}
      onEditKeg = {this.handleEditingKegInList} 
      />
      buttonText = "Return To Keg List" 
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
      keg = {this.props.selectedKeg} 
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick} 
      onClickingBuyAPint = {this.handleBuyAPint}
      onClickingRefillKeg = {this.handleRefillKeg}
      />
      buttonText = "Back To Keg List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm 
      onNewKegCreation={this.handleAddingNewKegToList} 
      />
      buttonText = "View Keg List"
    } else {
      currentlyVisibleState = 
      <KegList 
      kegList={this.props.masterKegList} 
      onKegSelection={this.handleChangingSelectedKeg} 
      />
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="success" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl)

export default KegControl;