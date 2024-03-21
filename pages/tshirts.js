'use client';

import React from 'react'
import Link from 'next/link'
import { Card } from 'flowbite-react';
import Product from "@/models/Product";
import mongoose from "mongoose";


const Tshirts = ({products}) => {
  return (
    <>
      <div className="container flex flex-wrap m-4 mx-auto">
        {products.map((item)=>{

        return <Link passHref={true} key={item._id} href={`/product/${item.slug}`}>
          <Card
            style={{ maxWidth: '20rem' }}
            className="max-w-sm m-5"
            imgAlt="Tshirt image"
            imgSrc={item.img}
          >
            <h5 className="text-xl font-semibold tracking-tight text-gray-500 dark:text-white">
              Category- Tshirt
            </h5>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <div className="flex items-center justify-between">
              <span className="text-l font-bold text-gray-900 dark:text-white">Size - S M L XL 2XL</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">₹ {item.price}</span>
            </div>
          </Card>
        </Link>})}
      </div>
    </>
  );
}

export async function getServerSideProps({ context }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({category: "tshirt"})
  return {
    props: {products: JSON.parse(JSON.stringify(products))},
  }
}

export default Tshirts
