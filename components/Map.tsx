import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function Map(props: any) {
  const [selectedLocation, setSelectedLocation] = useState({lat: 0, long: 0})

  const coordinates = props.searchResults?.map((location: any) => {
    return {
      latitude: location.lat,
      longitude: location.long
    }
  }) || []

  const center: any = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
    >
      
    {props.searchResults?.map((location: any, index: number) => (
      <div key={index}> 
        <Marker 
          longitude={location.long}
          latitude={location.lat}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p
            role='img'
            onClick={() => setSelectedLocation(location)}
            className='cursor-pointer text-2xl animate-bounce'
            aria-label='push-pin'
          >📌</p>
        </Marker>

        {selectedLocation.long === location.long ? 
          <Popup 
            closeOnClick={true}
            onClose={() => setSelectedLocation({lat: 0, long: 0})}
            latitude={location.lat}
            longitude={location.long}
          >
            {location.title}
          </Popup> 
          : <></>
        }

      </div>
    ))}

    </ReactMapGL>
  )
}

export default Map