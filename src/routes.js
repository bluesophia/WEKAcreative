import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeScreen from './Client/Screen/HomeScreen';
import AboutUsScreen from './Client/Screen/AboutUsScreen';
import SupportScreen from './Client/Screen/SupportScreen';
import CaseStudyScreen from './Client/Screen/CaseStudyScreen';
import ContactUsScreen from './Client/Screen/ContactUsScreen';
import LoginScreen from './Client/Screen/LoginScreen';
import RegisterScreen from './Client/Screen/RegisterScreen';
import PrivacyScreen from './Client/Screen/PrivacyScreen';

const Routes = () => (

  <main>
    <Switch>
      <Route exact path='/' component={HomeScreen}/>
      <Route path='/about' component={AboutUsScreen}/>
      <Route path='/support' component={SupportScreen}/>
      <Route path='/casestudy' component={CaseStudyScreen}/>
      <Route path='/contact' component={ContactUsScreen}/>
      <Route path='/privacy' component={PrivacyScreen}/>
      <Route path='/login' component={LoginScreen}/>
      <Route path='/register' component={RegisterScreen}/>
      {/* <Route path='/terms' component={TermsScreen}/> */}
      <Route component={HomeScreen}/>
    </Switch>
  </main>

)

export default Routes;
