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
      
      `}</style>
    </>
  )
}

export default Item
