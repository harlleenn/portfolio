import React from 'react'
import {  useState } from 'react'
import { Play, Pause , SkipForward, SkipBack, Repeat1, Shuffle  } from 'lucide-react'
import Spotify from '../images/Spotify.png'

export default function MusicPlayer() {
  const [pause,setPause] = useState(false)

  const handlePause = () => {
      setPause(!pause)
  }

    
  
    return (
        <div className="fixed bottom-0 left-0 w-full  z-10  bg-black text-white  ">
            <div className=" flex flex-row mt-5">
              <img src={Spotify} alt= 'spotify ' className='w-9 ml-5' />
              <div className='ml-5'>
              <div className="text-sm font-semibold">Portfolio</div>
              <div className="text-xs text-gray-400">Harleen Kaur Kukreja</div>
              </div>
           
            </div>
            <div className='flex flex-row  justify-center mb-5'>
            <Shuffle size={18}/>
            <SkipBack size={20} className='mr-5 ml-5'/>
              <div> <button onClick={handlePause}>{pause ? <Play size={20} color='green'/> : <Pause size={20} color='green'/>}</button>
            
              </div>
              <SkipForward size={20} className='ml-5 mr-5'/>
             
              <Repeat1 size={18}/>
            </div>
          
        </div>
      )
    }
