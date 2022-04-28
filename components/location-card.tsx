import { Badge, Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/react"
import { FC } from "react"
import { Location } from "../common-interfaces";
import LocationType from "./location-type";
import MapChart from "./map-chart";

interface LocationCardProps {
  location: Location
}

const LocationCard: FC<LocationCardProps> = ({ location }) => {
  const { addressLine1, addressLine2, city, state, zip } = location.address;
  const locationName = `${city} - ${addressLine1}`;
  return (
    <Box 
      height="calc(100vh - 100px)" 
      width="100%" 
      border="1px solid grey" 
      borderRadius={10} 
      padding={6}
      backgroundColor="gray.100"
      boxShadow='base'
    >
      <Flex justifyContent='space-between' direction='column' height='100%'>
        <Box height='300px'>
          <Flex>
            <Heading as='h4' size='md'>{location.locationName}</Heading>
            <Spacer />
            <LocationType type={location.locationType} />
          </Flex>
          <Divider orientation='horizontal' marginTop={2} marginBottom={2} />
          <Box>
            <p><b>Address: </b>: {`${addressLine1}${addressLine2 ? (', ' + addressLine2) : ''}, ${city} - ${state} - ${zip}`}</p>
            {location.description && <p><b>Description</b>: {location.description}</p>}
            <p><b>Number of devices</b>: {location.numberofDevices}</p>
          </Box>
        </Box>
        <Box border='1px solid grey' overflow="hidden" height='40vh' background='blue.100'> 
          <MapChart name={locationName} coordinates={[location.longitude, location.latitude]} />
        </Box>
      </Flex>
    </Box>
  )
}

export default LocationCard
