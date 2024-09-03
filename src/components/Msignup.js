import './Signup.css'
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Msignup(){
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [location,setLocation]=useState('')
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/msignup",{
                email,password,location
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/mhome",{state:{id:email}})
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

            <div className="login1"><h1>Mechanic signup</h1>

            <form>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password"onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="location" onChange={(e) => { setLocation(e.target.value) }} placeholder="location in axes" />
                <input type="submit" value ="Signup"onClick={submit} />

            </form>
            <br/>
            <Link to="/mlogin" className='login2'>mlogin page</Link>
            </div>
            </div>
);
}
export default Msignup;