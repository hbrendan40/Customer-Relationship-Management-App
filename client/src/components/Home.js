import React,{Component} from 'react';
import './style/Home.css'
import PieChart from './Charts/PieChart';
import Customer from './Customer';
import { MDBContainer, MDBScrollbar } from "mdbreact";



class Home extends Component {
  
    render(){
      
    return (

      
      <div className="HomePageBackground">
          
       <div className="newcontainer">

       {/* jumbotron */}
           <div className="jumbotron">
        <h1> Welcome to your Customer Relation Managment App</h1>
        <p>Your Analytics, CustomerInfo, Daily To Do task, and Facebook API can all be access 
          here in this easy all in one application.

          <p>Not only that but this CRM is both window and mobile friendly.</p>
        </p>
        <p>For any additional info you can contact us at: hui.brendan@gmail.com</p>
        </div>

      {/* cards show casing different cards */}
      
      

       </div>


  


      </div>
    );
  }
}
  
  export default Home;