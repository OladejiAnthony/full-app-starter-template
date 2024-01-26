import React, { useEffect, useState } from 'react'
import "./Profile.scss"
import {toast } from 'react-toastify';
import Card from '../../card/Card'
import { Spinner } from '../../loader/Loader';


const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    //set loading to false after 2sec
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  },[isLoading])

  const updateProfile = (e) => {
    e.preventDefault();
    toast.success("Profile Updated Successfully")
    console.log(name, email);
    setName("");
    setEmail("");
  }


  return (
    <div className='profile'>
      <h3>Profile ~ </h3>
      <Card cardClass={"card"}>
      {isLoading 
          ? (<Spinner />)
          : (
              <form onSubmit={updateProfile}>
                <p>
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p>
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <button type="submit" className='--btn --btn-primary --btn-block'>
                  Update Profile
                </button>
              </form>
            )
      }
      </Card>
    </div>
  )
}

export default Profile

