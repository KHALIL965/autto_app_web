import React, { Component } from "react";

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){
        // console.log("WINDOW_Object=> ",window);
        window.document.title="Autto | home";
    }

    render() {
        return (
            <div>
                <section class="banner-home clearfix">
                    <div id="demo" class="carousel slide" data-ride="carousel">

                        {/* <!-- Indicators --> */}
                        {/* <!-- <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul> --> */}

                        {/* <!-- The slideshow --> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={require("../../assets/images/banner.jpg")} alt="Los Angeles" />
                                <div class="topBanner-content d-flex align-items-center w-100">
                                    <div class="topBanner-container">
                                        <div class="w-100  ">
                                            <h1>Your Customers Love You.
                                               Make It Easy For Them To
                                 Review You Online. </h1>
                                            <p>We make customer experience the backbone of your
                                 business through reviews and customer feedback. </p>
                                            <a href="" class="btn btn-large btn-yellow max-WT-250">GET STARTED</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Left and right controls --> */}
                        {/* <!--  <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="caroucoinsgraphSectionsel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a> --> */}

                    </div>


                </section>
                <main class="main-content">
                    <section class="ReputationManagement commonSectionStyle">
                        <div class="container-common">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-6">
                                    <div class="section-head mb0 text-left">
                                        <h2>Reputation management is
                           just the beginning</h2>
                                        <p>With Autto, you can easily capture customer feedback, send surveys, and monitor your
                           online profiles with just a few clicks.</p>
                                    </div>
                                    <div class="openRatelist mt20">
                                        <ul class="mt10">
                                            <li>
                                                <h5>High Open Rate (Timed + Strategic)</h5>
                                                <p>Open rate is a giant variable. SMS with text will get you 100% open rate. That’s
                                 huge considering email’s average open rate is 13%.</p>
                                            </li>
                                            <li>
                                                <h5>High Open Rate (Timed + Strategic)</h5>
                                                <p>Open rate is a giant variable. SMS with text will get you 100% open rate. That’s
                                 huge considering email’s average open rate is 13%.</p>
                                            </li>
                                            <li>
                                                <h5>High Open Rate (Timed + Strategic)</h5>
                                                <p>Open rate is a giant variable. SMS with text will get you 100% open rate. That’s
                                 huge considering email’s average open rate is 13%.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-6">
                                    <div class="mobile-sreen">
                                        <img src={require("../../assets/images/mobile-device.png")} title="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="AuthenticCustomer commonSectionStyle">
                        <div class="container-common">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-6">
                                    <div class="w100 text-center">
                                        <img src={require("../../assets/images/acquire-img.png")} title="" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-6">
                                    <div class="section-head mb0 text-left">
                                        <h2>Acquire More Authentic
                              Customer Reviews</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div class="Reviewlist">
                                        <div class="Reviewitem">
                                            <div class="ReviewIcon">
                                                <span class="">
                                                    <img src={require("../../assets/images/automobile.png")} alt="" />
                                                </span>
                                            </div>
                                            <div class="ReviewText">
                                                <h5>Automate</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                       has been the industry’s standard dummy text ever since.</p>
                                            </div>
                                        </div>
                                        <div class="Reviewitem">
                                            <div class="ReviewIcon">
                                                <span class="">
                                                    <img src={require("../../assets/images/optimize.png")} alt="" />
                                                </span>
                                            </div>
                                            <div class="ReviewText">
                                                <h5>Optimize</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                          has been the industry’s standard dummy text ever since.</p>
                                            </div>
                                        </div>
                                        <div class="Reviewitem">
                                            <div class="ReviewIcon">
                                                <span class="">
                                                    <img src={require("../../assets/images/protect.png")} alt="" />
                                                </span>
                                            </div>
                                            <div class="ReviewText">
                                                <h5>Protect</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                          has been the industry’s standard dummy text ever since.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="CustomersReceive commonSectionStyle">
                        <div class="container-common max-WT-900">
                            <div class="section-head mb0">
                                <h2>Your Customers Receive an Email & SMS Text</h2>
                                <p>Convenient Options for Your Customer Means More Reviews for You</p>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mt20">
                                        <img src={require("../../assets/images/review-request.png")} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mt20">
                                        <img src={require("../../assets/images/sms-text.png")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="CustomersReceive easily-review commonSectionStyle">
                        <div class="container-common max-WT-900">
                            <div class="section-head mb0">
                                <h2>Customers Easily Review You</h2>
                                <p>Our quick review process means more reviews for your business</p>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mt20">
                                        {/* <!--  <img src={require("../../assets/images/social-connect.png")}> --> */}
                                        <div class="custumerblock">
                                            <div class="custumorinner">
                                                <p>Direct Your Customers to the Right Review <br />Listing For your Business</p>
                                                <div><img src={require("../../assets/images/google.png")} /></div>
                                                <div><img src={require("../../assets/images/facebook.png")} /></div>
                                                <div><img src={require("../../assets/images/yelp.png")} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mt20">
                                        <img src={require("../../assets/images/prepopulated-review.png")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="reviewManagement commonSectionStyle">
                        <div class="container max-WT-900">
                            <div class="section-head mb50 text-center">
                                <h2>Centralized Customer Experience & Review Management</h2>
                                <p>Autto is intuitive and robust with features. Gain efficiency by managing your customer feedback and online reviews all
                              in one place. See results as you capture, monitor, and grow your reputation along with your business.</p>
                            </div>
                        </div>
                        <div class="container-common">
                            <div class="row review-content">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="reviewlist">
                                        <ul class="mt10">
                                            <li>
                                                <h5>Add Customers Easily</h5>
                                                <p>Add customers in just seconds or even automatically to request
                                          feedback and reviews with ease.</p>
                                            </li>
                                            <li>
                                                <h5>Manage & Respond</h5>
                                                <p>Receive notifications for new feedback, reviews and more. Respond
                                          right from our system for easy communication.</p>
                                            </li>
                                            <li>
                                                <h5>Automated Process</h5>
                                                <p>Our system handles the requests, reminders, personalized content
                                          and more to engage your customers. We save you time!</p>
                                            </li>
                                            <li>
                                                <h5>Market Your Reviews</h5>
                                                <p>Use our Review Widget, Conversion Pop-up and social features to market
                                          your great reviews and improve your SEO. Let’s win your next customer.</p>
                                            </li>
                                            <li>
                                                <h5>Your Branding</h5>
                                                <p>Our emails and messaging are customized with your brand, logo and accent
                                          color to have you looking great.</p>
                                            </li>
                                            <li>
                                                <h5>Reporting & Insights</h5>
                                                <p>Get the data and insight you need to manage, make changes and track
                                          progress of your reputation, reviews and Net Promoter Score.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="ratting-sec commonSectionStyle">
                        <div class="container-common max-WT-1000">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-6">
                                    <div class="ratting-content">
                                        <div class="w100">
                                            <div class="section-head mb50 text-left">
                                                <h2>Do you know what customers
                                                see when they look for you online?</h2>
                                                <p>Find out with a quick Autto.</p>
                                                <div class="mt20">
                                                    <a href="" class="btn btn-large btn-yellow max-WT-250">SEE MY REVIEWS</a>
                                                </div>
                                            </div>
                                            <div class="section-head mt50 text-left">
                                                <p>You can showcase reviews on your website just like this as well...</p>
                                                <h2>What Are You Waiting For?
                                                You Could Have New Reviews by Now!</h2>
                                                <div class="mt20">
                                                    <a href="" class="btn btn-large btn-yellow max-WT-250">GET STARTED</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-6">
                                    <div class="w100 text-center pr">
                                        <img class="pa ratting-line" src={require("../../assets/images/ratting-line.png")} title="" alt="" />
                                        <img class="max-WT-300" src={require("../../assets/images/ratting-screen.png")} title="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default connect()(Home)