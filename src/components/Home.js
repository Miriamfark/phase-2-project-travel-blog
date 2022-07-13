import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div class="box">
        <h1>Travel Blog</h1>
        <Link className="button" to={"/mypassport"}>Click to see my travels!</Link>
        <Link className="button" to={"/mybucketlist"}>Click to see my future destinations!</Link>
    </div>
  )
}

export default Home