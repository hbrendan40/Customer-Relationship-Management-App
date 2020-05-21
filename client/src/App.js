import React,{ Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Navigationbar from './components/layout/Navigationbar'

import Home from './components/Home';
import Analytics from './components/Analytics';
import Notes from './components/Notes';
import MyCalendar from './components/MyCalendar';
import Customer from './components/Customer';
import CustomerEdit from './components/CustomerEdit';
import Registration from './components/auth/Registration'



class App extends Component {
  
  render(){
     return (
  <div>
    <Navigationbar />

    <BrowserRouter>
      <Switch>
      <Route exact path ="/Home" component={Home}/> 
        <Route exact path ="/Analytics" component={Analytics}/>

      <Route exact path = "/Notes" component={Notes}/>
      <Route exact path = "/MyCalendar" component={MyCalendar}/>
        <Route exact path ="/Customer" component={Customer}/>

        <Route path ="/Customer/Edit/:id&:FirstName&:LastName&:Email&:Phone" component={CustomerEdit}/>
  
       
 
        <Route exact path ="/Registration" component={Registration}/>
  
      </Switch>
    </BrowserRouter>

  </div>
  );
}
}
export default App;
