/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Grid, GridItem, Spinner } from '@chakra-ui/react'
import axios, { AxiosResponse } from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useInView } from 'react-intersection-observer'
import {
  useEffect,
  useState,
} from 'react'
import { Location } from '../common-interfaces'
import LocationCard from '../components/location-card'

interface LocationResp {
  locations: Location[]
  numberOfLocations: number
}

const Home: NextPage = () => {
  const [locations, setLocations] = useState<Location[]>([])
  const [total, setTotal] = useState()
  const [payload, setPayload] = useState({ start: 0, limit: 3 })
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView()

  const getLocations = async () => {
    setLoading(true)
    const response: AxiosResponse<any, LocationResp> = await axios.post(
      'api/locations',
      payload,
    )
    const data: Location[] = [...locations, ...response.data.locations]
    setLocations(data)
    setTotal(response.data.numberOfLocations)
    setLoading(false)
  }

  useEffect(() => {
    if (!total || locations.length < total) {
      getLocations()
    }
  }, [payload])

  useEffect(() => {
    if (inView && !loading && locations.length) {
      setPayload({ start: payload.start + 3, limit: 3 })
    }
  }, [inView])

  return (
    <>
      <Head>
        <title>Confidence Locantions</title>
        <meta name="description" content="Confidence code challange for frontend dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Box height="100%" width="100%" id="list">
          <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={6}>
            {locations.map((l: Location, i) => (
              <GridItem key={i}>
                <LocationCard location={l} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </div>
      <div>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" height={10}>
            <Spinner />
          </Flex>
        ) : (
          <Box ref={ref} height={10} />
        )}
      </div>
    </>
  )
}

export default Home
