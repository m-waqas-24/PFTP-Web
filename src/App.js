import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";

import Wrapper from "./Wrapper";

import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
//About 
import About from './pages/about/About';
import CeoMessage from './pages/about/CeoMessage';
import PmEduMessage from './pages/about/PmEduMessage';
import PmPaMessage from './pages/about/PmPaMessage';
import SgMessage from './pages/about/SgMessage';
import CertificateStatus from './pages/about/CertificateStatus';
//Courses
import Courses from './pages/courses/Courses';
import OnsiteCourses from './pages/courses/OnsiteCourses';
//Opportunity
import Internship from './pages/opportunity/Internship';
import Scholarship from './pages/opportunity/Scholarship';
//Info Desk
import HowToApply from './pages/info/HowToApply';
import HowToPay from './pages/info/HowToPay';
import GuideLine from './pages/info/GuideLine';
import TermCondition from './pages/info/TermCondition';
import PrivacyPolicy from './pages/info/PrivacyPolicy';
import SOPS from './pages/info/SOPS';
//Join Hands
import CommunityPartner from './pages/joinHands/CommunityPartner';
import Instructor from './pages/joinHands/Instructor';
import MOUPartner from './pages/joinHands/MOUPartner';
import Investor from './pages/joinHands/Investor';
//NYF Events
import Gallery from './pages/gallery/Gallery';
import Guest from './pages/guests/Guest';
//Registration
import Login from './pages/account/Login';
import ForgotPassword from './pages/account/ForgotPassword';
import Register from './pages/account/Register';
import CreateProfile from './pages/student/CreateProfile';
import CourseRegistration from './pages/shop/CourseRegistration';



/////Apply//////
import Cart from './pages/shop/Cart';
import Invoice from './pages/shop/Invoice';
import GenerateInvoice from './pages/shop/GenerateInvoice';


//My-Account
import MyAccount from './pages/account/MyAccount';

import CourseGrid from './pages/courses/CourseGrid';
import CourseList from './pages/courses/CourseList';
import CourseDetails from './pages/courses/CourseDetails';
import OnsiteCourseDetails from './pages/courses/OnsiteCourseDetails';

import InstructorDetails from './pages/guests/InstructorDetails';

import Events from './pages/events/Events';
import EventDetails from './pages/events/EventsDetails';


import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import PageNotFound from './pages/404/PageNotFound';
import ComingSoon from './pages/comingsoon/ComingSoon';
import BlogClassic from './pages/blog/BlogClassic';
import BlogGrid from './pages/blog/BlogGrid';
import BlogDetails from './pages/blog/BlogDetails';
import Product from './pages/shop/Products';
import ProductDetails from './pages/shop/ProductDetails';

