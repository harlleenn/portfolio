import React  from 'react'
import { Home,  Search , Library ,AlignJustify ,SquareChevronRight } from 'lucide-react';
import Spotify from '../images/Spotify.png';
import Skills from './SubComponents/Skills';

export default function SideNav({open, handleOpen}) {
  
  return (

    <div className={` flex flex-col w-64 fixed bottom-0 
     bg-gray-950  text-white left-0  top-0  transition-transform transform duration-700 
      ${open ? 'translate-x-0' : '-translate-x-52'}`}>
        <button onClick={handleOpen} className="absolute top-4 left-4 z-50 ">
                {open ? <AlignJustify /> :""}
        </button> 
        <button onClick={handleOpen} className="absolute top-4 right-6 ">
                {open ? "" : <SquareChevronRight onClick={handleOpen}/>}
        </button> 

        <div className='m-5 text-base/8 ' >
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
              <Skills items={["React.js", "Javascript", "Html", "Css" , "python" , "sql"]}/>
                <div>
                    <hr></hr>
                    <div className='mt-3 mb-3 text-color-white font-medium'>Profiences</div>
                    <hr></hr>
                </div>
            <Skills items={["Problem solving", "Creative"]}/>
        </div>
        
    </div>
  )
}
