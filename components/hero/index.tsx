import React, { ReactNode } from "react";
type Props = {
  children?: ReactNode;
};

const Hero = ({children} : Props) => {
  return (
    <>
      <div className="hero">
        <div className="main-container">
          {children}
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: #383a59;
          font-size: 24px;
          padding: 80px 0 120px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Hero;
