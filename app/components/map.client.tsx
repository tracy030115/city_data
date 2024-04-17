import GLMap from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { DataOptionType } from "~/data";
import { getPositions } from "~/utils/map.utils";
import { useEffect, useState } from "react";

import styled from "@emotion/styled"

import { Box, CircularProgress } from "@mui/joy";


export default function Map({ mapboxToken, data }: { mapboxToken: string; data: DataOptionType }) {
  const [loading, setLoading] = useState<boolean>(true);
  const layers = [
    new HexagonLayer({
      id: data.id,
      data: data.dataURL,
      radius: 100,
      //pickable: true,
      getPosition: getPositions(data.id),
      onDataLoad: () => setLoading(false),
      //aggregation: 'SUM'
    }),
  ];

  useEffect(() => {
    setLoading(true);
  }, [data.id]);

  return (
    <Box position="relative" height="100%">
      <Box position="relative" height="100%">
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
        <Box
            position="absolute"
            top={8}
            right={8}
            borderRadius={8}
            bgcolor="white"
            style={{ maxWidth: "300px" }}
          >
            <Box p={2}>
              <h2>{data.label}</h2>
              <p>{data.description}</p>
              <a href={data.referenceUrl} target="_blank" rel="noreferrer">
                Reference data
              </a>
            </Box>
          </Box>
        </DeckGL>
      </Box>
      {loading ? (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgcolor="rgb(169, 169, 169, 0.5)"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <CircularProgress />
        </Box>
      ) : null}
    </Box>
  );
}