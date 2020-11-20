import React from "react";
import * as ReactBootStrap from "react-bootstrap";

// function Header(){

//   const headerStyle = {
//     color: "white",
//     fontFamily: "tahoma"
//   }

//   return (
//     <div style={headerStyle}>
//       <h1>The Tap House</h1>
//     </div>
//   );
// }

function Header () {
  return (
    <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">The Holy Spirits</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
       
          <ReactBootStrap.Nav.Link href="#NewItem">Add a Keg</ReactBootStrap.Nav.Link>
   
          <ReactBootStrap.Nav.Link href="#pricing">Keg List</ReactBootStrap.Nav.Link>
          
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="#cart">Cart</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
  );
  }

export default Header;