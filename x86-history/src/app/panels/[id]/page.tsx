import Link from "next/link";
import Navigation from "../../../../components/view_mainPage/Navigation";
import { content_panel} from "../../content_panel";
import Footer from "../../../../components/view_mainPage/Footer";

interface Page{
    params:Promise<{id:string}>;
}
export default async function panelTemplate({params}:Page){
   const {id}=await params;
   const content=content_panel[id];
   return(
      <div className="w-full min-h-screen bg-[#F3ECE1] gap-10">
            <Navigation/>
             {/*Main Image Place Holder */}
            <div className="md:h-[50vh] h-[30vh] bg-white overflow-hidden flex items-center">
                    <img src={content.image} alt="ImageForENIAC" className="h-screen w-screen"/>
            </div>
            <div className="min-h-screen w-full flex flex-col gap-10">
                {/*Title and Content */}
                <div className="h-auto w-full flex flex-col justify-center  xl:p-20 p-10 ">
                <h1 className="text-black text-[clamp(1.75rem,2vw+1rem,2.25rem)] text-left font-[Georgia]">{content.title}</h1>
                <h2 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] text-justify font-[Perpetua] text-black  break-words">{content.body1}
                </h2>
                </div>
                {/*Simulator Section */}
                <div className="h-auto w-full bg-white">
                    <div className="flex justify-between">
                        <div className="w-[80vw] flex flex-col xl:p-20 p-10 gap-5 ">
                            <h3 className="text-black text-[clamp(1.75rem,2vw+1rem,2.25rem)] text-left font-[Georgia]"> SIMULATOR </h3>
                            <h3 className="text-[clamp(1.50rem,0.5vw+0.8rem,1.75rem)] text-justify font-[Perpetua] text-black break-words "> {content.simulatorBody} </h3>
                            <div className=" flex items-left">
                                <Link href="/simulator">
                                <button className=" py-1 px-2 bg-[#F3ECE1] hover:bg-[#7288AE] text-[1rem] text-black font-[Perpetua]">
                                    Try this out!
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center" >
                            <div className=" md:w-[40vw] w-[30vw] ">
                                <img src="../images/others/simulation.png"/>
                            </div>
                            
                        </div>
                   
                    </div>
                </div>
                
            </div>

             {/*Helper secction that slowly changes the color of the transition block */}
    <style>{'@keyframes darkenfromblue{0%{background-color:#F3ECE1} 100%{background-color:#000}}'}</style>
            <div className="md:h-[50vh] h-[35vh] w-full flex flex-col items-center justify-center bg-[#F3ECE1] " 
            style={{animation: 'darkenfromblue linear both',
                    animationTimeline:'view()', 
                    animationRange:'entry 5% cover 40%'}}>
            </div>
            {/* Footer section Siguro Creators Panel nalang ulit or an image*/}

            <Footer/>
            
        </div>
    );
}