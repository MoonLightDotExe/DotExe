import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '60vw',
  height: '70vh',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const markers = [
  { id: 1, position: { lat: -3.75, lng: -38.52 }, label: 'Marker 1' },
  { id: 2, position: { lat: -3.74, lng: -38.525 }, label: 'Marker 2' },
  { id: 3, position: { lat: -3.73, lng: -38.53 }, label: 'Marker 3' },
]

function MapComp() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCkIdp1ZbRPtNQ0vZuJgpx8pdlmTrKWts4', // Replace this with your Google Maps API key
  })

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
  ) : (
    <></>
  )
}

export default MapComp
