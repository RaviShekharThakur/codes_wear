'use client';
import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';


const Forgot = () => {
  return (
    <div className="flex items-center justify-center m-20">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block text-center text-3xl">
            Forgot Password
          </div>
          <div className="mb-2 block text-center text-sm">
            or
            <span className='text-sm text-center hover:font-bold mb-5 ml-4 text-pink-500'>
              <Link href={"login"}>Login</Link>
            </span>
          </div>
          <TextInput id="email1" type="email" placeholder="Enter your Email" required />
        </div>

        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
};

export default Forgot
