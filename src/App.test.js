import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { customers } from '../data.json'
import { purchasePoints, monthlyTotals } from './Utils/utils';
import PurchasesTable from './Table/PurchasesTable';
import MonthlyTotalsTable from './Table/MontlyTotalsTable';

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
});

describe('returns correct data', () => {
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

  test('returns correct monthly totals object', () => {
    const purchases = customers[0].purchases
    const mtotals = monthlyTotals(purchases)
    expect(Object.keys(mtotals)).toEqual(['Jun', 'Jul', 'Aug'])
  });
});

describe('renders the tables', () => {
  test('renders the PurchasesTable', () => {
    const purchases = customers[0].purchases
    const table = PurchasesTable(purchases)
    expect(table).toBeDefined()
  })

  test('renders the MonthlyTotalsTable', () => {
    const purchases = customers[0].purchases
    const table = MonthlyTotalsTable(purchases)
    expect(table).toBeDefined()
  })
})
