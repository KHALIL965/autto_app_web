import React, { Component } from 'react';

//router
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }   

    

    render() {
        return (
            <header class="header">
                <nav class="d-flex w-100 align-items-center justify-content-end">
                    <div class="logo mr-auto">
                        <Link to={{pathname:"/"}}>
                            <img src={require("../assets/images/logo.png")} class="desktop-logo" alt="Logo" />
                            <img src={require("../assets/images/logo-mobile.png")} class="mobile-logo" alt="Logo" />
                        </Link>
                    </div>
                    <div class="menu ml-auto" id="menubox">
                        <span class="close-menu" id="menuClose"></span>
                        <ul class="onHoverDropdown dropDownStyle">
                            <li class="dropdown"><a href="">How it works</a></li>
                            <li><a href="">Benifits</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing </a></li>
                            <li><a href="">About Autto </a></li>
                            <li><Link to={{pathname:"/auth/signin"}}>Sign In</Link></li>
                            <li><a href="">Get Started</a></li>
                            {/* <!-- <li class="dropdown">
                     <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Assets<i class="fas fa-caret-down"></i></a>
                     <ul class="dropdown-menu main-dropdown" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="manage-assets.html">Manage My Assets</a></li>
                        <li><a class="dropdown-item" href="try-deposit.html">TRY Deposit</a></li>
                        <li><a class="dropdown-item" href="deposit-crypto.html">Deposit Crypto</a></li>
                        <li><a class="dropdown-item" href="crypto-cash-check.html">Crypto Cash Check</a></li>
                        <li><a class="dropdown-item" href="try-transfer-history.html">TRY Transfer History</a></li>
                        <li><a class="dropdown-item" href="crypto-transfer-history.html">Crypto Transfer History</a></li>
                     </ul>
                  </li> --> */}
                        </ul>
                    </div>
                    {/* <!-- <div class="login-box">
               <a href="" class="btn btn-free-trail">Get Started</a>
               <a href="signup.html" class="btn btn-logSign active">SIGN UP</a>
            </div> --> */}
                    <a href="javascript:;" class="mob-menu" id="menuShow">
                        <span class="menu-bar"></span>
                    </a>
                </nav>
            </header>
        )
    }
}

const mapStateToProps=state=>{
    console.log("State_in_HEader=> ",state);
    return {
        state
    }
}

export default connect(mapStateToProps)(Header);