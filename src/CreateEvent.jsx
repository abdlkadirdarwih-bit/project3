
// // 1
// import React, { useState }  from "react";
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

// function CreateUser() {
//   const [imageId,setImageId] = useState()
// const [productName,setProductName] = useState()
// const [productPrice,setProductPrice] = useState()
// const [productQuantity,setProductQuantity] = useState()
//   const [category, setCategory] = useState("");
// const [count, setCount] = useState(1);
// const [unit, setUnit] = useState("pcs");      // وحدة المنتج

//   const [isNewProduct, setIsNewProduct] = useState(false);   // ✅ جديد أو لا

// const navigate=useNavigate()
// const submit = (e) => {
//   e.preventDefault();
//   axios.post("http://localhost:3001/createUser", {imageId,productName,productPrice,productQuantity,category,
//    count,unit,         

//       isNewProduct    // ✅ أرسلها للسيرفر

//   })
//   .then(result => {
//     console.log(result)
//       setProductName(prev => [...prev, result.data]);

//     // navigate('/')
//         navigate('/talab8') // ارجع على الصفحة اللي تعرض المنتجات

//  })
//     .catch(err => console.log(err))

// }

//   return (
//        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={submit}>
//     <h2>Add User</h2>
//     <div className="mb-2">
//       <label htmlFor="">ProductName</label>
//       <input type="text" placeholder="Enter Name" className="form-control"
//         onChange={(e) => setProductName(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">ProductPrice</label>
//       <input type="text" placeholder="Enter Email" className="form-control"
//               onChange={(e) => setProductPrice(e.target.value)}/>

//     </div>
// <div className="mb-2">
//   <label>وحدة المنتج</label>
//   <select value={unit} onChange={e => setUnit(e.target.value)} className="form-control">
//     <option value="pcs">قطعة</option>
//     <option value="kg">كيلو</option>
//   </select>
// </div>

//        <div className="mb-2">
//       <label htmlFor="">ProductQuantity</label>
//       <input type="text" placeholder="Enter ProductQuantity" className="form-control"
//                     onChange={(e) => setProductQuantity(e.target.value)}/>

//     </div>
//     <div className="mb-2">
//       <label htmlFor="">ImageId</label>
//       <input type="text" placeholder="Enter ImageId" className="form-control"
//                     onChange={(e) => setImageId(e.target.value)}/>

//     </div>
    
// {/* <div className="mb-2">
//   <label htmlFor="">Count</label>
//   <input
//     type="number"
//     min="1"
//     placeholder="Enter Count"
//     className="form-control"
//     onChange={(e) => setCount(Number(e.target.value))}
//   />
// </div> */}
//     <div className="mb-2 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               checked={isNewProduct}
//               onChange={(e) => setIsNewProduct(e.target.checked)} />
//             <label className="form-check-label">منتج جديد</label>
//           </div>
//      {/* <div>  <select onChange={e => setCategory(e.target.value)}>
//         <option value="">اختر الفئة</option>
//         <option value="خضار وفواكه">خضار وفواكه</option>
//         <option value="معجنات">معجنات</option>
//         <option value="مشروبات">مشروبات</option>
//       </select></div> */}
// <select value={category} onChange={e => setCategory(e.target.value)}>


//   <option value="">اختر الفئة</option>
//   <option value="خضار وفواكه">خضار وفواكه</option>
//   <option value="معجنات">معجنات</option>
//   <option value="مشروبات">مشروبات</option>
// </select>

//     <button className="btn btn-success"> Sumbit</button>
//   </form>
//   </div>
//   </div>
//   )
// }
// export default CreateUser;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function CreateEvent() {
//   const [mainImage, setMainImage] = useState("");
//   const [images, setImages] = useState([""]);

//   const [date, setDate] = useState("");
//   const [place, setPlace] = useState("");
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");

//   const navigate = useNavigate();

//   // Load saved images from localStorage on refresh
//   useEffect(() => {
//     const savedMain = localStorage.getItem("mainImage");
//     const savedImages = localStorage.getItem("images");
//     if (savedMain) setMainImage(savedMain);
//     if (savedImages) setImages(JSON.parse(savedImages));
//   }, []);

//   const handleMainImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setMainImage(reader.result);
//         localStorage.setItem("mainImage", reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // const handleImageChange = (index, e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       const newImages = [...images];
//   //       newImages[index] = reader.result;
//   //       setImages(newImages);
//   //       localStorage.setItem("images", JSON.stringify(newImages));
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };

