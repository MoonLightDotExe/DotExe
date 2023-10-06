import React from 'react'

const Home = () => {
  return (
    <div>
      Home Page
      <input placeholder='Enter Name: ' value={name}/>
      <input placeholder='Enter Email: '  value={email} />
      <input placeholder='Enter Address: '  value={address} />
      
    </div>
  )
}

export default Home
