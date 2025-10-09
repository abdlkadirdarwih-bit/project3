

import   "./Login.css";
import {useState} from"react";
import {Link} from "react-router-dom";
//fetch or axios to send data to the backend
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
      const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/loginsch', {email,password})
        .then(result => {
            console.log(result)
        if(result.data === "success")  {
              setEmail("");
        setPassword("");
            navigate('/admin')
        }
            })
        .catch(err=>console.log(err))
    }
    return(  

        // <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="page">
    <div className="login-school">
{/* <h1 className="login-h1">تسجيل دخول </h1> */}
<form onSubmit={handleSubmit} autoComplete="off"> 
   


          <div className="email-password-school">

<input


type="email"
placeholder="البريد الالكتروني "
// autoComplete="off"
name="email"  
className="login-email"
  value={email}

onChange={(e) => setEmail(e.target.value)}
      autoComplete="new-email"   // ✅ prevent autofill

/>

          <div className="">

<input
type="password"
placeholder="كلمة المرور "
// autoComplete="off"
name="password"  
className="login-password"
  value={password}

onChange={(e) => setPassword(e.target.value)}
    autoComplete="new-password" // stop autofill

/>
    </div>
        </div>

{/* <p>نسيت كلمة المرور؟</p> */}
<div className="create-register" >
<button type="submit" className="login-register">
تسجيل</button>
{/* <Link to="/register"  className="">انشاء حساب جديد ?</Link> */}
</div>
</form>

{/* <button type="submit" className="btn btn-default border w-100 bg-light rounded-0">
    Login
</button> */}
{/* <Link to="/login" className="btb tbn-default border w-100 bg-light rounded-o text-decoration-none">
Login
</Link> */}

</div>
 </div>
    );
}


export default Login;
