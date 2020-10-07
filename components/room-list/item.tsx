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
          cursor: pointer;
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
          text-transform: capitalize;
        }

        .room-item p{
          text-align: center;
          font-size: 16px;
          margin-top: 12px;
        }

        @media all and (max-width: 720px){
          .room-item{
            padding: 16px;
          }
  
          .room-item h2{
            font-size: 18px;
          }
  
          .room-item p{
            font-size: 14px;
          }
        }

        @media all and (max-width: 600px){
          .room-item:hover{
            transform: scale(1.025);
          }
        }
      `}</style>
    </>
  )
}

export default Item
