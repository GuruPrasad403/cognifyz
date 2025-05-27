import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
export default function HeroSection(){
return(
 <div className="w-full h-full px-5 bg-black mt-5 lg:mt-20 flex flex-col gap-5 justify-around items-center">
    <div className="flex justify-center items-center text-pretty">
        <h1 className="text-center tracking-wide w-full text-[2em] sm:text-6xl  lg:text-7xl">
        VirtualR build tools 
        {" "}
        <span className="  bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
        {" "}for <br />developers
        </span>
        </h1>    
    </div>
    <div>
        <p className="px-3 text-center my-5 text-md md:text-xl text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our intuitive
        development tools. <br/>Get started today and turn your imagination into immersive reality!
        </p>
    </div>
    <div>
    <div className='flex w-96 py-5 flex-cols justify-around items-center m-auto'>
                <div>
                    <button className='w-full bg-gradient-to-r rounded-lg from-orange-500 to-orange-900 px-6 py-4'>start for free</button>
                </div>
                <div>
                    <button className='px-6 p-3 rounded-lg' style={{border:"1px white solid"}}>Documentation</button>
                </div>
            </div>
    </div>
    <div className="flex justify-center gap-5 mt-10">
        <video autoPlay loop muted className="flex w-1/2 md:w-[48%] rounded-lg border border-orange-700 shadow-orange-400 lg:mx-2 my-4 ">
            <source src={video1} type="video/mp4"></source>
            Your Browser is Not Supporting Video
        </video>
        <video autoPlay loop muted className="flex w-1/2 md:w-[48%] rounded-lg border border-orange-700 shadow-orange-400 lg:mx-2 my-4 ">
            <source src={video2} type="video/mp4"></source>
            Your Browser is Not Supporting Video
        </video>
    </div>
 </div>   
)
}