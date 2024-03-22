'use client';

import React from 'react'
import Link from 'next/link'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const CustomFooter = () => {
  return (
    <>
      <div>
        <Footer bgDark>
          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5">
              <Link href="/">
                <div>
                  <Footer.Brand
                    src="/wear_coder_logo.png"
                    alt="Flowbite Logo"
                    name="Flowbite"
                    className='h-50 rounded-3xl'
                  />
                </div>
              </Link>
              <div>
                <Footer.Title title="Company" />
                <Footer.LinkGroup col>
                  <Link className='hover:text-white'  href="/">About</Link>
                  <Link className='hover:text-white'  href="/">Careers</Link>
                  <Link className='hover:text-white'  href="/">Brand Center</Link>
                  <Link className='hover:text-white'  href="/">Blog</Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="help center" />
                <Footer.LinkGroup col>
                  <Link className='hover:text-white'  href="/contact">Discord Server</Link>
                  <Link className='hover:text-white'  href="/">Twitter</Link>
                  <Link className='hover:text-white'  href="/">Facebook</Link>
                  <Link className='hover:text-white'  href="/">Contact Us</Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="legal" />
                <Footer.LinkGroup col>
                  <Link className='hover:text-white'  href="/">Privacy Policy</Link>
                  <Link className='hover:text-white'  href="/">Licensing</Link>
                  <Link className='hover:text-white'  href="/">Terms &amp; Conditions</Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Shop" />
                <Footer.LinkGroup col>
                  <Link className='hover:text-white' href="/tshirts">Tshirts</Link>
                  <Link className='hover:text-white' href="/hoodies">Hoodies</Link>
                  <Link className='hover:text-white' href="/stickers">Stickers</Link>
                  <Link className='hover:text-white' href="/mugs">Mugs</Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="/" by="CodesWear.com - All Rights Reserved" year={2024} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon className='hover:text-white'  href="/" icon={BsFacebook} />
                <Footer.Icon className='hover:text-white'  href="/" icon={BsInstagram} />
                <Footer.Icon className='hover:text-white'  href="/" icon={BsTwitter} />
                <Footer.Icon className='hover:text-white'  href="/" icon={BsGithub} />
                <Footer.Icon className='hover:text-white'  href="/" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default CustomFooter
