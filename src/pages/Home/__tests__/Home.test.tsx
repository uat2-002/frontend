import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

jest.unstable_mockModule('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.reject(new Error('Request failed'))),
  },
}));

jest.unstable_mockModule('@/api/checkHealth', () => ({
  checkHealth: jest.fn(() =>
    Promise.resolve({
      service: 'test-service',
      status: 'ok',
    })
  ),
}));

jest.unstable_mockModule('@/context/UserSeriesContext', () => ({
  useUserSeries: jest.fn(() => ({
    addedSeriesIds: [],
    handleAddSeriesToMyList: jest.fn(),
  })),
}));

jest.unstable_mockModule('@/context/AuthContext', () => ({
  useAuth: jest.fn(() => ({
    isAuth: false,
  })),
}));

describe('Home', () => {
  it('renders the home page with error', async () => {
    const { Home } = await import('@/pages/Home');
    const { TopSeriesProvider } = await import('@/context/TopSeriesContext');

    const { MemoryRouter } = await import('react-router');

    render(
      <MemoryRouter>
        <TopSeriesProvider>
          <Home />
        </TopSeriesProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText(/error loading series/i)).toBeTruthy();
  });
});
