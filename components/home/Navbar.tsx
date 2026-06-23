import React from 'react'
import Search from '@/components/home/Search';
import Profile from '@/components/home/ProfileIcon';
import {auth} from '@/auth';

async function Navbar() {
  const session = await auth();
  return (<>

     <header className='flex justify-between p-5 bg-bg-surface border-1 border-bg-border fixed w-full z-50 '>
       <div>
  <h1 className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
  <span className="text-black dark:text-white">UNI</span>
  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
    GRAFI
  </span>
</h1>
       </div>
       <div><Search/></div>
       <div className='hidden sm:flex'><Profile session={session}/></div>
    </header>
    <div className="hidden sm:block  sm:h-22" />
    <div className=" sm:hidden  h-20" />

  </>
   
  )
}

export default Navbar
