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
        <h3 className="title">Rooms list</h3>
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
        .title {
          display: block;
          font-size: 14px;
          text-align: center;
          margin-bottom: 24px;
          text-transform: uppercase;
          color: var(--purple-light);
        }
        .room-list {
          transform: translateY(-80px);
        }
        .room-list .main-container {
          align-items: flex-start;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .item-wr {
          min-width: 240px;
          width: calc(33% - 16px);
          margin: 0 8px 8px 8px;
          min-width: 210px;
        }

        @media all and (max-width: 720px) {
          .item-wr {
            margin: 0 4px 8px 4px;
          }

          .room-list .main-container {
            justify-content: center;
          }
        }

        @media all and (max-width: 600px) {
          .room-list .main-container {
            flex-flow: column;
          }

          .item-wr {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default List;
