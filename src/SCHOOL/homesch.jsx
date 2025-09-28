// https://themewagon.com/theme-tag/education-template/
// https://themewagon.github.io/edusite/contact.html
// https://themewagon.github.io/BabyCare/about.html
// https://themewagon.github.io/kiddy/
import { useState } from 'react';

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
            <div className='title-description-sec1-home'>

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
        <h1>{title}</h1>
                    {/* <h1 className='title-sec1-event '>{title}</h1> */}
          {/* <div </br> className='lost' style={{ whiteSpace: "pre-line" }}>{lost.split("</br>").join("\n")}</div> */}
        <p style={{ whiteSpace: "pre-line" }}>{text.split("</br>").join("\n")}</p>

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




function Section3({ imageId, title, text }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate("/eventsch"); // ✅ go to page without id
  };

  return (
    <section>
      <div className="listitems">
        <img className="img2sch" src={imageId} alt={title} />

        <div className="title-sec3-home">{title}</div>

        <div
          className="text-sec3-home"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: expanded ? "unset" : 2, // 👈 show 2 lines first
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {text}
        </div>

        <div
          onClick={handleMoreClick}
          style={{
            width: "90px",
            marginLeft: "20px",
            color: "blue",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          عرض المزيد
        </div>
      </div>
    </section>
  );
}




// function Section3({ imageId, title, text }) {
//   return (
//     // <section className="profile">
//     //   <div className="profile-card">
//     <section>
//       <div className='listitems'>
//         {/* <img 
//         src={productImage } 
//         alt={productName} 
//         className="avatar3"
//       /> */}
//         {/* {console.log(" Image URL:", imageId)} */}

//         <img
//           className="avatar2sch"
//           // src={imageId + '.jpg'} 
//           src={imageId}
//           alt='productName'
//         /><hr/>
//         <div className='title-sec3-home'>{title}</div><hr/>
//              <div className='text-sec3-home'>{text}</div><hr/>

//       </div>
//     </section>

//   );
// }

// function handleMoreClick() {
//   setShowMore(!showMore);
// }
export default function Homesch() {

  //  const listItems = inform.map(listsch =>
  //     <li key={listsch.id}>
  //       {/* <img
  //         src={getImageUrl(person)}
  //         alt={sect3sch.name}
  //       /> */}
  //     <div className='listitems'>
  //     {/* <div> */}
  //        <img
  //           className="avatar2sch"
  //           // src={imageId + '.jpg'} 
  //           src={listsch.imageId}

  //           alt='name'

  //         />
  //         <hr/>
  //         <div className=''>{listsch.title}</div>        <hr/>
  //         <p className="">{listsch.text} </p>
  //         </div>
  //       {/* <p>
  //         <b>{sect3sch.name}:</b>
  //         {' ' + person.profession + ' '}
  //         known for {person.accomplishment}
  //       </p> */}
  //     </li>
  //   );
  const navigate = useNavigate();
  // const [showMore, setShowMore] = useState(false);

  return (


    <div className="page">

 <div className="container-image-home">
  <div className="content-home">
<h2>Al Bader School </h2>
  </div>
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



   <div className="sect2home">
        <Section2
  //         // imageId: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s"
  //         //  imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'

           title="عنوان"
       text='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'
  //         // description=" راحة وسهولة في كل مكان !</br> استمتع بتجربة تسوق سهلة وآمنةحيث يمكنك طلب منتجاتك المحلية المفضلة بكل سهولة عبر موقعنا الإلكتروني مع ضمان </br>التوصيل السريع والشفافية في كل خطوة"
        />

       </div>


      <div className="sect3-homes">
        {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}

        {/* <Section3
            imageId="szV5sdG"
            title="szV5sdG"
            text="szV5sdG"
          // bbb={item.bbb}

          // imageId={item.imageId}
          // title={item.title}
          // price={item.price}
          //  {...item}

          /> */}
        {/* <button className='buttontalab2'>          أطلب الان</button> */}
        {/* <div className='activitiesh1'> <h1 >Activities</h1></div> */}

        <div className="sect3home">

          {inform.map((listsch) => (
            // <Link 
            // className='link'
            //   key={index} 
            //   to="/talab6" 
            //   state={{ category: item.title }} // ✅ نمرر الفئة
            // >     

            <Section3
              // imageId={item.imageId}
              // title={item.title}
              // name={item.title}
              {...listsch}
            />
            // </Link>

          ))}
              
        </div>
    <button className="but-show-sch-home" onClick={() => navigate("/eventsch")}
        >عرض المزيد  </button>
     
      </div>


   {/*    <div  >
      <ul>{listItems}</ul>
      </div> */}

     



    </div>

  )
}



// <div className="page3">
//       <div >
//         <div className="title-talab2"><h1 >أطلب منتجك</h1></div>

//         <Profile2
//           // title="Verified Graduate1"
//           // lost=" "

//           // lost='    نحن هنا لتلبية احتياجاتك   إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا  </br>  هل تبحث عن منتج لم تجده في قائمتنا؟'
//           lost='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'

//         // but="أطلب الان"

//         />
//       </div>
//       {/* <button className='buttontalab2'>          أطلب الان</button> */}

//     </div>


// <div className="page3">
//         <div className="title-talab2"><h1 >أطلب منتجك</h1></div>
//         {/* <Profile2
//           // title="Verified Graduate1"
//           // lost=" "

//           // lost='    نحن هنا لتلبية احتياجاتك   إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا  </br>  هل تبحث عن منتج لم تجده في قائمتنا؟'
//           lost='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'

//         // but="أطلب الان"

//         /> */}
//         <Section1
//           imageId="szV5sdG"
//           title="szV5sdG"
//           text="szV5sdG"
//         // bbb={item.bbb}

//         // imageId={item.imageId}
//         // title={item.title}
//         // price={item.price}
//         //  {...item}

//         />
//       {/* <button className='buttontalab2'>          أطلب الان</button> */}

//     </div>

// <div className="page3">
//         <div className="title-talab2"><h1 >أطلب منتجك</h1></div>
//         {/* <Profile2
//           // title="Verified Graduate1"
//           // lost=" "

//           // lost='    نحن هنا لتلبية احتياجاتك   إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا  </br>  هل تبحث عن منتج لم تجده في قائمتنا؟'
//           lost='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'

//         // but="أطلب الان"

//         /> */}
//         <Section2
//           imageId="szV5sdG"
//           title="szV5sdG"
//           text="szV5sdG"
//         // bbb={item.bbb}

//         // imageId={item.imageId}
//         // title={item.title}
//         // price={item.price}
//         //  {...item}

//         />
//       {/* <button className='buttontalab2'>          أطلب الان</button> */}

//     </div>