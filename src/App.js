
import './App.css';
import { Header } from './compoments/Header';
import { Main } from './compoments/Main';
import { Cart } from './compoments/Cart';
import data from './compoments/data';
import { useState } from 'react';

function App() {
  //const { products } = data 
  //data["products"]
  const [productlist,setProductList] = useState(data["products"])
  const [cartItems,setcartItem] = useState([])
  const no_of_cartitems = cartItems.length
  const onAdd=(product)=>{
    let exist = cartItems.find((item)=>item.id==product.id)
    if(exist){
      let updatedcart = cartItems.map((x)=>{
        return x.id==product.id?{...exist,qty:exist.qty+1}:{...x}
      });
      setcartItem(updatedcart)
    }
    else{
      setcartItem([...cartItems,{...product,qty:1}])
    }
  }
  const onRemove = (product) =>{
    console.log("cart item",product);
    if(product.qty == 1){
      let new_cartItems = cartItems.filter((item)=>{
        if(product.qty == 1){
          return item.id != product.id;
        }
      });
      setcartItem(new_cartItems);
      console.log(cartItems);  
    }else{
      let updated_items =cartItems.map((item)=>{
        return item.id == product.id?{...product,qty:product.qty-1}:{...item}
      })
      setcartItem(updated_items)
    }
  };
  return (
   <div>
     <Header length = {no_of_cartitems}/> <br/>
     <div className = "row block">
       <div className="col-sm-9">
         <Main onAdd = {onAdd} products = {productlist}/>
       </div>
       <div className="col-sm-3">
         <Cart cartItems = {cartItems} onAdd = {onAdd} onRemove = {onRemove}/>
       </div>  
     </div>
   </div>

  );
}

export default App;
