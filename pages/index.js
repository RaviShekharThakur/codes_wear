'use client';

import Image from "next/image";
import { Inter } from "next/font/google";

import { Alert } from 'flowbite-react';
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>CodesWear-wear the code</title>
    </Head>
    <div className="text-red-500">a le chak meai a gaya</div>
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium bg-green-500">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
    </>
  );
}
