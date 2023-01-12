import React from 'react'
import { BookmarkIcon, ChatIcon, DotsHorizonIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

function Post({id, username, userImg, img , caption}) {
  return (
    <div>
        <h1>post</h1>

        {/* Header */}
        <div>
            <img src={userImg} alt="" />
            <p>{username}</p>
            <DotsHorizonIcon classname="h-5"/>
        </div>
        {/* img */}
        {/*Buttons */}
        {/* caption */}
         {/* comments */}
         {/* input box */}
    </div>
  )
}

export default Post;