import GuardedRoute  from './components/common/auth/GuardedRoute';
function App() {
  const auth = JSON.parse(localStorage.getItem("authUser"))
    const isAutheticated = auth ? auth.login : false;
   
    const isProfile = auth ? auth.profile : false;
  
  
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={HomeOne} />
                <Route path={`${process.env.PUBLIC_URL + "/home-two"}`} component={HomeTwo} />
               
                <Route path={`${process.env.PUBLIC_URL + "/course-grid"}`} component={CourseGrid} />
                <Route path={`${process.env.PUBLIC_URL + "/course-list"}`} component={CourseList} />
                <Route path={`${process.env.PUBLIC_URL + "/single-course-detail/:slug"}`} component={CourseDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/onsite-course-detail/:slug"}`} component={OnsiteCourseDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/instructor"}`} component={Instructor} />
                <Route path={`${process.env.PUBLIC_URL + "/instructor-details"}`} component={InstructorDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/events"}`} component={Events} />
                <Route path={`${process.env.PUBLIC_URL + "/event-details"}`} component={EventDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
                <Route path={`${process.env.PUBLIC_URL + "/forgot-password"}`} component={ForgotPassword} />
                <Route path={`${process.env.PUBLIC_URL + "/registration"}`} component={Register} />
                <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                <Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
                <Route path={`${process.env.PUBLIC_URL + "/404"}`} component={PageNotFound} />
                <Route path={`${process.env.PUBLIC_URL + "/coming-soon"}`} component={ComingSoon} />
                <Route path={`${process.env.PUBLIC_URL + "/blog-classic"}`} component={BlogClassic} />
                <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} component={BlogGrid} />
                <Route path={`${process.env.PUBLIC_URL + "/blog-details"}`} component={BlogDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/products"}`} component={Product} />
                <Route path={`${process.env.PUBLIC_URL + "/product-details"}`} component={ProductDetails} />
               
                
                { /* About Routes */}
                <Route path={`${process.env.PUBLIC_URL + "/about"}`} component={Wrapper(About)} />
                <Route path={`${process.env.PUBLIC_URL + "/ceo-message"}`} component={Wrapper(CeoMessage)} />
                <Route path={`${process.env.PUBLIC_URL + "/pm-edu-message"}`} component={Wrapper(PmEduMessage)} />
                <Route path={`${process.env.PUBLIC_URL + "/pm-pa-message"}`} component={Wrapper(PmPaMessage)} />
                <Route path={`${process.env.PUBLIC_URL + "/sg-message"}`} component={Wrapper(SgMessage)} />
                <Route path={`${process.env.PUBLIC_URL + "/certificate-status"}`}  component={Wrapper(CertificateStatus)} />
                { /* Courses Routes */}
                <Route path={`${process.env.PUBLIC_URL + "/online-courses"}`} component={Wrapper(Courses)} />
                <Route path={`${process.env.PUBLIC_URL + "/onsite-courses"}`} component={Wrapper(OnsiteCourses)} />
  
                {/* Opportunity Routes */}
                <Route path={`${process.env.PUBLIC_URL + "/internships"}`} component={Wrapper(Internship)} />
                <Route path={`${process.env.PUBLIC_URL + "/scholarships"}`} component={Wrapper(Scholarship)} />

                {/*Info Route */}
                <Route path={`${process.env.PUBLIC_URL + "/complete-guideline"}`} component={Wrapper(GuideLine)} />
                <Route path={`${process.env.PUBLIC_URL + "/how-to-apply"}`} component={Wrapper(HowToApply)} />
                <Route path={`${process.env.PUBLIC_URL + "/how-to-pay"}`} component={Wrapper(HowToPay)} />
                <Route path={`${process.env.PUBLIC_URL + "/terms-and-conditions"}`} component={Wrapper(TermCondition)} />
                <Route path={`${process.env.PUBLIC_URL + "/privacy-policy"}`} component={Wrapper(PrivacyPolicy)} />
                <Route path={`${process.env.PUBLIC_URL + "/sops"}`} component={Wrapper(SOPS)} />
                 {/*Join Hands */}
                 <Route path={`${process.env.PUBLIC_URL + "/become-ambassador"}`} component={Wrapper(CommunityPartner)} />
                 <Route path={`${process.env.PUBLIC_URL + "/become-instructor"}`} component={Wrapper(Instructor)} />
                 <Route path={`${process.env.PUBLIC_URL + "/become-mou-partner"}`} component={Wrapper(MOUPartner)} />
                 <Route path={`${process.env.PUBLIC_URL + "/become-investor"}`} component={Wrapper(Investor)} />

                 {/*NYF Events */}
                 <Route  path={`${process.env.PUBLIC_URL + "/gallery/:event"}`} component={Wrapper(Gallery)} />
                 <Route  path={`${process.env.PUBLIC_URL + "/guests"}`} component={Wrapper(Guest)} />
                { /* Create Profile Routes*/}
                <Route path={`${process.env.PUBLIC_URL + "/create-profile"}`} component={Wrapper(CreateProfile)} />
               
               

                 { /* Auth Routes */}
                 
                {/* Cart */}
                <GuardedRoute path={`${process.env.PUBLIC_URL + "/my-cart"}`} component={Wrapper(Cart)}  auth = {isAutheticated} profile={isProfile}/>
                {/* Invoice */}
                <GuardedRoute path={`${process.env.PUBLIC_URL + "/my-invoices"}`} component={Wrapper(Invoice)}  auth = {isAutheticated} profile={isProfile}/>
                <GuardedRoute path={`${process.env.PUBLIC_URL + "/generate-invoice/:number"}`} component={Wrapper(GenerateInvoice)}  auth = {isAutheticated} profile={isProfile}/>
               
                <GuardedRoute path={`${process.env.PUBLIC_URL + "/course-registration"}`} component={Wrapper(CourseRegistration)}  auth = {isAutheticated} profile={isProfile}/>
                {/* Account */}
                <GuardedRoute path={`${process.env.PUBLIC_URL + "/my-account"}`} component={Wrapper(MyAccount)}  auth = {isAutheticated} profile={isProfile}/>
               
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default App;