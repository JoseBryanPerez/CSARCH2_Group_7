"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HugeCircle from '../../components/view_mainPage/HugeCircle';
import TimelineCircle from '../../components/view_mainPage/TimelineCircle';
import Panel from '../../components/view_mainPage/Panel';
import CreatorPanel from '../../components/view_mainPage/CreatorPanel';
import Navigation from '../../components/view_mainPage/Navigation';
import AssemblyEditor from '../../components/AssemblyEditor';


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
    <div id="frame1" className="min-h-screen w-full flex flex-col flex-wrap items-center justify-center bg-black" 
    style={{animation: 'lightenfromblack linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>

    {/*insert the text of the short overview in the insert text here */}
      <h2 className="text-5xl text-center font-[JUA] text-black">Assembly Language is a low-level language that allows programmers to communicate directly with computer hardware, offering more speed, space, and capability than most high-level languages. But before x86-64, ARM, MIPS and the more popular assembly languages used today, computer scientists had to communicate directly with hardware using long strings of 0s and 1s. This website aims to give a brief overview on the evolution of the x86-64 instruction set architecture (ISA). </h2>
    </div>
    
    {/*Timeline section */}
    <div className=" min-h-[60vh] h-auto py-12 w-full px-2 flex flex-col flex-wrap items-center justify-center bg-[#111844] rounded-lg shadow-md">
      <h2 className="text-6xl font-[JUA] text-white mb-4"> Timeline</h2><br/>
      <div className="xl:gap-30 gap:7 w-full flex flex-wrap items-center justify-center">  
        <div><TimelineCircle image="/images/Timeline1.png" text="ENIAC (1945)" target="ENIAC" /></div>
        <div><TimelineCircle image="/images/Timeline2.png" text="UNIVAC (1951)" target="UNIVAC" /></div>
        <div><TimelineCircle image="/images/Timeline3.png" text="IBM 701 (1952)" target="IBM701" /></div>
        <div><TimelineCircle image="/images/Timeline4.png" text="CDC 6600 (1964)" target="CDC6600" /></div>
        <div><TimelineCircle image="/images/Timeline5.png" text="Emergence of CISC" target="CISC" /></div>
        <div><TimelineCircle image="/images/Timeline6.png" text="x86-64 NASM AL" target="NASM" /></div>
      </div> 
    </div>

    {/*Second Transition block */}
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#111844]" 
    style={{animation: 'lightenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>
    {/*insert the text of the info in the insert text here */}
      <h2 className="text-5xl text-center font-[JUA] text-black">[INSERT TEXT HERE]</h2>
    </div>

    {/*Panel Section, where the user can access more information about the timeline */}  
    <div className="h-full w-full gap-16 py-50 px-4 flex flex-col items-center justify-center bg-[#F3ECE1]">
      <div id="ENIAC"><Panel image="/image/panel1.png" headText="ENIAC (1945)" bodyText="In 1943 to 1945, one of the earliest electronic computers was in development called the ENIAC which is a large-scaled piece of technology that uses plugboards to send information." link="/panels/ENIAC"/></div>
      <div id="UNIVAC"><Panel image="/image/panel1.png" headText="UNIVAC (1951)" bodyText="Then in 1951, the UNIVAC became the first digital computer to be commericalized in the United States with using magnetic tape to handle input and output." link="/panels/UNIVAC"/></div>
      <div id="IBM701"><Panel image="/image/panel1.png" headText="IBM 701 (1952)" bodyText="Following after the UNIVAC, the IBM 701 became the first commercial scientific computer containing a maximum memory of 2048, 36-bit words and each instruction set containing 18 bits." link="/panels/IBM701"/></div>
      <div id="CDC6600"><Panel image="/image/panel1.png" headText="CDC 6600 (1964)" bodyText="Blah Blah" link="/panels/CDC6600"/></div>
      <div id="CISC"><Panel image="/image/panel1.png" headText="CISC" bodyText="Blah Blah" link="/panels/CISC"/></div>
      <div id="NASM"><Panel image="/image/panel1.png" headText="x86-64 NASM AL" bodyText="Blah Blah" link="/panels/NASM"/></div>
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
    </div>
  </div>
 );
}
