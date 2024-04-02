import GLMap from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { DataOptionType } from "~/data";
import { getPositions } from "~/utils/map.utils";
//import { lazy, Suspense } from 'react'
//import  Map from 'react-map-gl'
//const GLMap = lazy(() => import('react-map-gl'))

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
// const data = [
//     {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
//   ];

const SFCrimeDataURL =
  "https://data.sfgov.org/resource/wg3w-h783.json?$limit=1000";

//37.7583491,-122.496964

export default function Map({ mapboxToken, data }: { mapboxToken: string; data: DataOptionType }) {
  const layers = [
    new HexagonLayer({
      id: data.id,
      data: data.dataURL,
      radius: 50,
      pickable: true,
      getPosition: getPositions(data.id)
      //aggregation: 'SUM'
    }),
  ];
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <DeckGL
        initialViewState={data.initialViewState}
        controller={true}
        layers={layers}
      >
        <GLMap
          mapboxAccessToken={mapboxToken}
          //style={{width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </DeckGL>
    </div>
  );
}
