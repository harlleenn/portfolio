import React from 'react';
import { BadgeCheck } from 'lucide-react';
export default function HomePage() {
  return (
    <div className="absolute left-64 bg-gray-800 right-0 top-0  text-white">
      <div className="h-[300px] flex flex-col  justify-end px-10 pb-10">
        <div className=" flex items-center gap-2 mb-2">
          <BadgeCheck size={20} color="blue" />
          <span className="text-sm  text-white ">Verified</span>
        </div>
        <h1 className="text-6xl font-extrabold">Harleen Kaur Kukreja</h1>
        <p className="text-sm/9 ">1,00,900 monthly viewers</p>
      </div>
    </div>
  );
}
