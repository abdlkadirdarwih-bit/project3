







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
    <section >

      <div className='img1-title-description-about'>

        {/* {console.log(" Image URL:", imageId)} */}
        <div className='img-container ' >
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


function Section4({ imageId, title, name, description }) {
  return (
    // <section className="profile">

    // <div className="profile-card">
    <section className="section4">


      {/* {console.log(" Image URL:", imageId)} */}
      <div>
        <img
          className="img2-sect4-about-sch"
          src={imageId + '.jpg'}
          // src={imageId}
          // src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF8UhOkTG9alEkYKkzPfnlHawXQRXK15XUQ&s'}
          alt='productName'
        />
      </div>
      <div className='title-description-sec4-about'>

        <h1>  {title}</h1>
        <h2>  {name}</h2>

        {/* <h2></h2> */}
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
          <h2>مدرسة البدر للتربية والتعليم  </h2>
          <p>مؤسسة تربوية تعليمية، لا تتوخى الربح، مرخص لها من السلطة اللبنانية، بموجب قانون رقم 6384 تاريخ 23\2\1995 .</p>

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

          title="متى بدأت؟"
          description="مؤسسة تربوية تعليمية، لا تتوخى الربح، مرخص لها من السلطة اللبنانية، بموجب قانون رقم 6384 تاريخ 23\2\1995 
  وقد بدأ العمل  التدريسي في المدرسة في 1\10\1993، بعد أن تمكن مؤسس المدرسة وصاحبها الإستاذ عبدالله بدرالدين زكريا من تأمين العقار اللازم للبناء، وإعداد الملف القانوني للترخيص في أواخر العام 1992، وبدأ العمل في البناء، مع بدايات العام 1993 بتمويل خاص منه أيضا"
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

          title=" أصل المدرسة"
          description="في أواخر صيف 1993، تم بناء الطابق الأول. وتمّ تجهيزه بالأثاث المدرسي اللازم لإنطلاقة المدرسة. وبالفعل انطلق العمل في الأول من تشرين أول من العام ثلاثة وتسعين وتسعماية والف بإدارة المدير عبدالحكيم بدرالدين زكريا . "

        // bbb={item.bbb}

        // imageId={item.imageId}
        // title={item.title}
        // price={item.price}
        //  {...item}
        />
        <br />


        <Section3


          title=" تطور المدرسة"
          description=" أما بالنسبة لتسمية المدرسة بهذا الإسم أي مدرسة البدر للتربية والتعليم، فإن السبب في ذلك يعود لما لوالد المؤسس من فضل في مجال التعليم على بلدة فنيدق. فالسيد الشيخ بدرالدين محمد بكار زكريا يعتبر أول مدرس نظامي في المدرسة الرسمية التي أسست في فنيدق ومنطقة أعالي جرد القيطع، بسعي وجهد منه ومن والده الشيخ محمد بكار في العام 1946، مع معالي الوزير محمد عبود عبدالرزاق . وقد بقي الشيخ بدر مدرسا في المدرسة الرسمية حتى العام 1952 حيث أبعد لأسباب سياسية ، واستمر الشيخ الأستاذ في ممارسة المهنة مدرسا خصوصيا، إلى أن تمكن، وبعد سعي دؤوب، من تأسيس وفتح مدرسة جديدة في البلدة وبإدارته، تابعة للجنة تعليم أبناء المسلمين في القرى في أواخر العام 1958. وبدأ العمل في هذه المدرسة العام الدراسي 1958-1959. وفيما بعد انضوت هذه اللجنة بمدارسها بعد العام 1978 تحت جناح المؤسسة الأم جمعية المقاصد الخيرية الإسلامية في بيروت ، حيث بقي الوالد، الذي تعلم على يديه أجيال من فنيدق وجوارها، مديرا حتى أواخر العام 1983."


        />
        {/* <button className='buttontalab2'>          أطلب الان</button> */}

      </div>


      <div className="sect4-team-abouts">
        {/* <div className="title-talab2"><h1 >أطلب منتجك</h1></div> */}
        <div className="title-text-sec3-abouts">

          <h1>الإدارة</h1>
          <p>تعرف على أبرز موظفي وإداري المدرسة</p>
        </div>
        <div className="sect4about">


          <Section4
            title=" مدير"
            name="علي"
            description=" راحة وسهولة في كل مكان ! استمتع آمنةحيث يمكن  التوصيل السريع  في كل خطوة"
            imageId="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMuUrcxFoI9TYUSFEhWBr6cUXC_5853jqXQ&s"

          />


          <Section4
            title=" مساعد مدير"
            name="علي"

            description=" راحة وسهولة في كل مكان ! استمتع آمنةحيث يمكن  التوصيل السريع  في كل خطوة"
            imageId="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMuUrcxFoI9TYUSFEhWBr6cUXC_5853jqXQ&s"

          />
          {/* <button className='buttontalab2'>          أطلب الان</button> */}

          <Section4
            title=" محاسب"
            name="علي"
            description=" راحة وسهولة في كل مكان ! استمتع آمنةحيث يمكن  التوصيل السريع  في كل خطوة"
            imageId="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMuUrcxFoI9TYUSFEhWBr6cUXC_5853jqXQ&s"

          />

        </div>
      </div>


    </div>

  )
}


