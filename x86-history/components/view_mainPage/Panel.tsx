"use client";

import React from "react";

import Link from 'next/link';

export default function Panel({image,headText,bodyText,link}:{image?:string,headText?:string,bodyText?:string,link?:string}){
    return(
        <div className="h-auto w-[90vw] md:gap-20 gap-10 p-10 flex flex-wrap items-center justify-center bg-[#111844] rounded-[50px] shadow-2xl">
            <div className="md:w-[10vw] w-auto gap-4 md:p-5 p-2 flex flex-col items-center justify-center">
                <div className="rounded-full bg-white w-[10rem] h-[10rem]"> 
                    <img src={image||"/images/Timeline1.png"} alt={image} className="rounded-full w-full h-full border-black overflow-hidden "/>
                </div>
                <h1 className="text-[1.5rem] md:w-[10vw] text-center font-[Georgia] text-white mt-4">{headText}</h1>
            </div>
            <div className="w-[60vw] h-auto gap-5 p-2 flex flex-col items-center justify-end bg-[#4B5694] rounded-lg shadow-md">
                <h2 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] font-[Perpetua] text-white mt-4">{bodyText}</h2>
                
                <div className="w-full flex md:justify-end items-center justify-center">
                <Link href={link||"/"}>
                    <button className="py-2 px-10 text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] text-white font-[Perpetua] bg-[#4B5694] hover:bg-[#7288AE] rounded">
                        learn more
                    </button>  
                </Link>     
                </div>         
            </div>
        </div>
    );
}