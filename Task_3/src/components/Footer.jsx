import {resourcesLinks,platformLinks,communityLinks} from '../constants/index'
export default function Footer(){
    return(
        <div className=' border-t w-full border-zinc-500 grid grid-cols-3 grid-rows-1'>
            <div className='flex flex-col gap-5 md:px-10 mt-5 justify-start items-start p-5'>
                <div>
                    <h1 className='text-xl font-bold'>Resources</h1>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    {
                        resourcesLinks.map((ele,index)=>{
                            return (
                                <div>
                                    <p>{ele.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col gap-5 md:px-10 mt-5 justify-center items-start p-5'>
                <div>
                    <h1 className='text-xl font-bold'>Platform</h1>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    {
                        platformLinks.map((ele,index)=>{
                            return (
                                <div>
                                    <p>{ele.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col gap-5 md:px-10 mt-5 justify-start items-start p-5'>
                <div>
                    <h1 className='text-xl font-bold'>Community</h1>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    {
                        communityLinks.map((ele,index)=>{
                            return (
                                <div>
                                    <p>{ele.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}