


import { useState, useEffect } from "react";
// //fetch or axios to send data to the backend
import axios from "axios";
// import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
import {
  FiInstagram, FiMapPin, FiSearch, FiMail, FiPhone, FiEye, FiTrash, FiHelpCircle, FiUsers,
  FiFlag, FiHome
} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { inform } from './datasch.jsx';

// import { useState } from 'react';
// import {Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";















function Section1({ imageId, title, text }) {
  return (
    // <section className="profile">

    // <div className="profile-card">
    <section>

      {/* <img 
        src={productImage } 
        alt={productName} 
        className="avatar3"
      /> */}
      {/* {console.log(" Image URL:", imageId)} */}


      <div >

        <div className='title-sec1-event '>{title}</div>
        {/* <h1 className='title-sec1-event '>{title}</h1> */}
        {/* <div </br> className='lost' style={{ whiteSpace: "pre-line" }}>{lost.split("</br>").join("\n")}</div> */}
        <div className="text-sec1-event" style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </div>

        {/* <p className="text-sec1-event" style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </p> */}

      </div>
    </section>

  );
}


function Section2({ imageId, title, text, description }) {
  return (
    // <section className="profile">

    // <div className="profile-card">
    <section >

      <div className='img1-title-description-event'>

        {/* {console.log(" Image URL:", imageId)} */}

        <div className='title-description-event'>

          <div className='title-sec2-event '>{title}
            {/* <h1>{title}</h1> */}
          </div>
          {/* <p className="text-sec2-event ">{text} </p> */}
          {/* <p className="description-sec2-event ">{description} </p> */}
          <div className="description-sec2-event" style={{ whiteSpace: "pre-line" }}>{description.split("</br>").join("\n")} </div>

        </div>
        <div>
          <img
            className="img1-event-sec2-sch"
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



function Section3({ images = [],mainImage, date,place,title, text }) {
  const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
//  const handleMoreClick = () => {
//     navigate("/eventmoresch", { state: { event: { imageId, date, place, title, text, } } });
//   };
const handleMoreClick = () => {
  const eventData = { images,mainImage, date, place, title, text };

  // save in localStorage
  // localStorage.setItem("selectedEvent", JSON.stringify(eventData));

  navigate("/eventmoresch", { state: { event: eventData } });
};

  return (
    <section>
      
      <div className="listitems-event">
        
        {/* <img
          className="img2-event-sch"
          src={imageId}
          alt={title}
        /> */}
        {/* <img className="img2-event-sch" src={imageId[0]} alt={title} /> */}
{/* <img className="img2-event-sch" src={mainImage} alt={title} /> */}
<img  className="img2-event-sch" src={`http://localhost:3001${mainImage}`} alt="Main" />

        <div className="place-title-sec3-event">
                  <div className="date-sec3-event">{date}</div>

         <div className="place-sec3-event">{place}</div>
</div>
        <div className="text-title-sec3-event">
         <div className="title-sec3-event">{title}</div>

        <div
          className="text-sec3-event"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: expanded ? "unset" : 2, // 👈 show 2 lines first
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >

          {text}
         {/* <p> {text}</p> */}
        </div>
        </div>

        <div
          // onClick={() => setExpanded(!expanded)}
                    onClick={handleMoreClick}

          style={{
            // marginTop: "4px",
            width: "90px",
            marginLeft: "20px",
            color: "blue",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          {/* {expanded ? " " : "  عرض المزيد "} */}
          عرض المزيد 
        </div>
      </div>
    </section>
  );
}



// function Section3({  imageId, date, place, title, text }) {
//   const navigate = useNavigate();

//   const handleMoreClick = () => {
//     navigate("/eventmore", { state: { event: { imageId, date, place, title, text, ...rest } } });
//   };
//   return (
//     <section>
//       <div className="listitems-event">
//         <img className="img2-event-sch" src={imageId} alt={title} />
//         <div className="place-title-sec3-event">
//           <div className="date-sec3-event">{date}</div>
//           <div className="place-sec3-event">{place}</div>
//         </div>
//         <div className="text-title-sec3-event">
//           <div className="title-sec3-event">{title}</div>
//           <div className="text-sec3-event">
//             {/* {text.substring(0, 100)}...  */}
//           </div>
//         </div>

//         <button
//           onClick={() => navigate(`/eventmore/${_id}`)}
//                     // onClick={() =>     navigate('/eventmore')}
//           className="btn-more"
//         >
//           عرض المزيد
//         </button>
//       </div>
//     </section>
//   );
// }


export default function Eventsch() {

  //   const navigate = useNavigate();
  const [inform, setInform] = useState([]);


  
  useEffect(() => {
    // Fetch data from your backend API
axios.get("http://localhost:3001/")
      .then((res) => {
        console.log('see product :',res.data);  
        setInform(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  return (


    <div className="page">

 <div className="container-image-event">

  <div className="content-event">
<h2>نشاطات مدرسة البدر  </h2>

  </div>
  </div>





        {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}

      {/* <div className="sect1event">

        <Section1
          title="أطلب منتجك"
          text='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'

        />
      </div> */}

      {/* <div className="sect2event">

        <Section2
          // imageId: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s"
          //  imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'

          title="فعاليتنا"

          description=" راحة وسهولة في كل مكان !</br>ل سهولة عبر موقعنا الإلكتروني مع ضمان </br>التوصيل السريع والشفافية في كل خطوة"
     
          // bbb={item.bbb}

        // imageId={item.imageId}
        // title={item.title}
        // price={item.price}
        //  {...item}
        />

      </div> */}
<div  className='sect3-events'>
  <div className="title-text-sec3-events">
    <div className='title-sec3-events '>  أنشطتنا</div>
       {/* <div className="text-sec3-events"> <p>نحن هنا لتلبية احتياجاتك ! إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا</p> */}
       <div className="text-sec3-events"> بعض النشاطات التي تقوم بها مدرسة البدر 
</div></div>


  {/* <div className="sect3event"> */}
        {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}
       
    
        {/* <button className='buttontalab2'>          أطلب الان</button> */}
        {/* <div className='activitiesh1'> <h1 >Activities</h1></div> */}

        <div className="sect3event">

          {inform.map((listsch) => (
           

            <Section3
              // imageId={item.imageId}
              // title={item.title}
              // name={item.title}
              {...listsch}
            />

          ))}
        </div>
      
        
      {/* </div> */}
</div>





    </div>

  )
}


