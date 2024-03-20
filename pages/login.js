'use client';
import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';


const Login = () => {
  return (
    <div className="flex items-center justify-center m-20">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block text-center text-3xl">
            Sign In To Your Acoount
          </div>
          <div className="mb-2 block text-center text-sm">
            or
            <span className='text-sm text-center hover:font-bold mb-5 ml-4 text-pink-500'>
              <Link href={"signup"}>Sign Up</Link>
            </span>
          </div>
          <TextInput id="email" type="email" name='email' placeholder="Enter your Email" required />
        </div>
        <div>
          <TextInput id="password" type="password" name='password' placeholder="Enter your Password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
          <Link href={'/forgot'} className='text-sm hover:font-bold ml-20 text-pink-500'> Forget Password</Link>
        </div>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default Login
