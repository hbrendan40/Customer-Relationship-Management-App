import React, {Component} from 'react';
import axios from 'axios';

class Registration extends Component {
    constructor(props) {
    super(props);
    this.state= { 
        email: "",
        password: "",
        password_confirmation: "",
        registrationErrors: ""
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

 

    handleSubmit(event){
       


        axios.post("https://localhost:4000/registration", {
            email: this.email,
            password: this.password
          })
          .then(function (response) {
            console.log("registration res", response);
          })
          .catch(function (error) {
            console.log("registration err", error);
          });
          //event.preventDefault();
      

    }
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }




    render(){
        return(
            <div>
                <h1>Registration</h1>
                <form onSubmit={this.handleSubmit()}>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value= {this.state.email} 
                    onChange={this.handleChange}
                    required >
                    </input>

                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value= {this.state.password} 
                    onChange={this.handleChange}
                    required >
                    </input>

                    <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="Password Confirmation" 
                    value= {this.state.password_confirmation} 
                    onChange={this.handleChange}
                    required >
                    </input>

                    <button type="submit">
                    Registration
                    </button>
                    

                </form>

            </div>
        )
    }
}
export default Registration;