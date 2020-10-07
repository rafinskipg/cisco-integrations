import Form from "../messages/form";
import LoadingItems from "./loading";
import { Message } from "../../interfaces";
import MessageItem from "../messages/item";
import React from "react";
import axios from "axios";
import useSWR from "swr";

type PropTypes = {
  roomId: string;
};

const Detail = ({ roomId }: PropTypes) => {
  const { data: response, error, revalidate } = useSWR(
    roomId ? `/api/messages/${roomId}` : null,
    axios
  );

  return (
    <>
      {!response && !error && <LoadingItems />}
      <div className="room-detail">
        <div className="messages">
          {response &&
            response.data.map((message: Message) => {
              return (
                <div className="item-wr" key={message.id}>
                  <MessageItem message={message} />
                </div>
              );
            })}
        </div>
        <div className="form-wr">
          <Form roomId={roomId} onSuccess={revalidate} />
        </div>
      </div>
      <style jsx>{`
        .room-detail {
          display: flex;
          flex-flow: column;
          transform: translateY(-40px);
          width: 100%;
        }

        .messages,
        .form-wr {
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
        }

        .messages{
          background: #646796;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 -4px 16px var(--purple-dark);
          padding: 16px;
        }
      `}</style>
    </>
  );
};

export default Detail;
