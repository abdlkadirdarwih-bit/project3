// https://chatgpt.com/

//
// https://www.youtube.com/watch?app=desktop&v=yFuYpoXfQ9g
// https://github.com/PD-Patel/amazon-clone-frontend/blob/main/src/axios.js



//payment   بايمنْت  قسط
//application     طلب
//safety أمان   سايفْلي  
// seller   بائع  سالر   
// best seller    الأكثر مبيعًا
// undoubtedly    بالتأكيد, من غير شك, يقينا   أنْدَبتلي
  // Leaders   ليدر  زعيم, قائد, رئيس
// Template   تامبلت  نموذج
//  about us  آس يو أَبَوت  معلومات عنا
// Strive  سْترَيف  يجتهد
//creatives  كْرايايتفس  المبدعين
//recognize   راكْكنَيز   يتعرف على
//suggesting     سيكجاسْتن     اقتراح
//Shall شَلْ سوف
//guard ua=o قارْد  يحمي
//sticking  الالتصاق  سْتاكين
//guarantees  الضمانات كارنتيس
//maintaining   الحفاظ على    ماينتاينين
//ideas  أفكار  أيدييس 
//cloning    كلانين   استنساخ
//nicely  بشكل جيد    نَيسلي
//shrink  شرينك-تقلص, انقبض   ينكمش
//Whether  سواء وازر

import   "./App.css";
// import   "./TALABATAK/Talabatak.css";
// import { ScrollBox as Talab } from "./TALABATAK/Talabatak.js";
// import Navbar from "./TALABATAK/Navbar.jsx";
// import   "./TALABATAK/Navbar.css";

// import Homesch from "./SCHOOL/homeschl";

import Navbar from "./Nav/Navb.jsx";
import   "./Nav/Navb.css";
import LoginPage from "./LoginSchool/LoginPage.jsx";
import   "./LoginSchool/LoginPage.css";

import ChangePasswordPage from "./LoginSchool/ChangePasswordPage";
import RegisterPage from "./LoginSchool/RegisterPage";
import Homesch from "./SCHOOL/homesch.jsx";
import   "./SCHOOL/homesch.css";
// import Homesch from "./SCHOOL/homesch.jsx";
// import   "./SCHOOL/homesch.css";
import Eventsch from "./SCHOOL/eventsch.jsx";
import   "./SCHOOL/eventsch.css";
import Aboutsch from "./SCHOOL/aboutsch.jsx";
import   "./SCHOOL/aboutsch.css";
import Contactsch from "./SCHOOL/contactsch.jsx";
import   "./SCHOOL/contactsch.css";
import Contact from "./SCHOOL/contact.jsx";
import   "./SCHOOL/contact.css";
import Eventmoresch from "./SCHOOL/eventmore.jsx";
import   "./SCHOOL/eventmore.css";
import Login from './SCHOOL/Login.jsx'
import   "./SCHOOL/Login.css";

// import Eventmoresch from "./SCHOOL/eventmore.jsx";
// import   "./SCHOOL/eventmore.css";


// import Home from "./TALABATAK/home.jsx";
// import About from "./TALABATAK/about.jsx";
// import ShoppingCart from "./TALABATAK/talab1.js";
import{ BrowserRouter,Route,Routes } from "react-router-dom";

// import{ Hello } from "./Hello";
import { Link } from 'react-router-dom';
// https://fontawesome.com/icons/whatsapp?f=brands&s=solid
// icon in react: https://react-icons.github.io/react-icons/icons/fi/
import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
import { FiInstagram,FiMapPin,FiSearch ,FiMail,FiPhone,FiEye,FiTrash,FiHelpCircle,FiUsers ,
FiFlag,FiHome} from "react-icons/fi";
// import { AiTwotoneQuestionCircle } from "react-icons/ai";


import { useState, useEffect } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'
// import Events from '../schcrud/User.jsx'
// import   "../schcrud/User.css";
// import Events from './User'
import Admin from './schcrud/admin.jsx'
import   "./schcrud/admin.css";

import Events from './schcrud/User.jsx'
import   "./schcrud/User.css";

import CreateEvent from './CreateEvent.jsx'
import   "./SCHOOL/CreateEvent.css";

import UpdateEvent from './UpdateEvent.jsx'

// import Users from './User'
// import CreateEvent from './CreateUser'
// import UpdateUser from './UpdateUser'

