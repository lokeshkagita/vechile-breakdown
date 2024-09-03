import './Login.css'
import { useNavigate, Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"


function Mlogin() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/mlogin",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/mhome",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }
    return(
        

        <div className="login">
             
        <div className='login1'><h1>Mechanic Login</h1>
        
     
        <form action="POST">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }}placeholder="Password"  />
        <input type="submit" value ="Login" onClick ={submit}/>

    </form>
    <br/>
    <Link to="/" className="login2">Login Page</Link>
     <br/>
     <Link to="/msignup" className="login2">M signup Page</Link>
    </div>
    </div>
    );
}
export default Mlogin;