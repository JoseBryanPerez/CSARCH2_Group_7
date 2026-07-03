"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HugeCircle from '../../components/view_mainPage/HugeCircle';
import TimelineCircle from '../../components/view_mainPage/TimelineCircle';


export default function page() {
 return (
  <div className="bg-[#F3ECE1] min-h-screen">
    <HugeCircle/>
    <style>{'@keyframes lightenfromblack{0%{background-color:#000} 100%{background-color:#F3ECE1}} @keyframes lightenfromblue{0%{background-color:#111844} 100%{background-color:#F3ECE1}}'}</style>
    <div className="h-[75vh] w-full bg-black flex flex-col items-center justify-center" 
    style={{animation: 'lightenfromblack linear both',
            animationTimeline:'view()', 
            animationRange:'entry 20% cover 60%'}}>
      <h2 className="text-5xl font-[JUA] text-black">[INSERT TEXT HERE]</h2>
    </div>
    <div className=" flex flex-col items-center justify-center h-[60vh] w-full bg-[#111844] p-2 rounded-lg shadow-md">
      <h2 className="text-6xl font-[JUA] text-black mb-4"> Timeline</h2><br/>
      <div className=" flex flex-row items-center justify-center gap-10 ">    
        <div><TimelineCircle image="/images/Timeline1.png" text="ENIAC (1945)" /></div>
        <div><TimelineCircle image="/images/Timeline2.png" text="UNIVAC (1951)" /></div>
        <div><TimelineCircle image="/images/Timeline3.png" text="IBM 701 (1952)" /></div>
        <div><TimelineCircle image="/images/Timeline4.png" text="CDC 6600 (1964)" /></div>
        <div><TimelineCircle image="/images/Timeline5.png" text="Emergence of CISC" /></div>
        <div><TimelineCircle image="/images/Timeline6.png" text="x86-64 NASM AL" /></div>
      </div> 
    </div>
    <div>
    <div className="h-[75vh] w-full bg-[#111844] flex flex-col items-center justify-center" 
    style={{animation: 'lightenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 20% cover 60%'}}>
      <h2 className="text-5xl font-[JUA] text-black">[INSERT TEXT HERE]</h2>
    </div>
    </div>
    
    <Link href="/simulator">
      <button className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Go to Simulator
      </button>
    </Link>
  </div>
 );
}
