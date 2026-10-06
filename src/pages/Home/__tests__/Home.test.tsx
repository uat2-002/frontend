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
  checkHealth: jest.fn(() => Promise.resolve({
    service: 'test-service',
    status: 'ok',
  })),
}));

describe('Home', () => {
  it('renders the home page with error', async () => {
    const { Home } = await import('@/pages/Home');
    const { TopSeriesProvider } = await import(
      '@/context/TopSeriesContext'
    );

    render(
      <TopSeriesProvider>
        <Home />
      </TopSeriesProvider>
    );

    expect(
      await screen.findByText(/error loading series/i)
    ).toBeTruthy();
  });
});
