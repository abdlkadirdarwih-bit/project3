







import { useState } from 'react';

// import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
import {
  FiInstagram, FiMapPin, FiSearch, FiMail, FiPhone, FiEye, FiTrash, FiHelpCircle, FiUsers,
  FiFlag, FiHome
} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import { useState } from 'react';
// import {Link} from "react-router-dom";
// //fetch or axios to send data to the backend
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";














function Section1({ imageId, title, text }) {
  return (
    // <section className="profile">

    // <div className="profile-card">
    <section >

      {/* <img 
        src={productImage } 
        alt={productName} 
        className="avatar3"
      /> */}
      {/* {console.log(" Image URL:", imageId)} */}


      <div >

        <div className='title-sec1-about'>{title}</div>
        {/* <h1 className='title-sec1-event '>{title}</h1> */}
        {/* <div </br> className='lost' style={{ whiteSpace: "pre-line" }}>{lost.split("</br>").join("\n")}</div> */}
        <div className="text-sec1-about" style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </div>

        {/* <p className="text-sec1-event" style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </p> */}

      </div>
    </section>

  );
}



function Section2({ imageId, title, text, description }) {
  return (
    // <section className="profile">

    // <div className="profile-card">
    <section className='sect2aboutpar' >

      <div className='img1-title-description-about'>

        {/* {console.log(" Image URL:", imageId)} */}
        <div >
          <img className="img1-about-sec2-sch"
            // src={imageId + '.jpg'} 
            // src={imageId}
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMuUrcxFoI9TYUSFEhWBr6cUXC_5853jqXQ&s'}
            alt='productName'
          />
        </div>
        <div className='title-description-about'>

          {/* <div className='title-sec2-about '>{title} */}
          {/* <h1>{title}</h1> */}
          {/* </div> */}
          <h1>{title} </h1>
          {/* <p className="description-sec2-event ">{description} </p> */}
          <p style={{ whiteSpace: "pre-line" }}>{description.split("</br>").join("\n")} </p>

        </div>
      </div>

    </section>

  );
}



function Section3({ imageId, title, description }) {
  return (
    // <section className="profile">

    // <div className="profile-card">
    <section className="section3">


      {/* {console.log(" Image URL:", imageId)} */}

      {/* <img
          className="img1-event-sch"
          // src={imageId + '.jpg'} 
          // src={imageId}
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'}
          alt='productName'
        /> */}
      <div className='title-description-sec3-about'>

       <h1>{title}</h1>
          {/* <h1 className='title-sec3-about '>{title}</h1> */}
        {/* <p className="description-sec2-about ">{description} </p> */}
    <p style={{ whiteSpace: "pre-line" }}>{description.split("</br>").join("\n")} 

</p>          </div>

 </section>

  );
}


function Section4({ imageId, title, description }) {
  return (
    // <section className="profile">

    // <div className="profile-card">
    <section className="section4">


      {/* {console.log(" Image URL:", imageId)} */}
<div>
      <img
        className="img2-sect4-about-sch"
        // src={imageId + '.jpg'} 
        // src={imageId}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'}
        alt='productName'
      />
</div>
      <div className='title-description-sec4-about'>

        <h1>  {title}</h1>
          {/* <h1 className='title-sec3-about '>{title}</h1> */}
        {/* <p className="description-sec2-about ">{description} </p> */}
       <p style={{ whiteSpace: "pre-line" }}>{description.split("</br>").join("\n")}</p>
        </div>

    </section>

  );
}

export default function Aboutsch() {

  //   const navigate = useNavigate();

  return (


    <div className="page">


 <div className="container-image-about">

  <div className="content-about">
<h2>Al Bader School </h2>
  </div>
  </div>

      {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}

      {/* <div className='sect1aboutpar'>

      <div className="sect1about">

        <Section1
          title="أطلب منتجك"
           text='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'

       />
      </div>
      </div> */}



        <div className="sect2about">
          {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}

          <Section2
            // imageId: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s"
            //  imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'

            title="نتعلم طريقة ذكية لبناء مستقبل مشرق لأطفالك"
            description=" راحة وسهولة في كل مكان !</br> استمتع بتجربة تسوق سهلة وآمنةحيث يمكنك طلب منتجاتك المحلية المفضلة بكل سهولة عبر موقعنا الإلكتروني مع ضمان </br>التوصيل السريع والشفافية في كل خطوة"
          // bbb={item.bbb}

          // imageId={item.imageId}
          // title={item.title}
          // price={item.price}
          //  {...item}

          />
          {/* <button className='buttontalab2'>          أطلب الان</button> */}

        </div>





      <div className="sect3about">
        {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}

        <Section3
          // imageId: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s"
          //  imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'

          title="أطلب منتجك"
          description=" راحة وسهولة في كل مكان !</br> استمتع بتجربة تسوق سهلة وآمنةحيث يمكنك طلب منتجاتك المحلية   مع ضمان </br>التوصيل السريع والشفافية في كل خطوة"
        // bbb={item.bbb}

        // imageId={item.imageId}
        // title={item.title}
        // price={item.price}
        //  {...item}
        />
        <br />


        <Section3

          title="أطلب منتجك"
          description=" راحة وسهولة في كل مكان !</br> استمتع بتجربة تسوق سهلة وآمنةحيث يمكنك طلب منتجاتك المحلية المفضلة بكل سهولة عبر موقعنا الإلكتروني مع ضمان </br>التوصيل السريع والشفافية في كل خطوة"


        />
        {/* <button className='buttontalab2'>          أطلب الان</button> */}

      </div>


      <div className="sect4-team-abouts">
        {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}
  <div className="title-text-sec3-abouts">
    
<h1>فعاليتنا</h1>
         <p>نحن هنا لتلبية احتياجاتك ! إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا</p>
</div>
      <div className="sect4about">

        <Section4
          // imageId: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s"
          //  imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'
   title=" مسؤول"  
          description=" راحة وسهولة في كل مكان ! استمتع آمنةحيث يمكن  التوصيل السريع  في كل خطوة"
        // bbb={item.bbb}

        // imageId={item.imageId}
        // title={item.title}
        // price={item.price}
        //  {...item}
        />


        <Section4

          title=" مدرب"
          description=" راحة وسهولة في كل مكان ! استمتع آمنةحيث يمكن  التوصيل السريع  في كل خطوة"


        />
        {/* <button className='buttontalab2'>          أطلب الان</button> */}

        <Section4

          title=" مدير"

          description=" راحة وسهولة في كل مكان ! استمتع آمنةحيث يمكن  التوصيل السريع  في كل خطوة"


        />
      </div>
      </div>


    </div>

  )
}


