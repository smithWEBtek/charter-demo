import { render, screen, fireEvent, waitfor } from '@testing-library/react';
import App from './App';
import getPoints from './Customer/Customer';

test('renders customer reward points header', () => {
  render(<App />);
  const header = screen.getByText(/Customer reward points/i);
  expect(header).toBeInTheDocument();
});

test('renders individual customer purchase history', () => {
  render(<App />);

  const customer1 = screen.getByText("Donnie Brasco");
  // const customer1 = screen.getByTestId('donnie-brasco');
  // const customer1 = screen.getByText('Donnie Brasco');

  expect(customer1).toBeInTheDocument();
});

test('returns correct points for purchase under $50', () => {
  render(<App />)
  expect(getPoints(50)).toEqual(0);
});
