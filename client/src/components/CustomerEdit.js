import React, {Component} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CustomerEdit extends Component {
    constructor(props) {
      super(props);

   

      this.state = {
         
      
            customerID: props.match.params.id,
            customerFirstName: props.match.params.FirstName,
            customerLastName: props.match.params.LastName,
            customerEmail: props.match.params.Email,
            customerPhone: props.match.params.Phone,

            firstName: '',
            lastName:'',
            email: '',
            phone: ''
            

      }
  
      this.handleChange = this.handleChange.bind(this);


      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
      console.log("hey" + this.state.customerID)
    }
  

    //componentDidMount(){
      //  this.getCurrentEmployeeInfo()
    //}
    
    //getCurrentCustomerInfo(){
        //localhost:4000/Customer/search Customer Id = props.Customer.customer_id
       // fetch('http://localhost:4000/products')
       // .then(response => response.json())
        //.then(response => this.setState({customer: response.data}))
        //.catch(err => console.log(err))
        
   // }

   // editCurrentCustomerInfo(){

    //}


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  
    handleSubmit(event) {
      alert(this.state.FirstName + this.state.LastName+ this.state.Email+this.state.Phone);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="container">
          <div className="jumbotron">
        

       
      
    
        <Link to={`/Customer`}><Button variant="info">Go Back</Button> </Link>
        <h1>Edit Customer Information</h1>
        <Form onSubmit={this.handleSubmit}>


        <Form.Row>
    
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="FirstName" defaultValue={this.state.customerFirstName} onChange={this.handleChange} placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="LastName" defaultValue={this.state.customerLastName} onChange={this.handleChange} placeholder="Last Name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="Email" defaultValue={this.state.customerEmail} onChange={this.handleChange} placeholder="Email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="phone" name="Phone" defaultValue={this.state.customerPhone} onChange={this.handleChange} placeholder="Phone" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control name="address" defaultValue="123 Maple St" onChange={this.handleChange} placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" name="city" defaultValue="San Mateo" onChange={this.handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="CA" value="Choose...">
        <option>Choose...</option>
        <option>CA</option>
        <option>other</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control type="text" name="zip" defaultValue="94065" onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
        </div>
        
      );
    }
  }
  export default CustomerEdit;