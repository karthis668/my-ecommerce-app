/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ()=>{
    const [cartItems,setCartItems] = useState(localStorage.getItem('cartItems'));


// To add items to cart
    const addCart = (item) =>{
       const isItemInCart = cartItems.find((cartItem)=> cartItem.id === item.id);
       if(isItemInCart){
        setCartItems(
            cartItems.map((cartItem=>{
                cartItem.id === item.id ? {...{cartItem},quantity: cartItem.quantity + 1} :
                cartItem
            }))
        )
       }
       else{
        setCartItems([...cartItems,{...item,quantity : 1}])
       }
    }

}