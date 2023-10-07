import React, { useState, useEffect, useContext } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Button } from '@chakra-ui/react'
import authContext from '../context/authContext'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import './MapComp.css'
// import PropTypes from 'prop-types'

const containerStyle = {
  width: '75vw',
  height: '70vh',
}

const center = {
  lat: 19.256994785551797,
  lng: 72.85568676781861,
}

// const markers = [
//   //   { id: 1, position: { lat: -3.75, lng: -38.52 }, label: 'Marker 1' },
//   //   { id: 2, position: { lat: -3.74, lng: -38.525 }, label: 'Marker 2' },
//   {
//     id: 3,
//     position: { lat: 19.256994785551797, lng: 72.85568676781861 },
//     label: 'Marker 3',
//   },
// ]

function MapComp({ head }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCkIdp1ZbRPtNQ0vZuJgpx8pdlmTrKWts4', // Replace this with your Google Maps API key
  })

  const toast = useToast()

  // setTimeout(() => {
  //   toast({
  //     position: 'top',
  //     title: 'Account created.',
  //     description: "We've created your account for you.",
  //     status: 'error',
  //     duration: 9000,
  //     isClosable: true,
  //     containerStyle: {
  //       width: '800px',
  //       maxWidth: '100%',
  //     },
  //   })
  // }, 3000)

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  const { updateLocationData, reports } = useContext(authContext)

  const navigate = useNavigate()

  useEffect(() => {
    updateLocationData(location.latitude, location.longitude)
  }, [location])

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, () => {
        console.log('Unable to retrieve your location')
      })
    } else {
      console.log('Geolocation not supported')
    }
    function success(position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      setLocation({ latitude, longitude })
      test(location)
      setTimeout(() => {
        navigate('/ack')
      }, 2000)
    }
  }

  const test = (e) => {
    console.log(e)
  }

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const markers = [
    // ... (previous entries)

    {
      id: '',
      position: {
        lat: 19.1723,
        lng: 72.8457,
      },
      label: 'EPICENTRE',
    },
    {
      id: '',
      position: {
        lat: 19.1142,
        lng: 72.7846,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1648,
        lng: 72.9205,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0639,
        lng: 72.9064,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1865,
        lng: 72.7092,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2096,
        lng: 72.8271,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1738,
        lng: 72.7157,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1796,
        lng: 72.8981,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0532,
        lng: 72.8269,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0995,
        lng: 72.9536,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2487,
        lng: 72.9259,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0561,
        lng: 72.9843,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0869,
        lng: 72.7944,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2656,
        lng: 72.8693,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0772,
        lng: 72.9342,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2069,
        lng: 72.9053,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2295,
        lng: 72.9804,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2636,
        lng: 72.7209,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2447,
        lng: 72.7741,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1552,
        lng: 72.8896,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0913,
        lng: 72.9191,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1837,
        lng: 72.8778,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2883,
        lng: 72.9516,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1419,
        lng: 72.7106,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0544,
        lng: 72.7323,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1904,
        lng: 72.8779,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1659,
        lng: 72.7404,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0924,
        lng: 72.7145,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2463,
        lng: 72.8662,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0992,
        lng: 72.8681,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1327,
        lng: 72.7108,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0959,
        lng: 72.9828,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0867,
        lng: 72.9895,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2547,
        lng: 72.7228,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0326,
        lng: 72.8414,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0457,
        lng: 72.7681,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1911,
        lng: 72.7834,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1318,
        lng: 72.7032,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1163,
        lng: 72.8991,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1009,
        lng: 72.7572,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1806,
        lng: 72.8092,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1135,
        lng: 72.9512,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1357,
        lng: 72.7503,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2112,
        lng: 72.7865,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1678,
        lng: 72.9487,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1176,
        lng: 72.7173,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1264,
        lng: 72.9321,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1742,
        lng: 72.9532,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.2489,
        lng: 72.7985,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1556,
        lng: 72.9537,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.1583,
        lng: 72.8967,
      },
      label: '',
    },
    {
      id: '',
      position: {
        lat: 19.0877,
        lng: 72.9395,
      },
      label: '',
    },
  ]

  return isLoaded ? (
    <div className='google_container'>
      <div className='google_desc'>{head}</div>
      <div className='google_map_container'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Render markers */}
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              label={marker.label}
            />
          ))}
        </GoogleMap>
      </div>
      <div className='google_map_button'>
        <Button
          colorScheme='blue'
          padding='1.6rem'
          onClick={handleClick}
        >
          Report!
        </Button>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default MapComp
