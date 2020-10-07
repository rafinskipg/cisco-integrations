import React from "react";

export default function Loading() {
  return (
    <>
      <div className="loading-items">
        <div className="item-wr">
          <div className="item"></div>
        </div>
        <div className="item-wr">
          <div className="item"></div>
        </div>
        <div className="item-wr">
          <div className="item"></div>
        </div>
      </div>
      <style jsx>{`
        .loading-items {
        }

        .item-wr {
          margin: 10px;
        }

        .item {
          height: 10px;
          width: 100%;
          background: grey;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}
