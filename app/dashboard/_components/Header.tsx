import React from 'react'
import { Search } from 'lucide-react'
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-purple-100 flex justify-between items-center">
      <div
        className="flex gap-2 items-center p-2 
       max-w-md"
      >
      
      </div>
      <div className=" flex gap-5 items-center ">
        <h2
          className=" cursor-pointer   hover:bg-purple-600 hover:scale-110 transition bg-purple-500 p-1 rounded-full text-sm text-white px-2"
        >
          <a href={"/dashboard/upgrade"}>
          🔥Unlock Membership for just ₹999/Month!
          </a>
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header