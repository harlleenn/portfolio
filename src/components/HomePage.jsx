import React from 'react'
import { BadgeCheck } from 'lucide-react'

export default function HomePage() {
  return (
    <div className=' absolute bg-pink-900 top-0 p-4 left-64 right-0  mb-10  text-white'>
        <div className='mb-10 ml-4'>
            <BadgeCheck size={20} color='blue'/>
            <div className='text-sm' >Verified</div>
            <div className='text-2xl font-bold '>Harleen kaur kukreja</div>
            <p>1,00,900 Viewers</p>
        </div>
    </div>
  )
}
