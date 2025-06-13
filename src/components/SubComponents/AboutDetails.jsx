import React from 'react'

export default function AboutDetails({abstract}) {
  return (
    <>
        <div className=" from-green-950 to-blue-300 text-white h-screen ">
        <div className=" mt-10 space-x-9">
          <div className="font-sans font-semibold text-xl  text-white  hover:underline mb-4">About</div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-4 relative  hover:bg-gray-700">
                  <div className="mb-5  rounded  flex items-center justify-center text-white"><img src={abstract} alt='abstract'/></div>
                    <div className="absolute top-4 p-4 m-4 right-4 bg-blue-500 text-white rounded-full
                        w-16 h-16 flex items-center justify-center text-center text-sm font-semibold">
                     1+ Years 
                    </div>
                    <div className="mb-2 text-sm ">
                    I'm a final-year BCA student with a strong enthusiasm for exploring technology and turning concepts into
                    working code. Over the past two years, I have been actively learning web development, where I discovered a passion
                    for building responsive websites, developing front-end interfaces, and creating beautiful, user-friendly designs. I
                    enjoy transforming ideas into functional projects and tackling challenges step by step. As I prepare to enter the
                    professional world, I am excited to continue growing in tech and making meaningful contributions through my
                    skills.
                    </div>
                </div>

          <div className='mr-8 -mt-10'>
            <div className="font-sans font-semibold text-xl  text-white  hover:underline mb-4">Education</div>
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
    </>
  )
}
