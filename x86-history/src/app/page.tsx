"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';


export default function page() {
 return (
  <div className="bg-[#F3ECE1] min-h-screen">
    <Link href="/simulator">
      <button className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Go to Simulator
      </button>
    </Link>
  </div>
 );
}
