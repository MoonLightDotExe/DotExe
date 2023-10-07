import React from 'react'
import './Acknowledgement.css'
import HCard from '../../components/Card/HCard'
import authContext from '../../context/authContext'

const data = []

function Acknowledgement() {
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
                head={item.head}
                addr={item.addr}
                img={item.img}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Acknowledgement
