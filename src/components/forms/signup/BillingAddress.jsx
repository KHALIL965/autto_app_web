import React,{Component, useState, useEffect} from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import InlineError from '../../InlineError';
import ToasterFunction from '../../ToasterFunc';

const BillingAddress = (props)=>{

    //user address states
    const [userAddress, setUserAddress]=useState("");
    const [userAddressError, setUserAddressError]=useState("");
    const [userAddressStatus, setUserAddressStatus] = useState("");
 
    //country states
    const [country, setCountry] = useState("");
    const [countryError, setCountryError] = useState("");
    const [countryStatus, setCountryStatus] = useState("");
 
    //city status
    const [city, setCity]=useState("");
    const [cityError, setCityError]=useState("");
    const [cityStatus, setCityStatus] = useState("");
 
    //region states
    const [region, setRegion]=useState("");
    const [regionError, setRegionError] = useState("");
    const [regionStatus, setRegionStatus] = useState("");
 
 
    // postal code states
    const [postalCode, setPostalCode]=useState("");
    const [postalCodeError, setPostalCodeError] = useState("");
    const [postalCodeStatus, setPostalCodeStatus] = useState("");

   if(props.active=="billingAddress")
   {window.document.title="Autto | Billing"}

   // useEffect(()=>{
   //    if(props.active=="billingAddress")
   //    window.document.title="Autto | Billing"
   // },[])
   
   //function to handle submit event of the form
   const handleInput=(type,e)=>{

      let value=e.target.value;
      let obj={};
      let reg=/^[0-9]*$/;
      if(type=="userAddress"){
         setUserAddress(value);
         // obj=validateName(value);
         // console.log("userAddress=>", obj);
         // setUserAddressError(obj.error);
         // setUserAddressStatus(obj.status);
      }
      else if(type=="country"){
         setCountry(value);
         // obj=validateName(value);
         // setCountryError(obj.error);
         // setCountryStatus(obj.status);
      }
      else if(type=="city"){
         setCity(value);
         // obj=validateEmail(value);
         // setCityError(obj.error);
         // setCityStatus(obj.status);
      }
      else if(type=="region"){
         // let reg=/^[+][0-9]*$/;
         // if(value=="" || reg.test(value))
         setRegion(value);
         // obj=validateMobileNo(value);
         // setRegionError(obj.error);
         // setRegionStatus(obj.status);
      }
      else if(type=="postalCode"){
         if(value=="" || reg.test(value))
         {setPostalCode(value);}
         
         // obj=validatePassword(value);
         // setPostalCodeError(obj.error);
         // setPostalCodeStatus(obj.status);
      }      
   }

   const handleNext=()=>{
      console.log("DataSubmit");      
      if(userAddress!="" && country!="" && city!="" && region!="" && postalCode!=""){
            console.log("Hit api here");
            // props.history.push("billingAddress");
            let billingAddress={
               userAddress, country, city, region, postalCode
            }
            props.handleSubmit("billingAddress",billingAddress);
      }
      else {
         console.log("fill all required fields");
         ToasterFunction("error","Please fill all the billing address details carefully. All Fields are required")
      }
   }

    return(
        <div class={props.active=="billingAddress"?"steps step2":"steps step2 hide"}>
              <div class="form-header">
                  <h3>Your billing address</h3>
                  <p>*Mandatory field</p>
              </div>
              <form class="form-box">
                 <div class="main-form">
                    <div class="form-group icon-field">
                      <label class="common-label"><span class="reqiured">*</span>Address</label>
                       <input type="text" class="form-control" placeholder=""
                       onChange={e=>handleInput('userAddress',e)}
                       maxLength={100}
                       value={userAddress}
                       />
                       <InlineError message={userAddressError}/>
                       {/* <span class="error">Please enter a valid address</span> */}
                    </div> 
                    <div class="form-group password-field icon-field">
                       <label class="common-label"><span class="reqiured">*</span>Country</label>
                       <input type="text" class="form-control" placeholder=""
                       onChange={e=>handleInput('country',e)}
                       maxLength={60}
                       value={country}
                       />
                       <InlineError message={countryError} />
                       {/* <span class="error hide">Please enter a valid Country </span> */}
                    </div> 
                    <div class="form-group password-field icon-field">
                       <label class="common-label"><span class="reqiured">*</span>City</label>
                       <input type="text" class="form-control" placeholder=""
                       onChange={e=>handleInput('city',e)}
                       maxLength={60}
                       value={city}
                       />
                       <InlineError message={cityError} />
                       {/* <span class="error hide">Please enter a valid City </span> */}
                    </div> 
                    <div class="form-group password-field icon-field">
                       <label class="common-label"><span class="reqiured">*</span>Region</label>
                       <input type="text" class="form-control" placeholder=""
                       maxLength={60}
                       onChange={e=>handleInput('region',e)}
                       value={region}
                       />
                       <InlineError message={regionError} />
                       {/* <span class="error hide">Please enter a valid Region </span> */}
                    </div> 
                    <div class="form-group password-field icon-field">
                       <label class="common-label"><span class="reqiured">*</span>Postal Code</label>
                       <input type="text" class="form-control" placeholder=""
                       onChange={e=>handleInput('postalCode',e)}
                       maxLength={10}
                       value={postalCode}
                       />
                       <InlineError message={postalCodeError}/>
                       {/* <span class="error hide">Please enter a valid Postal Code </span> */}
                    </div> 
                    <div class="button-block mt30" onClick={e=>handleNext}>
                       <a class="btn btn-login btn-block" onClick={(e)=>handleNext()} >SAVE AND NEXT</a>
                    </div>
                 </div>
              </form>
          </div>
    )
}

const mapStateToProps=state=>{
    console.log("State_on_Billing_Address_Page=>", state);
    return {
        state
    }
}

export default connect(mapStateToProps)(BillingAddress);