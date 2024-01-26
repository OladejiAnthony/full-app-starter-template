import React from 'react'
import "./Home.scss"
import { useSelector } from 'react-redux'

const Home = () => {
  const {name} = useSelector((state) => state.data);
  //subscribing to our new state from redux toolkit Store.

  return (
    <div className='home'>
      <div className='container'>
        <h2>Home Page</h2>
        <p>Welcome to the <b>Home</b> page</p>
        <p>This page has <b>Redux Toolkit</b> set up.</p>
        <p>This name: <b>{name}</b> is stored in the dataSlice.</p>
      </div>
    </div>
  )
}

export default Home


