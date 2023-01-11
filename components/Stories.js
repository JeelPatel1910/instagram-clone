import React from 'react';
import { faker } from '@faker-js/faker';
import { useEffect , useState} from 'react';
import Story from './Story';

export default function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      }));
      setSuggestions(suggestions);
      console.log(suggestions);
    }, []);
  
    return(
        <div>
            {suggestions.map((profile)=>{
               <Story
                  key={profile.id}
                  img = {profile.avatar}
                  userName = {profile.username}                  
               />
               
             })}
        </div>
    );

}