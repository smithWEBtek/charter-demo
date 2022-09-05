import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { purchasePoints } from './Customer/Customer';

describe('renders the App', () => {
  test('renders customer reward points header', () => {
    render(<App />);
    const header = screen.getByText(/Customer reward points/i);
    expect(header).toBeInTheDocument()
  });

  test('renders individual customer purchase history', async () => {
    render(<App />);
    const customer = await screen.findByText(/Donnie Brasco/i);
    await expect(customer).toBeInTheDocument();
  });

  test('returns correct points for purchase under $50', () => {
    const points = purchasePoints(48)
    expect(points).toEqual(0);
  });

  test('returns correct points for purchase over $50', () => {
    const points = purchasePoints(56)
    expect(points).toEqual(6);
  });

  test('returns correct points for purchase over $100', () => {
    const points = purchasePoints(112)
    expect(points).toEqual(24);
  });
});
