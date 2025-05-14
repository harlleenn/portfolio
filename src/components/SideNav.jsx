import React from 'react'
import { Home,  Search , Library  } from 'lucide-react';
import Spotify from '../images/Spotify.png'

export default function SideNav() {
  return (

    <div className=' flex flex-col  w-64 fixed bottom-0  bg-blend-soft-light  bg-gray-950  text-white left-0   top-0 '>
        <div className='m-5 text-base/8 '>
       
            <div className="font-sans font-semibold text-xl mt-3 mb-3  flex">
            <img src={Spotify} alt='spotify' className='w-8 mr-2'/>
            Spotify 
            </div>  

            <hr></hr> 

                <div className='flex flex-col mt-4  '>
                    <div className='flex  hover:bg-gray-800 ' >  
                         <Home size={20} className='-mb-3' />
                         <span className='text-color-white font-medium ml-2 '>Home</span>
                         </div>

                    <div className='flex  hover:bg-gray-800 '>
                    <Search size={20}/>
                     <span className='text-color-white font-medium ml-2 '> Search</span>  
                    </div>
                    <div className='flex  hover:bg-gray-800' >
                         <Library size={20}/>
                    <span className='text-color-white font-medium ml-2 space-x-5 '>Library</span>
                    </div>
                </div>

                <div>
                    <hr></hr>
                    <div className='mt-3 mb-3 text-color-white font-medium'>Skills</div>
                    <hr></hr>
                </div>
                <div >
                    <div className='text-sm/6 text-gray-300'>React.js</div>
                    <div  className='text-sm/6 text-gray-300'>Javascript</div>
                    <div  className='text-sm/6 text-gray-300 '>Html</div>
                    <div  className='text-sm/6 text-gray-300'>Css</div>
                    <div  className='text-sm/6 text-gray-300' >Sql</div>
                    <div  className='text-sm/6 text-gray-300' >Python</div>
                </div>
                <div>
                    <hr></hr>
                    <div className='mt-3 mb-3 text-color-white font-medium'>Profiences</div>
                    <hr></hr>
                </div>
                <div>
                    <div className='text-sm/6  text-gray-300'>English</div>
                    <div className='text-sm/6  text-gray-300'>Problem-solving</div>
                    <div className='text-sm/6  text-gray-300'>Adablity</div>

                </div>
        </div>
    </div>
  )
}
