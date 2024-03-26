'use client';
import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handlechange = (e) =>{
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password }
    let res = await fetch("http://localhost:3000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
    let response = await res.json()
    console.log(response)
    setEmail("")
    setName("")
    setPassword("")
    toast.success('Your account has been created', {
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
            Sign Up for your Acoount
          </div>
          <div className="mb-2 block text-center text-sm">
            or
            <span className='text-sm text-center hover:font-bold mb-5 ml-4 text-pink-500'>
              <Link href={"login"}>Login</Link>
            </span>
          </div>
          <div>
            <TextInput onChange={handlechange} value={name} id="name" type="text" name='name' placeholder="Enter your Name" className='mb-4' required />
          </div>
          <TextInput onChange={handlechange} value={email} id="email" type="email" name='email' placeholder="Enter your Email" required />
        </div>
        <div>
          <TextInput onChange={handlechange} value={password} id="password" type="password" name='password' placeholder="Enter your Password" required />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
    </>
  );
};

export default Signup
