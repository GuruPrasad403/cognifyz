import {features} from '../constants/index'

export default function Features(){
    return(
        <div className="flex flex-col justify-between items-center  mt-20 md:mt-20 lg:mt-25">
            <div className="bg-zinc-700 rounded-lg px-3">
                <h1 className="text-orange-400 text-lg">Features</h1>                
            </div>
            <div className="flex flex-col justify-between items-center mt-5 md:mt-20 lg:mt-30">
                <div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl">Easily build
                        <span className=" bg-gradient-to-r from-orange-400 to-orange-900 text-transparent bg-clip-text">
                         {" "}your code
                         </span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly items-center  gap-5 md:mt-10 lg:mt-20">
                    <div className='grid md:grid-cols-2 md:grid-row-6 lg:grid-cols-3 mg:grid-rows-3 lg:gap-10 gap-5'>
                    {
                         features.map((ele, index) => (
                            <Cards key={index} feature={ele} />
                        ))
                    }</div>
                </div>    
            </div>
            
        </div>
        
    )
}

const Cards =({feature})=>{
    return    <>
        <div className="flex flex-row justify-between items-start p-5 w-96 md:items-start gap-10 md:mt-10 lg:mt-16 md:w-96 lg:w-3/4 ">
            <div className='bg-zinc-900 rounded-full p-3'>
                <h1 className='text-[20px] md:text-lg text-orange-500'>{
                    feature.icon    
                }</h1>
            </div>
            <div className='flex flex-col justify-between items-start md:gap-10 gap-5'>
                <div>
                    <h1 className='text-xl md:text-2xl lg:text-2xl'>{feature.text}</h1>
                </div>
                <div>
                    <p className='text-lg md:w-72 lg:96 text-zinc-500 w-64 '>
                        {
                        feature.description
                        }
                    </p>
                </div>
            </div>
        </div>
    </>
}