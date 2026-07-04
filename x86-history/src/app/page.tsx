"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HugeCircle from '../../components/view_mainPage/HugeCircle';
import TimelineCircle from '../../components/view_mainPage/TimelineCircle';
import Panel from '../../components/view_mainPage/Panel';
import CreatorPanel from '../../components/view_mainPage/CreatorPanel';
import AssemblyEditor from '../../components/AssemblyEditor';


export default function page() {
 return (
  <div className="bg-[#F3ECE1] min-h-screen">
    <div id="start"><HugeCircle target="start"/></div>
    <style>{'@keyframes lightenfromblack{0%{background-color:#000} 100%{background-color:#F3ECE1}} @keyframes lightenfromblue{0%{background-color:#111844} 100%{background-color:#F3ECE1}} @keyframes darkenfromblue{0%{background-color:#F3ECE1} 100%{background-color:#000}}'}</style>
    <div className="h-[75vh] w-full bg-black flex flex-col items-center justify-center" 
    style={{animation: 'lightenfromblack linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>
      <h2 className="text-5xl font-[JUA] text-black">[INSERT TEXT HERE]</h2>
    </div>
    <div className=" flex flex-col items-center justify-center h-[60vh] w-full bg-[#111844] p-2 rounded-lg shadow-md">
      <h2 className="text-6xl font-[JUA] text-black mb-4"> Timeline</h2><br/>
      <div className=" flex flex-row items-center justify-center gap-10 ">    
        <div><TimelineCircle image="/images/Timeline1.png" text="ENIAC (1945)" target="ENIAC" /></div>
        <div><TimelineCircle image="/images/Timeline2.png" text="UNIVAC (1951)" target="UNIVAC" /></div>
        <div><TimelineCircle image="/images/Timeline3.png" text="IBM 701 (1952)" target="IBM701" /></div>
        <div><TimelineCircle image="/images/Timeline4.png" text="CDC 6600 (1964)" target="CDC6600" /></div>
        <div><TimelineCircle image="/images/Timeline5.png" text="Emergence of CISC" target="CISC" /></div>
        <div><TimelineCircle image="/images/Timeline6.png" text="x86-64 NASM AL" target="NASM" /></div>
      </div> 
    </div>
    <div className="min-h-screen w-full bg-[#111844] flex flex-col items-center justify-center" 
    style={{animation: 'lightenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>
      <h2 className="text-5xl font-[JUA] text-black">[INSERT TEXT HERE]</h2>
    </div>
    <div className="h-full w-full bg-[#F3ECE1] flex flex-col items-center justify-center gap-10 p-15">
      <div id="ENIAC"><Panel image="/image/panel1.png" headText="ENIAC (1945)" bodyText="Blah Blah" link="/panels/ENIAC"/></div>
      <div id="UNIVAC"><Panel image="/image/panel1.png" headText="UNIVAC (1951)" bodyText="Blah Blah" link="/panels/UNIVAC"/></div>
      <div id="IBM701"><Panel image="/image/panel1.png" headText="IBM 701 (1952)" bodyText="Blah Blah" link="/panels/IBM701"/></div>
      <div id="CDC6600"><Panel image="/image/panel1.png" headText="CDC 6600 (1964)" bodyText="Blah Blah" link="/panels/CDC6600"/></div>
      <div id="CISC"><Panel image="/image/panel1.png" headText="CISC" bodyText="Blah Blah" link="/panels/CISC"/></div>
      <div id="NASM"><Panel image="/image/panel1.png" headText="x86-64 NASM AL" bodyText="Blah Blah" link="/panels/NASM"/></div>
    </div>

   <div className="h-[50vh] w-full bg-[#F3ECE1] flex flex-col items-center justify-center " 
    style={{animation: 'darkenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 40%'}}>
    </div>
    <div className="h-full w-full">
        <CreatorPanel/>
        <div id="end"><HugeCircle target="start"/></div>
    </div>
  </div>
 );
}