// function Navba() {
//   return <div>works inline</div>;
// }
 export default function App() { 


  return (
<div>
    <BrowserRouter basename="/project3">
    {/* <BrowserRouter > */}


  
   <div className="homeaboutmoto-menu-homesch">
         
          {/* <FiSearch /><FiEye /><FiTrash />
<FiHelpCircle /><FiUsers /><FiFlag /><FiHome /> */}


          {/* <div className="homeabout-menu-homesch">
            <div><Link to="/homesch" className="nav-link">Home  </Link></div>
            <div ><Link to="/aboutsch" className="nav-link">About Us  </Link></div>
          </div>
          <div className="eventscontacts-menu-homesch">

            <div><Link to="/eventsch" className="nav-link">Events  </Link></div>
            <div ><Link to="/contactsch" className="nav-link">Contacts </Link></div>
          </div> */}
        </div>

{/* <Homeschool/> */}



 

{/* <div className="cartwhatsbut">
   <div className="cartwhats">
    <Link to="/Talab9"><FaShoppingCart className="iconfaShoppingCart"  /></Link>
 <FaWhatsapp className="iconfaWhatsapp"/>

  </div>

       <Link to="/login" >  
  <button  className='btregistr'> تسجيل</button></Link>

</div> */}
{/* </div> */}


<Navbar />

<Routes>
  {/* <Talab/> */}
  {/* <Talab2/> */}
{/* <Navbar/> */}
                     {/* <Route path="/Navba" element={<Navba/>} />  */}
              {/* <Route path="/homesch" element={<Navbar/>} />  */}
 <Route path="/login" element={<LoginPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
                <Route path="/register" element={<RegisterPage />} />

              <Route path="/homesch" element={<Homesch/>} /> 
              <Route path="/eventsch" element={<Eventsch/>} /> 
              <Route path="/aboutsch" element={<Aboutsch/>} /> 
              <Route path="/contactsch" element={<Contactsch/>} /> 
                            <Route path="/contact" element={<Contact/>} /> 

              <Route path="/eventmoresch" element={<Eventmoresch/>} /> 
  {/* <Route path='/login' element={<Login/>}></Route>  */}
  <Route path='/admin' element={<Admin/>}></Route> 

       
      {/* <Route path="/home" element={<Home/>} />  */}
      {/* <Route path="/about" element={<About/>} />  */}
  {/* <Route path='/login' element={<Login/>}></Route> 
<Route path='/register' element={<Signup/>}></Route> */}

    <Route path='/' element={<Events />} />
    <Route path='/create' element={<CreateEvent />} />
<Route path='/update/:id' element={<UpdateEvent />} />

    {/* <Route path='/' element={<Users />} />
<Route path='/create' element={<CreateEvent />} /> */}
{/* <Route path="/create" element={<CreateUser setProducts={setProducts} />} /> */}
{/* <Route path='/update/:id' element={<UpdateUser />} /> */}
</Routes>
        </BrowserRouter>

 <div className="contact-details-footer-homesch">
        <div className="homeabout-footer-homesch">
   
         <ul >
            <li><a href="/homesch">الرئيسية </a></li>
              <li><a href="/aboutsch"> حول المدرسه </a></li>
            <li><a href="/eventsch">الأنشطة </a></li>
            <li><a href="/contactsch">الاتصال </a></li>

          </ul>  
        </div>
           
 <div className="phoneemailaddresssch">
          <div><FiPhone /> +961 78 823 881</div>
          <div><FiMail /> bader2025@gmail.com</div>
          <div className="contact-item-akkar"> <FiMapPin /> Akkar-Lebanon</div>
        <div className="folow-sch"> <FiInstagram /> Folow Us:</div>

        </div>
      </div>
         <div className="Copyright">
<div className="Talabatk1">BaderSchool, Copyright 2025, All Rights Reserved</div>
<div className="Developed2">Developed by Alzakaa simple Solutions</div>
</div>

       {/* <div><Link to="/homesch" className="home-footer-homesch"> Home  </Link></div> */}
          {/* <div><Link to="/aboutsch" className="about-footer-homesch">About Us  </Link></div>
            <div><Link to="/eventsch" className="event-footer-homesch"> Events</Link></div>
            <div><Link to="/contactsch" className="contact-footer-homesch"> Contacts  </Link></div> */}
  </div>



    
  


);
}



// https://talabatk-ebbb5.web.app/






// https://react.dev/learn/updating-arrays-in-state#challenges
// https://react.dev/learn/choosing-the-state-structure#challenges
// https://react.dev/learn/sharing-state-between-components#challenges
// https://react.dev/learn/updating-arrays-in-state#


// State as a Snapshot

// //  import   "./Adding Interactivity/SaS/app.css";
// // import Counter from "./Adding Interactivity/SaS/app.js";

// // import Gallery from "./Adding Interactivity/SCM/Appchallaeng.js";
// import   "./Adding Interactivity/SCM/Talabatak.css";
// import Talab from "./Adding Interactivity/SCM/Talabatak.js";

//  export default function App() { 

//   return (

// //   // <Gallery/> 
// //   // <Form/>
// // <Counter/> 
//   <Talab/>
// );
// }
