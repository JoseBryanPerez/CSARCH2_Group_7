"use client";
import Link from "next/link";

export default function ENIAC(){
    return(
        <div className="min-h-screen min-w-screen bg-[#F3ECE1] flex flex-col items-center justify-center gap-10">
            <Link href="/simulator"> //change this to specific simulator page
            <button className="bg-[#4B5694] hover:bg-[#7288AE] text-white font-[Kaisei Decol] py-2 px-10 rounded">
                Try this out!
            </button>
            </Link>
            <Link href="/">
            <button className="bg-[#4B5694] hover:bg-[#7288AE] text-white font-[Kaisei Decol] py-2 px-10 rounded">
                Back to Home
            </button>
            </Link>
        </div>
    );
}