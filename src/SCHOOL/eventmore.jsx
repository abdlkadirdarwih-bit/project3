

// https://themewagon.com/theme-tag/education-template/
// https://themewagon.github.io/edusite/contact.html
// https://themewagon.github.io/BabyCare/about.html
// https://themewagon.github.io/kiddy/
import { useState, useEffect } from "react";
// //fetch or axios to send data to the backend
// import axios from "axios";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import { inform } from './datasch.jsx';
// import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
// import {
//   FiInstagram, FiMapPin, FiSearch, FiMail, FiPhone, FiEye, FiTrash, FiHelpCircle, FiUsers,
//   FiFlag, FiHome
// } from "react-icons/fi";

// import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
// import { FiInstagram,FiMapPin,FiSearch ,FiMail,FiPhone,FiEye,FiTrash,FiHelpCircle,FiUsers ,
// FiFlag,FiHome} from "react-icons/fi";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// import { useState } from 'react';
// import {Link} from "react-router-dom";
// //fetch or axios to send data to the backend
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
{/* https://chatgpt.com/c/68988233-8360-8333-ba48-4781795d770c */ }














// function Section1({images = [], image1, image2, image3, title, text }) {
function Section1({images = [], title, text }) {
  return (

  <section >

            <div className='eventmore'>
  <div className='title-sec1-eventmore '>{title}
            {/* <h1>{title}</h1> */}
            </div>
        {/* {console.log(" Image URL:", imageId)} */}
{/* Images in flex row */}
   <div className='images-eventmore-sec1-sch'
  //  style={{ display: "flex", gap: "10px", flex: "1" }}
   >
    {images.length > 0 &&
    // images.map((img, idx) => (
    //         <img
    //           key={idx}
    //           className="img1-eventmoresch-sec1-sch"
    //           src={img}
    //           alt={`${title} ${idx + 1}`}
    //         />
    images.map((img, idx) => (
  <img key={idx}
  className="img1-eventmoresch-sec1-sch"
   src={`http://localhost:3001${img}`}
    alt={`Img ${idx}`}  />
          ))}

          {/* <img className="img1-eventmoresch-sec1-sch" src={image1} alt={title} /> */}
          {/* <img className="img1-eventmoresch-sec1-sch" src={image2} alt={title} />
          <img className="img1-eventmoresch-sec1-sch" src={image3} alt={title} />   */}
        {/* <img
          className="img1-event-sec1-sch"
          src={imageId + '.jpg'} 
          // src={imageId}
          // src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'}
          alt='title'
        /> */}
        
        </div>
            {/* <div className='title-description-home'> */}
        {/* <p className="text-sec2-event ">{text} </p> */}
                        {/* <p className="description-sec2-event ">{description} </p> */}
        {/* <div className="text-sec1-eventmore" style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")} </div> */}
        <div className="text-sec1-eventmore" >{text} </div>

      {/* </div> */}
            </div>

    </section>
  );
}

export default function Eventmoresch() {
// بس مبدئيًا: useLocation().state مو مضمون يظل بعد كل Refresh، لأن المتصفح أحيانًا يمسحه.
// لو بدك تضمن 100% إنه يظل:

// يا تخزّنه بـ localStorage عند التنقل.

  const location = useLocation();
  // const event = location.state?.event; // 👈 received from navigate
  const [event, setEvent] = useState(location.state?.event || null);

  // useEffect(() => {
  //   if (!event) {
  //     const stored = localStorage.getItem("selectedEvent");
  //     if (stored) {
  //       setEvent(JSON.parse(stored));
  //     }
  //   }
  //   {console.log("event data:", event)}

  // }, [event]);
  if (!event) {
    return <p>لا يوجد بيانات للفعالية.</p>;
  }


//  const navigate = useNavigate();
//   const [inform, setInform] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your backend API
// axios.get("http://localhost:3001/events")
//       .then((res) => {
//         console.log('see product :',res.data);  
//         setInform(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);
  return (


    <div className="page">

    <div className="sect1eventmore">

        <Section1
  //         title="أطلب منتجك"
  //       // imageId: '/assets/image-jonathan'

  //          text='  هل تبحث عن
  //                       هل تبحث عن منتج لم تجده في قائمتنا؟ نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا

  //           منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'
  // image1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s'
  //            image2= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s.jpg'

  //    image3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s'
     title={event.title}
          text={event.text}
          // image1={event.imageId}
          //           image2={event.imageId}
  images={event.images}

     />
      </div>

    </div>

  )

  //  const { id } = useParams();        // جلب :id من الرابط
  // const [event, setEvent] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/events/${id}`)
  //     .then(res => {
  //       setEvent(res.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error("❌ Error fetching event:", err);
  //       setLoading(false);
  //     });
  // }, [id]);

  // if (loading) return <p>Loading...</p>;
  // if (!event) return <p>Event not found</p>;

  // return (
  //   <div className="page">
  //     <section>
  //               <h1>صفحة تفاصيل الحدث</h1>

  //       <h2 className="title-sec1-eventmore">{event.title}</h2>

  //       <div className="images-eventmore-sec1-sch">
  //         <img
  //           className="img1-eventmoresch-sec1-sch"
  //           src={event.imageId}
  //           alt={event.title}
  //         />
  //       </div>

  //       <div className="text-sec1-eventmore" style={{ whiteSpace: "pre-line" }}>
  //         {event.text}
  //       </div>
  //     </section>
  //   </div>
  // );
}






//  const navigate = useNavigate();
//   const [inform, setInform] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your backend API
// axios.get("http://localhost:3001/events")
//       .then((res) => {
//         console.log('see product :',res.data);  
//         setInform(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);
//   return (



//     </div>

//   )
// }
// /https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJ7W0XflpiXsxduFZKt11bwALQ7LfN_YDGA&s
