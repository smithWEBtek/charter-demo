import React from 'react';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import getPoints from './Customer/Customer';

describe('rendering the App', () => {
  test('renders customer reward points header', () => {
    render(<App />);
    const header = screen.getByText(/Customer reward points/i);
    expect(header).toBeInTheDocument()
  });

  test.only('renders individual customer purchase history', async () => {
    render(<App />);
    const customer = await screen.findByText(/Donnie Brasco/i);
    await expect(customer).toBeInTheDocument();
  });

  test('returns correct points for purchase under $50', async () => {
    render(<App />);

    const points = getPoints(49)
    await expect(points).toEqual(0);
  });
});
