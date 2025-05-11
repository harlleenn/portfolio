import React from 'react'
import { Home,  Search , Library  } from 'lucide-react';

export default function SideNav() {
  return (

    <div className=' flex flex-col  w-64 fixed bottom-0  bg-blend-soft-light bg-black text-white left-0    top-0 '>
        <div className='m-5 text-base/8 '>
            <hr></hr>
            <div className="font-poppins mt-3 mb-3">Spotify</div>  
            <hr></hr> 
                <div className=''>
                    <div className='text-color-white font-poppins flex-row'>   <Home size={20} /> Home</div>
                    <div>Search <Search size={20}/></div>
                    <div>Your Library <Library size={20}/></div>
                </div>
                <div>
                    <hr></hr>
                    <div className='mt-3 mb-3'>Skills</div>
                    <hr></hr>
                </div>
                <div >
                    <div className='text-sm text-gray-300'>React.js</div>
                    <div  className='text-sm text-gray-300'>Javascript</div>
                    <div  className=' text-gray-300 '>Html</div>
                    <div  className='text-sm text-gray-300'>Css</div>
                    <div  className='text-sm text-gray-300' >Sql</div>
                    <div  className='text-sm text-gray-300' >Python</div>
                </div>
                <div>
                    <hr></hr>
                    <div className='mt-3 mb-3'>Profiences</div>
                    <hr></hr>
                </div>
                <div>
                    <div>English</div>
                    <div>Problem-solving</div>
                    <div>Adablity</div>

                </div>
        </div>
    </div>
  )
}
