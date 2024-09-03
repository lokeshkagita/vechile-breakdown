import React,{useState} from 'react'
import './Form.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


export default function Bookings() {
    const navigate = useNavigate();
const [currLocationJs,setCurrLocationJs] = useState({});
useEffect(()=> {
    getLocationJs();
},[]);
const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) =>{
        const {latitude,longitude} = position.coords;
        setCurrLocationJs({latitude,longitude});
    });
}

    const[name,setName]=useState('')
    const[model,setModel]=useState('')
    const[msg,setMsg]=useState('')
    const[clocation,setClocation]=useState('')
    const[number,setNumber]=useState('')
    let submit = async(e)=>{
        e.preventDefault()
        try{

            await axios.post("http://localhost:8000/bookings",{
                name,model,msg,clocation,number
            })
        }
        catch(e){

        console.log(e);
        }
        alert('If mechanic wont contact you refresh the current form and try again')
     }

    return(
        <div className='conte' align = "center">

            <form action='POST' >
                
<input type ="text" onChange = {(e)=>{setName(e.target.value)}} placeholder='name' />
<br/>
<input type ="text"onChange = {(e)=>{setModel(e.target.value)}} placeholder='car model'/>
<br/>
<input type ="text" onChange = {(e)=>{setMsg(e.target.value)}} placeholder='problem' />
<br/>
<input type ="text" onChange = {(e)=>{setClocation(e.target.value)}} placeholder='location' />
<br/>
<input type="text" onChange = {(e)=>{setNumber(e.target.value)}} placeholder='mobile number' />
<br/>
<input type ="submit" onClick={submit} value="Submit"/>
<br/>
<h5>Location</h5>

<p>Location :  {currLocationJs.latitude},{currLocationJs.longitude}</p>

<button onClick={() =>navigate("/message")}> Message </button>
<br/>
<p>(Note : User have to copy and paste the given location into the appropriate form)</p>
</form>

        </div>
        
                
    )
}