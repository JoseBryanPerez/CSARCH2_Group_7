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
   <div className="absolute z-50 h-auto w-full left-0 right-0 top-[76px] md:hidden bg-stone-100 backdrop-blur-lg bg-opacity-95 overflow-y-auto shadow-xl">
        <ul className="text-center text-xl flex flex-col gap-4">
            <Link href=""><li className=" h-[80px] flex items-center justify-center text-black"> Overview </li></Link>
                <div className="group relative flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setTimelineOpen(!timelineOpen)}
                        className="w-full py-4 flex justify-center items-center text-black font-medium "
                    > <span className="h-[80px] px-20 flex items-center justify-center text-black">Timeline</span></button>
                    {timelineOpen&&(
                        <div className=" z-20 w-full flex flex-col text-black rounded-md bg-[#EAECF0] ">
                                <a href="/panels/ENIAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors">ENIAC</a>
                                <a href="/panels/UNIVAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors">UNIVAC</a>
                                <a href="/panels/IBM701" className="w-full px-15 py-2 text-stone-800 rounded transition-colors ">IBM 701</a>
                                <a href="/panels/CDC6600" className="w-full px-15 py-2 text-stone-800 rounded transition-colors">CDC 6600</a>
                                <a href="/panels/CISC" className="w-full px-15 py-2 text-stone-800  rounded transition-colors ">CISC</a>
                                <a href="/panels/NASM" className="w-full px-15 py-2 text-stone-800 rounded transition-colors">NASM</a>
                        </div>
                    )}
                        
                    </div>
                <div className="group relative flex flex-col items-center justify-center">{/*Add the font at this line to change the font style */}
                    <button 
                        onClick={() => setSimulatorOpen(!simulatorOpen)}
                       className="w-full py-4 flex justify-center items-center text-black font-medium "
                    >
                        <span className="h-[80px] px-20 flex items-center justify-center text-black">Simulator</span>
                    </button>
                    {simulatorOpen &&(
                        <div className=" z-20 w-full flex flex-col text-black rounded-md bg-[#EAECF0] ">
                                <a href="/simulator/ENIAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors">ENIAC Simulator</a>
                                <a href="/simulator/UNIVAC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors ">UNIVAC Simulator</a>
                                <a href="/simulator/IBM701" className="w-full px-15 py-2 text-stone-800 rounded transition-colors ">IBM 701 Simulator</a>
                                <a href="/simulator/CDC6600" className="w-full px-15 py-2 text-stone-800 rounded transition-colors ">CDC 6600 simulator</a>
                                <a href="/simulator/CISC" className="w-full px-15 py-2 text-stone-800 rounded transition-colors ">CISC Simulator</a>
                                <a href="/simulator/NASM" className="w-full px-15 py-2 text-stone-800 rounded transition-colors ">NASM simulator</a>
                        </div>
                    )}
                    </div>
                <Link href=""><li className="h-[80px] px-20 flex items-center justify-center text-black "> About Us </li></Link>                                               
        </ul>
     </div>
                    </>
    return(
        <nav className="fixed  z-50 top-0 left-0 right-0 bg-white shadow-md">
            <div className=" h-[7vh] w-full px-10 flex justify-between items-center">
                <div className="flex items-center">
                    <h2 className="text-3xl font bold text-black"> CSARCH2</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end items-center font-normal ">
                    <ul className="flex text-[25px] ">
                        
                        {/* Overview */}
                        <Link href=""><li className=" h-[80px] px-20  flex items-center hover:bg-[#E5DCD0] text-black transition cursor-pointer "> Overview </li></Link>
                        
                        {/*Timeline Bar with drop down */}
                            <div className="group relative hover:bg-[#E5DCD0]"> {/*Add the font at this line to change the font style */}
                                <button className="  h-[80px] px-20 text-black transition cursor-pointer">Timeline</button>
                                <div className="absolute z-20 w-[10vw] left-1/2 -translate-x-1/2 top-full hidden group-hover:flex flex-col justify-center items-center bg-[#F3ECE1] shadow-lg rounded-md text-black">
                                        <a href="/panels/ENIAC" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">ENIAC</a>
                                        <a href="/panels/UNIVAC" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">UNIVAC</a>
                                        <a href="/panels/IBM701" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">IBM 701</a>
                                        <a href="/panels/CDC6600" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">CDC 6600</a>
                                        <a href="/panels/CISC" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">CISC</a>
                                        <a href="/panels/NASM" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">NASM</a>
                                </div>
                            </div>
                            {/*Simulator Bar with drop down */}
                         <div className="group relative hover:bg-[#E5DCD0]">{/*Add the font at this line to change the font style */}
                                <button className="h-[80px] px-20 text-black transition cursor-pointer">Simulator</button>
                                <div className="absolute z-20 w-[10vw] top-full hidden group-hover:flex flex-col justify-center items-center bg-[#F3ECE1] shadow-lg rounded-md text-black">
                                        <a href="/simulator/ENIAC" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">ENIAC Simulator</a>
                                        <a href="/simulator/UNIVAC" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">UNIVAC Simulator</a>
                                        <a href="/simulator/IBM701" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">IBM 701 Simulator</a>
                                        <a href="/simulator/CDC6600" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">CDC 6600 simulator</a>
                                        <a href="/simulator/CISC" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">CISC Simulator</a>
                                        <a href="/simulator/NASM" className="w-full  py-2 text-center text-stone-800 hover:bg-[#E5DCD0] hover:text-black rounded transition-colors ">NASM simulator</a>
                                        </div>
                            </div>
                         {/*About Us */}   
                        <Link href=""><li className="h-[80px] px-20 flex items-center hover:bg-[#E5DCD0] text-black transition cursor-pointer"> About Us </li></Link>                        
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