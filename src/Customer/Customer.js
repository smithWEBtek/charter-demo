import React from 'react';
import './Customer.css';

const Customer = props => {
  const purchasePoints = (amount) => {
    switch (true) {
      case (amount < 51): {
        return 0;
      }
      case (amount > 50 && amount <= 100): {
        return (amount - 50) * 1;
      }
      case (amount > 100): {
        return (amount - 100) * 2;
      }
      default: return 0;
    }
  }

  const totalPoints = () => {
    let points = 0;
    props.customer.purchases.forEach(purchase => {
      points += purchasePoints(purchase.amount)
    })
    return points;
  };

  const monthlyTotals = () => {
    const totals = {};
    props.customer.purchases.forEach(purchase => {
      const purchaseDate = new Date(purchase.date)
      const sequence = purchaseDate.getMonth()
      const monthName = purchaseDate.toLocaleString('default', { month: 'short' });
      if (!totals[monthName]) {
        totals[monthName] = { points: purchasePoints(purchase.amount), sequence }
      } else if (totals[monthName]) {
        totals[monthName].points += purchasePoints(purchase.amount)
      }
      return null;
    })
    return totals;
  }

  const monthlyTotalsTable = () => {
    const totals = monthlyTotals();
    const monthlylTotalRows = [];

    for (const month in totals) {
      monthlylTotalRows.push(
        <tr className="table__monthly-rows" key={totals[month].sequence}>
          <td>
            {month}
          </td>
          <td>{totals[month].points}
          </td>
        </tr>
      )
    }

    return (
      <table className="table__monthly-totals">
        <tbody>
          <tr>
            <th>month</th>
            <th>points</th>
          </tr>
          {monthlylTotalRows}
        </tbody>
      </table>);
  };

  const purchasesTable = props.customer.purchases?.map(purchase => {
    return (
      <tr key={purchase.id}>
        <td>{purchase.date.split('T')[0]}</td>
        <td>${purchase.amount}</td>
        <td>{purchasePoints(purchase.amount)}</td>
      </tr>
    )
  });

  return (
    <div key={props.customer.id} className="card">
      <h2
        className="card__name"
        data-testid={props.customer.testid}>{props.customer.name}</h2>
      <table>
        <tbody>
          <tr>
            <th>date</th>
            <th>amount</th>
            <th>points</th>
          </tr>
          {purchasesTable}
        </tbody>
      </table>
      {monthlyTotalsTable()}
      <div className="card__totalpoints">
        total points: {totalPoints()}
      </div>
    </div>
  )
}

export default Customer;
