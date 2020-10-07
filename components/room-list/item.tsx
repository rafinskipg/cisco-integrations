import React from 'react'
import { Room } from '../../interfaces'

type PropTypes = {
  room: Room
}

const Item = ({ room }: PropTypes) => {
  
  return (
    <>
      <div className="room-item">
        <h2>{room.title}</h2>
        <p className="last-activity">Last activity: {room.lastActivity}</p>
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  )
}

export default Item
