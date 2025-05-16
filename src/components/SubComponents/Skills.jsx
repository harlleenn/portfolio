import React from 'react'

export default function Skills({items}) {
  return (
    <div>
     {items.map((item, index) => (
        <div  key={index }className='text-sm/6 text-gray-300'>
            {item}
        </div>
     ))}
        
    </div>
  )
}
