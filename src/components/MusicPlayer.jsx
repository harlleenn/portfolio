import React from 'react'
import { Play } from 'lucide-react'

export default function MusicPlayer() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-10  bg-black text-white px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            
            <div>
              <h1 className="text-sm font-semibold">Portfolio</h1>
              <p className="text-xs text-gray-400">Harleen Kaur Kukreja</p>
              <div className='flex justify-center'><Play size={20}/></div>
            </div>
          </div>
        </div>
      )
    }
