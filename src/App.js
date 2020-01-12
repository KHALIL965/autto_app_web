import React, { Component, lazy, Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
//react router dom imports
import { Redirect, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBrowserHistory } from "history";

// import AuthLayout from './components/layouts/AuthLayout';

import Authentication from './screens/authentication/index';
import Signup from './screens/authentication/signup/index';
import Home from './screens/home/Index';
import GetSupport from './screens/support/GetSupport';
import ResetPassword from './components/forms/authentication/ResetPassword';

var history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError:false,
    }
  }

  //error boundaries
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    console.log("APP_called")
    if(this.state.hasError){
      return (<Loader/>)
    }

    return (
      <Router history={history}>
        {/* <Suspense fallback={<Loader {...props}/>}> */}
        <Header />
        <Switch>
          <Route path="/auth" render={props=><Authentication {...props}/>} />
          <Route path="/signup" render={props=><Signup {...props}/>}/>
          <Route path="/getSupport" render={props=><GetSupport {...props}/>}/>
          <Route path="/resetPassword/:id" render={props=><ResetPassword {...props}/>}/>
          <Route path="/" render={props=><Home {...props}/>}/>
          {/* <Redirect from="/" to="/auth/signin"/> */}
            {/* <Route path="/Signin" render={(props) => <Signin {...props} />} />
            <Route path="/" render={(props)=><Home {...props}/>}/>
           */}
        </Switch>
        <Footer />
        {/* </Suspense> */}
      </Router>




    );
  }
}

const mapStateToProps = state => {
  console.log("State_on_App=>", state)
  return {
    rdxState: state
  }
}

// const mapDispatchToProps=dispatch=>{
//   return{
//     actions:bindActionCreators({},dispatch)
//   }
// }

export default connect(mapStateToProps)(App);
