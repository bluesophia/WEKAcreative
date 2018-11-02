import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeScreen from './Client/Screen/HomeScreen';
import AboutUsScreen from './Client/Screen/AboutUsScreen';
import SupportScreen from './Client/Screen/SupportScreen';
import BlogScreen from './Client/Screen/BlogScreen';
import ContactUsScreen from './Client/Screen/ContactUsScreen';
import LoginScreen from './Client/Screen/LoginScreen';
import RegisterScreen from './Client/Screen/RegisterScreen';
import TermsScreen from './Client/Screen/TermsScreen';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Routes = () => (

  <main>
    <Switch>
      <Route exact path='/' component={HomeScreen}/>
      <Route path='/about' component={AboutUsScreen}/>
      <Route path='/support' component={SupportScreen}/>
      <Route path='/blog' component={BlogScreen}/>
      <Route path='/contact' component={ContactUsScreen}/>
      <Route path='/login' component={LoginScreen}/>
      <Route path='/register' component={RegisterScreen}/>
      <Route path='/terms' component={TermsScreen}/>
      <Route component={HomeScreen}/>
    </Switch>
  </main>

)

export default Routes;
