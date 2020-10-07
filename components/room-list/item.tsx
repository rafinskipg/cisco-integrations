import Link from 'next/link'
import React from 'react'
import { Room } from '../../interfaces'

type PropTypes = {
  room: Room
}

const Item = ({ room }: PropTypes) => {
  
  return (
    <>
      <Link href={`/room/${room.id}?roomTitle=${room.title}`}>
        <div className="room-item">
          <h2>{room.title}</h2>
          <p className="last-activity">Last activity: {room.lastActivity}</p>
        </div>
      </Link>
      <style jsx>{`
        .room-item{
          background: #FFF;
          border-radius: 12px;
          box-shadow: 0 16px 32px rgba(0,0,0,0.35);
          color: var(--purple-dark);
          padding: 21px;
          transition: 0.35s ease;
        }

        .room-item:hover{
          transform: scale(1.1);
          box-shadow: 0 16px 64px rgba(0,0,0,0.35);
        }

        .room-item h2{
          text-align: center;
          font-size: 21px;
        }

        .room-item p{
          text-align: center;
          font-size: 16px;
          margin-top: 12px;
        }
      `}</style>
    </>
  )
}

export default Item
