"use client";

import {useEffect,useState} from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Timeline } from 'react-alternating-timeline';
import TopPage from '../../components/view_mainPage/TopPage';
import TimelineCircle from '../../components/view_mainPage/TimelineCircle';
import PanelL from '../../components/view_mainPage/PanelL';
import PanelR from '../../components/view_mainPage/PanelR';
import CreatorPanel from '../../components/view_mainPage/CreatorPanel';
import Navigation from '../../components/view_mainPage/Navigation';
import AssemblyEditor from '../../components/AssemblyEditor';
import Footer from '../../components/view_mainPage/Footer';

const items = [
  {
    key: 'ENIAC',
    date:'',
    title:'',
    customMarker: (
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#111844',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign:'justify',
        }}
      >
        1945
      </div>
    ),
   children: (
    
        <PanelL image="/images/Timeline1.png" headText="ENIAC" bodyText="In 1943 to 1945, one of the earliest electronic computers was in development called the ENIAC which is a large-scaled piece of technology that uses plugboards to send information." link="/panels/ENIAC"/>
  ),
  },
  
  {
    key: 'UNIVAC',
    date: '',
    title: '',
    customMarker: (
      <div
        style={{
          width: '60px',
          height: ' 60px',
          borderRadius: '50%',
          background: '#111844',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        1951
      </div>
    ),
    children: (
      <PanelR image="/images/Timeline2.png" headText="UNIVAC" bodyText="Then in 1951, the UNIVAC became the first digital computer to be commercialized in the United States with using magnetic tape to handle input and output." link="/panels/UNIVAC"/>
  ),
  },
  {
    key: 'IBM701',
    date: '',
    title: '',
    customMarker: (
      <div
        style={{
          width: '60px',
          height: ' 60px',
          borderRadius: '50%',
          background: '#111844',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        1952
      </div>
    ),
    children: (
     <PanelL image="/images/Timeline3.png" headText="IBM 701" bodyText="Following after the UNIVAC, the IBM 701 became the first commercial scientific computer containing a maximum memory of 2048, 36-bit words and each instruction set containing 18 bits." link="/panels/IBM701"/>
  ),
  },
  {
    key: 'CDC6600',
    date: '',
    title: '',
    customMarker: (
      <div
        style={{
          width: '60px',
          height: ' 60px',
          borderRadius: '50%',
          background: '#111844',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        1964
      </div>
    ),
    marginBottom: '10px',
    children: (
     <PanelR image="/images/Timeline4.png" headText="CDC 6600" bodyText="In 1964, the CDC 6600 developed by Control Data Corporation was considered the first supercomputer and also a reduced instruction set computer (RISC) with an architecture of 65 instructions." link="/panels/CDC6600"/>
    
  ),
  },
  {
    key: 'CISC',
    date:'',
    title: '',
    customMarker: (
      <div
        style={{
          width: '60px',
          height: ' 60px',
          borderRadius: '50%',
          background: '#111844',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        1978
      </div>
    ),
    children: (
     <PanelL image="/images/Timeline5.png" headText="CISC" bodyText="Through 1960s to 1970s, CISC was developed as software was becoming more complex which leads to the introduction of x86 ISA. This ISA is introduced through Intel 8086, one of the most notable CISCs in 1978."link="/panels/CISC"/>
  ),
  },
  {
    key: 'NASM',
    date: '',
    title: '',
    customMarker: (
      <div
        style={{
          width: '60px',
          height: ' 60px',
          borderRadius: '50%',
          background: '#111844',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        1990
      </div>
    ),
  
    children: (
     <PanelR image="/images/Timeline6.png" headText="x86-64 NASM AL" bodyText="As x86 grew in popularity, many assemblers such as GAS, MASM, and etc. were created. One of the most popular assemblers is NASM which is known for being open-source and its ability to produce various object files."link="/panels/NASM"/>
  ),
  },

];
const images=[
    {
      image:'/images/Timeline1.png',
      title:"ENIAC"
    },
     {
      image:'/images/Timeline2.png',
      title:"UNIVAC "
    },
     {
      image:'/images/Timeline3.png',
      title:"IBM 701"
    },
     {
      image:'/images/Timeline4.png',
      title:"CDC 6600"
    },
     {
      image:'/images/Timeline5.png',
      title:"CISC"
    },
     {
      image:'/images/Timeline6.png',
      title:"x86-64 NASM AL"
    },
];

export default function page() {
 const [current, setCurrent]=useState(0)
 useEffect(()=>{
  const interval=setInterval(()=>{
    setCurrent((prev)=>(prev+1)%images.length);},2000);
    return ()=>clearInterval(interval);
 },[]);
  return (
  <div className="w-full min-h-screen bg-white">
    
    {/*Navigation Section */}
    <Navigation />

    {/*Huge Circle Section */}
     <div id="start"><TopPage target="frame1"/></div> 

    {/*Helper secction that slowly changes the color of the transition block */}
    <style>{'@keyframes lightenfromblack{0%{background-color:#000} 100%{background-color:#F3ECE1}} @keyframes lightenfromblue{0%{background-color:#111844} 100%{background-color:#F3ECE1}} @keyframes darkenfromblue{0%{background-color:#F3ECE1} 100%{background-color:#111844}}'}</style>
    
    {/*A transition block that contains a short overview/info of the project*/}
    <div id="frame1" className="min-h-screen w-full p-10 gap-10 flex flex-col flex-wrap justify-center bg-black" 
    style={{animation: 'lightenfromblack linear both',
            animationTimeline:'view()', 
            animationRange:'entry 5% cover 35%'}}>
    {/*insert the text of the short overview in the insert text here */}
        <div className="flex md:flex-row flex-col items-center justify-center md:justify-between md:gap-8 gap-20">
          <div className="md:w-[45vw] md:p-10">
            <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] text-left font-[Georgia] text-black">Introduction</h2>
            <h2 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] text-justify font-[Perpetua] text-black">Assembly Language is a low-level language that allows programmers to 
              communicate directly with computer hardware, offering more speed, space, and capability than most high-level languages. But before x86-64, ARM, MIPS and the more popular 
              assembly languages used today, computer scientists had to communicate directly with hardware using long strings of 0s and 1s. This website aims to give a brief overview on 
              the evolution of the x86-64 instruction set architecture (ISA). </h2>
          </div>
          <div className="md:w-[45vw] md:h-[50vh] w-[70vw] h-[20vh]">
              <img src={images[current].image} className="h-full w-full flex items-center rounded-lg"/>
              <h2 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)]  font-[Georgia] text-black flex items-center justify-center">{images[current].title}</h2>
          </div>
    </div>
    </div>

    {/*Timeline section */}
    <div className="bg-white py-2">
         <div className="flex justify-center mt-25 bg-white  animate-bounce">
       <div className=" md:w-[15vw] md:h-[15vw] w-[15vh] h-[15vh] rounded-full flex items-center justify-center bg-[#111844] shadow-md">
      <h2 className="text-[clamp(2rem,2vw+1rem,2.25rem)] font-[Baskerville] text-white"> Timeline</h2>
      </div>
        </div>

      {/*Panel Section, where the user can access more information about the timeline */}  
      <div className="w-full px-4 bg-white timeline-wrapper text-[#111844] font-[Baskerville]">
        <div className=" w-full ">
          <Timeline
          items={items}
          minMarkerGap={90}
          styleConfig={{
            card: { background: '#F3ECE1'},
            line: { color: '#111844' },
            marker: { color: '#111844' },
            item: { gap: '30px' },
      }}
      />
        </div>
      </div>

    </div>
   
      {/*Just a transition block that holds no information */}
      <div className="h-[35vh] mt-10 w-full flex flex-col items-center justify-center bg-white " 
      style={{animation: 'darkenfromblue linear both',
              animationTimeline:'view()', 
              animationRange:'entry 5% cover 40%'}}>
      </div>

    {/*Creators Section */}
    <div className="min-h-screen flex flex-wrap justify-center items-center bg-[#111844]">
        <CreatorPanel/>
        <Footer/>
    </div>
    </div>

 );
 
}
