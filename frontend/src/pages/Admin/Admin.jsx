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
    head: 'head1',
    addr: 'address1',
    img: 'img1',
  },
  {
    head: 'head2',
    addr: 'address2',
    img: 'img2',
  },
  {
    head: 'head3',
    addr: 'address3',
    img: 'img3',
  },
  {
    head: 'head4',
    addr: 'address4',
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

  const { activeReports, reports } = useContext(authContext)

  // console.log(markers)

  const toast = useToast()
  useEffect(() => {
    setTimeout(() => {
      toast({
        position: 'top',
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })
      activeReports()
      // console.log(reports)
    }, 3000)
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
    }, 6000)
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

      {isVisible && <MapComp />}

      <Button colorScheme='blue'>Button</Button>

      <div>
        {data.map((data) => {
          return (
            <div className='admin_use'>
              <HCard
                head={data.head}
                addr={data.addr}
                img={data.img}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Admin
