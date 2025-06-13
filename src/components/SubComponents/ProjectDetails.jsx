import React from 'react'
import { Play } from 'lucide-react'

export default function ProjectDetails({yumFinds}) {
  return (
    <>
          <div className='mt-10 space-x-9'>
                <div className="items-center font-sans font-semibold text-xl  text-white mb-6 hover:underline">Popular Projects</div>
          
              <div className="grid md:grid-cols-5 gap-2">
                 <div className=" rounded-lg  p-4  hover:bg-gray-700">
                    <div className="h-40   bg-gray-200 rounded mb-4 "><img src={yumFinds} alt='food' className="h-35 "/></div>
                    <div className="text-lg font-bold text-black dark:text-white">Yum-finds</div>
                    <div className='rounded-3xl p-4 float-right bg-gradient-to-r from-green-400 to-green-900 '>
                    <a href='https://yumfinds.netlify.app/' target='_blank'  rel="noreferrer" ><Play size={20} color='black'/> </a>
                    </div>
                     <div className="text-gray-700 dark:text-gray-200">Website • 2025</div>
                </div>
        
                <div className="  rounded-lg p-4  hover:bg-gray-800">
                    <div className="h-40 bg-gray-200 rounded mb-4"> <img src={yumFinds} alt='food' className ="h-35" /> </div>
                    <div className="text-lg font-bold text-black dark:text-white">Job finder</div>
                    <div className='rounded-3xl p-4 float-right  bg-gradient-to-r from-green-400 to-green-900' >
                    <a href='https://pokemonfinderr.netlify.app/' target='_blank'  rel="noreferrer" ><Play size={20} color='black'/></a>
                    </div>
                    <div className="text-gray-700 dark:text-gray-200">Website • 2024</div>
                </div>
              </div>
           </div>
    </>
  )
}
