'use client';
import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';


const Signup = () => {
  return (
    <div className="flex items-center justify-center m-20">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block text-center text-3xl">
            Sign Up for your Acoount
          </div>
          <div className="mb-2 block text-center text-sm">
            or
            <span className='text-sm text-center hover:font-bold mb-5 ml-4 text-pink-500'>
              <Link href={"login"}>Login</Link>
            </span>
          </div>
          <div>
            <TextInput id="name" type="text" name='name' placeholder="Enter your Name" className='mb-4' required />
          </div>
          <TextInput id="email" type="email" name='email' placeholder="Enter your Email" required />
        </div>
        <div>
          <TextInput id="password" type="password" name='password' placeholder="Enter your Password" required />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup
