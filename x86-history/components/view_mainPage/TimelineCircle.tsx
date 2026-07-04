"use client";

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
        <div onClick={handleClick} className="xl:w-[14vw] xl:h-[30vh] w-60 h-auto xl:flex flex flex-col items-center justify-center gap-2 xl:p-10 p-2 transform hover:scale-120 transition-transform duration-300 ease-in-out">
           <div className="rounded-full xl:w-[10vw] xl:h-[10vw] w-36 h-36 border-2 border-black bg-white overflow-hidden shadow-sm shrink-0">
            <img src={image} alt={image} className="w-full h-full rounded-full border-black"/>
            </div>
            <h3 className="text-lg font-bold text-white p-6 xl:flex flex flex-col justify-center items-center">{text}</h3>
        </div>
       
    );
}