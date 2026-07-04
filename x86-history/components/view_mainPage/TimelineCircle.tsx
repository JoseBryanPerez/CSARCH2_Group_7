"use client";

import React from "react";


export default function TimelineCircle({image,text,target}:{image:string,text:string, target?:string}){
    const handleClick =()=>{
        if(target){
            const id=document.getElementById(target);
            if(id){
                id.scrollIntoView({behavior:'smooth',block:'center'});
            }
        }
    }
    return(
        <div onClick={handleClick} className="w-[25vh] h-[25vh] items-center justify-center gap-2 hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer group">
            <div className="rounded-full w-[20vh] h-[20vh] border-black bg-white">
            <img src={image} alt={image} className="w-full h-full rounded-full border-black"/>
            </div>
            <h3 className="text-lg font-bold text-black mt-2">{text}</h3>
        </div>
       
    );
}