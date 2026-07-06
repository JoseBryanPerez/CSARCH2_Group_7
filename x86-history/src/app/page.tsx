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
    <div id="frame1" className="min-h-screen w-full bg-black flex flex-col flex-wrap items-center justify-center" 
    style={{animation: 'lightenfromblack linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>

    {/*insert the text of the short overview in the insert text here */}
      <h2 className="text-5xl font-[JUA] text-black">[INSERT TEXT HERE]</h2>
    </div>
    
    {/*Timeline section */}
    <div className=" flex flex-col flex-wrap md:flex-col md:flex-nowrap items-center justify-center min-h-[60vh] h-auto py-12 w-full bg-[#111844] p-2 rounded-lg shadow-md">
      <h2 className="text-6xl font-[JUA] text-white mb-4"> Timeline</h2><br/>
      <div className="grid grid-cols-auto-fit flex flex-wrap md:flex md:flex-row items-center justify-center gap-6 md:gap-10 max-w-6xl w-full px-2">  
        <div><TimelineCircle image="/images/Timeline1.png" text="ENIAC (1945)" target="ENIAC" /></div>
        <div><TimelineCircle image="/images/Timeline2.png" text="UNIVAC (1951)" target="UNIVAC" /></div>
        <div><TimelineCircle image="/images/Timeline3.png" text="IBM 701 (1952)" target="IBM701" /></div>
        <div><TimelineCircle image="/images/Timeline4.png" text="CDC 6600 (1964)" target="CDC6600" /></div>
        <div><TimelineCircle image="/images/Timeline5.png" text="Emergence of CISC" target="CISC" /></div>
        <div><TimelineCircle image="/images/Timeline6.png" text="x86-64 NASM AL" target="NASM" /></div>
      </div> 
    </div>

    {/*Second Transition block */}
    <div className="min-h-screen w-full bg-[#111844] flex flex-col md:flex-col items-center justify-center" 
    style={{animation: 'lightenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>
    {/*insert the text of the info in the insert text here */}
      <h2 className="text-5xl font-[JUA] text-black">[INSERT TEXT HERE]</h2>
    </div>

    {/*Panel Section, where the user can access more information about the timeline */}  
    <div className="h-full w-full bg-[#F3ECE1] flex flex-col items-center justify-center gap-16 md:gap-32 py-4 px-4 md:px-16">
      <div id="ENIAC"><Panel image="/image/panel1.png" headText="ENIAC (1945)" bodyText="Blah Blah" link="/panels/ENIAC"/></div>
      <div id="UNIVAC"><Panel image="/image/panel1.png" headText="UNIVAC (1951)" bodyText="Blah Blah" link="/panels/UNIVAC"/></div>
      <div id="IBM701"><Panel image="/image/panel1.png" headText="IBM 701 (1952)" bodyText="Blah Blah" link="/panels/IBM701"/></div>
      <div id="CDC6600"><Panel image="/image/panel1.png" headText="CDC 6600 (1964)" bodyText="Blah Blah" link="/panels/CDC6600"/></div>
      <div id="CISC"><Panel image="/image/panel1.png" headText="CISC" bodyText="Blah Blah" link="/panels/CISC"/></div>
      <div id="NASM"><Panel image="/image/panel1.png" headText="x86-64 NASM AL" bodyText="Blah Blah" link="/panels/NASM"/></div>
    </div>

  {/*Just a transition block that holds no information */}
   <div className="h-[50vh] w-full bg-[#F3ECE1] flex flex-col md:flex-col items-center justify-center" 
    style={{animation: 'darkenfromblue linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 40%'}}>
    </div>

    {/*Creators Section */}
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-black">
        <CreatorPanel/>
    </div>
  </div>
 );
}
