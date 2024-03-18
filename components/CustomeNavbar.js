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


const CustomeNavbar = () => {
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
    <div style={{ position: 'relative' }}>
      <Navbar fluid rounded className='shadow-md'>
        <Link href="/" className="flex items-center">
          <Image src="/wear_coder_logo.png" width="60" height="500" alt="" className='rounded-xl' />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Codes Wear</span>
        </Link>
        <div onClick={toggleCartSidebar} className="flex md:order-2">
          <Button>
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
      <div ref={ref} style={{ position: 'absolute', top: 80, right: 0 }} className='sideCart transform transition-transform translate-x-full'>
        <Sidebar aria-label="Sidebar with multi-level dropdown example " >
          <span onClick={toggleCartSidebar} className='absolute right-3 top-21'><FaRegWindowClose /></span>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={BsCartPlusFill}>
                Shopping Cart
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Sidebar.Item href="#">Products</Sidebar.Item>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                <Sidebar.Item href="#">Shipping</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiInbox} className="">
                <span className="flex items-center">Tshirt
                  <CiCirclePlus className="ml-1" />
                  1
                  <CiSquareMinus className="ml-1" />
                </span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} className="">
                <span className="flex items-center">Tshirt
                  <CiCirclePlus className="ml-1" />
                  1
                  <CiSquareMinus className="ml-1" />
                </span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} className="">
                <span className="flex items-center">Hoodies
                  <CiCirclePlus className="ml-1" />
                  1
                  <CiSquareMinus className="ml-1" />
                </span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} className="">
                <span className="flex items-center">Mugs
                  <CiCirclePlus className="ml-1" />
                  1
                  <CiSquareMinus className="ml-1" />
                </span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} className="">
                <span className="flex items-center">Stickers
                  <CiCirclePlus className="ml-1" />
                  1
                  <CiSquareMinus className="ml-1" />
                </span>
              </Sidebar.Item>
              <div className='flex items-center'>
                <div className='mr-1'>
                <Button>
                  <div className='mr-1'>
                    <MdShoppingCartCheckout />
                  </div>
                  Checkout
                </Button>
                </div>
                <Button>
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
