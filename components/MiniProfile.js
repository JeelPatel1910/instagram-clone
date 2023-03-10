import React from 'react';
import profile from '../public/assets/profile.jpg';
import Image from 'next/legacy/image';
import { useSession , signOut } from 'next-auth/react';

const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-8'>
        <img src={session?.user?.image} height={50} width={50}  alt="profile pic" className='rounded-full h-16 w-16 border p-[2px] cursor-pointer' />
        
        <div>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>
     
        <button onClick={signOut}
        className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>   
  )
}

export default MiniProfile;