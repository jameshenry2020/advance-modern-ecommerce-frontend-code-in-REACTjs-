import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import {Home } from "./components/Home";
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import Shop from './components/Shop';
import Detail from "./components/Detail"
import Success from "./components/Success"
import ResetPasswordRequest from './components/ResetPasswordRequest';
import ResetPasswordComfirm from './components/PasswordResetComfirm';
import ShoppingCart from './components/ShoppingCart';
import DeliveryAddress from './components/DeliverAddress';
import Payment from './components/Payment'; 
import UserProfile from './components/UserProfile';

const  App=()=> {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Switch> 
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/cart" component={ShoppingCart}/>
          <Route exact path="/delivery" component={DeliveryAddress}/>
          <Route exact path='/payment' component={Payment}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/password-reset-request">
            <ResetPasswordRequest/>
          </Route>
          <Route exact path='/success' component={Success}/>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route exact path="/product/:id">
              <Detail/>
          </Route>
          <Route exact path="/password-reset-confirm/:uidb64/:token">
              <ResetPasswordComfirm/>
          </Route>
          </Switch>
          
      </Router>    
    </div>
  );
}

export default App;
