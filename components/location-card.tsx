import { Badge, Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/react"
import { FC } from "react"

interface LocationCardProps {
  location: any
}

const LocationCard: FC<LocationCardProps> = ({ location }) => {
  const { addressLine1, addressLine2, city, state, zip } = location.address;
  return (
    <Box 
      height="calc(100vh - 100px)" 
      width="100%" 
      border="1px solid grey" 
      borderRadius={10} 
      padding={6}
      backgroundColor="gray.50"
    >
      <Flex>
        <Heading as='h4' size='md'>{location.locationName}</Heading>
        <Spacer />
        <Badge>{location.locationType}</Badge>
      </Flex>
      <Divider orientation='horizontal' marginTop={2} marginBottom={2} />
      <Box>
        <p><b>Address: </b>: {`${addressLine1}${addressLine2 ? (', ' + addressLine2) : ''}, ${city} - ${state} - ${zip}`}</p>
        {location.description && <p><b>Description</b>: {location.description}</p>}
        <p><b>Number of devices</b>: {location.numberofDevices}</p>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default LocationCard
