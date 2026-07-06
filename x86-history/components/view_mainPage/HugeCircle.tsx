"use client";

import React from "react";


export default function HugeCircle({target}:{target?:string}){
    const handleClick =()=>{
        if(target){
            const id=document.getElementById(target);
            if(id){
                id.scrollIntoView({behavior:'smooth',block:'center'});
            }
        }
    }
    return(
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-black">
            <div className="rounded-full xl:w-[50rem] xl:h-[50rem] w-[25rem] h-[25rem] flex items-center justify-center border-1 border-white bg-[#9CA7EF]/25 hover:bg-[#9CA7EF]/75 transition-color duration-300 ease-in-out">
                <div className="rounded-full xl:w-[45rem] xl:h-[45rem] w-[20rem] h-[20rem] flex items-center justify-center  border-1 border-white bg-[#4958B7]/30 hover:bg-[#4958B7]/75 transition-color duration-300 ease-in-out">
                    <div onClick={handleClick}  className="rounded-full xl:w-[40rem] xl:h-[40rem] w-[15rem] h-[15rem] gap-6 flex flex-col items-center justify-center border-1 border-white bg-[#111844] text-center">
                        <h2 className="xl:text-5xl text-3xl font-[JUA] text-white"> x86-History </h2>
                        <h3 className="xl:text-lg text-15px font-[JUDSON] text-white"> "insert quote" <br/> By: CSARCH2_S02_GROUP7</h3>
                    </div>
                </div>
            </div>
           
           
        </div>
    );
}