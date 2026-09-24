import { Home } from '@/pages/Home';
import { render, screen } from '@testing-library/react';

jest.mock('@/components/HealthCheck', () => ({
  HealthCheck: () => <span>Series Tracker</span>,
}));

describe('Home', () => {
  it('renders the home page heading', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'Home page' })).toBeInTheDocument();
  });
});