//   // Handle image change for additional images
// const handleImageChange = (index, e) => {
//   const file = e.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const newImages = [...images];
//       newImages[index] = reader.result; // save Base64
//       setImages(newImages);
//       localStorage.setItem(
//         "images",
//         JSON.stringify(newImages.filter((img) => img !== ""))
//       ); // only save selected images
//     };
//     reader.readAsDataURL(file);
//   }
// };
//   const openFilePicker = (id) => {
//     document.getElementById(id).click();
//   };

//   // const submit = (e) => {
//   //   e.preventDefault();
//   //   axios
//   //     .post("http://localhost:3001/createEvent", {
//   //       mainImage,
//   //       images,
//   //       date,
//   //       place,
//   //       title,
//   //       text,
//   //     })
//   //     .then((result) => {
//   //       console.log("✅ Added successfully:", result.data);
//   //       navigate("/eventsch");
//   //     })
//   //     .catch((err) => console.log(err));
//   // };

//   // When submitting
// const submit = (e) => {
//   e.preventDefault();
//   // filter out empty strings
//   const filteredImages = images.filter((img) => img !== "");
//   axios
//     .post("http://localhost:3001/createEvent", {
//       mainImage,
//       images: filteredImages,
//       date,
//       place,
//       title,
//       text,
//     })
//     .then((result) => {
//       console.log("✅ Added successfully:", result.data);
//       navigate("/eventsch");
//     })
//     .catch((err) => console.log(err));
// };
//   return (
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}
//     >
//       <div className="w-50 bg-white rounded p-3">
//         <form onSubmit={submit}>
//           <h2>Add Event</h2>

//           <div className="mb-2">
//             <label>Date</label>
//             <input
//               type="text"
//               placeholder="Enter Date"
//               className="form-control"
//               onChange={(e) => setDate(e.target.value)}
//               value={date}
//             />
//           </div>

//           <div className="mb-2">
//             <label>Place</label>
//             <input
//               type="text"
//               placeholder="Enter Place"
//               className="form-control"
//               onChange={(e) => setPlace(e.target.value)}
//               value={place}
//             />
//           </div>

//           <div className="mb-2">
//             <label>Title</label>
//             <input
//               type="text"
//               placeholder="Enter Title"
//               className="form-control"
//               onChange={(e) => setTitle(e.target.value)}
//               value={title}
//             />
//           </div>

//           <div className="mb-2">
//             <label>Text</label>
//             <input
//               type="text"
//               placeholder="Enter Text"
//               className="form-control"
//               onChange={(e) => setText(e.target.value)}
//               value={text}
//             />
//           </div>

//           {/* Main Image */}
//           <div className="mb-2">
//             <label>Main Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               id="mainImageInput"
//               style={{ display: "none" }}
//               onChange={handleMainImageChange}
//             />
//             <button
//               type="button"
//               className="btn btn-sm btn-primary"
//               onClick={() => openFilePicker("mainImageInput")}
//             >
//               Select Main Image
//             </button>
//             {mainImage && (
//               <div>
//                 <img src={mainImage} alt="Main" width="200" />
//               </div>
//             )}
//           </div>

//           {/* Additional Images */}
//           <button
//             type="button"
//             className="btn btn-sm btn-primary mb-2"
//             onClick={() => setImages([...images, ""])}
//           >
//             + Add Image
//           </button>

//           {images.map((img, idx) => (
//             <div className="mb-2" key={idx}>
//               <label>Image {idx + 1}</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 id={`imageInput${idx}`}
//                 style={{ display: "none" }}
//                 onChange={(e) => handleImageChange(idx, e)}
//               />
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={() => openFilePicker(`imageInput${idx}`)}
//               >
//                 Select Image
//               </button>
//               {img && (
//                 <div>
//                   <img src={img} alt={`Img ${idx + 1}`} width="200" />
//                 </div>
//               )}
//               <button
//                 type="button"
//                 className="btn btn-sm btn-danger mt-1"
//                 onClick={() =>
//                   setImages(images.filter((_, i) => i !== idx))
//                 }
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <button className="btn btn-success mt-2">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateEvent;


