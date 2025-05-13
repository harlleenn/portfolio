import React, {  useState } from 'react'
import { Play } from 'lucide-react'
import food from '../images/food.png'

export default function Popular() {
 const [message,setMessage] = useState("Follow")
const [following , setFollowing] = useState(false);
const handleFollow = () => {
  setFollowing(!following);

  if(following === true){
    setMessage("Following")

  }
}

  return (
    <div className=' absolute bg-gray-900  p-4 left-64 mt-11  top-64  text-white'>
      <div className='flex flex-col space-y-3'>
        <div className='flex flex-row'>
        <div><Play size={40} color='black' className='rounded-3xl p-2 bg-green-700'/></div>

            <div className='flex ml-5 mr-10'><button className='pl-8 pr-8 border-2 border-white' onClick={handleFollow}>{message}</button></div>
            <div className='flex  pl-8 pr-8 border-2 border-white'>
            <button>Download Cv</button>
            </div>
        </div>
        
<div className='mt-10 space-x-9'>
    <div className='font-sans font-semibold text-xl mt-5  mb-5'>Popular</div>

    <div className='grid grid-cols-4 gap-2 items-  hover:bg-gray-800'>
      <div className='text-sm text-gray-300'>Email:</div>
      <div className='text-sm text-gray-300'>harleen.kukrejaa@gmail.com</div>
      <div className=' flex justify-evenly m-1'> 6:34</div>
   </div>

  <div className='grid grid-cols-4 gap-2 items-center  hover:bg-gray-800'>
    <div className='text-sm text-gray-300'>Phone:</div>
    <div className='text-sm text-gray-300'>9654793003</div>
    <div className='text-sm text-gray-300 flex justify-evenly m-1'> 3:34</div>
  </div>

  <div className='grid grid-cols-4 gap-2 items-center  hover:bg-gray-800 '>
    <div>LinkedIn:</div>
    <div>harlleenn</div>
    <div className='flex justify-evenly m-1'> 2:84</div>
  </div>

  <div className='grid grid-cols-4 gap-2 items-center hover:bg-gray-800'>
    <div>Github:</div>
    <div className=''>https:harlleenn</div>
    <div className='flex justify-evenly m-1'> 5:34</div>
  </div>
</div>
      </div>

    <div className='mt-10 space-x-9'>
        <div className="items-center  text-2xl font-bold text-white mb-6">Popular Projects</div>
  
      <div className="grid md:grid-cols-5 gap-2">
         <div className="bg-gray-950 rounded-lg  p-4">
            <div className="h-40 rounded mb-4 "><img src={food} alt='food' className="h-40"/></div>
            <div className="text-lg font-bold text-black dark:text-white">Yum-finds</div>
            <div className='rounded-3xl p-4 float-right bg-gradient-to-r from-green-400 to-green-900 '>
            <a href='https://pokemonfinderr.netlify.app/' target='_blank'  rel="noreferrer" ><Play size={20} color='white'/> </a>
            </div>
             <div className="text-gray-700 dark:text-gray-200">Website • 2025</div>
        </div>

        <div className=" bg-gray-950 rounded-lg p-4">
            <div className="h-40 bg-gray-200 rounded mb-4"> <img src={food} alt='food' className ="h-40" /> </div>
            <div className="text-lg font-bold text-black dark:text-white">Job finder</div>
            <div className='rounded-3xl p-4 float-right bg-gradient-to-r from-green-400 to-green-900'>
            <a href='https://pokemonfinderr.netlify.app/' target='_blank'  rel="noreferrer" ><Play size={20} color='white'/></a>
            </div>
            <div className="text-gray-700 dark:text-gray-200">Website • 2024</div>
        </div>
      </div>
   </div>

    <div className=" from-green-950 to-blue-300 text-white h-screen ">
        <div className=" mt-10 space-x-9">
          <div className="text-2xl font-bold mb-4">About</div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-4 relative overflow-visible hover:bg-gray-700">
                  <div className="h-64 w-full bg-gray-600 rounded mb-4 flex items-center justify-center text-white">Image</div>
                    <div className="absolute top-4 p-4 m-4 right-4 bg-blue-500 text-white rounded-full
                        w-16 h-16 flex items-center justify-center text-center text-sm font-semibold">
                     1+ Years 
                    </div>
                    <div className="mb-2 text-sm ">
                    I'm a final-year BCA student with a strong enthusiasm for exploring technology and turning concepts into
                    working code. Over the past two years, I’ve been actively learning web development, where I discovered a passion
                    for building responsive websites, developing front-end interfaces, and creating beautiful, user-friendly designs. I
                    enjoy transforming ideas into functional projects and tackling challenges step by step. As I prepare to enter the
                    professional world, I’m excited to continue growing in tech and making meaningful contributions through my
                    skills.
                    </div>
                </div>

          <div className='mr-8 -mt-10'>
            <div className="text-2xl font-bold mb-4">Education</div>
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg mb-5 hover:bg-gray-700">
                <div className="bg-gray-900 text-white px-5 py-2 rounded text-center font-bold">
                <div className="text-sm">SEP</div>
                <div className="text-xl">19</div>
                </div>

                <div>
                <div className="font-semibold">Amity University, Noida , India</div>
                <div className="text-sm text-gray-300">Bachelor of Computer Science • August 2023 - Jun 2026</div>
                </div>
              </div>

        
          <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg  hover:bg-gray-700">
            <div className="bg-gray-900 text-white  px-5 py-2 rounded text-center font-bold">
            <div className="text-sm">SEP</div>
            <div className="text-xl">16</div>
            </div>
            <div>
                <h4 className="font-semibold"> Ramagya School , Noida, India</h4>
                <p className="text-sm text-gray-300"> April 2022 - Feb 2023</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
