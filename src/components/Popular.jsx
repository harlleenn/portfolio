import React, {  useState } from 'react'
import { Play } from 'lucide-react'
import yumFinds from '../images/yumFinds.png'
import abstract from '../images/abstract.jpg'
import Details from './SubComponents/Details';
import { motion } from 'framer-motion';
import ProjectDetails from './SubComponents/ProjectDetails';
import AboutDetails from './SubComponents/AboutDetails';

export default function Popular({open}) {
const [following , setFollowing] = useState(true);



const handleFollow = () => {
  setFollowing(!following)
}


  return (
    <motion.div 
    animate={{x : open ? 0 : -200}}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className={`absolute  bg-gray-900 p-4 left-0 right-0 ml-64 mt-11  top-64  text-white space-y-5 space-x-5  ${open ? "left-0 ri ease-in" : "w-full"}`}>

      <div className='flex flex-col space-y-3 space-x-5'>

        <div className='flex flex-row'>
        <div><Play size={40}  className='rounded-3xl p-2 ml-4  bg-gradient-to-r from-green-400 to-green-90 text-black '/></div>

          <div className='flex ml-5 mr-10'>
              <button className={`pl-8 pr-8 border-2 border-white transition duration-100 
            ${following ? " text-white" : "bg-green-700 text-white"}`}   
                   onMouseDown={handleFollow}>{following ? "Follow" : "Following"}
              </button>
          </div>
            <div className='flex  pl-8 pr-8 border-2 border-white'>
              {/* adding cv then being able to download */}
            <button >Download Cv</button> 
            </div>
        </div>
        
<div className='mt-10 space-x-9'>
    <div className='font-sans font-semibold text-xl mt-5 mb-5 hover:underline'>Popular</div>

    <div className='grid grid-cols-4 gap-2 items-  hover:bg-gray-800 p-2' >
      <Details details={["1", 'Email' , "harleen.kukrejaa@gmail.com"]}/>
      <div className=' text-sm text-gray-300 flex justify-evenly m-1'> 6:34</div>
   </div>

  <div className='grid grid-cols-4 gap-2 items-center  hover:bg-gray-800 p-2' >
      <Details details={["2","Phone", "9654793003"]}/>
    <div className='text-sm text-gray-300 flex justify-evenly m-1'> 3:34</div>
  </div>

  <div className='grid grid-cols-4 gap-2 items-center  hover:bg-gray-800 p-2 '>
  <div className='text-sm text-gray-300'>3</div>
  <Details details={["Linkedin", "linkedin.com/in/harlleeenn"]}/>
    <div className='text-sm text-gray-300 flex justify-evenly m-1'> 2:84</div>
  </div>

  <div className='grid grid-cols-4 gap-2 items-center hover:bg-gray-800 p-2'>
  <div className='text-sm text-gray-300 '> 4 </div>
    <Details details={[ "Github", "https://github.com/harlleenn"]}/>
    <div className='text-sm text-gray-300 flex justify-evenly m-1'> 2:84</div>
  </div>
</div>
      </div>

  <ProjectDetails yumFinds={yumFinds} />
  
  <AboutDetails abstract={abstract}/>

  </motion.div>
  )
}
