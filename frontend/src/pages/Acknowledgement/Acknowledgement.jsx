import React from 'react'
import './Acknowledgement.css'
import HCard from '../../components/Card/HCard'
import authContext from '../../context/authContext'
import { useContext } from 'react'

function Acknowledgement() {
  const { data } = useContext(authContext)
  return (
    <>
      <div className='ack_head'>Hang On Tight!</div>
      <div className='ack_head_desc'>
        Meanwhile please note the services nearest to you
      </div>
      <div className='ack_list'>
        {data.map((item) => {
          return (
            <div className='card2'>
              <HCard
                head={item.name}
                addr={item.address}
                img='https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2373&q=80'
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Acknowledgement
