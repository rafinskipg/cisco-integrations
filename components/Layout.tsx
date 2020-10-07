import React, { ReactNode } from 'react'

import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
       
        | <a href="/api/rooms">Rooms API</a>
      </nav>
    </header>
    <div className="content">
      {children}
    </div>

    <footer>

      
    </footer>
    <style jsx>{`
      .content {
        max-width: 900px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Layout
