import {testimonials} from '../constants/index'

export default function Testimonials(){
    return(
        <div className="flex flex-col justify-center items-center  mt-5  mb-16 h-full">
            <div>
                <div>
                    <h1 className="text-4xl lg:text-6xl">What people are saying</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-5 p-10'>
                {
                    testimonials.map((ele,index)=>{
                        return(
                            <Cards testimonials={ele} index={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Cards = ({testimonials})=>{
    return(
        <div className='flex flex-col justify-between items-start mt-20 gap-3 w-full border p-5 border-zinc-600 rounded-lg'>
                <div>
                    <p className='w-[30vw] text-zinc-400'>
                        {
                            testimonials.text
                        }
                    </p>
                </div>
                <div className='flex flex-row justify-between items-start gap-10'>
                    <div>
                        <img className="w-14 h-14 rounded-full" src={testimonials.image} />
                    </div>
                    <div>
                        <h1 className='text-lg text-zinc-400'>{testimonials.user}</h1>
                        <p className='text-lg  text-zinc-600'>{testimonials.company}</p>
                    </div>
                </div>
            </div>
    )
}