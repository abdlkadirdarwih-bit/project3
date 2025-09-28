








// 1
// import React,{useState,useEffect}  from "react";
// import {useParams,useNavigate}  from "react-router-dom";
// import axios from 'axios'

 
// function UpdateUser() {
//   const{id}=useParams()
//     const[imageId,setImageId] = useState()
//   const [productName,setProductName] = useState("")
//   const [productPrice,setProductPrice] = useState("")
//   const [productQuantity,setProductQuantity] = useState("")
//     const [category, setCategory] = useState("");
  
//   const [isNewProduct, setIsNewProduct] = useState(false);
// const [unit, setUnit] = useState(""); // يتم جلبه من السيرفر

//   const navigate=useNavigate()
// // Fetch it from DB in useEffect:
//     useEffect(()=>{
//       axios.get('http://localhost:3001/getUser/'+id)
//       .then(result => {console.log(result)
//       setImageId(result.data.imageId)
//       setProductName(result.data.productName)
//      setProductPrice(result.data.productPrice)
//       setProductQuantity(result.data.productQuantity)
//      setIsNewProduct(result.data.isNewProduct); 
//       setUnit(result.data.unit) // ✅ جلب الوحدة

//     })
//       .catch(err => console.log(err))
//   },[])
// // Send it in update request:
//   const Update  = (e) => {
//     e.preventDefault();
//     axios.put("http://localhost:3001/updateUser/"+id, {imageId,productName,productPrice,productQuantity,  category,  isNewProduct  ,unit  
// })
//     // axios.put(`http://localhost:3001/updateUser/${id}`, { productName, productPrice, productQuantity })

//     .then(result => {
//       console.log(result)
//       navigate('/')
//    })
//       .catch(err => console.log(err))
  
//   }
//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={Update}>
//     <h2> Update User </h2>
//     <div className="mb-2">
//       <label htmlFor="">ProductName</label>
//       <input type="text" placeholder="Enter ProductName" className="form-control"
//       value = {productName}  onChange={(e) => setProductName(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">ProductPrice</label>
//       <input type="text" placeholder="Enter ProductPrice" className="form-control"
//       value = {productPrice}     onChange={(e) => setProductPrice(e.target.value)}/>
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
//       value = {productQuantity}     onChange={(e) => setProductQuantity(e.target.value)}/>
//     </div>
//      <div className="mb-2">
//       <label htmlFor="">ImageId</label>
//       <input type="text" placeholder="Enter ImageId" className="form-control"
//       value = {imageId}     onChange={(e) => setImageId(e.target.value)}/>
//     </div>
//     <select value={category} onChange={e => setCategory(e.target.value)}>


//   <option value="">اختر الفئة</option>
//   <option value="">  لأكثر مبيعًا  </option>
//   <option value="خضار وفواكه">خضار وفواكه</option>
//   <option value="معجنات">معجنات</option>
//   <option value="مشروبات">مشروبات</option>
// </select>
//     <div className="mb-2">
//   <label htmlFor="isNewProduct">منتج جديد؟</label>
//   <input 
//     type="checkbox" 
//     id="isNewProduct"
//     checked={isNewProduct} 
//     onChange={(e) => setIsNewProduct(e.target.checked)} 
//   />
// </div>

//     <button className="btn btn-success"> Update</button>
//   </form>
//   </div>
//   </div>
//   )
// }

//   export default UpdateUser;



