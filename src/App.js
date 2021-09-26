import Navbar from './navbar';
import css from './App.css';
import Home from './Home/home';
import SignUp from './signUp/signUp.js';
import Footer from './footer';
import AboutUs from './aboutUs/aboutUs.js';
import Cartel from './cartel/cartel.js';
import Products from './products/products.js';
import Profile from './profile/profile.js';
import UpdateItemBox from './profile/components/manageItems/updateItem/updateItemBox';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Login from './login/login.js';


import { createContext } from 'react/cjs/react.development';
import PublicRoutes from './routesHandling/publicRoutes';
import PrivateRoutes from './routesHandling/privateRoutes';
import ProtectedRoutes from './routesHandling/protectedRoutes';
export let Status = createContext();

let App = ()=> {
  let isAuthenticated = true;
    return (
    <div id="app-container">
      <Router>
        <Status.Provider value={{txt: 'Login', setNavLinks: ()=> {}}}>
          <Navbar />
          <Switch>
              <PublicRoutes path='/login' isAuthenticated={isAuthenticated}>
                <Login />
              </PublicRoutes>

              <PublicRoutes path='/signUp' isAuthenticated={isAuthenticated}>
                <SignUp />
              </PublicRoutes>

              <PublicRoutes path='/Products' isAuthenticated={isAuthenticated}>
                <Products />
              </PublicRoutes>

              <PublicRoutes path='/aboutUs' isAuthenticated={isAuthenticated}>
                <AboutUs />
              </PublicRoutes>


              <PrivateRoutes path='/' isAuthenticated={isAuthenticated}>
                <ProtectedRoutes />
              </PrivateRoutes>
          </Switch>







          {/* <Switch >
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
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route path="/profile/manageItems">
              <UpdateItemBox />
            </Route>
          </Switch> */}
          <Footer />
        </Status.Provider>
      </Router>
    </div>
  );
}
export default App; 
