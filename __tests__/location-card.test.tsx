import { render, screen } from '@testing-library/react'
import LocationCard from '../components/location-card'
import '@testing-library/jest-dom'
import { Location } from 'common-interfaces'

const fakeLocation: Location = {
  id: 100,
  newLocation: false,
  active: true,
  locationName: 'test location',
  locationDetails: "test desc",
  address: {
    addressLine1: '175 Cuesta Drive',
    addressLine2: '',
    state: 'CA',
    city: 'Mountain View',
    zip: '94040'
  }, 
  latitude: 0,
  longitude: 0,
  locationType: 'Personal',
  numberofDevices: 0,
  locationId: 'TEST01',
  locationUserRole: 'TestRole',
  subscriptionActive: true,
}


describe('LocationCard', () => {
  const { container } = render(<LocationCard location={fakeLocation} />)
  
  it('renders location name', () => {
    const heading = container.querySelector('h4.chakra-heading')
    expect(heading).toBeInTheDocument();
    expect(screen.queryAllByText(/test location/i)).toBeTruthy();
  })

  it('renders complete address', () => {
    expect(screen.queryAllByText(/175 Cuesta Drive, Mountain View - CA - 94040/i)).toBeTruthy();
  })

  it('renders user Role', () => {
    expect(screen.queryAllByText(/TestRole/i)).toBeTruthy();
  })
})
