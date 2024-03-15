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
                  <Link href="/">About</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Careers</Link>
                  <Link href="/">Brand Center</Link>
                  <Link href="/">Blog</Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="help center" />
                <Footer.LinkGroup col>
                  <Link href="/contact">Discord Server</Link>
                  <Link href="/">Twitter</Link>
                  <Link href="/">Facebook</Link>
                  <Link href="/">Contact Us</Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="legal" />
                <Footer.LinkGroup col>
                  <Link href="/">Privacy Policy</Link>
                  <Link href="/">Licensing</Link>
                  <Link href="/">Terms &amp; Conditions</Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="download" />
                <Footer.LinkGroup col>
                  <Link href="/">iOS</Link>
                  <Link href="/">Android</Link>
                  <Link href="/">Windows</Link>
                  <Link href="/">MacOS</Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="/" by="Flowbite™" year={2022} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="/" icon={BsFacebook} />
                <Footer.Icon href="/" icon={BsInstagram} />
                <Footer.Icon href="/" icon={BsTwitter} />
                <Footer.Icon href="/" icon={BsGithub} />
                <Footer.Icon href="/" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default CustomFooter
