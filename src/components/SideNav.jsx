import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNav = (props) => {

   return (
      <div class="left-panel" id="menubox">
         <span class="close-menu" id="menuClose"></span>
         <div class="business-info">
            <img src={require("../assets/images/business-ic.png")} />
            <h2>Your Business name</h2>
            <p>Lorem Ipsum is simply dummy text.</p>
            <div class="social-icons">
               <a href=""><img alt="fb" src={require("../assets/images/fb-ic.png")} /></a>
               <a href=""><img alt="twitter" src={require("../assets/images/twiter-ic.png")} /></a>
               <a href=""><img alt="insta" src={require("../assets/images/insta-ic.png")} /></a>
               <a href=""><img alt="linkdin" src={require("../assets/images/linkdin-ic.png")} /></a>
            </div>
         </div>
         <div class="menu-list">
            <ul>
               <li className={props.active == "Dashboard" ? "active" : ""}><a href="">Dashboard</a></li>
               <li className={props.active == "Reviews" ? "active" : ""}><a href="">Reviews</a></li>
               <li className={props.active == "ManageInvites" ? "active" : ""}><a href="">ManageInvites</a></li>
               <li className={props.active == "AnalyticalReport" ? "active" : ""}><a href="">Analytical Report</a></li>
               <li className={props.active == "MySubscription" ? "active" : ""}><a href="">MySubscriptions</a></li>
               <li className={props.active == "ManageUsers" ? "active" : ""}><a href="">Manage Users</a></li>
               <li className={props.active == "Settings" ? "active" : ""}><a href="">Settings</a></li>
               <li className={props.active == "GetSupport" ? "active" : ""}><Link to={{pathname:"/getSupport"}}>Get Support</Link></li>
               <li className={props.active == "Logout" ? "active" : ""}><a href="">Logout</a></li>
            </ul>
         </div>
      </div>
   )
}

export default SideNav;