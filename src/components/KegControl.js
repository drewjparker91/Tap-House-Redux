import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Button from "react-bootstrap/button"

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
      buttonText = "View Keg List"
    } else {
      currentlyVisibleState = <KegList />
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