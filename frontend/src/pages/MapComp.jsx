import React, { useState, useEffect, useContext } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Button } from '@chakra-ui/react'
import authContext from '../context/authContext'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './MapComp.css'

const containerStyle = {
  width: '75vw',
  height: '70vh',
}

const center = {
  lat: 19.256994785551797,
  lng: 72.85568676781861,
}

const markers = [
  //   { id: 1, position: { lat: -3.75, lng: -38.52 }, label: 'Marker 1' },
  //   { id: 2, position: { lat: -3.74, lng: -38.525 }, label: 'Marker 2' },
  {
    id: 3,
    position: { lat: 19.256994785551797, lng: 72.85568676781861 },
    label: 'Marker 3',
  },
]

function MapComp() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCkIdp1ZbRPtNQ0vZuJgpx8pdlmTrKWts4', // Replace this with your Google Maps API key
  })

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  const { updateLocationData } = useContext(authContext)

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

  return isLoaded ? (
    <div className='google_container'>
      <div className='google_desc'>
        Please Confirm Your Locality and hit Report for an emergency!
      </div>
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
