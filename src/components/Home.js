import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div class="box">
        <h1>Travel Blog</h1>
        <Link to={"/mypassport"}>Click to see my travels!</Link>
    </div>
  )
}

export default Home