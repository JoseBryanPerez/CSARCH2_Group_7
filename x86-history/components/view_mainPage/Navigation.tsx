"use client";

import { useState } from 'react';
import Link from 'next/link';
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";


export default function Navigation(){
    const [click,setClick]=useState(false);
    const [timelineOpen, setTimelineOpen] = useState(false);
    const [simulatorOpen, setSimulatorOpen] = useState(false);
    const handleClick=()=>setClick(!click);
    const content=<>
   <div className="md:hidden z-50 block absolute top-[76px] w-full left-0 right-0 bg-stone-100 backdrop-blur-lg bg-opacity-95 h-[calc(100vh-76px)] overflow-y-auto shadow-xl transition">
        <ul className="text-center text-xl py-6 px-4 flex flex-col gap-4">
            <Link href=""><li className="flex items-center justify-center text-black transition cursor-pointer px-20 h-[80px] whitespace-nowrap"> Overview </li></Link>
                <div className="group relative flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setTimelineOpen(!timelineOpen)}
                        className="w-full text-black transition py-4 cursor-pointer font-medium flex justify-center items-center gap-2"
                    > <span className="flex items-center justify-center text-black transition cursor-pointer px-20 h-[80px] whitespace-nowrap">Timeline</span></button>
                    {timelineOpen&&(
                        <div className="flex flex-col shadow-inner rounded-md z-20 text-black w-full max-w-[280px]">
                            <div className="flex flex-col items-center justify-center py-2">
                                <a href="/panels/ENIAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">ENIAC</a>
                                <a href="/panels/UNIVAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">UNIVAC</a>
                                <a href="/panels/IBM701" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">IBM 701</a>
                                <a href="/panels/CDC6600" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">CDC 6600</a>
                                <a href="/panels/CISC" className="w-full px-15 py-2 text-stone-800  rounded transition-colors whitespace-nowrap">CISC</a>
                                <a href="/panels/NASM" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">NASM</a>
                            </div>
                        </div>
                    )}
                        
                    </div>
                <div className="group relative flex flex-col items-center justify-center ">{/*Add the font at this line to change the font style */}
                    <button 
                        onClick={() => setSimulatorOpen(!simulatorOpen)}
                        className="w-full text-black py-4 font-medium flex justify-center items-center gap-2"
                    >
                        <span className="flex items-center justify-center text-black px-20 h-[80px] whitespace-nowrap">Simulator</span>
                    </button>
                    {simulatorOpen &&(
                        <div className="flex flex-col shadow-inner rounded-md z-20 text-black w-full max-w-[280px]">
                            <div className="flex flex-col items-center justify-center py-2">
                                <a href="/simulator/ENIAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">ENIAC Simulator</a>
                                <a href="/simulator/UNIVAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">UNIVAC Simulator</a>
                                <a href="/simulator/IBM701" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">IBM 701 Simulator</a>
                                <a href="/simulator/CDC6600" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">CDC 6600 simulator</a>
                                <a href="/simulator/CISC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">CISC Simulator</a>
                                <a href="/simulator/NASM" className="w-full px-15 py-2 text-stone-800 rounded transition-colors whitespace-nowrap">NASM simulator</a>
                            </div>
                        </div>
                    )}
                    </div>
                <Link href=""><li className="flex items-center justify-center text-black transition cursor-pointer px-20 h-[80px] cursor-pointer whitespace-nowrap"> About Us </li></Link>                                               
        </ul>
     </div>
                    </>
    return(
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="flex h-[80px] px-6 md:px-16 justify-between items-center w-full">
                <div className="flex items-center">
                    <h2 className="text-3xl font bold text-black"> CSARCH2</h2>
                </div>
                <div className="hidden md:flex md-flex flex-1 justify-end items-center font-normal ">
                    <ul className="flex mr-16 text-[25px] ">
                        
                        {/* Overview */}
                        <Link href=""><li className="flex items-center hover:bg-[#E5DCD0] text-black transition cursor-pointer px-20 h-[80px] cursor-pointer whitespace-nowrap"> Overview </li></Link>
                        
                        {/*Timeline Bar with drop down */}
                            <div className="group relative hover:bg-[#E5DCD0]"> {/*Add the font at this line to change the font style */}
                                <button className=" text-black transition cursor-pointer px-20 h-[80px] cursor-pointer whitespace-nowrap">Timeline</button>
                                <div className="hidden group-hover:flex flex-col absolute left-1/2 -translate-x-1/2 top-full bg-[#F3ECE1] shadow-lg rounded-md z-20 text-black">
                                        <div className="flex flex-col items-center justify-center">
                                        <a href="/panels/ENIAC" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">ENIAC</a>
                                        <a href="/panels/UNIVAC" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">UNIVAC</a>
                                        <a href="/panels/IBM701" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">IBM 701</a>
                                        <a href="/panels/CDC6600" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">CDC 6600</a>
                                        <a href="/panels/CISC" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">CISC</a>
                                        <a href="/panels/NASM" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">NASM</a>
                                        </div>
                                    
                                </div>
                            </div>
                            {/*Simulator Bar with drop down */}
                         <div className="group relative hover:bg-[#E5DCD0]">{/*Add the font at this line to change the font style */}
                                <button className=" text-black transition cursor-pointer px-20 h-[80px] cursor-pointer whitespace-nowrap">Simulator</button>
                                <div className="hidden group-hover:flex flex-col absolute left-1/2 -translate-x-1/2  bg-[#F3ECE1] shadow-lg rounded-md z-20 text-black">
                                        <div className="flex flex-col items-center justify-center">
                                        <a href="/simulator/ENIAC" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">ENIAC Simulator</a>
                                        <a href="/simulator/UNIVAC" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">UNIVAC Simulator</a>
                                        <a href="/simulator/IBM701" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">IBM 701 Simulator</a>
                                        <a href="/simulator/CDC6600" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">CDC 6600 simulator</a>
                                        <a href="/simulator/CISC" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">CISC Simulator</a>
                                        <a href="/simulator/NASM" className="w-full px-15 py-2 text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors whitespace-nowrap">NASM simulator</a>
                                        </div>
                                    
                                </div>
                            </div>
                         {/*About Us */}   
                        <Link href=""><li className="flex items-center hover:bg-[#E5DCD0] text-black transition cursor-pointer px-20 h-[80px] cursor-pointer whitespace-nowrap"> About Us </li></Link>                        
                    </ul>
                </div>
                <div>
             {click && content}
                </div>
               {<button className="block md:hidden transition-none" onClick={handleClick}> {click? <FaTimes size={28} className="text-black"/>:<CiMenuFries size={28} className="text-black"/>}</button>}
            </div>
        </nav>
    )
}