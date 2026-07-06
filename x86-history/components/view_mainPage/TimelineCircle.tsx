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
        <div onClick={handleClick} className="w-auto h-auto gap-5 p-5 flex flex-col items-center justify-center transform hover:scale-120 transition-transform duration-300 ease-in-out">
           <div className="rounded-full xl:w-[15rem] xl:h-[15rem] w-[10rem] h-[10rem] border-2 border-black bg-white overflow-hidden shadow-sm shrink-0">
            <img src={image} alt={image} className="rounded-full w-full h-full border-black"/>
            </div>
            <h3 className="xl:w-[8vw] w-[20vw] h-[8vh] text-lg font-bold text-white p-1 flex items-center justify-center text-center ">{text}</h3>
        </div>
       
    );
}