import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [mainImageFile, setMainImageFile] = useState(null);
  const [imagesFiles, setImagesFiles] = useState([null]);

  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  // Previews for display
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [imagesPreviews, setImagesPreviews] = useState([""]);

  // Handle main image selection
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImageFile(file);
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle additional images
  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newFiles = [...imagesFiles];
      newFiles[index] = file;
      setImagesFiles(newFiles);

      const newPreviews = [...imagesPreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setImagesPreviews(newPreviews);
    }
  };

  const openFilePicker = (id) => {
    document.getElementById(id).click();
  };

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (mainImageFile) formData.append("mainImage", mainImageFile);

    imagesFiles.forEach((file) => {
      if (file) formData.append("images", file);
    });

    formData.append("date", date);
    formData.append("place", place);
    formData.append("title", title);
    formData.append("text", text);

    axios
      .post("http://localhost:3001/createEvent", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("✅ Event added successfully:", res.data);
        navigate("/eventsch");
      })
      .catch((err) => console.log(err));
  };



 


  return (
    <div className="page"
    >

<div className="contacts-table-create-event-page">
  <div className="contacts-table-create-event-container">
    <form onSubmit={submit} className="contacts-table-create-event-form">
      <h2 className="contacts-table-create-event-title">Add Event</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="التاريخ"
          className="form-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder=" المكان"
          className="form-input"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="العنوان "
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="الوصف "
          className="form-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Main Image */}
      <div className="form-group">
        <label>Main Image:</label>
        <input
          type="file"
          accept="image/*"
          id="mainImageInput"
          style={{ display: "none" }}
          onChange={handleMainImageChange}
        />
        <button
          type="button"
          className="btn-select"
          onClick={() => openFilePicker("mainImageInput")}
        >
          Select Main Image
        </button>
        {mainImagePreview && (
          <div className="image-preview">
            <img src={mainImagePreview} alt="Main" />
          </div>
        )}
      </div>

      {/* Additional Images */}
      <button
        type="button"
        className="btn-add-image"
        onClick={() => {
          setImagesFiles([...imagesFiles, null]);
          setImagesPreviews([...imagesPreviews, ""]);
        }}
      >
        + Add Image
      </button>

      {imagesFiles.map((file, idx) => (
        <div className="form-group" key={idx}>
          <label>Image {idx + 1}:</label>
          <input
            type="file"
            accept="image/*"
            id={`imageInput${idx}`}
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(idx, e)}
          />
          <button
            type="button"
            className="btn-select"
            onClick={() => openFilePicker(`imageInput${idx}`)}
          >
            Select Image
          </button>
          <button
            type="button"
            className="btn-remove"
            onClick={() => {
              setImagesFiles(imagesFiles.filter((_, i) => i !== idx));
              setImagesPreviews(imagesPreviews.filter((_, i) => i !== idx));
            }}
          >
            Remove
          </button>
          {imagesPreviews[idx] && (
            <div className="image-preview">
              <img src={imagesPreviews[idx]} alt={`Img ${idx + 1}`} />
            </div>
          )}
        </div>
      ))}

      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  </div>
</div>






</div>

  );
}

export default CreateEvent;

// 2
// import React, { useState }  from "react";
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

// function CreateUser() {
//   const [imageId,setImageId] = useState()
// const [date,setDate] = useState()
// const [place,setPlace] = useState()
// const [title ,setTitle] = useState()
// const [ text,setText] = useState()

//   const [category, setCategory] = useState("");
// const [count, setCount] = useState(1);
// const [unit, setUnit] = useState("pcs");      // وحدة المنتج

//   const [isNewProduct, setIsNewProduct] = useState(false);   // ✅ جديد أو لا

// const navigate=useNavigate()
// const submit = (e) => {
//   e.preventDefault();
//   axios.post("http://localhost:3001/createUser", {imageId,date,place,title, text,

//           // ✅ أرسلها للسيرفر

//   })
//   .then(result => {
//     console.log(result)
//       setTitle(prev => [...prev, result.data]);

//     // navigate('/')
//         navigate('/eventsch') // ارجع على الصفحة اللي تعرض المنتجات

//  })
//     .catch(err => console.log(err))

// }

//   return (
//        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={submit}>
//     <h2>Add User</h2>
//     <div className="mb-2">
//       <label htmlFor="">date</label>
//       <input type="text" placeholder="Enter Name" className="form-control"
//         onChange={(e) => setDate(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">place</label>
//       <input type="text" placeholder="Enter place" className="form-control"
//               onChange={(e) => setPlace(e.target.value)}/>

//     </div>
// <div className="mb-2">
//   <label>وحدة المنتج</label>
//   <select value={unit} onChange={e => setUnit(e.target.value)} className="form-control">
//     <option value="pcs">قطعة</option>
//     <option value="kg">كيلو</option>
//   </select>
// </div>

