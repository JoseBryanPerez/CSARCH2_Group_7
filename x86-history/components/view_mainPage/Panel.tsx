"use client";

import React from "react";

import Link from 'next/link';

export default function Panel({image,headText,bodyText,link}:{image?:string,headText?:string,bodyText?:string,link?:string}){
    return(
        <div className="flex items-center justify-center h-[75vh] w-[90vw] bg-[#111844] gap-10 rounded-[50px] shadow-2xl">
            <div className="flex flex-col items-center justify-end gap-4 p-5">
                <div className="rounded-full bg-white w-[180px] h-[180px]"> 
                    <img src={image||"/images/Timeline1.png"} alt={image} className="w-full h-full rounded-full border-black"/>
                </div>
                <h1 className="text-4xl font-[JUA] text-white mt-4">{headText}</h1>
            </div>
            <div className="flex flex-col items-center justify-end gap-5 p-4 w-[60vw] bg-[#4B5694] rounded-lg shadow-md">
                <h2 className="text-2xl font-[JUDSON] text-white mt-4">{bodyText}</h2>
                <Link href={link||"/"}>
                <button className="bg-[#4B5694] hover:bg-[#7288AE] text-white font-[Kaisei Decol] py-2 px-10 rounded">
                    learn more
                </button>
                </Link>                
            </div>
        </div>
    );
}