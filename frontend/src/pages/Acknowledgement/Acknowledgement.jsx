import React from 'react'
import './Acknowledgement.css'
import HCard from '../../components/Card/HCard'

function Acknowledgement() {
  return (
    <div className='card2'>
      <HCard
        head='A very Good hospital'
        addr='C/701,Pleasant Park, Santoshi Mata Road,Dahisar West'
        img={
          'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2373&q=80'
        }
      />
    </div>
  )
}

export default Acknowledgement
