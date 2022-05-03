import { render, RenderOptions, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import Home from '../pages/index'
import Layout from '@/components/layout';
import { fakeLocations } from '../mocked-locations';
import axios from 'axios';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;

  // jest.mock('axios', () => ({
  //   default: {
  //     post: () => Promise.resolve({
  //       data: {
  //         locations: fakeLocations,
  //         numberOfLocations: 3,
  //       }
  //     })
  //   }
  // }))
});

describe('Home', () => {
  it('renders a navbar if wrapped in Layout component', () => {
    const { container } = render(<Layout><Home /></Layout>)
    const navbarTitle = container.querySelector('h2.chakra-heading')
    expect(navbarTitle).toBeInTheDocument();
  })


  it('locations api is called and mock data are displayed', async () => {

    const spyAxios = jest.spyOn(axios, 'post').mockResolvedValue({
      data: {
        locations: fakeLocations,
        numberOfLocations: 3,
      }
    });

    render(<Home />);

    await waitFor(() => {
        expect(screen.getByText('test location 1')).toBeInTheDocument();
    });
    expect(spyAxios).toHaveBeenCalled()
});
})

