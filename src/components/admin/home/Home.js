import React, { useState , useEffect} from 'react'
import Loader from '../../loader/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //set loading to false after 2sec
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  },[isLoading])

  return (
    <>
      {isLoading 
        ? ( <Loader />)  
        : (
            <div>
              <h3>Dashboard ~</h3>
              <p>This is the user's <b>Dashboard Page</b></p>
            </div>
        ) 
      }
    </>
  )
}

export default Home

