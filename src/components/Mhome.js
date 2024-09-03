import React, {Component} from 'react';
import { useEffect } from 'react';
import './Form.css'
import { useState } from 'react';
function Mhome (userData) {
const [data,setData] = useState([]);
 useEffect(() =>{
fetch("http://localhost:8000/getData",{
    method : "GET",
})

.then((res)=>res.json())
.then((data) => {
    console.log(data, "userData");
    setData(data.data)
});

},[]);

    return(

<div className = "conten">
<h4  align = "center">Mechanic orders</h4>

<br/>
<table width={500} border={1} align='center'>
<tr>
<th>Name</th>
<th>Model</th>
<th>Msg</th>
<th>Clocation</th>
<th>Number</th>
</tr>
{data.map(i=>{

    return (
        <tr border = "border">
            <td>{i.name}</td>
            <td>{i.model}</td>
            <td>{i.msg}</td>
            <td>{i.clocation}</td>
            <td>{i.number}</td>


        </tr>
    )
}
    
    )}

</table>

<br/>

<button align ='center' onClick={()=>alert('You have to communicate with the customer immediately through the phone number mentioned')}>Accept</button>
</div>




    )
}
export default Mhome;