import LoadingItems from "./loading";
import React from "react";
import { Room } from "../../interfaces";
import RoomItem from "./item";
import axios from "axios";
import useSWR from "swr";

const List = () => {
  const { data: response, error } = useSWR("/api/rooms", axios);

  return (
    <>
      {!response && !error && <LoadingItems />}
      <div className="room-list">
        <div className="main-container">
          {response &&
            response.data.items.map((room: Room) => {
              return (
                <div className="item-wr" key={room.id}>
                  <RoomItem room={room} />
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>{`
        .room-list {
          transform: translateY(-48px);
        }
        .room-list .main-container {
          align-items: flex-start;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default List;
