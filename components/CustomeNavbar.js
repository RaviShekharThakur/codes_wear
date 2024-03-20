'use client';

import React, { useRef } from 'react'
import Link from 'next/link';
import { Button, Navbar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import Image from "next/image";
import { BsCartPlusFill } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { PiTShirtFill, PiHoodieFill } from "react-icons/pi";
import { BiSolidSticker } from "react-icons/bi";
import { FaBeerMugEmpty } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import { CiCirclePlus, CiSquareMinus } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";


const CustomeNavbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
  const toggleCartSidebar = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }

  const ref = useRef()

  return (
    <div className='sticky top-0 bg-white'>
      <Navbar fluid rounded className='shadow-md '>
        <Link href="/" className="flex items-center">
          <Image src="/wear_coder_logo.png" width="60" height="500" alt="" className='rounded-xl' />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Codes Wear</span>
        </Link>
        <div  className="flex md:order-2 ">
        <Link href={"/login"}><RiAccountBoxLine className='text-3xl mt-2 mr-3 cursor-pointer'/></Link>
          <Button onClick={toggleCartSidebar}>
            <BsCartPlusFill />
            Cart
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link href="/" active className="flex items-center" >
            <RiHome7Fill />Home
          </Link>
          <Link href="/tshirts" className="flex items-center"><PiTShirtFill />Tshirts</Link>
          <Link href="/hoodies" className="flex items-center"><PiHoodieFill />Hoodies</Link>
          <Link href="/stickers" className="flex items-center"><BiSolidSticker />Stickers</Link>
          <Link href="/mugs" className="flex items-center"><FaBeerMugEmpty />Mugs</Link>
        </Navbar.Collapse>
      </Navbar>
      <div ref={ref} style={{ position: 'absolute', top: 80, right: 0, zIndex: 9  }} className={`sideCart transform transition-transform ${Object.keys(cart).length != 0 ? 'translate-x-0' : 'translate-x-full'} `}>
        <Sidebar aria-label="Sidebar with multi-level dropdown example " >
          <span onClick={toggleCartSidebar} className='absolute right-3 top-21'><FaRegWindowClose /></span>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={BsCartPlusFill}>
                Shopping Cart
              </Sidebar.Item>
              {Object.keys(cart).length == 0 && <div className='my-4 text-base'>Your cart is empty</div>}
              {Object.keys(cart).map((k) => {
                return <Sidebar.Item href="#" key={k} icon={HiInbox} className="">
                  <span className="flex items-center">{cart[k].name}
                    <CiSquareMinus className="ml-1" onClick={() => {
                      removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)
                    }} />
                    {cart[k].qty}
                    <CiCirclePlus className="ml-1" onClick={() => {
                      addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)
                    }} />
                  </span>
                </Sidebar.Item>
              })}
              <div className="subtotal font-bold mt-12">Subtotal: {subTotal}</div>
              <div className='flex items-center'>
                <div className='mr-1'>
                  <Link href={"/checkout"}>
                    <Button>
                      <div className='mr-1'>
                        <MdShoppingCartCheckout />
                      </div>
                      Checkout
                    </Button>
                  </Link>
                </div>
                <Button onClick={clearCart}>
                  <div className='mr-1'>
                    <MdOutlineRemoveShoppingCart />
                  </div>
                  Clear
                </Button>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  )
}

export default CustomeNavbar
