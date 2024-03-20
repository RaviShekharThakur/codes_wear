'use client';

import React from 'react'
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import Link from 'next/link';

import { CiCirclePlus, CiSquareMinus } from "react-icons/ci";




const Checkout = ({ cart, subTotal, removeFromCart, addToCart }) => {
  return (
    <div className='container m-auto justify-center z-10'>
      <h1 className='font-bold text-center text-3xl my-8'>Checkout page</h1>
      <h2 className='font-bold text-xl my-4'>Delivery Details</h2>
      <div className="mx-auto flex">
        <div className='px-2 w-1/2'>
          <div className="mb-2 ">
            <Label htmlFor="name" value="Name" />
            <TextInput id="name" name='name' type="text" sizing="lg" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="mb-2 ">
            <Label htmlFor="email" value="Email" />
            <TextInput id="email" name='email' type="text" sizing="lg" />
          </div>
        </div>
      </div>
      <div className='px-2 w-full'>
        <div className="mb-2 ">
          <Label htmlFor="address" value="Address" />
          <Textarea id="address" name='address' placeholder="Enter Your Address" required rows={2} />
        </div>
      </div>
      <div className="mx-auto flex">
        <div className='px-2 w-1/2'>
          <div className="mb-2 ">
            <Label htmlFor="phone" value="Phone" />
            <TextInput id="phone" name='phone' type="phone" sizing="lg" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="mb-2 ">
            <Label htmlFor="city" value="City" />
            <TextInput id="city" name='city' type="text" sizing="lg" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex">
        <div className='px-2 w-1/2'>
          <div className="mb-2 ">
            <Label htmlFor="state" value="State" />
            <TextInput id="state" name='state' type="text" sizing="lg" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="mb-2 ">
            <Label htmlFor="pincode" value="Pincode" />
            <TextInput id="pincode" name='pincode' type="text" sizing="lg" />
          </div>
        </div>
      </div>
      <h2 className='font-bold text-xl my-4'>Review Cart Items</h2>

      {Object.keys(cart).length === 0 ? (
        <div className='my-4 text-base'>Your cart is empty</div>) :
        (Object.keys(cart).map((k) => (
          <div key={k} className="flex items-center">
            <span>{cart[k].name}</span>
            <div className="flex items-center mx-20">
              <CiSquareMinus className="ml-5" onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} />
              <div className='ml-2 mr-2'>
                {cart[k].qty}
              </div>
              <CiCirclePlus className="mr-5" onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} />
            </div>

          </div>
        ))
        )}
      <div className="subtotal font-bold">Subtotal: {subTotal}</div>
      <div className='mt-4'>
        <Link href={"/checkout"}>
          <Button>
            <div className='mr-1'>
            </div>
            Pay ₹ {subTotal}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout
