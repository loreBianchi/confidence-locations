import { render, screen } from '@testing-library/react'
import LocationCard from '../components/location-card'
import '@testing-library/jest-dom'

const fakeLocation = {
  locationName: 'test location',
  locationDetails:"test desc",
  address: {
    addressLine1: '175 Cuesta Drive',
    addressLine2: '',
    state: 'CA',
    city: 'Mountain View',
    zip: '94040'
  }, 
  locationType: 'Personal',
  numberofDevices: 0,
}


describe('LocationCard', () => {
  it('renders a heading', () => {
    
    const { container } = render(<LocationCard location={fakeLocation} />)

    const heading = container.querySelector('h4.chakra-heading')

    expect(heading).toBeInTheDocument();
  })
})
