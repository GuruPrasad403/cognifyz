import {checklistItems, pricingOptions} from '../constants/index'
import { Check } from 'lucide-react';
export default function Pricing(){
    return(
        <div className="flex flex-col justify-between items-center mt-5  mb-16 h-full">
            <div>
                <h1 className="text-4xl lg:text-6xl">Pricing</h1>
            </div>
            <div className="flex md:flex-row flex-col justify-around items-center gap-16 mt-8 md:mt-20">
                    {
                        pricingOptions.map((ele,index)=>{
                           return <PriceCard pricingOptions={ele} key={index} />
                        })
                    }
            </div>
        </div>
    )
}

const PriceCard = ({pricingOptions})=>{
    return(
        <div className="grid grid-cols-1 grid-rows-2 w-72 md:w-[30vw] gap-12 border border-zinc-700 p-5 rounded-md">
                    <div className=' '>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl'>
                            {
                                pricingOptions.title
                            }
                        </h1>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl '>
                            {
                                pricingOptions.price
                            }
                            <span className='text-[25px] text-zinc-500'>/month</span>
                        </h1>
                    </div>
                    <div className='flex flex-col justify-start items-start  gap-5 mt-5'>
                        {
                            pricingOptions.features.map((ele,index)=> {
                                return <div className='flex flex-row justify-start items-center gap-5  '>
                                <div><Check /></div>
                                <div className='text-xl  '>{ele}</div>
                                </div> 
                            })
                        }
                    </div>
                    <div className='w-full flex justify-center items-center p-5' >
                        <button  className='text-xl w-full border border-orange-800 rounded-lg p-2 hover:bg-orange-800 hover:text-white'>
                        Subscribe
                        </button>
                    </div>
                </div>
    )
}