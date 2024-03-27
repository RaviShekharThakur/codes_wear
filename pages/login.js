'use client';
import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handlechange = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password }
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    let response = await res.json()
    console.log(response)
    setEmail("")
    setPassword("")
    if (response.success) {
      localStorage.setItem('token', response.token)
      toast.success('Your are logged in successfully', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("http://localhost:3000")
      }, 2000);
      
    }
    else{
      toast.error(response.error, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex items-center justify-center m-20">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit} method='POST'>
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
            <TextInput value={email} onChange={handlechange} id="email" type="email" name='email' placeholder="Enter your Email" required />
          </div>
          <div>
            <TextInput value={password} onChange={handlechange} id="password" type="password" name='password' placeholder="Enter your Password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
            <Link href={'/forgot'} className='text-sm hover:font-bold ml-20 text-pink-500'> Forget Password</Link>
          </div>
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </>
  );
};

export default Login
