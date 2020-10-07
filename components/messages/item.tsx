import { Message } from '../../interfaces'
import React from 'react'

type PropTypes = {
  message: Message
}

const Item = ({ message }: PropTypes) => {
  
  return (
    <>
      <div className="message-item">
        <div className="image-wr">
          <img src={message.person.avatar} />
        </div>
        <div className="message-body">
          <p>{message.text}</p>
          <p className="created">Created: {message.created}</p>

        </div>
      </div>
      
      <style jsx>{`
        .message-item {
          display: flex;
          margin: 15px;
        }

        .image-wr img {
          width: 28px;
          border-radius: 100%;
        }

        .image-wr {
          margin-right: 8px;
        }

        .message-body {
          background: white;
          padding: 10px;
          border-radius: 10px;
          color: black;
        }

        .created {
          font-size: 10px;
          margin-top: 10px;
        }
      `}</style>
    </>
  )
}

export default Item
