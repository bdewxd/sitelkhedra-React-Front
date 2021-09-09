import React from 'react';
import Navbar from './navbar';
import css from './App.css'
import Home from './Home/home';
import SignUp from './signUp/signUp.js';
import login from './login/login.js';
import Footer from './footer';
import AboutUs from './aboutUs/aboutUs.js';
import Cartel from './cartel/cartel.js';
import Products from './products/products.js';
import Profile from './profile/profile.js';
import UpdateItemBox from './profile/components/manageItems/updateItem/updateItemBox';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Login from './login/login.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  

  render(){
    return (
      <div id="app-container">
        <Router>
          <Navbar />
          <Switch >
            <Route exact path ="/">
              <Home />
            </Route>
            <Route path ="/Login">
              <Login />
            </Route>
            <Route path ="/SignUp">
              <SignUp/>
            </Route>
            <Route path ="/AboutUs">
              <AboutUs />
            </Route>
            <Route path ="/Cartel">
              <Cartel />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/UpdateItemBox">
              <UpdateItemBox />
            </Route>
          </Switch>
          <Footer />
        </Router >
      </div>
    );
  }
}
export default App; 
