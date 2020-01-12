import React,{Component, useState, useEffect} from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import InlineError from '../../InlineError';
import ToasterFunction from '../../ToasterFunc';

const SocialLinks = (props)=>{

    //credit card states
    const [socialLink1, setSocialLink1]=useState("");
    const [socialLink1Error, setSocialLink1Error]=useState("");
    const [socialLink1Status, setSocialLink1Status] = useState("");
 
    //expiratio states
    const [socialLink2, setSocialLink2] = useState("");
    const [socialLink2Error, setSocialLink2Error] = useState("");
    const [socialLink2Status, setSocialLink2Status] = useState("");
 
    //cvv number status
    const [socialLink3, setSocialLink3]=useState("");
    const [socialLink3Error, setSocialLink3Error]=useState("");
    const [socialLink3Status, setSocialLink3Status] = useState("");

   useEffect(()=>{
      window.document.title="Autto | Social Links"
   },[])

   //function to handle submit event of the form
   const handleInput=(type,e)=>{

      let value=e.target.value;
      // let obj={};
      // let reg=/^[+][0-9]*$/;
      if(type=="socialLink1"){
         setSocialLink1(value);
         // obj=validateName(value);
         // console.log("creditCard=>", obj);
         // setCreditCardError(obj.error);
         // setCreditCardStatus(obj.status);
      }
      else if(type=="socialLink2"){
         setSocialLink2(value);
         
         // obj=validateName(value);
         // setExpirationError(obj.error);
         // setExpirationStatus(obj.status);
      }
      else if(type=="socialLink3"){
         // if(value=="" || reg.test(value)){
            setSocialLink3(value);
         // }         
         // obj=validateCvv(value);
         // setCvvError(obj.error);
         // setCvvStatus(obj.status);
      }           
   }


   const handleNext=()=>{
      console.log("DataSubmit");      
      if(socialLink1!="" || socialLink2!="" || socialLink3!=""){
            console.log("Hit api here");
            // props.history.push("billingAddress");
            let socialLinks={socialLink1, socialLink2, socialLink3}
            props.handleSubmit("socialLinks",socialLinks);
      }      
      else {
         console.log("fill all required fields");
         // alert("Please provide at least one social link");
         ToasterFunction("error","Please provide at least one social link.")
      }
   }


    return(
        <div class={props.active=="socialLinks"?"steps step2":"steps step2 hide"}>
        <div class="form-header">
            <h3>Add the addresses of your social media profile in the URL field.</h3>
            <p>*Mandatory field</p>
        </div>
        <form class="form-box">
           <div class="main-form">
              <div class="form-group icon-field">
                <label class="common-label"><span class="reqiured">*</span>Facebook Link</label>
                 <input type="text" class="form-control" 
                 onChange={e=>handleInput("socialLink1",e)}
                 maxLength={300}
                 value={socialLink1}
                 placeholder=""/>
                 <InlineError message={socialLink1Error}/>
                 {/* <span class="error">Please enter a Social Link 1</span> */}
              </div> 
              <div class="form-group password-field icon-field">
                 <label class="common-label"><span class="reqiured">*</span>Google Link</label>
                 <input type="text" class="form-control" 
                 value={socialLink2}
                 maxLength={300}
                 onChange={e=>handleInput("socialLink2",e)}
                 placeholder=""/>
                 <InlineError message={socialLink2Error}/>
                 {/* <span class="error hide">Please enter a Social Link 2 </span> */}
              </div> 
              <div class="form-group password-field icon-field">
                 <label class="common-label"><span class="reqiured">*</span>Yelp Link</label>
                 <input type="text" class="form-control" 
                 value={socialLink3}
                 maxLength={300}
                 onChange={e=>handleInput("socialLink3",e)}
                 placeholder=""/>
                 <InlineError message={socialLink3Error}/>
                 {/* <span class="error hide">Please enter a Social Link 3 </span> */}
              </div>
              {/* <div class="form-group password-field icon-field">
                 <label class="common-label"><span class="reqiured">*</span>Social Link 1</label>
                 <input type="password" class="form-control" placeholder=""/>
                 <span class="error hide">Please enter a Social Link 1 </span>
              </div>    */}
              <div class="button-block mt30">
                 <a class="btn btn-login btn-block" onClick={e=>handleNext()}>SUBMIT</a>
              </div>
           </div>
        </form>
    </div>
    )
}

const mapStateToProps=state=>{
    console.log("State_on_Social_Links_Page=>", state);
    return {
        state
    }
}

export default connect(mapStateToProps)(SocialLinks);