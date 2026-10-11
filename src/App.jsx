import React, {useState} from "react";
import "./App.css";


export default function App()
{

  let[quantity,setQuantity] = useState(0)
  const price = 20;

  function handelAdd()
  {
    setQuantity(1)
  }

  function increaseQuantity(){
    setQuantity((previosQuantity) =>(previosQuantity + 1))
  }

 function decreaseQuantiy(){
  setQuantity((previosQuantity) => Math.max(0, previosQuantity - 1))
 }

  return(

    <div className="container">
      <div className="Card">
        
        <div className="card-header">
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/rc-upload-1780634830965-687.png" alt="" />
           <span>⏱ 8 mins</span>
        </div>

        <div className="card-body">
          <h2>Kurkure Masala Munch Crisps</h2>
          <p>75g</p>
          <p>Price: {price}</p>

          <p className="total-price" >
            Total ₹{price * quantity}
          </p>

        </div>

        <div className="card-footer">
         

           {quantity === 0 ? (
           <button onClick={handelAdd} >Add</button>
           ):(

            <div className="quantity-control" >

              <button onClick={decreaseQuantiy}>-</button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity} >+</button>              

            </div>

           )}
        
        </div>
      
      </div>
    </div>


  )


}