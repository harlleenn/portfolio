import React from 'react'

export default function Details({details}) {
  return (
    <>
        {details.map((detail,index) => (
            <div  key={index} className='text-sm text-gray-300'>
                {detail}
            </div>
        ))}
    </>
  )
}
