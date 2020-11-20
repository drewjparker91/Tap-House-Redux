import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Button from "react-bootstrap/button"

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "View Keg List"
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
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

export default KegControl;