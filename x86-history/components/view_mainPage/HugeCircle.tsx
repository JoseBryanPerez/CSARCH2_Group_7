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
            <div className="rounded-full bg-[#9CA7EF]/25 hover:bg-[#9CA7EF]/75 xl:w-[600px] xl:h-[600px] w-[350px] h-[350px] flex items-center justify-center border-1 border-white transition-color duration-300 ease-in-out">
                <div className="rounded-full bg-[#4958B7]/30 hover:bg-[#4958B7]/75 xl:w-[550px] xl:h-[550px] w-[300px] h-[300px] flex items-center justify-center border-1 border-white transition-color duration-300 ease-in-out">
                    <div onClick={handleClick}  className="rounded-full bg-[#111844] xl:w-[500px] xl:h-[500px] w-[250px] h-[250px] flex flex-col items-center justify-center gap-6 text-center border-1 border-white">
                        <h2 className="xl:text-5xl text-3xl font-[JUA] text-white"> x86-History </h2>
                        <h3 className="xl:text-lg text-15px font-[JUDSON] text-white"> "insert quote" <br/> By: CSARCH2_S02_GROUP7</h3>
                    </div>
                </div>
            </div>
           
           
        </div>
    );
}