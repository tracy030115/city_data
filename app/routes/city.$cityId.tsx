//import Map from 'react-map-gl';
import { lazy, Suspense } from 'react'
const Map = lazy(() => import('react-map-gl'))


export default function City (){
    return(
        <Suspense fallback = {<div>Loading...</div>}>
        <Map
      mapboxAccessToken="pk.eyJ1IjoidHJhY3kxNSIsImEiOiJjbHR3bTQxc28wMHpzMmt0ZHdlMTdod3F4In0.3TypCGIj7ao24ca_kPbS2g"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: '100%', height: '100%'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
    </Suspense>
    )
}
