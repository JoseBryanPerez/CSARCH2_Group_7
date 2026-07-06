"use client";

import React from "react";


export default function CreatorsCircle({name,image}:{name:string, image:string}){
    return (
        <div className="w-auto h-auto gap-5 xl:p-10 p-5 flex flex-col flex-wrap items-center justify-center hover:scale-120 transition-transform duration-300 ease-in-out">
            <div className="rounded-full xl:w-[20rem] xl:h-[20rem] w-[10rem] h-[10rem] border-2 border-black bg-white overflow-hidden shadow-sm shrink-0">
            <img src={image} alt={image} className="w-full h-full rounded-full border-black"/>
            </div>
            <h3 className="text-lg font-bold text-white mt-2">{name}</h3>
        </div>
    );
}