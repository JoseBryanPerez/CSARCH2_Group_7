"use client";

import React from 'react'
import dynamic from 'next/dynamic';

// wont load immediately, uses CSR so it updates client side
const AssemblyEditor = dynamic(
  () => import('../../components/AssemblyEditor'),
  { 
    ssr: false, 
  }
);

export default function page() {
  return (
    <main className="p-8">
      <AssemblyEditor />
    </main>
  );
}
