import React,{useState, useEffect} from 'react';
import { faker } from '@faker-js/faker';
import Image from 'next/legacy/image';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: i,
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.image(),
      password: faker.internet.password(),
      company: faker.company.name(),
    }));
    setSuggestions(suggestions);
  }, []);

    
  return (
    <div className='mt-4 ml-8'>
    <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
    </div>

     {
       suggestions.map((profile)=>(
        <div
          key ={profile.id}
          className="flex items-center justify-between mt-3"
        >
        <img src={profile.userImg} layout='fill' className='w-10 h-10 rounded-full border p-[2px]'/>
       
        <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{profile.username}</h2>
            <h3 className='text-xs text-gray-400'>Works at {profile.company}</h3>
        </div>

         <button className='text-blue-400 text-sm'>Follow</button>
        </div>
       ))
     
     }
    </div>
  )
}

export default Suggestions;