import React,{useState,useEffect}  from "react";
import {useParams,useNavigate}  from "react-router-dom";
import axios from 'axios'

 
function UpdateEvent() {
  const{id}=useParams()
    // const [  imageId,setImageId] = useState()
    const [mainImage, setMainImage] = useState("");
const [images, setImages] = useState([""]); // up to 3 images(["", "", ""])
  const [date,setDate] = useState("")
  const [place,setPlace] = useState("")
  const [title ,setTitle] = useState("")
    const [ text,setText] = useState("")

  

  const navigate=useNavigate()
// Fetch it from DB in useEffect:
    useEffect(()=>{
      axios.get('http://localhost:3001/getUser/'+id)
      .then(result => {console.log(result)
      setMainImage(result.data.mainImage || "");
      setImages(result.data.images?.length ? result.data.images : [""]);
      // setImageId(result.data.imageId) 
      setDate(result.data.date)
     setPlace(result.data.place)
      setTitle(result.data.title )
            setText(result.data. text)
   
    })
      .catch(err => console.log(err))
  },[])
// Send it in update request:
  const Update  = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateEvent/"+id, {mainImage,
    images,date,place,title,text   
})
    // axios.put(`http://localhost:3001/updateUser/${id}`, { productName, productPrice, productQuantity })

    .then(result => {
      console.log(result)
      navigate('/')
   })
      .catch(err => console.log(err))
  
  }
  return (
    <div className="d-flex  justify-content-center align-items-center"
             style={{ width: "100vw", height: "100vh",backgroundColor:"blue" }}
>
 <div className="w-50 bg-white rounded p-3">
  <form onSubmit={Update}>
    <h2> Update Event </h2>
    <div className="mb-2">
      <label htmlFor="">date</label>
      <input type="text" placeholder="Enter date" className="form-control"
      value = {date}  onChange={(e) => setDate(e.target.value)}/>
    </div>

   <div className="mb-2">
      <label htmlFor="">place</label>
      <input type="text" placeholder="Enter place" className="form-control"
      value = {place}     onChange={(e) => setPlace(e.target.value)}/>
    </div>


       <div className="mb-2">
      <label htmlFor="">title </label>
      <input type="text" placeholder="Enter title " className="form-control"
      value = {title }     onChange={(e) => setTitle(e.target.value)}/>
    </div>
      <div className="mb-2">
      <label htmlFor=""> text</label>
      <input type="text" placeholder="Enter  text" className="form-control"
      value = { text}     onChange={(e) => setText(e.target.value)}/>
    </div>
     {/* <div className="mb-2">
      <label htmlFor="">ImageId</label>
      <input type="text" placeholder="Enter ImageId" className="form-control"
      value = {imageId}     onChange={(e) => setImageId(e.target.value)}/>
    </div> */}

{/* Main image */}
<div className="mb-2">
  <label>Main Image</label>
  <input
    type="text"
    placeholder="Enter main image URL"
    className="form-control"
    value={mainImage}
    onChange={(e) => setMainImage(e.target.value)


    }
  />
</div>

{/* Detail images */}
{/* {images.map((img, idx) => (
  <div className="mb-2" key={idx}>
    <label>Detail Image {idx + 1}</label>
    <input
      type="text"
      placeholder={`Enter image ${idx + 1} URL`}
      className="form-control"
      value={img}
      onChange={(e) => {
        const newImages = [...images];
        newImages[idx] = e.target.value;
        setImages(newImages);
      }}
    />
  </div>
))} */}

{/* Detail images */}
{images.map((img, idx) => (
  <div className="mb-2 d-flex align-items-center" key={idx}>
    <div className="flex-grow-1">
      <label>Detail Image {idx + 1}</label>
      <input
        type="text"
        placeholder={`Enter image ${idx + 1} URL`}
        className="form-control"
        value={img}
        onChange={(e) => {
          const newImages = [...images];
          newImages[idx] = e.target.value;
          setImages(newImages);
        }}
      />
    </div>
    {/* Delete button */}
    <button
      type="button"
      className="btn btn-danger btn-sm ms-2"
      onClick={() => {
        const newImages = images.filter((_, i) => i !== idx);
        setImages(newImages);
      }}
    >
      Delete
    </button>
  </div>
))}

{/* Add new image field */}
<button
  type="button"
  className="btn btn-primary btn-sm mt-2"
  onClick={() => setImages([...images, ""])}
>
  + Add Image
</button>


 
    <button className="btn btn-success"> Update</button>
  </form>
  </div>
  </div>
  )
}

  export default UpdateEvent;







  // 2

// import React,{useState,useEffect}  from "react";
// import {useParams,useNavigate}  from "react-router-dom";
// import axios from 'axios'

 
// function UpdateUser() {
//   const{id}=useParams()
//     const [  imageId,setImageId] = useState()
//   const [date,setDate] = useState("")
//   const [place,setPlace] = useState("")
//   const [title ,setTitle] = useState("")
//     const [ text,setText] = useState("")

//     const [category, setCategory] = useState("");
  
//   const [isNewProduct, setIsNewProduct] = useState(false);
// const [unit, setUnit] = useState(""); // يتم جلبه من السيرفر

