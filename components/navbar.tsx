import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex background="blue.500" p='2'> 
      <Box p='2'>
        <Heading size='md' color='white'>Confidence locations</Heading>
      </Box>
      <Spacer />
      <Box>
        {/* <Button colorScheme='teal'>Log out</Button> */}
      </Box>
    </Flex>
  )
}

export default Navbar
