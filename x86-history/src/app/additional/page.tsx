"use client"
import Navigation from "../../../components/view_mainPage/Navigation";
import Footer from "../../../components/view_mainPage/Footer";
export default function overview(){
    return(
        <div className="min-h-screen w-full bg-[#F3ECE1]">
            <Navigation/>
            <div className="flex justify-between items-center">
            <div className="min-h-screen w-full flex flex-col items-left justify-center p-10 gap-5">
                <h1 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] text-left font-[Georgia] text-black">Overview</h1>
                <h3 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] text-justify font-[Perpetua] text-black">[Insert text]</h3>
            </div>
            <div className="h-screen md:w-[50vh] w-[20vh] bg-white flex justify-center items-center drop-shadow-2xl">
                <img src="/images/overview.png" alt="overviewImage" className="w-full h-full object-cover object-center"></img>
            </div>
            </div>
              {/*Helper secction that slowly changes the color of the transition block */}
            <style>{'@keyframes darkenfromblue{0%{background-color:#F3ECE1} 100%{background-color:#000}}'}</style>
            <div className="md:h-[50vh] h-[35vh] w-full flex flex-col items-center justify-center bg-[#F3ECE1] " 
            style={{animation: 'darkenfromblue linear both',
                    animationTimeline:'view()', 
                    animationRange:'entry 5% cover 40%'}}>
            </div>
            <Footer/>
        </div>
    );
}