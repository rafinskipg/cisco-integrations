import Form from '../messages/form'
import LoadingItems from './loading'
import { Message } from '../../interfaces'
import MessageItem from '../messages/item'
import React from 'react'
import axios from 'axios'
import useSWR from 'swr'

type PropTypes = {
  roomId: string
}

const Detail = ({ roomId } : PropTypes) => {
  const { data: response, error, revalidate} = useSWR(roomId ? `/api/messages/${roomId}`: null, axios)
  
  return (
    <>
      {(!response && !error) && <LoadingItems /> }
      <div className="room-Detail">
        <div className="messages">
          {response && response.data.map((message: Message) => {
            return <div className="item-wr" key={message.id}><MessageItem message={message} /></div>
          })}
        </div>
        <div className="form-wr">
          <Form roomId={roomId} onSuccess={revalidate} />
        </div>
      </div>
    </>
  )
}

export default Detail
