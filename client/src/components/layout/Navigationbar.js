import React from 'react'

import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import '../style/Navigationbar.css'



function Navigationbar() {
  return (
    
<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="/Home"><span className="linkColor">SaleForce CRM</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">

      
    <Nav.Link  href="/Analytics"><span className="linkColor">Analytics</span></Nav.Link>
    <Nav.Link  href="/Notes"><span className="linkColor">Notes</span></Nav.Link>
    <Nav.Link  href="/MyCalendar"><span className="linkColor">Calendar</span></Nav.Link>
      <Nav.Link  href="/Customer"><span className="linkColor">Customers</span></Nav.Link>
    
  
   

    </Nav>
   


{/* 
  <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
*/} 
  
  </Navbar.Collapse>
</Navbar>

  )
}

export default Navigationbar;
