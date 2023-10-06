import React from 'react'
import './Acknowledgement.css'
import HCard from '../../components/Card/HCard'

const data = [
  {
    head: 'HEAD',
    addr: 'Flat no. 4, Devidayal Road, Near Raj Hospital, Mulund West',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2373&q=80',
  },
  {
    head: 'HEAD',
    addr: 'ADDR',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2373&q=80',
  },
  {
    head: 'HEAD',
    addr: 'ADDR',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2373&q=80',
  },
]

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
