import React from 'react'

export default function ({img, username}) {
  return (
    <div>
        <img src={img} alt="" />
        <p>{username}</p>
    </div>
  )
}
