import React,{Component} from 'react'


export class  ManageUsers extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           
            
             <main class="main-content">
                <div class="container-common">
                      <div class="mt30 d-flex inner-page-container">
                         <div class="left-panel" id="menubox">
                            <span class="close-menu" id="menuClose"></span>
                            <div class="business-info">
                               <img src="images/business-ic.png"/>
                               <h2>Your Business name</h2>
                               <p>Lorem Ipsum is simply dummy text.</p>
                               <div class="social-icons">
                                  <a ><img src="images/fb-ic.png"/></a>
                                  <a ><img src="images/twiter-ic.png"/></a>
                                  <a ><img src="images/insta-ic.png"/></a>
                                  <a ><img src="images/linkdin-ic.png"/></a>
                               </div>
                            </div>
                            <div class="menu-list">
                               <ul>
                                  <li><a >Dashboard</a></li>
                                  <li><a >Reviews</a></li>
                                  <li><a >ManageInvites</a></li>
                                  <li><a >Analytical Report</a></li>
                                  <li><a >MySubscriptions</a></li>
                                  <li class="active"><a >Manage Users</a></li>
                                  <li><a >Settings</a></li>
                                  <li><a >Get Support</a></li>
                                  <li><a >Logout</a></li>
                               </ul>
                            </div>
                         </div>
                         <div class="right-pannel">
                             <div class="row mt20">
                               <div class="col-sm-12 col-md-12 col-lg-12">
                                   
                                   <div class="search-form">
                                       {/* <!-- Search form --> */}
                                       <input class="form-control" type="text" placeholder="Search by user name, email id, designation and status" aria-label="Search"/>
                                       <div class="dropdown">
                                         <button type="button" class="btn btn-gray dropdown-toggle" data-toggle="dropdown">
                                           Select Action
                                         </button>
                                         <div class="dropdown-menu">
                                           <a class="dropdown-item" href="#">Link 1</a>
                                           <a class="dropdown-item" href="#">Link 2</a>
                                           <a class="dropdown-item" href="#">Link 3</a>
                                           <div class="dropdown-divider"></div>
                                           <a class="dropdown-item" href="#">Another link</a>
                                         </div>
                                       </div>
                                        {/* <!-- <a class="btn btn-gray" >Select Action</a> --> */}
                                   </div>
                                   <div class="table-responsive mt30">
                                     <table class="table ticket-table min-WT-800">
                                         <thead>
                                           <tr>
                                             <th>
                                               <label class="checkbox-design">
                                                 <input type="checkbox" name=""/>
                                                 <span></span>Name and Email ID
                                              </label>
                                            </th>
                                             <th><a >Designation</a></th>
                                             <th></th>
                                             <th><a >Status</a></th>
                                           </tr>
                                         </thead>
                                         <tbody>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           <tr>
                                             <td>
                                                 <label class="checkbox-design">
                                                   <input type="checkbox" name=""/>
                                                   <span></span>Jason Behrendorff, jasonbehrendorff@gmail.com
                                                </label>
                                             </td>
                                             <td>Marketing Representative</td>
                                             <td><a class="mr10" ><img src="images/msg-ic.png"/></a><a class="btn btn-green" >Send Invite</a></td>
                                             <td><a >Active</a></td>
                                           </tr>
                                           
                                         </tbody>
                                     </table>
                                   </div>
                                   <div class="d-flex justify-content-center align-items-center mt10">
                                       <ul class="pagination pagination-sm">
                                         <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>
                                         <li class="page-item"><a class="page-link" href="#">1</a></li>
                                         <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                         <li class="page-item"><a class="page-link" href="#">3</a></li>
                                         <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>
                                       </ul>
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