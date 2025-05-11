import React from 'react'
import { Home } from 'lucide-react';

export default function SideNav() {
  return (

    <div className=' flex flex-col  w-64 fixed bottom-0 bg-black text-white left-0    top-0 '>
        <div className='m-5 text-base/8 '>
            <hr></hr>
         <h1 className="font-poppins">Spotify</h1>  
         <hr></hr> 
                <div>
                    <div className='text-color-white font-poppins'>Home
                    <Home size={20} />
                    </div>
                
                    <div>Search</div>
                    <div>Your Library</div>
                </div>
                <div>
                    <hr></hr>
                    <h1>Skills</h1>
                    <hr></hr>
                </div>
                <div>
                    <div>React.js</div>
                    <div>Javascript</div>
                    <div>Html</div>
                    <div>Css</div>
                    <div>Sql</div>
                    <div>Python</div>
                </div>
                <div>
                    <hr></hr>
                    <h1>Profiences</h1>
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
