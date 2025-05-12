import React from 'react'
import {  useState } from 'react'
import { Play, Pause } from 'lucide-react'


export default function MusicPlayer() {
  const [pause,setPause] = useState(false)

  const handlePause = () => {
      setPause(!pause)
  }

    
  
    return (
        <div className="fixed bottom-0 left-0 w-full z-10  bg-black text-white px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            
            <div>
             
              <h1 className="text-sm font-semibold">Portfolio</h1>
              <p className="text-xs text-gray-400">Harleen Kaur Kukreja</p>
            
            <button onClick={handlePause}>{pause ? <Play/> : <Pause/>}</button>
            </div>
          </div>
        </div>
      )
    }
