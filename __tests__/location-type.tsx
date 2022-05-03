import { render, screen } from '@testing-library/react'
import LocationType from '../components/location-type'
import '@testing-library/jest-dom'


describe('LocationCard', () => {
  
  it('renders label', () => {
    render(<LocationType type='Hotel' />)
    expect(screen.queryAllByText(/HOTEL/i)).toBeTruthy();
  })

  it('has css badge class',() => {
    render(<LocationType type='Personal' />)
    const element = screen.getByText('Personal')    
    expect(element).toHaveClass('chakra-badge');
  })

})
