import React, {Component} from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import SideNav from '../../components/SideNav';

class GetSupport extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <main className="main-content">
                <div class="mt30 d-flex inner-page-container">
                    <SideNav active={"GetSupport"}/>
                    <div class="right-pannel">
                      <div class="row mt20">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="subtitle ">Frequently Asked Questions</div>
                            <div class="search-form">
                                {/* <!-- Search form --> */}
                                <input class="form-control" type="text" placeholder="Search in FAQ" aria-label="Search"/>
                            </div>
                            <div id="accordion">
                              <div class="card ques-ans">
                                <div class="card-header">
                                  <a class="card-link faq-ques" data-toggle="collapse" href="#collapseOne">
                                    Q1. Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                  </a>
                                </div>
                                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                  <div class="card-body faq-ans" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                                  </div>
                                </div>
                              </div>
                              <div class="card ques-ans">
                                <div class="card-header">
                                  <a class="card-link faq-ques" data-toggle="collapse" href="#collapseTwo">
                                    Q2. Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                  </a>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                  <div class="card-body faq-ans" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                                  </div>
                                </div>
                              </div>
                              <div class="card ques-ans">
                                <div class="card-header">
                                  <a class="card-link faq-ques" data-toggle="collapse" href="#collapseThree">
                                    Q3. Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                  </a>
                                </div>
                                <div id="collapseThree" class="collapse" data-parent="#accordion">
                                  <div class="card-body faq-ans" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                                  </div>
                                </div>
                              </div>
                              <div class="card ques-ans">
                                <div class="card-header">
                                  <a class="card-link faq-ques" data-toggle="collapse" href="#collapseFour">
                                    Q4. Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                  </a>
                                </div>
                                <div id="collapseFour" class="collapse" data-parent="#accordion">
                                  <div class="card-body faq-ans" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                                  </div>
                                </div>
                              </div>
                              <div class="card ques-ans">
                                <div class="card-header">
                                  <a class="card-link faq-ques" data-toggle="collapse" href="#collapseFive">
                                    Q5. Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                  </a>
                                </div>
                                <div id="collapseFive" class="collapse" data-parent="#accordion">
                                  <div class="card-body faq-ans" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                                  </div>
                                </div>
                              </div>
                              <div class="card ques-ans">
                                <div class="card-header">
                                  <a class="card-link faq-ques" data-toggle="collapse" href="#collapseSix">
                                    Q6. Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                  </a>
                                </div>
                                <div id="collapseSix" class="collapse" data-parent="#accordion">
                                  <div class="card-body faq-ans" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                                  </div>
                                </div>
                              </div>
                              <div class="card ques-ans">
                                <div class="card-header">
                                  <a class="card-link faq-ques" data-toggle="collapse" href="#collapseSeven">
                                    Q7. Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                                  </a>
                                </div>
                                <div id="collapseSeven" class="collapse " data-parent="#accordion">
                                  <div class="card-body faq-ans" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                                  </div>
                                </div>
                              </div>
                            </div>                          
                        </div>
                      </div>
                  </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps=state=>{
    console.log("State_on_GetSUpport_Page=> ",state);
    return{state}
}

export default connect(mapStateToProps)(GetSupport);

