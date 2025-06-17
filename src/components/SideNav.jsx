import React  from 'react'
import { Home,  Search , Library  ,SquareChevronRight,SquareChevronLeft  } from 'lucide-react';
import Spotify from '../images/Spotify.png';
import Skills from './SubComponents/Skills';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';



export default function SideNav({open, handleOpen}) {
  const {toggleTheme} = useContext(ThemeContext)
  return (

    <motion.div 
    animate={{ x: open ? 0 : -200 }}  
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className= "flex flex-col w-64 fixed bottom-0  bg-gray-950  text-white left-0  top-0">

        <button onClick={handleOpen} className="absolute top-4 right-5  ">
                {open ? <SquareChevronLeft size={30} /> :<SquareChevronRight size={30}/>}
        </button> 

       

        <div className='m-5 text-base/8 ' >
        <div className="font-sans font-semibold text-xl mt-3 mb-3  flex">

    
            <img src={Spotify} alt='spotify' className='w-8 mr-2'/>
            Spotify 
            </div>  

            <hr></hr> 

                <div className='flex flex-col mt-4  '>
                    <div className='hover:bg-pink-700'><button onClick={toggleTheme}>Toggle</button>
                    </div>
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

    </motion.div>
  )

}
