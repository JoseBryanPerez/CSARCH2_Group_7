"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Timeline } from 'react-alternating-timeline';
import HugeCircle from '../../components/view_mainPage/HugeCircle';
import TimelineCircle from '../../components/view_mainPage/TimelineCircle';
import Panel from '../../components/view_mainPage/Panel';
import CreatorPanel from '../../components/view_mainPage/CreatorPanel';
import Navigation from '../../components/view_mainPage/Navigation';
import AssemblyEditor from '../../components/AssemblyEditor';
import Footer from '../../components/view_mainPage/Footer';

const items = [
  {
    key: 'ENIAC',
    date: 1945,
    title: 'ENIAC',
    children: (
      <>
        <img src="/images/Timeline1.png" alt="ENIAC" />
        <p>In 1943 to 1945, one of the earliest electronic computers...</p>
      </>
    ),
  },
  
  {
    key: 'UNIVAC',
    date: 1951,
    title: 'UNIVAC',
    children: (
      <>
        <img src="/images/Timeline2.png" alt="UNIVAC" />
        <p>Then in 1951, the UNIVAC became the first digital computer to be commercialized in the United States...</p>
      </>
    ),
  },
  {
    key: 'IBM701',
    date: 1952,
    title: 'IBM701',
    children: (
      <>
        <img src="/images/Timeline3.png" alt="IBM701" />
        <p>Following after the UNIVAC, the IBM 701 became the first commercial scientific computer...</p>
      </>
    ),
  },
  {
    key: 'CDC6600',
    date: 1964,
    title: 'CDC6600',
    children: (
      <>
        <img src="/images/Timeline4.png" alt="CDC6600" />
        <p>In 1964, the CDC 6600 developed by Control Data Corporation was considered the first supercomputer...</p>
      </>
    ),
  },
  {
    key: 'CISC',
    date: 1978,
    title: 'CISC',
    children: (
      <>
        <img src="/images/Timeline5.png" alt="CISC" />
        <p>Through 1960s to 1970s, CISC was developed as software was becoming more complex...</p>
      </>
    ),
  },
  {
    key: 'NASM',
    date: 1990,
    title: 'NASM',
    children: (
      <>
        <img src="/images/Timeline6.png" alt="NASM" />
        <p>As x86 grew in popularity, many assemblers such as GAS, MASM, and etc. were created. One of the most popular assemblers is NASM which is known for being open-source and its ability to produce various object files.</p>
      </>
    ),
  },

];

export default function page() {

  return (
  <div className="w-full min-h-screen bg-[#F3ECE1]">
    
    {/*Navigation Section */}
    <Navigation />

    {/*Huge Circle Section */}
    <div id="start"><HugeCircle target="frame1"/></div>

    {/*Helper secction that slowly changes the color of the transition block */}
    <style>{'@keyframes lightenfromblack{0%{background-color:#000} 100%{background-color:#F3ECE1}} @keyframes lightenfromblue{0%{background-color:#111844} 100%{background-color:#F3ECE1}} @keyframes darkenfromblue{0%{background-color:#F3ECE1} 100%{background-color:#000}}'}</style>
    
    {/*A transition block that contains a short overview/info of the project*/}
    <div id="frame1" className="min-h-screen w-full p-10 gap-10 flex flex-col flex-wrap justify-center bg-black" 
    style={{animation: 'lightenfromblack linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>

    {/*insert the text of the short overview in the insert text here */}
   
       <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] text-left font-[Georgia] text-black">Introduction</h2>
       <h2 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] text-justify font-[Perpetua] text-black">Assembly Language is a low-level language that allows programmers to communicate directly with computer hardware, offering more speed, space, and capability than most high-level languages. But before x86-64, ARM, MIPS and the more popular assembly languages used today, computer scientists had to communicate directly with hardware using long strings of 0s and 1s. This website aims to give a brief overview on the evolution of the x86-64 instruction set architecture (ISA). </h2>
    
    </div>

    {/*Timeline section */}
    <div className=" min-h-[60vh] h-auto py-12 w-full px-2 flex flex-col flex-wrap items-center justify-center bg-[#111844] rounded-lg shadow-md">
      <h2 className="text-[clamp(2rem,2vw+1rem,2.25rem)] font-[Baskerville] text-white mb-4"> Timeline</h2><br/>
      <div className=" gap-7 w-full flex flex-wrap items-center justify-center">  
        <div><TimelineCircle image="/images/Timeline1.png" text="ENIAC (1945)" target="ENIAC" /></div>
        <div><TimelineCircle image="/images/Timeline2.png" text="UNIVAC (1951)" target="UNIVAC" /></div>
        <div><TimelineCircle image="/images/Timeline3.png" text="IBM 701 (1952)" target="IBM701" /></div>
        <div><TimelineCircle image="/images/Timeline4.png" text="CDC 6600 (1964)" target="CDC6600" /></div>
        <div><TimelineCircle image="/images/Timeline5.png" text="Emergence of CISC" target="CISC" /></div>
        <div><TimelineCircle image="/images/Timeline6.png" text="x86-64 NASM AL" target="NASM" /></div>
      </div> 
    </div>

    {/*Second Transition block */}
    <div className="min-h-screen w-full p-10 gap-10 flex flex-col flex-wrap justify-center bg-black" 
    style={{animation: 'lightenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>
    {/*insert the text of the info in the insert text here */}
      <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] text-left font-[Georgia] text-black">Evolution of the x86 ISA </h2>
       <h2 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] text-justify font-[Perpetua] text-black">The information below provides on how the ISA evolves starting from the earliest creation of electronic computer to the multiple assemblers developed for x86 recently.</h2>
    </div>

    {/*Panel Section, where the user can access more information about the timeline */}  
    <div className="w-full py-10 px-4 bg-white timeline-wrapper">
      <div className="max-w-5xl mx-auto">
        <Timeline items={items} />
      </div>
    </div>

  {/*Just a transition block that holds no information */}
   <div className="h-[50vh] w-full flex flex-col items-center justify-center bg-[#F3ECE1] " 
    style={{animation: 'darkenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 40%'}}>
    </div>

    {/*Creators Section */}
    <div className="min-h-screen flex flex-wrap justify-center items-center bg-black">
        <CreatorPanel/>
        <Footer/>
    </div>
  </div>
 );
 
}