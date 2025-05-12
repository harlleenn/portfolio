import React from 'react'
import { Home,  Search , Library  } from 'lucide-react';

export default function SideNav() {
  return (

    <div className=' flex flex-col  w-64 fixed bottom-0  bg-blend-soft-light  bg-gray-700  text-white left-0    top-0 '>
        <div className='m-5 text-base/8 '>
            <hr></hr>
            <div className="font-poppins mt-3 mb-3">Spotify</div>  
            <hr></hr> 
                <div className=''>
                    <div className='flex mt-2' >  
                         <Home size={20} />
                         <span className='text-color-white font-poppins ml-2 '>Home</span>
                         </div>

                    <div className='flex '>
                    <Search size={20}/>
                     <span className='text-color-white font-poppins ml-2'> Search</span>  
                    </div>
                    <div className='flex mt-2' >
                         <Library size={20}/>
                    <span className='text-color-white font-poppins ml-2'>Library</span>
                    </div>
                </div>
                <div>
                    <hr></hr>
                    <div className='mt-3 mb-3 font-poppins'>Skills</div>
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
                    <div className='mt-3 mb-3'>Profiences</div>
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
