//authentication
import Signin from "../components/forms/authentication/Signin";
import ForgotPassword from '../components/forms/authentication/ForgotPassword';
import ResetPassword from "../components/forms/authentication/ResetPassword";

//multi step signup components 
import ProfileDetails from '../components/forms/signup/ProfileDetails';
import BillingAddress from '../components/forms/signup/BillingAddress';
import PaymentInformation from '../components/forms/signup/PaymentInformation';
import SocialLinks from '../components/forms/signup/SocialLinks';


export const authRoutes=[{
    path:"/signin",
    name:"Signin",
    component:Signin,
    layout:"/auth"
},
{
    path:"/forgotpassword",
    name:"ForgotPassword",
    component:ForgotPassword,
    layout:"/auth"
},
{
    path:"/resetPassword/:Id",
    name:"ResetPassword",
    component:ResetPassword,
    layout:"/auth"
}
]

export const SignupRoutes=[{
    path:"/profileDetails",
    name:"ProfileDetails",
    component:ProfileDetails,
    layout:"/signup"
},
{
    path:"/billingAddress",
    name:"BillingAddress",
    component:BillingAddress,
    layout:"/signup"
},
{
    path:"/paymentInformation",
    name:"PaymentInformation",
    component:PaymentInformation,
    layout:"/signup" 
},
{
    path:"/socialLinks",
    name:"SocialLinks",
    component:SocialLinks,
    layout:"/signup"
}
]
