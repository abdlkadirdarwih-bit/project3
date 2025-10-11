import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import myImage from "../assets/WhatsApp Image 2025-09-19 at 10.49.02 PM.jpeg";

function Navbar() {
  const [isOpen,setIsOpen] =useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <header>
    <div className="container">
      <nav>
        {/* <div className="logo">
    <div className="baderschool"><Link className="bader-link" to="/homesch">
          BaderSchool
             </Link></div>        </div> */}
             <div className="logo">
      {/* <Link className="bader-link" to="/homesch">BaderSchool</Link> */}
<img 
  className="img1-Navb-sch" 
  src={myImage} 
  alt="productName" 
/>

</div>
        {/* <ul className={isOpen ? "nav-link active" : "nav-link"}>
          <li><a href="/homesch "className={({ isActive }) => isActive ? "active-link" : ""} >Home</a></li>
          <li><a href="/aboutsch">About Us</a></li>
          <li><a href="/eventsch">Events</a></li>
          <li><a href="/contactsch">Contacts</a></li>
        </ul> */}
        <ul className={isOpen ? "nav-link active" : "nav-link"}>
  <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>الرئيسية</NavLink></li>
  <li><NavLink to="/aboutsch" className={({ isActive }) => isActive ? "active-link" : ""}>حول المدرسة  </NavLink></li>
  <li><NavLink to="/eventsch" className={({ isActive }) => isActive ? "active-link" : ""}>الأنشطة</NavLink></li>
  <li><NavLink to="/contactsch" className={({ isActive }) => isActive ? "active-link" : ""}>الاتصال</NavLink></li>
    <li><NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>تسجيل</NavLink></li>

</ul>

<div className="icon" onClick={toggleMenu}> <FaBars />
</div>
      </nav>
    </div>
</header>
<section>
  {/* <div className="container"> */}
    {/* <div className="container-image">

  <div className="content">
<h2>Home </h2>
  </div>
  </div> */}
</section>

</>
  )
}
export default Navbar;
