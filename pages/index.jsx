import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Home = ({ json }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div>
      {json.awesome}
    </div>

  </div>
)

Home.getInitialProps = async () => {
  const res = await fetch(`http://localhost:3000/api/hello`)
  const json = await res.json()
  return { json }
}

export default Home
