import React,{Component} from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Redirect} from 'react-router-dom'



import CustomerList from './CustomerList'
class Customer extends Component {
  state = {
    //array of products object (id, name, price)
    customers: []

    //empty product object. Wait for user to fill in new product
  
}

componentDidMount(){
  this.getCustomers()
}

getCustomers = _ => {
  fetch('http://localhost:4000/customers')
  .then(response => response.json())
  .then(response => this.setState({customers: response.data}))
  .catch(err => console.log(err))
}


deleteCustomer = id => {
  console.log(id);
  //delete product where product_id = id
}

editCustomer = id => {

    console.log(id)
  

}




  
    render(){

      // declare customers field to be used later in the input box 
      const {customers} = this.state;

      
      // Map out all the customers in the sql database 
      const customerlist = customers.map(customer => 
      <CustomerList 
      key={customers.customer_id} 
      customer={customer} 
      deleteCustomer={this.deleteCustomer} 
      editCustomer={this.editCustomer}/>)
        
    return (
      <div className="newcontainer">

    <h1>Customer List</h1>
    <br></br>

    <input type="text" name="search" ></input> 
    <button onClick={this.searchCustomer}>Search</button> 
    <br></br>
    <Row>
   
      <Col><strong>Name</strong></Col>
      <Col><strong>Email</strong></Col>
      <Col><strong>Phone</strong></Col>
      <Col><strong>Contact</strong></Col>
      <Col></Col>
    </Row>
      {customerlist}

      </div>
    );
  }
}
  
  export default Customer;