//        <div className="mb-2">
//       <label htmlFor="">title </label>
//       <input type="text" placeholder="Enter title " className="form-control"
//                     onChange={(e) => setTitle(e.target.value)}/>

//     </div>
//            <div className="mb-2">
//       <label htmlFor=""> text</label>
//       <input type="text" placeholder="Enter text" className="form-control"
//                     onChange={(e) => setText(e.target.value)}/>

//     </div>
//     <div className="mb-2">
//       <label htmlFor="">ImageId</label>
//       <input type="text" placeholder="Enter ImageId" className="form-control"
//                     onChange={(e) => setImageId(e.target.value)}/>

//     </div>
    
// {/* <div className="mb-2">
//   <label htmlFor="">Count</label>
//   <input
//     type="number"
//     min="1"
//     placeholder="Enter Count"
//     className="form-control"
//     onChange={(e) => setCount(Number(e.target.value))}
//   />
// </div> */}
//     <div className="mb-2 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               checked={isNewProduct}
//               onChange={(e) => setIsNewProduct(e.target.checked)} />
//             <label className="form-check-label">منتج جديد</label>
//           </div>
//      {/* <div>  <select onChange={e => setCategory(e.target.value)}>
//         <option value="">اختر الفئة</option>
//         <option value="خضار وفواكه">خضار وفواكه</option>
//         <option value="معجنات">معجنات</option>
//         <option value="مشروبات">مشروبات</option>
//       </select></div> */}
// <select value={category} onChange={e => setCategory(e.target.value)}>


//   <option value="">اختر الفئة</option>
//   <option value="خضار وفواكه">خضار وفواكه</option>
//   <option value="معجنات">معجنات</option>
//   <option value="مشروبات">مشروبات</option>
// </select>

//     <button className="btn btn-success"> Sumbit</button>
//   </form>
//   </div>
//   </div>
//   )
// }
// export default CreateUser;









// 1
// import React, { useState }  from "react";
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'
// // You want CreateUser.jsx to update this setProducts directly.
// // To do that, pass setProducts as a prop to CreateUser.
// function CreateUser({ setProducts }) {  // receive setProducts from parent
//   const [imageId, setImageId] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [productQuantity, setProductQuantity] = useState("");
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();

//     const newProduct = { imageId, productName, productPrice, productQuantity };

//     axios.post("http://localhost:3001/createUser", newProduct)
//       .then(res => {
//         console.log("✅ Added:", res.data);

//         // 1️⃣ Update Talab8 UI instantly
//         setProducts(prev => [...prev, res.data]);

//         // 2️⃣ Optional: navigate back
//         navigate('/talab8');
//                 // navigate('/');

//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded p-3">
//         <form onSubmit={submit}>
//           <h2>Add Product</h2>
//           <input placeholder="Product Name" className="form-control" onChange={e => setProductName(e.target.value)} />
//           <input placeholder="Product Price" className="form-control" onChange={e => setProductPrice(e.target.value)} />
//           <input placeholder="Product Quantity" className="form-control" onChange={e => setProductQuantity(e.target.value)} />
//           <input placeholder="Image URL" className="form-control" onChange={e => setImageId(e.target.value)} />
//           <button className="btn btn-success">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
//  export default CreateUser;






// import React, { useState }  from "react";
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'
// function  CreateUser() {
// const [name,setName] = useState()
// const [email,setEmail] = useState()
// const [age,setAge] = useState()
// const navigate=useNavigate()

// const submit  = (e) => {
//   e.preventDefault();
//   axios.post("http://localhost:3001/create", {name,email,age})
//   .then(result => {
//     console.log(result)
//     navigate('/nn')
//  })
//     .catch(err => console.log(err))

// }
//   return (
//        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={submit}>
//     <h2>Add User</h2>
//     <div className="mb-2">
//       <label htmlFor="">Name</label>
//       <input type="text" placeholder="Enter Name" className="form-control"
//         onChange={(e) => setName(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">Email</label>
//       <input type="text" placeholder="Enter Email" className="form-control"
//               onChange={(e) => setEmail(e.target.value)}/>

//     </div>

//        <div className="mb-2">
//       <label htmlFor="">Age</label>
//       <input type="text" placeholder="Enter Age" className="form-control"
//                     onChange={(e) => setAge(e.target.value)}/>

//     </div>
//     <button className="btn btn-success"> Sumbit</button>
//   </form>
//   </div>
//   </div>
//   )
// }
// export default CreateUser;






