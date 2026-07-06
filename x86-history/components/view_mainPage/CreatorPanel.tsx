"use client";

import React from "react";
import CreatorsCircle from "./CreatorsCircle";

export default function CreatorPanel(){
    return(
        <div className="xl:p-40 py-40 gap-5 w-full flex flex-col items-center justify-center bg-black overflow-hidden">
            <h1 className="py-10 text-[clamp(1.5rem,2vw+1rem,1.8rem)] font-[Georgia] text-white">CREATORS</h1>
            <div className="h-full w-full gap-5 bg-black flex flex-wrap items-center justify-center">
                <CreatorsCircle name="Ethan Magbatoc" image="/image/Creators/Ethan" />
                <CreatorsCircle name="Catherine Gunita" image="/image/Creators/Cath" />
                <CreatorsCircle name="Gabrielle Bactong" image="/image/Creators/Gabe" />
                <CreatorsCircle name="Jose Bryan Perez" image="/image/Creators/Jose" />
                <CreatorsCircle name="Nyan Jezreel Espineli" image="/image/Creators/Nyan" />
            </div>
            <h1 className="py-10 text-[clamp(1.5rem,2vw+1rem,1.8rem)] font-[Georgia] text-white">CSARCH2_S02</h1>
        </div>
        
    );
}