import  Workflow  from "../assets/code.jpg"
import {checklistItems} from '../constants/index'
import { CircleCheck } from 'lucide-react';

export default function Accelerate(){
 return(
    <div className="w-full h-screeen flex flex-col  m-10 bg-black justify-between items-center gap-10 ">
        <div>
        <div className="flex flex-row justify-center items-center text-center mx-10 mt-5 md:mt-20 lg:mt-30">
                <div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl">Accelerate Your
                        <span className=" bg-gradient-to-r from-orange-400 to-orange-900 text-transparent bg-clip-text">
                         {" "}Coding flow
                         </span>
                    </h1>
                </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 bg-black justify-around h-screen items-start">
            <div className="w-96 mx-3 h-96 md:w-full md:h-full">
                <img className="md:h-[80vh]" src={Workflow} alt="Work Flow Image" />
            </div>
            <div className="flex flex-col mx-4  justify-evenly items-start gap-16">
            {
                        checklistItems.map((ele,index)=> <Cards key={index} checklistItems={ele} />)
                    }
            </div>
        </div>
    </div>
 )   
}

const Cards = ({checklistItems})=>{
    return <>
           <div className="flex flex-row justify-between items-start md:gap-10 gap-5 h-full">
                <div className="bg-zinc-900 rounded-full">
                    <h1 className="text-green-500 z-99"><CircleCheck size={60} strokeWidth={1.25} /></h1>
                </div>
                <div  className="flex  flex-col justify-between gap-3">
                <div>
                        <h1 className="text-xl md:text-2xl ">
                        {
                        checklistItems.title    
                    }
                        </h1>
                    </div>
                    <div>
                        <p className="text-md md:text-xl text-neutral-500" >
                            {
                                checklistItems.description
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
}