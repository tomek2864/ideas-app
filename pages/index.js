import React from 'react'
import Head from 'next/head'

import Exchange from '../components/Exchange'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <Exchange />
    </div>
  </div>
)

export default Home
