import LoadingItems from './loading'
import React from 'react'
import { Room } from '../../interfaces'
import RoomItem from './item'
import axios from 'axios'
import useSWR from 'swr'

const List = () => {
  const { data: response, error} = useSWR('/api/rooms', axios)
  
  return (
    <>
      {(!response && !error) && <LoadingItems /> }
      <div className="room-list">
        {response && response.data.items.map((room: Room) => {
          return <div className="item-wr" key={room.id}>
            <RoomItem room={room} />
          </div>
        })}
      </div>
    </>
  )
}

export default List
