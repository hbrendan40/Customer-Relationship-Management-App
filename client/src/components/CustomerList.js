import React from 'react';
import {Link} from 'react-router-dom'

import './style/CustomerList.css'
import { FaTrashAlt , FaEdit} from "react-icons/fa";
//import Form from './Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ListGroup from 'react-bootstrap/ListGroup'


function CustomerList(props){

    
    
   
    return(
        <div>
        
        <ListGroup className="customerList" key={props.customer.customer_id}>
        <Row>
            <Col>
            <ListGroup.Item>
                <span className="nameInfo"> {props.customer.firstName}    {props.customer.lastName}  </span>
            </ListGroup.Item>
            </Col>


            <Col >
            <ListGroup.Item>
                <span className="emailInfo">{props.customer.email}</span>
                </ListGroup.Item>
            </Col>
        
            <Col >
            <ListGroup.Item>
                <span className="phoneInfo">{props.customer.phone}</span> 
                </ListGroup.Item>
            </Col>

             <Col>
             <ListGroup.Item>
                <select className="contactInfo" name="contact" id="contact" defaultValue="Contacted">
                <option value="Not-Contacted">Not Contacted</option>
                <option value="Contacted">Contacted</option>
                <option value="Contacted via email">Contacted via emai</option>
                <option value="Contacted-via-phone">Contacted-via-phone</option>
                <option value="Contacted-via-Facebook">Contacted-via-Facebook</option>
                </select>
                </ListGroup.Item>
            </Col>  

                <Col className="edittrashButtons">  
                <ListGroup.Item>
            
                


            <Link to={`/Customer/Edit/${props.customer.customer_id}&${props.customer.firstName}&${props.customer.lastName}&${props.customer.email}&${props.customer.phone}`}><FaEdit className="editButton"/> </Link>

       


         
                
                <span onClick = {() => props.deleteCustomer(props.customer.customer_id)} > <FaTrashAlt className ="trashButton"/> </span>
                </ListGroup.Item>
                </Col>

                </Row>
            </ListGroup>


         
     

          
    
            

     
        </div>
    );
}
export default CustomerList;