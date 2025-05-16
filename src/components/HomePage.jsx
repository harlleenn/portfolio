import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage({open}) {
  return (
    <motion.div 
    animate={{x : open ? 0 : -200}}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className='absolute ml-64 left-0 right-0 top-0 w-full bg-gray-800 text-white'>

      <div className="h-[300px] flex flex-col  justify-end px-10 pb-10">
        <div className=" flex items-center gap-2 mb-2">
          <BadgeCheck size={20} color="blue" />
          <span className="text-sm  text-white ">Verified</span>
        </div>
        <h1 className="text-6xl font-extrabold">Harleen Kaur Kukreja</h1>
        <p className="text-sm/9 ">1,00,900 monthly viewers</p>
      </div>
    </motion.div>
  );
}
