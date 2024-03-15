'use client';

import React from 'react'
import Link from 'next/link';
import {Button, Navbar } from 'flowbite-react';
import Image from "next/image";
import { BsCartPlusFill } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { PiTShirtFill, PiHoodieFill } from "react-icons/pi";
import { BiSolidSticker } from "react-icons/bi";
import { FaBeerMugEmpty } from "react-icons/fa6";


const CustomeNavbar = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Link href="/about"  className="flex items-center">
            <Image src="/wear_coder_logo.png" width="60" height="500" alt="" className='rounded-xl'/>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Codes Wear</span>
        </Link>
        <div className="flex md:order-2">
          <Button>
            <BsCartPlusFill />
              Cart
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active className="flex items-center" >
            <RiHome7Fill />Home
          </Navbar.Link>
          <Link href="/"className="flex items-center"><PiTShirtFill />Tshirts</Link>
          <Link href="/"className="flex items-center"><PiHoodieFill />Hoodies</Link>
          <Link href="/"className="flex items-center"><BiSolidSticker />Stickers</Link>
          <Link href="/"className="flex items-center"><FaBeerMugEmpty />Mugs</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default CustomeNavbar
