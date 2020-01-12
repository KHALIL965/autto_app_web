import React, {Component, useState, useEffect} from 'react';

// inline error component
import InlineError from '../../InlineError';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ToasterFunction from '../../ToasterFunc';

const PaymentInformation = (props)=>{

    //credit card states
   const [creditCard, setCreditCard]=useState("");
   const [creditCardError, setCreditCardError]=useState("");
   const [creditCardStatus, setCreditCardStatus] = useState("");

   //expiratio states
   const [expiration, setExpiration] = useState("");
   const [expirationError, setExpirationError] = useState("");
   const [expirationStatus, setExpirationStatus] = useState("");

   //cvv number status
   const [cvv, setCvv]=useState("");
   const [cvvError, setCvvError]=useState("");
   const [cvvStatus, setCvvStatus] = useState("");

   //zip code  status
   const [zipCode, setZipCode]=useState("");
   const [zipCodeError, setZipCodeError]=useState("");
   const [zipCodeStatus, setZipCodeStatus] = useState("");


    //function to handle submit event of the form
    const handleInput=(type,e)=>{

      let value=e.target.value;
      let obj={};
      let reg=/^[0-9]*$/;
      if(type=="creditCard"){
         if(value=="" || reg.test(value)){
            setCreditCard(value);
         }  
         
         // obj=validateName(value);
         // console.log("creditCard=>", obj);
         // setCreditCardError(obj.error);
         // setCreditCardStatus(obj.status);
      }
      else if(type=="expiration"){
         setExpiration(new Date(value));
            console.log("expiration_value=> ",expiration);
         // obj=validateName(value);
         // setExpirationError(obj.error);
         // setExpirationStatus(obj.status);
      }
      else if(type=="cvv"){
         if(value=="" || reg.test(value)){
            setCvv(value);
         }         
         // obj=validateCvv(value);
         // setCvvError(obj.error);
         // setCvvStatus(obj.status);
      }
      else if(type=="zipCode"){
         
         if(value=="" || reg.test(value))
         {setZipCode(value);}
         // obj=validateMobileNo(value);
         // setZipCodeError(obj.error);
         // setZipCodeStatus(obj.status);
      }      
   }
   

   const handleNext=()=>{
    console.log("DataSubmit");      
    if(creditCard!="" && expiration!="" && cvv!="" && zipCode!=""){
          console.log("Hit api here");
          // props.history.push("billingAddress");
          let paymentInformation={
             cardNo:creditCard,
             cardType:"1",
             expiredYear:expiration.getFullYear().toString(),
             expiredMonth:expiration.getMonth().toString(),
             cvv:cvv,
             zipCode:zipCode}
         //  let paymentInformation={creditCard, expiration, cvv, zipCode}
          props.handleSubmit("paymentInformation",paymentInformation);
    }
    else {
       console.log("fill all required fields");
       ToasterFunction("error","Please fill all the payment information carefully. All Fields are required")
    }
 }


    useEffect(()=>{
        window.document.title="Autto | Payment Info"
     },[])

    return(
        <div class={props.active=="paymentInformation"?"steps step2":"steps step2 hide"}>
              <div class="form-header">
                  <h3>Payment Information</h3>
                  <p>*Mandatory field</p>
              </div>
              <form class="form-box">
                 <div class="main-form">
                    <div class="form-group icon-field">
                      <label class="common-label"><span class="reqiured">*</span>Credit Card Number</label>
                       <input type="text" class="form-control visa"
                       maxLength={16}
                       onChange={e=>handleInput("creditCard",e)}
                       value={creditCard} placeholder=""/>
                       <InlineError message={creditCardError} />
                       {/* <span class="error">Please enter a valid card number</span> */}
                    </div> 
                    <div class="row">
                      <div class="col">
                          <div class="form-group password-field icon-field">
                             <label class="common-label"><span class="reqiured">*</span>Expiration</label>
                             <input type="date" class="form-control"
                             min={new Date()} 
                             onChange={e=>handleInput("expiration",e)}
                             value={expiration} placeholder="MM / YY"/>
                             <InlineError message={expirationError} />
                             {/* <span class="error hide">Please enter a valid password </span> */}
                          </div> 
                      </div>
                      <div class="col">
                          <div class="form-group password-field icon-field">
                             <label class="common-label"><span class="reqiured">*</span>CVV</label>
                             <input type="text" class="form-control"
                             onChange={e=>handleInput("cvv",e)}
                             maxLength={3}
                             value={cvv} placeholder=""/>
                             <InlineError message={cvvError} />
                             {/* <span class="error hide">Please enter a valid *CVV </span> */}
                          </div> 
                      </div>
                    </div>
                    <div class="form-group password-field icon-field">
                       <label class="common-label"><span class="reqiured">*</span>Zip Code</label>
                       <input type="text" class="form-control" 
                       onChange={e=>handleInput("zipCode",e)}
                       maxLength={10}
                       placeholder="" value={zipCode}/>
                       <InlineError message={zipCodeError} />
                       {/* <span class="error hide">Please enter a valid Zip Code </span> */}
                    </div>
                    <div class="button-block mt30">
                       <a class="btn btn-login btn-block" onClick={(e)=>handleNext()}>SAVE AND NEXT</a>
                    </div>
                 </div>
              </form>
          </div>
    )
}

const mapStateToProps=state=>{
    console.log("State_on_Payment_Information_Page=>", state);
    return {
        state
    }
}

export default connect(mapStateToProps)(PaymentInformation);