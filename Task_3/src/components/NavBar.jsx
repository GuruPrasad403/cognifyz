import { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'
export default function Navbar(){
    const [mobileUser,setMobileUser] = useState(false)
    const togal = ()=>{
        setMobileUser(!mobileUser)
    }
    return(
        <div className='sticky'>
        <div className=" sticky px-20 lg:px-40 gap-24  py-3 flex flex-cols justify-between items-center text-white" style={{borderBottom:"1px solid gray"}} >
            <div className=' flex flex-rows justify-center items-center w-10 h-10'>
                <img src={logo} alt="This is the Lofo" />
                <h1 className='text-2xl'>VirtualR</h1>
            </div>
            <div className='hidden lg:block mg-flex h-full w-96 '>
                <ul className='flex flex-cols justify-between items-center'>
                    <li className='md:text-lg text-[15px]'>Features</li>
                    <li className='md:text-lg text-[15px]'>Workflow</li>
                    <li className='md:text-lg text-[15px]'>Pricing</li>
                    <li className='md:text-lg text-[15px]'>Testimonials</li>
                </ul>
            </div>
            <div className='hidden lg:flex w-96  flex-cols justify-around items-center'>
                <div>
                    <button className='p-2 rounded-lg' style={{border:"1px white solid"}}>
                        <a href="https://virtual-r-seven.vercel.app/SignIn">Sign In</a>
                    </button>
                </div>
                <div>
                    <button className='w-full bg-gradient-to-r rounded-lg from-orange-500 to-orange-900 p-2'>
                        <a href="https://virtual-r-seven.vercel.app/CreateanAccount">Create an account</a>
                    </button>
                </div>
            </div>
            <div  className="flex flex-row lg:hidden">
             <div onClick={togal} className=' cursor-pointer'>
             {
                mobileUser?<X />:<Menu/>
             }   
            </div>
            </div>
        </div>
        
        {mobileUser?
            <div className='overflow-hidden absolute bg-black flex flex-col h-[60vh] md:m-auto w-full   md:w-full text-white'>
                   
            <div className='flex h-full w-96 lg:w-full '>
                <ul className='m-auto '>
                    <li className='text-lg py-5'>Features</li>
                    <li className='text-lg py-5'>Workflow</li>
                    <li className='text-lg py-5'>Pricing</li>
                    <li className='text-lg py-5'>Testimonials</li>
                </ul>
            </div>
            
            <div className='flex w-96 py-10 flex-cols justify-around items-center m-auto'>
                <div>
                    <button className='p-2 rounded-lg' style={{border:"1px white solid"}}>                    
                        <a href="https://virtual-r-seven.vercel.app/SignIn">Sign In</a>
                    </button>
                </div>
                <div>
                    <button className='w-full bg-gradient-to-r rounded-lg from-orange-500 to-orange-900 p-2'><a href="https://virtual-r-seven.vercel.app/CreateanAccount">Create an account</a></button>
                </div>
            </div>
            </div>:null}
            </div>
    )
}