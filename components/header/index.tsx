import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <>
      <header>
        <div className="main-container">
          <Link href="/">
            <a>
              <div className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  viewBox="0 0 296.94 296.42"
                >
                  <path d="M0 148.29c.86-8.17 1.34-16.41 2.66-24.5 2.5-15.37 17.71-26.24 33.04-23.47 8.57 1.55 16.96 4.11 25.42 6.26 6.53 1.66 13.05 3.34 19.54 5.15 2.08.58 3.01-.36 3.97-1.95 9.41-15.43 22.62-26.29 39.7-32.13 35.12-12.01 73.76 3.23 90.82 36.56 5.21 10.18 7.91 20.97 8.13 32.37.04 1.86.77 2.61 2.49 3.06 10.31 2.65 20.6 5.4 30.9 8.1 3.25.85 3.6.61 3.8-2.72 1.08-18.11-1.8-35.6-9.46-52.02-17.72-38.02-47.61-59.94-89.08-66.05-3.53-.52-7.12-.64-10.7-.8-1.88-.08-2.69-.82-2.68-2.73.04-10.32.06-20.63-.01-30.95-.01-2.14 1.09-2.6 2.81-2.41 9.08.98 18.28 1.39 27.22 3.11 20.27 3.9 38.92 11.98 55.7 24.05 28.14 20.22 47.19 46.99 56.88 80.3 6.22 21.35 7.37 43.02 3.67 64.95-2.69 15.98-19.44 27.2-35.25 23.39-11.96-2.88-23.84-6.14-35.75-9.23-2.25-.58-4.56-1.01-6.75-1.78-2.15-.76-3.3-.15-4.43 1.77-6 10.13-14.09 18.26-23.98 24.62-27.94 17.95-66.01 14.63-90.28-7.85-15.43-14.29-23.46-31.99-24.34-52.94-.1-2.33-.89-3.38-3.14-3.95-10.09-2.54-20.13-5.23-30.2-7.86-3.33-.87-3.72-.67-3.88 2.65-1.56 31.46 8.01 59.11 29.21 82.38 21.29 23.38 48.19 35.16 79.69 36.54 2.38.1 3.2.85 3.18 3.21-.09 9.65-.03 19.3-.04 28.95 0 3.96-.24 4.19-4.31 4.04-26.13-.97-50.54-7.86-72.89-21.55-29.44-18.04-50.05-43.43-62.17-75.67C3.22 182.43 0 166.34 0 148.29zm148.58-38.47c-19.12-.35-38.36 15.03-38.31 38.45.04 23 18.89 38.43 38.22 38.36 21.39-.08 38.6-17.19 38.58-38.52-.02-21.24-17.17-38.3-38.49-38.29z" />
                </svg>
                <span className="logo-text">Cisco Integrations</span>
              </div>
            </a>
          </Link>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            <a className="cta" href="/api/rooms">
              Rooms API
            </a>
          </nav>
        </div>
      </header>

      <style jsx>{`
        header {
          color: #fff;
          padding: 16px 0;
        }

        header .main-container {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        header .logo {
          align-items: center;
          display: flex;
        }

        header .logo .logo-text {
          display: block;
          font-size: 18px;
          font-weight: 600;
          margin-left: 8px;
        }

        header .logo svg {
          width: 32px;
        }

        header .logo svg path {
          fill: #fff;
        }

        .cta {
          background: var(--green);
          border-radius: 4px;
          color: var(--purple-dark);
          padding: 10px 16px;
          margin-left: 24px;
        }

        header a {
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default Header;
