import React from 'react'
import Post from './Post'

const posts =[
    {
        id: "123",
        username: "jeel",
        userImg: "../public/assets/profile.jpg",
        img: "../public/assets/profile.jpg",
        caption: "I am groot",
    }
]

function Posts() {
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