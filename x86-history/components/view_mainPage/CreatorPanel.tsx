"use client";

import CreatorsCircle from "./CreatorsCircle";

export default function CreatorPanel(){
    return(
        <div className="flex flex-col items-center justify-center bg-black p-40">
             <h1 className="text-4xl font-[JUA] text-white">CREATORS</h1>
        <div className="h-full w-full bg-black flex items-center justify-center gap-10 p-20">
            <CreatorsCircle name="Ethan Magbatoc" image="/image/Creators/Ethan" />
            <CreatorsCircle name="Catherine Gunita" image="/image/Creators/Cath" />
            <CreatorsCircle name="Gabrielle Bactong" image="/image/Creators/Gabe" />
            <CreatorsCircle name="Jose Bryan Perez" image="/image/Creators/Jose" />
            <CreatorsCircle name="Nyan Jezreel Espineli" image="/image/Creators/Nyan" />
        </div>
            <h1 className="text-4xl font-[JUA] text-white">CSARCH2_S02</h1>
        </div>
        
    );
}