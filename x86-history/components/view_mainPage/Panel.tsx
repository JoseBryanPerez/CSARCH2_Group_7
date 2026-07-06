"use client";

import React from "react";

import Link from 'next/link';

export default function Panel({image,headText,bodyText,link}:{image?:string,headText?:string,bodyText?:string,link?:string}){
    return(
        <div className="h-auto w-[90vw] xl:gap-50 gap-5 p-10 flex flex-wrap items-center justify-center bg-[#111844] rounded-[50px] shadow-2xl">
            <div className="xl:w-[10vw] w-auto gap-4 xl:p-5 p-2 flex flex-col items-center justify-center">
                <div className="rounded-full bg-white w-[10rem] h-[10rem]"> 
                    <img src={image||"/images/Timeline1.png"} alt={image} className="rounded-full w-full h-full border-black overflow-hidden "/>
                </div>
                <h1 className="text-4xl text-center font-[JUA] text-white mt-4">{headText}</h1>
            </div>
            <div className="w-[60vw] h-auto gap-5 p-2 flex flex-col items-center justify-end bg-[#4B5694] rounded-lg shadow-md">
                <h2 className="text-2xl font-[JUDSON] text-white mt-4">{bodyText}</h2>
                
                <div className="w-full flex xl:items-center xl:justify-end items-center justify-center">
                <Link href={link||"/"}>
                    <button className="py-2 px-10 text-white font-[Kaisei Decol] bg-[#4B5694] hover:bg-[#7288AE] rounded">
                        learn more
                    </button>  
                </Link>     
                </div>         
            </div>
        </div>
    );
}