import React, {useState, useEffect} from 'react';
import Post from './Post';
import { faker } from '@faker-js/faker';

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const posts = [...Array(5)].map((_, i) => ({
      id: i,
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      userImg: faker.image.avatar(),
      img: faker.image.image(),
      password: faker.internet.password(),
      caption: "I am groot",
    }));
    setPosts(posts);
    console.log(posts);
  }, []);

  return (
    <div>
        {posts.map((post)=>(      
         <Post
          key = {post.id}
          id = {post.id}
          username = {post.username}
          userImg = {post.userImg}
          img = {post.img}
          caption = {post.caption}
          />))
         }
    </div>
  )
}

export default Posts;