"use client";

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
        <div className="flex items-center justify-center min-h-screen min-w-screen bg-black">
            <div className="rounded-full bg-[#9CA7EF]/25 hover:bg-[#9CA7EF]/75 w-[650px] h-[650px] flex items-center justify-center border-1 border-white transition-color duration-300 ease-in-out">
                <div className="rounded-full bg-[#4958B7]/30 hover:bg-[#4958B7]/75 w-[550px] h-[550px] flex items-center justify-center border-1 border-white transition-color duration-300 ease-in-out">
                    <div onClick={handleClick}  className="rounded-full bg-[#111844] w-[500px] h-[500px] flex flex-col items-center justify-center gap-6 text-center border-1 border-white">
                        <h2 className="text-5xl font-[JUA] text-white"> x86-History </h2>
                        <h3 className="text-lg font-[JUDSON] text-white"> "insert quote" <br/> By: CSARCH2_S02_GROUP7</h3>
                    </div>
                </div>
            </div>
           
           
        </div>
    );
}