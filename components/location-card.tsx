import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/react"
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
      boxShadow='md'
    >
      <Flex justifyContent='space-between' direction='column' height='100%'>
        <Box height='300px'>
          <Flex>
            <Heading as='h4' size='md'>{location.locationName}</Heading>
            <Spacer />
            <LocationType type={location.locationType} />
          </Flex>
          <Divider orientation='horizontal' marginTop={3} marginBottom={3} />
          <Box>
            <table className="w-100">
              <tbody>
                <tr>
                  <td className="no-wrap"><b>Address: </b></td>
                  <td className="text-right">{`${addressLine1}${addressLine2 ? (', ' + addressLine2) : ''}, ${city} - ${state} - ${zip}`}</td>
                </tr>
                <tr>
                  <td className="no-wrap"><b>Description</b></td>
                  <td className="text-right">{location.description || '-'}</td>
                </tr>
                <tr>
                  <td className="no-wrap"><b>Location user role</b></td>
                  <td className="text-right">{location.locationUserRole}</td>
                </tr>
                <tr>
                  <td className="no-wrap"><b>Number of devices</b></td>
                  <td className="text-right">{location.numberofDevices}</td>
                </tr>
                <tr>
                  <td className="no-wrap"><b>New Location</b></td>
                  <td className="text-right">{location.newLocation ? <CheckIcon color='green.500' /> : <CloseIcon color='red.500' />}</td>
                </tr>
                <tr>
                  <td className="no-wrap"><b>Active Location</b></td>
                  <td className="text-right">{location.active ? <CheckIcon color='green.500' /> : <CloseIcon color='red.500' />}</td>
                </tr>
              </tbody>
            </table>
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
