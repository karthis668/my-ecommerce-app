/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext([]);

export const CartProvider = ({children})=>{
    // console.log(localStorage.getItem('cartItems'));
    const [cartItems,setCartItems] = useState([]);


// To add items to cart
    const addCart = (item) =>{
       const isItemInCart = cartItems.find((cartItem)=> cartItem.id === item.id);
        if(cartItems.length == 0){
        setCartItems([{...item,quantity : 1}]);
       }else if(isItemInCart){
        setCartItems(
            cartItems.map((cartItem=>{
                return cartItem.id === item.id ? {...cartItem,quantity: cartItem.quantity + 1} :
                cartItem
            }))
        )
       }
       else{
        setCartItems([...cartItems,{...item,quantity : 1}]);
       }

    }

    // TO remove cart Item from Cart
const removeCart = (item) => {
  console.log("Seleted Item:", item.quantity);

  if (item.quantity > 1) {
    setCartItems((prevCartitems) => {
      return prevCartitems.map((cartItem) => {
        return cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      });
    });
  }
  else {
    setCartItems((prevCartitems) => {
        return prevCartitems.filter((cartItem) => {
          return cartItem.id !== item.id
        });
      });
  }
};

console.log("after subtracting the cart Items:", cartItems )

    // To clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    useEffect( ()=>{
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    },[cartItems]);

    useEffect(()=>{
        const getItem = localStorage.getItem("cartItems");
        if(getItem){
            setCartItems(JSON.parse(getItem));
        }
    }, []);


// To getCart Count
    const cartCount = ()=>{
        return cartItems.length;
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };




    return (
        <CartContext.Provider value={{
            cartItems,
            addCart,
            removeCart,
            clearCart,
            cartCount,
            getCartTotal
        }}>{children}</CartContext.Provider>
    )

}