//   const navigate=useNavigate()
// // Fetch it from DB in useEffect:
//     useEffect(()=>{
//       axios.get('http://localhost:3001/getUser/'+id)
//       .then(result => {console.log(result)
//       setImageId(result.data.imageId)
//       setDate(result.data.date)
//      setPlace(result.data.place)
//       setTitle(result.data.title )
//             setText(result.data. text)
//      setIsNewProduct(result.data.isNewProduct); 
//       setUnit(result.data.unit) // ✅ جلب الوحدة

//     })
//       .catch(err => console.log(err))
//   },[])
// // Send it in update request:
//   const Update  = (e) => {
//     e.preventDefault();
//     axios.put("http://localhost:3001/updateUser/"+id, {imageId,date,place,title ,  text,  isNewProduct  ,unit  
// })
//     // axios.put(`http://localhost:3001/updateUser/${id}`, { productName, productPrice, productQuantity })

//     .then(result => {
//       console.log(result)
//       navigate('/')
//    })
//       .catch(err => console.log(err))
  
//   }
//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={Update}>
//     <h2> Update User </h2>
//     <div className="mb-2">
//       <label htmlFor="">date</label>
//       <input type="text" placeholder="Enter date" className="form-control"
//       value = {date}  onChange={(e) => setDate(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">place</label>
//       <input type="text" placeholder="Enter place" className="form-control"
//       value = {place}     onChange={(e) => setPlace(e.target.value)}/>
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
//       value = {title }     onChange={(e) => setTitle(e.target.value)}/>
//     </div>
//       <div className="mb-2">
//       <label htmlFor=""> text</label>
//       <input type="text" placeholder="Enter  text" className="form-control"
//       value = { text}     onChange={(e) => setText(e.target.value)}/>
//     </div>
//      <div className="mb-2">
//       <label htmlFor="">ImageId</label>
//       <input type="text" placeholder="Enter ImageId" className="form-control"
//       value = {imageId}     onChange={(e) => setImageId(e.target.value)}/>
//     </div>
//     <select value={category} onChange={e => setCategory(e.target.value)}>


//   <option value="">اختر الفئة</option>
//   <option value="">  لأكثر مبيعًا  </option>
//   <option value="خضار وفواكه">خضار وفواكه</option>
//   <option value="معجنات">معجنات</option>
//   <option value="مشروبات">مشروبات</option>
// </select>
//     <div className="mb-2">
//   <label htmlFor="isNewProduct">منتج جديد؟</label>
//   <input 
//     type="checkbox" 
//     id="isNewProduct"
//     checked={isNewProduct} 
//     onChange={(e) => setIsNewProduct(e.target.checked)} 
//   />
// </div>

//     <button className="btn btn-success"> Update</button>
//   </form>
//   </div>
//   </div>
//   )
// }

//   export default UpdateUser;












//   import React,{useState,useEffect}  from "react";
// import {useParams,useNavigate}  from "react-router-dom";
// import axios from 'axios'

 
// function UpdateUser() {
//   const{id}=useParams()
//   const [name,setName] = useState()
//   const [email,setEmail] = useState()
//   const [age,setAge] = useState()
//   const navigate=useNavigate()

//     useEffect(()=>{
//       axios.get('http:localhost:3001/getUser/'+id)
//       .then(result => {console.log(result)
//       setName(result.data.name)
//      setEmail(result.data.email)
//       setAge(result.data.age)
//     })
//       .catch(err => console.log(err))
//   },[])

//   const Update  = (e) => {
//     e.preventDefault();
//     axios.put("http://localhost:3001/updateUser/"+id, {name,email,age})
//     .then(result => {
//       console.log(result)
//       navigate('/')
//    })
//       .catch(err => console.log(err))
  
//   }
//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={Update}>
//     <h2> Update User </h2>
//     <div className="mb-2">
//       <label htmlFor="">Name</label>
//       <input type="text" placeholder="Enter Name" className="form-control"
//       value = {name}  onChange={(e) => setName(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">Email</label>
//       <input type="text" placeholder="Enter Email" className="form-control"
//       value = {email}     onChange={(e) => setEmail(e.target.value)}/>
//     </div>

//        <div className="mb-2">
//       <label htmlFor="">Age</label>
//       <input type="text" placeholder="Enter Age" className="form-control"
//       value = {age}     onChange={(e) => setAge(e.target.value)}/>
//     </div>
//     <button className="btn btn-success"> Update</button>
//   </form>
//   </div>
//   </div>
//   )
// }

//  export default UpdateUser;






