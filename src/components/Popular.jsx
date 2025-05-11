import React from 'react'
import { Play } from 'lucide-react'

export default function Popular() {
  return (
    <div className=' absolute bg-blue-900  p-4 left-64   top-20  text-white'>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-row '>
            <div className='m-2'>Following</div>
            <div className='m-2'>Image</div>
        </div>
        <h1 className='text-2xl font-bold ml-2'>Popular</h1>
        <hr className='border-gray-500' />

        <div className='grid grid-cols-4 gap-2 items-center  '>
          <div>Email:</div>
          <div className=' truncate'>harleen.kukrejaa@gmail.com</div>
          <div className='col-span-2 m-1 '> 6:34</div>
        </div>
        <div className='grid grid-cols-4 gap-2 items-center  '>
          <div>Phone:</div>
          <div >9654793003</div>
          <div className='col-span-2 m-1'> 3:34</div>
        </div>
        <div className='grid grid-cols-4 gap-2 items-center  '>
          <div>LinkedIn:</div>
          <div>harlleenn</div>
          <div className='col-span-2 m-1'> 2:84</div>
        </div>
        <div className='grid grid-cols-4 gap-2 items-center'>
          <div>Github:</div>
          <div className=' truncate'>https:harlleenn</div>
          <div className='col-span-2 m-1'> 5:34</div>
        </div>
      </div>

      <div className='mt-10 mb-10'>
        <div className=" items-start  text-2xl font-bold text-white mb-6">Popular Projects</div>
  
        <div className="grid md:grid-cols-6 gap-4">

         <div className="bg-white dark:bg-pink-800 border dark:border-gray-700 rounded-lg shadow-sm p-4">
            <div className="h-40 bg-gray-200 rounded mb-4 ">Image</div>
            <div className="text-lg font-bold text-black dark:text-white">Yum-finds</div>
            <div className='rounded bg-black'>
            <Play size={20} color='green'/>
            </div>
             <p className="text-gray-700 dark:text-gray-200">Website • 2025</p>
        </div>

        <div className="bg-white dark:bg-blue-800 border dark:border-gray-700 rounded-lg shadow-sm p-4">
            <div className="h-40 bg-gray-200 rounded mb-4">Image</div>
            <div className="text-lg font-bold text-black dark:text-white">Job finder</div>
            <div className='rounded bg-black'>
            <Play size={20} color='green'/>
            </div>
            <p className="text-gray-700 dark:text-gray-200">Website • 2024</p>
        </div>
        </div>
    </div>

    <div className=" bg-blue-900 text-white  h-screen  ">
        <div className="m-6">
            <h2 className="text-2xl font-bold mb-4">About</h2>
                <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-4 relative overflow-visible">
                <div className="h-64 w-full bg-gray-600 rounded mb-4 flex items-center justify-center text-white">Image</div>
        
                    <div className="absolute top-4 p-4 m-4 right-4 bg-blue-500 text-white rounded-full
                        w-16 h-16 flex items-center justify-center text-center text-sm font-bold">
                     1+ Years 
                    </div>

                    <p className="mb-2 text-sm ">
                    I'm a final-year BCA student with a strong enthusiasm for exploring technology and turning concepts into
                    working code. Over the past two years, I’ve been actively learning web development, where I discovered a passion
                    for building responsive websites, developing front-end interfaces, and creating beautiful, user-friendly designs. I
                    enjoy transforming ideas into functional projects and tackling challenges step by step. As I prepare to enter the
                    professional world, I’m excited to continue growing in tech and making meaningful contributions through my
                    skills.
                    </p>
                </div>

            <div className='mr-8'>
                <h2 className="text-2xl font-bold mb-4">Education</h2>


            <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg mb-5">
                <div className="bg-gray-900 text-white px-4 py-4 rounded text-center font-bold">
                <div className="text-sm">SEP</div>
                <div className="text-xl">19</div>
                </div>

                <div>
                <h4 className="font-semibold">Amity University, Noida</h4>
                <p className="text-sm text-gray-300">Bachelor of Computer Science • August 2023 - Jun 2026</p>
                </div>
            </div>

        
    <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
            <div className="bg-gray-900 text-white px-4 py-4 rounded text-center font-bold">
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
