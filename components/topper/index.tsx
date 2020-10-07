import React from "react";

const Topper = () => {
  return (
    <>
      <aside className="topper">
        <div className="main-container">
          <p>
            This site is developed by{" "}
            <a href="https://es.linkedin.com/in/rafael-ventura-pedrola-gimeno-22678837">
              Rafael Ventura
            </a>{" "}
            for Cisco's Devnethon 2020
          </p>
        </div>
      </aside>

      <style jsx>{`
        .topper {
          background: #9580ff;
          color: var(--purple-dark);
          font-size: 16px;
          font-weight: 600;
          padding: 16px 0;
          text-align: center;
          width: 100%;
        }

        .topper a {
          opacity: 0.5;
          position: relative;
          transition: opacity 0.35s ease;
        }

        .topper a:hover {
          opacity: 1;
        }

        .topper a:after {
          background: var(--purple-dark);
          bottom: 0;
          content: "";
          height: 2px;
          position: absolute;
          left: 0;
          width: 100%;
        }

        .topper p{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Topper;
