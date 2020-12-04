import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Button from "react-bootstrap/button"
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // masterKegList: [],
      // selectedKeg: null,
      // editing: false
    };
  }

  handleClick = () => {
    const { dispatch } = this.props
    if (this.props.selectedKeg != null) {
      const action = {
        type: 'NO_KEG'
      }
      dispatch(action);
      const action2 = {
        type: 'HIDE_EDIT_FORM'
      }
      dispatch(action2)
      // this.setState({
        // formVisibleOnPage: false,
        // selectedKeg: null,
        // editing: false
      // });
    } else {
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action)
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage
      // }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pintsRemaining } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name, 
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
    // this.setState({
    //   formVisibleOnPage: false
    // });
    // const newMasterKegList = this.state.masterKegList.concat(newKeg);
    // this.setState({
    //   masterKegList: newMasterKegList,
    //   formVisibleOnPage: false,
    // });
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = {
      type: 'SELECTED_KEG',
      selectedKeg: selectedKeg
    }
    dispatch(action);
    // this.setState({
    //   selectedKeg: selectedKeg
    // });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'NO_KEG'
    }
    dispatch(action2)
    // this.setState({
    //   selectedKeg: null
    // });
  }
  //   const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  //   this.setState ({
  //     masterKegList: newMasterKegList,
  //     selectedKeg: null
  //   });
  // }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'SHOW_EDIT_FORM'
    }
    dispatch(action);
    // this.setState({
    //   editing: true
    // });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pintsRemaining } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name, 
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining
    }
    dispatch(action);
    const action2 = {
      type: 'NO_KEG'
    }
    dispatch(action2);
    const action3 = {
      type: 'HIDE_EDIT_FORM'
    }
    dispatch(action3)
    // this.setState({
    //   editing: false,
    //   selectedKeg: null
    // });
  }
  //   const editedMasterKegList = this.state.masterKegList
  //     .filter(keg => keg.id !== this.state.selectedKeg.id)
  //     .concat(kegToEdit);
  //   this.setState({
  //     masterKegList: editedMasterKegList,
  //     editing: false,
  //     selectedKeg: null
  //   });
  // }

  handleBuyAPint = (kegToEdit) => {
    kegToEdit.pintsRemaining-=1;
    this.setState({});
    // const editedMasterKegList = this.state.masterKegList
    //   .filter(keg => keg.id !== this.state.selectedKeg.id)
    //   .concat(kegToEdit);
    // this.setState({
    //   masterKegList: editedMasterKegList,
    // });
  }

  handleRefillKeg = (kegToEdit) => {
    kegToEdit.pintsRemaing=124;
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