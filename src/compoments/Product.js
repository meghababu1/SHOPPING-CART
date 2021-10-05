import React from 'react'

export const Product = ({product,onAdd}) => {
    return (
        <div>
           <h3>{product.name}</h3> 
           <img src={product.image} width="150px" height="150px"/>
           <h6>{product.price}</h6>
           <button type="button" className="btn btn-success" onClick={()=>onAdd(product)}>Add to Cart</button>
        </div>
    )
}
