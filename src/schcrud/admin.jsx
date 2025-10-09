




import { useState, useEffect } from "react";
// //fetch or axios to send data to the backend
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";





function Section3({ images = [], mainImage, date, place, title, text }) {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    //  const handleMoreClick = () => {
    //     navigate("/eventmoresch", { state: { event: { imageId, date, place, title, text, } } });
    //   };
    const handleMoreClick = () => {
        const eventData = { images, mainImage, date, place, title, text };

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
                <img className="img2-event-sch" src={`http://localhost:3001${mainImage}`} alt="Main" />

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

export default function Admin() {

    //   const navigate = useNavigate();
    const [inform, setInform] = useState([]);
  const [contacts, setContacts] = useState([]);



    useEffect(() => {
        // Fetch data from your backend API
        axios.get("http://localhost:3001/")
            .then((res) => {
                console.log('see product :', res.data);
                setInform(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);



      useEffect(() => {
    axios.get("http://localhost:3001/contactschool")
      .then(res => {
        setContacts(res.data);
      })
      .catch(err => console.log(err));
  }, []);



    return (


        <div className="page">

<div className="page-admins">

   <div>
      <Link to="/create">
        <button className="btn-event">Add Event</button>
      </Link>
    </div>
    <div className="page-admin1">

<div className="page-admin2">



            <div className='sect3-admin'>
                {/* <div className="title-text-sec3-events">
    <div className='title-sec3-events '>  أنشطتنا</div>
       <div className="text-sec3-events"> بعض النشاطات التي تقوم بها مدرسة البدر 
</div></div> */}

                <div className="sect3admin">

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


<div className="contacts-table-messages-wrapper">
  <table className="contacts-table-messages">
    <thead className="thead-messages">
      <tr className="tr-messages">
        <th className="thead-messages-th">#</th>
        <th className="thead-messages-th">Full Name</th>
        <th className="thead-messages-th">Email </th>
        <th className="thead-messages-th">Title</th>
        <th className="thead-messages-th">Notes</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((c, idx) => (
        <tr key={idx} className="tr-messages">
          <td>{idx + 1}</td>
          <td>{c.fullname}</td>
          <td>{c.phonenumber}</td>
          <td>{c.titlename}</td>
          <td>{c.additionalnotes}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>
        </div>
        </div>

        </div>

    )
}


