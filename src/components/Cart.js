import React from "react";
import { useState } from "react";
import { Card,Button } from "react-bootstrap";
import { cartData } from "./cartData";
function Cart () {
const [items,setItems] = useState(cartData); 

    return(
        <div>
          <h1 className="bg-warning text-white" align ="center"> Products</h1>
            <br/>
            {items.map((item)=>(
              <div className="d-inline-flex">
        <Card className ="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
        <Card.Img className="p-3"
        style={{height: '16rem' }}
        variant="top" src= {require(`./Asset/${item.name1}.png`)} />
        <Card.Body align = "center">
           <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.model}
          </Card.Text>
          <h5> Price : {item.price}</h5>
          <Button variant="primary" href="www.google.com">buy on site</Button>
        </Card.Body>
      </Card>
      </div>




            ))}

      </div>



    )
}

export default Cart;