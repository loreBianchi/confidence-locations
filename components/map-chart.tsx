import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  MarkerProps
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart: FC<MarkerProps> = ({ name, coordinates }) => {
  if (!coordinates?.[0] || !coordinates?.[1]) {
    return <Flex justifyContent='center' alignItems='center' height='100%' backgroundColor='orange.100'>NO COORDINATES</Flex>
  }
  console.log('xxx', coordinates);
  
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [115, -35, 0],
        scale: 1200
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#68D391"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
        <Marker coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={-30}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
    </ComposableMap>
  );
};

export default MapChart;
