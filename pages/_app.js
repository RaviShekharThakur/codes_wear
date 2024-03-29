import CustomFooter from "@/components/CustomFooter";
import CustomeNavbar from "@/components/CustomeNavbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState(0)
  const router = useRouter()

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if(token){
      setUser({value: token})
      setKey(Math.random())
    }
  }, [router.query])

  const logout = ()=>{
    localStorage.removeItem("token")
    setUser({value: null})
    setKey(Math.random())
  }

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0
    let keys = Object.keys(myCart)
    for (let index = 0; index < keys.length; index++) {
      console.log(keys)
      subt += myCart[keys[index]].price * myCart[keys[index]].qty
    }
    setSubTotal(subt)
  }
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart) 
  }

  const buyNow = (itemCode, qty, price, name, size, variant)=>{
    let newCart = {itemCode: { qty: 1, price, name, size, variant }};
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    console.log(newCart)
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }


  return <>
    <CustomeNavbar logout={logout} user = {user } key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} buyNow = {buyNow} {...pageProps} />;
    <CustomFooter />
  </>
}
