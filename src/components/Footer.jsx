import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <footer>
                <div class="footer-content">
                    <div class="footer-container">
                        <ul class="footerMenuList">
                            <li>
                                <a href="">
                                    <img class="foot-logo" src={require("../assets/images/footer-logo.png")} />
                                </a>
                                <p class="mt10">Lorem Ipsum is simply dummy text of the  printing
                                      and typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since.</p><br />

                                <p>Lorem Ipsum is simply dummy text of the  printing
                                      and typesetting industry. Lorem Ipsum has been the
                                      industry’s standard dummy text ever since.
                  </p>
                            </li>
                            <li>
                                <h3 class="footer-heading">About Autto</h3>
                                <ul class="inner-list-footer">
                                    <li> <a href="">Home</a></li>
                                    <li> <a href="">About</a></li>
                                    <li> <a href="">Help</a></li>
                                    <li> <a href="">Careers</a></li>
                                    <li> <a href="">Pricing</a></li>
                                    <li> <a href="">Resources</a></li>
                                    <li> <a href="">Success Stories</a></li>
                                    <li> <a href="">FAQs</a></li>
                                </ul>
                            </li>
                            <li>
                                <h3 class="footer-heading">Solution Overview</h3>
                                <ul class="inner-list-footer">
                                    <li> <a href="javascript:void(0);">Solution Overview</a></li>
                                    <li> <a href="javascript:void(0);">Get Online Reviews</a></li>
                                    <li> <a href="javascript:void(0);">Prevent Negative Reviews</a></li>
                                    <li> <a href="javascript:void(0);">Online Review </a></li>
                                    <li> <a href="javascript:void(0);">Management Software</a></li>
                                    <li> <a href="javascript:void(0);">Online Reviews </a></li>
                                    <li> <a href="javascript:void(0);">Monitoring</a></li>
                                    <li> <a href="javascript:void(0);">Dashboard </a></li>
                                </ul>
                            </li>
                            <li>
                                <h3 class="footer-heading">Get in touch</h3>
                                <ul class="inner-list-footer">
                                    <li>You can contact us by phone or email. Feel free to
                           send any questions you may have.</li>
                                    <li>+91 99999 99999</li>
                                    <li>sales@autto.com</li>
                                </ul>
                                <ul class="text-left social-ic">
                                    <li><a href="#"><img src={require("../assets/images/fb-icon.png")} /></a></li>
                                    <li><a href="#"><img src={require("../assets/images/tr-icon.png")} /></a></li>
                                    <li><a href="#"><img src={require("../assets/images/lk-icon.png")} /></a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="footer-bottom mt20">
                            <div class="row align-items-center">
                                <div class="col-sm-12 col-md-12">
                                    <div class="copy-right-text">
                                        <p>
                                            © 2019 Autto.com | All rights reserved.
                              <a href="">Terms of Use</a>
                                            <a href="">Your Privacy Rights</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;