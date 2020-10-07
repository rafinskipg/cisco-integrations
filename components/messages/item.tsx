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
            {message.person.avatar && <img src={message.person.avatar} />}
            {!message.person.avatar && <div className="person-avatar-text">{message.person.displayName.substr(0,2 )}</div>}
        </div>
        <div className="message-body">
          <p>{message.text}</p>
          <p className="created">Created: {message.created}</p>

        </div>
      </div>
      
      <style jsx>{`
        .message-item {
          display: flex;
          margin: 16px 0;
        }

        .image-wr img {
          max-width: 100%;
          border-radius: 100%;
        }

        .image-wr {
          margin-right: 8px;
          border-radius: 100%;
          background: white;
          padding: 2px;
          height: 30px;
          min-width: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .person-avatar-text {
          text-transform: uppercase;
          color: black;
        }
        .message-body {
          background: white;
          padding: 8px;
          border-radius: 0 8px 8px 8px;
          margin-top: 8px;
          color: black;
        }

        p{
          color: var(--purple-dark);
          font-size: 14px;
        }

        .created {
          color: var(--purple-dark);
          font-size: 10px;
          font-weight: 600;
          margin-top: 8px;
          text-transform: uppercase;
        }
      `}</style>
    </>
  )
}

export default Item
