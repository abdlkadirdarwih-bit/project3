// https://themewagon.com/theme-tag/education-template/
// https://themewagon.github.io/edusite/contact.html
// https://themewagon.github.io/BabyCare/about.html
// https://themewagon.github.io/kiddy/
import { useState, useEffect } from "react";

import { inform } from './datasch.jsx';
// import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
// import {
//   FiInstagram, FiMapPin, FiSearch, FiMail, FiPhone, FiEye, FiTrash, FiHelpCircle, FiUsers,
//   FiFlag, FiHome
// } from "react-icons/fi";
import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
import { FiInstagram,FiMapPin,FiSearch ,FiMail,FiPhone,FiEye,FiTrash,FiHelpCircle,FiUsers ,
FiFlag,FiHome} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import { useState } from 'react';
// import {Link} from "react-router-dom";
// //fetch or axios to send data to the backend
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
{/* https://chatgpt.com/c/68988233-8360-8333-ba48-4781795d770c */ }















function Section1({ imageId, title, text }) {
  return (

  <section>

            <div className='img1-title-description-home'>

        {/* {console.log(" Image URL:", imageId)} */}
<div>
        <img
          className="img1-home-sec1-sch"
          // src={imageId + '.jpg'} 
          // src={imageId}
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'}
          alt='productName'
        />
        </div>
            <div className='title-description-sec1-homeaa'>

          <h1>{title}</h1>
            {/* <h1>{title}</h1> */}
        {/* <p className="text-sec2-event ">{text} </p> */}
                        {/* <p className="description-sec2-event ">{description} </p> */}
        <p style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </p>

      </div>
            </div>

    </section>
  );
}


function Section2({ title, text }) {
  return (
    // <section className="profile">

    // <div className="profile-card">

 <section>
              <div className='img2-title-text-home'>

            <div className='title-text-sect2-home' >
        <div className='title-sec2-home '>{title}</div>
                    {/* <h1 className='title-sec1-event '>{title}</h1> */}
          {/* <div </br> className='lost' style={{ whiteSpace: "pre-line" }}>{lost.split("</br>").join("\n")}</div> */}
        <div className="text-sec2-home" style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </div>

        {/* <p className="text-sec1-event" style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </p> */}

      </div>
      <div>
        <img
          className="img2-home-sec2-sch"
          // src={imageId + '.jpg'} 
          // src={imageId}
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'}
          alt='productName'
        />
        </div>
                </div>
    </section>
  );
}






export default function Homesch() {

 const navigate = useNavigate();
  // const [showMore, setShowMore] = useState(false);
//   I replaced URL.createObjectURL(file) with FileReader().readAsDataURL, because only Base64 can be saved and restored from localStorage.
// On selecting → it saves the Base64 string into localStorage.
// On refresh → useEffect loads it back and sets it into state.
  const [image, setImage] = useState(null);
  // ✅ Load saved image from localStorage on refresh
  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 string
        localStorage.setItem("uploadedImage", reader.result); // ✅ save to localStorage
      };
      reader.readAsDataURL(file); // convert file → base64
    }
  };

  const openFilePicker = () => {
    document.getElementById("hiddenFileInput").click();
  };
  return (


    <div className="page">

 <div className="container-image-home">
  <div className="content-home">
<h2>Al Bader School </h2>
  </div>
  </div>
   <div>
        {/* Hidden input */}
        <input
          type="file"
          accept="image/*"
          id="hiddenFileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        {/* Button to trigger file picker */}
        <button onClick={openFilePicker}>Select Image</button>

        {/* Show selected image */}
        {image && (
          <div>
            <img src={image} alt="Selected" width="200" />
          </div>
        )}
      </div>
      {/* <div className="linkicons"> */}
      
        {/* <div className="icon1"> <img  src="https://cdn-icons-png.freepik.com/256/15047/15047435.png?semt=ais_hybrid"
    alt="" width="30px" height="30px"/>  </div> */}

        {/* <FaYoutube className="icons youtube"/> */}
        {/* <div className="cartwhatsbut">
          <div className="cartwhats">
            <Link to="/Talab9"><FaShoppingCart className="iconfaShoppingCart" /></Link>
            <FaWhatsapp className="iconfaWhatsapp" />

          </div>

          <Link to="/login" >
            <button className='btregistr'> تسجيل</button></Link>

        </div> */}
      {/* </div> */}



   {/* <div className="container-image">

  <div className="content">
<h2>Al Bader School </h2>
  </div>
  </div> */}


        {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}

    <div className="sect1home">

        <Section1
          title="أطلب منتجك"
           text='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'
       />
      </div>


    {/* <div className="sect1home">

        <Section1
          title="أطلب منتجك"
           text='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'
       />
      </div> */}


    </div>
  )
}


