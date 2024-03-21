'use client';

import React from 'react'
import Link from 'next/link'
import { Card } from 'flowbite-react';
import Product from "@/models/Product";
import mongoose from "mongoose";


const Tshirts = ({ products }) => {
  return (
    <>
      <div className="container flex flex-wrap m-4 mx-auto">
        {Object.keys(products).map((item) => {

          return <Link passHref={true} key={item._id} href={`/product/${products[item].slug}`}>
            <Card
              style={{ maxWidth: '20rem' }}
              className="max-w-sm m-5"
              imgAlt="Tshirt image"
              imgSrc={products[item].img}
            >
              <h5 className="text-xl font-semibold tracking-tight text-gray-500 dark:text-white">
                Category- Tshirt
              </h5>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {products[item].title}
              </h5>
              <div className="flex items-center justify-between">
                <div className="text-l font-bold text-gray-900 dark:text-white">
                  {products[item].size.includes('s') && <span className='border border-gray-600 px-1 mx-1'>S</span>} 
                  {products[item].size.includes('m') && <span className='border border-gray-600 px-1 mx-1'>M</span>}
                  {products[item].size.includes('l') && <span className='border border-gray-600 px-1 mx-1'>L</span>}
                  {products[item].size.includes('xl') && <span className='border border-gray-600 px-1 mx-1'>XL</span>}
                  {products[item].size.includes('xxl') && <span className='border border-gray-600 px-1 mx-1'>2XL</span>}
                </div>
                <div className="text-l font-bold text-gray-900 dark:text-white">
                  {products[item].color.includes('red') &&  <button className="border-2 border-grey-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('green') &&  <button className="border-2 border-grey-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('blue') &&  <button className="border-2 border-grey-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('bronze') &&  <button className="border-2 border-grey-300 ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('black') &&  <button className="border-2 border-grey-300 ml-1 bg-gray-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                </div>
               
                <span className="text-xl font-bold text-gray-900 dark:text-white">₹ {products[item].price}</span>
              </div>
            </Card>
          </Link>
        })}
      </div>
    </>
  );
}

export async function getServerSideProps({ context }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: "tshirt" })
  let tshirts = {}
  for (let item of products) {
    if (item.title in tshirts) {
      if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirts[item.title].color.push(item.color)
      }
      if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirts[item.title].size.push(item.size)
      }
    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  }
}

export default Tshirts
