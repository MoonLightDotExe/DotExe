import React, { useState } from 'react'
import './Admin.css'
import { Chart } from 'react-google-charts'
import authContext from '../../context/authContext.js'
import HCard from '../../components/Card/HCard.jsx'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  useLoadScript,
} from '@react-google-maps/api'
import { useMemo, useEffect } from 'react'
import { useContext } from 'react'

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import MapComp from '../MapComp'

const data = [
  {
    head: 'HCG Cancer Center',
    addr: 'Holy Cross Road, I C Colony Off Borivali Dahisar, New Link Rd, Borivali West, Mumbai, Maharashtra 400092',
    img: 'img1',
  },
  {
    head: 'Police Chowki Kandivali',
    addr: 'SV Road, Kandivali West, Mumbai - 400067 (Opposite Kandivali, Opposite Shatabdi Municipal Hospital, Near Parekh Nagar & Telephone Exchange)',
    img: 'img2',
  },
  {
    head: 'Atharva Hospital',
    addr: '9, Shri Sevantilal Khandwala Marg, Kandivali, Nilkanth Nagar, Ganesh Nagar, Kandivali West, Mumbai, Maharashtra 400095',
    img: 'img3',
  },
  {
    head: 'Malwani Fire Brigade',
    addr: ' Malad, Charkop Naka, Asmita Jyoti Housing Society, Malad West, Mumbai, Maharashtra 400095',
    img: 'img4',
  },
]

const containerStyle = {
  width: '75vw',
  height: '70vh',
}

const center = {
  lat: 19.256994785551797,
  lng: 72.85568676781861,
}

function Admin() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCkIdp1ZbRPtNQ0vZuJgpx8pdlmTrKWts4',
  })

  // const { data } = useContext(authContext)
  const { activeReports, reports } = useContext(authContext)

  // console.log(markers)

  const toast = useToast()
  useEffect(() => {
    setTimeout(() => {
      toast({
        position: 'top',
        title: 'Emergency Detected!',
        description:
          'Please analyze and confirm the legitimacy of the emergency',
        status: 'error',
        duration: 1000,
        isClosable: true,
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })
      activeReports()
      // console.log(reports)
    }, 1000)
  }, [])
  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      <div className='navbar'></div>
      <div className='fabricate'>
        <StatGroup>
          <Stat>
            <StatLabel>Available Hospital Beds</StatLabel>
            <StatNumber>30,670</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Available Nurses</StatLabel>
            <StatNumber>5,900</StatNumber>
            <StatHelpText>
              <StatArrow type='decrease' />
              30.08%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Available Fireman on standby</StatLabel>
            <StatNumber>480</StatNumber>
            <StatHelpText>
              <StatArrow type='decrease' />
              9.05%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Available Policeman on standby</StatLabel>
            <StatNumber>10,070</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              18.39%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </div>

      {isVisible && (
        <div className='google_map_container'>
          <MapComp />
        </div>
      )}

      {/* <div className='button'> <Button className='btn-report' colorScheme='blue'  >Report</Button></div>      */}

      <div>
        {data.map((data) => {
          return (
            <div className='use'>
              <HCard
                head={data.head}
                addr={data.addr}
                img='https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2373&q=80'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Admin
