import React from 'react';
import logo from '../public/assets/logo.png';
import logo2 from '../public/assets/instagram.svg';
import profile from '../public/assets/profile.jpg';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, HomeIcon} from '@heroicons/react/outline'
import Image from 'next/legacy/image';

function Header(props) {
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
            
            {/* left -logo*/}
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
            <Image src={logo} objectFit='contain' layout='fill' />
            </div>

            <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                <Image src={logo2} objectFit='contain' layout='fill' />
            </div>

             {/*middle -search input field */}
             <div className='max-w-xs'>
             <div className='mt-1 relative p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <SearchIcon className="h-5 w-5 text-gray-500"/>
                </div>
                  <input className='bg-gray-50 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type='text' placeholder='Search' />
                 
             </div>
             </div>

              {/*Right*/}
              <div className='flex items-center justify-end'>
              <HomeIcon className='h-6 w-10 navBtn'/>
              <MenuIcon className='h-8 w-10 md:hidden cursor-pointer'/>
             
              <div className='relative navBtn'>
              <PaperAirplaneIcon className='h-6 w-10 navBtn rotate-45'/>
              <div className='absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 text-white font-normal rounded-full flex items-center justify-center animate-pulse'>3</div>
              </div>

              <PlusCircleIcon className='navBtn w-10'/>
              <UserGroupIcon className='navBtn w-10'/>
              <HeartIcon className='navBtn w-10'/>
              <Image src={profile} objectFit='contain' height={50} width={50}  alt="profile pic" className='rounded-full h-10 w-10 cursor-pointer' />
              </div>
            </div>
        </div>
    );
}

export default Header;