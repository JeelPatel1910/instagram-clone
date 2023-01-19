import React from 'react';
import profile from '../public/assets/profile.jpg';
import Image from 'next/legacy/image';

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-8'>
        <Image src={profile} objectFit='contain' height={50} width={50}  alt="profile pic" className='rounded-full h-16 w-16 border p-[2px] cursor-pointer' />
        
        <div>
            <h2 className='font-bold'>sssagsgs</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>
     
        <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>   
  )
}

export default MiniProfile;