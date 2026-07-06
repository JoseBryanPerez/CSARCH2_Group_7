import Link from "next/link";
import Navigation from "../../../../components/view_mainPage/Navigation";
import { content_panel} from "../../content_panel";

interface Page{
    params:Promise<{id:string}>;
}
export default async function panelTemplate({params}:Page){
   const {id}=await params;
   const content=content_panel[id];
    if(!content){
        return(
            <div className="min-h-screen min-w-screen bg-[#F3ECE1] flex flex-col items-center justify-center gap-10">
            <Navigation/>

            <div className="min-h-screen w-full">
            </div>
            <div className="h-[10vh] w-full"> 
                <Link href="/simulator"> //change this to specific simulator page
            <button className="bg-[#4B5694] hover:bg-[#7288AE] text-white font-[Kaisei Decol] py-2 px-10 rounded">
                Try this out!
            </button>
            </Link>
            <Link href="/">
            <button className="bg-[#4B5694] hover:bg-[#7288AE] text-white font-[Kaisei Decol] py-2 px-10 rounded">
                Back to Home
            </button>
            </Link></div>
            
        </div>
        );
    }
   return(
      <div className="w-full min-h-screen bg-[#F3ECE1] gap-10">
            <Navigation/>
             {/*Main Image Place Holder */}
            <div className="xl:h-[35vh] h-[30vh] bg-white">
                    <img src={content.image} alt="ImageForENIAC"/>
            </div>
            <div className="min-h-screen w-full flex flex-col gap-10">
                {/*Title and Content */}
                <div className="h-auto w-full flex flex-col justify-center  xl:p-20 p-10 ">
                <h1 className="text-black text-[clamp(3rem,6vw,5rem)]">{content.title}</h1>
                <h2 className="text-black text-[clamp(10px,5vw,40px)] break-words">{content.body1}
                </h2>
                </div>
                {/*Simulator Section */}
                <div className="h-auto w-full bg-white">
                    <div className="flex justify-between">
                        <div className="w-[50vw] flex flex-col xl:p-20 p-10 ">
                            <h3 className="text-black text-[clamp(2rem,6vw,3rem)]"> SIMULATOR </h3>
                            <h3 className="text-black break-words text-[clamp(10px,5vw,40px)] "> {content.simulatorBody} </h3>
                        </div>
                        <div>
                            <div className="bg-black h-full w-[40vw] relative">
                                <img src={content.image}/>
                                <div className="absolute p-5 flex items-center">
                                <Link href="/simulator">
                                <button className="absolute xl:w-[10vw] w-[25vw] py-2 px-2 bg-[#4B5694] hover:bg-[#7288AE] text-white font-[Kaisei Decol] text-[clamp(10px,4vw,25px)]">
                                    Try this out!
                                </button>
                                </Link>
                            </div>
                            </div>
                            
                        </div>
                   
                    </div>
                </div>
               {/* Back Button */}
                <div className="h-[5vh] xl:p-20 p-10 flex justify-end items-center "> 
                <Link href="/">
                <button className="xl:w-[10vw] w-[25vw] py-2 px-2 bg-[#4B5694] hover:bg-[#7288AE] text-white font-[Kaisei Decol] text-[clamp(10px,4vw,25px)]">
                    Back to Home
                </button>
                </Link>
                </div>
            </div>


            {/* Footer section Siguro Creators Panel nalang ulit or an image*/}
            <div>

            </div>
            
        </div>
    );
}