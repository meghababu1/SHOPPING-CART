import React from 'react';
import './Main.css'
import { Product } from './Product';

export const Main = ({products, onAdd}) => {
    return (
        <div>
            <h1>..Product List..</h1>
            <div className="row">
            {
                products.map((product) => {
                    return ( 
                    <div className="col-sm-4">
                        <Product key = {product.id} product={product} onAdd = {onAdd} />
                    </div>
                    );
                })
            }
            </div>
        </div>
    );
};
