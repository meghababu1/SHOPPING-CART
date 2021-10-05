import React from 'react';
import './Cart.css';

export const Cart = ({cartItems, onAdd, onRemove}) => {
    const itemPrice = cartItems.reduce((x,item)=>item.qty*item.price+x,0)
    const taxcharges = itemPrice*.15
    const shippingCharge = itemPrice>2000?50:0
    const totalprice = itemPrice+taxcharges+shippingCharge
    return (
        <div>
            <h1>..Cart..</h1>
            {cartItems.length ==0?"Cart is empty":""}
            {
                cartItems.map(item=>{
                    return(
                        <div>{item.name}
                        <p>{item.qty}</p>
                        <button  className="btn btn-success" onClick={()=>{onAdd(item)}}>+</button>
                        <button  className="btn btn-success" onClick={()=>{onRemove(item)}}>-</button>
                        <p>${item.qty * item.price}</p>
                        </div>
                    )
                })
            }
            {cartItems.length>0?
            <div>
            <h6>Tax Charges</h6> <div>{taxcharges.toFixed(3)}</div>
            <h6>Shipping Charge</h6> <div>{shippingCharge.toFixed(3)}</div>
            <h6>Total Price</h6> <div>{totalprice.toFixed(3)}</div> </div> : <></>
            }
        </div>
    )     
 }
