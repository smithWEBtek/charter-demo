import React from 'react';
import classes from './Customer.module.css';

export const purchasePoints = amount => {
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

export const monthlyTotals = purchases => {
  const totals = {};
  purchases.forEach(purchase => {
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

export const purchasesTable = purchases => {
  return purchases.map(purchase => {
    return (
      <tr key={purchase.id}>
        <td>{purchase.date.split('T')[0]}</td>
        <td>${purchase.amount}</td>
        <td>{purchasePoints(purchase.amount)}</td>
      </tr>
    )
  });
}

export const monthlyTotalsTable = purchases => {
  const totals = monthlyTotals(purchases);
  const monthlylTotalRows = [];

  for (const month in totals) {
    monthlylTotalRows.push(
      <tr className={classes.Table__monthly_rows} key={totals[month].sequence}>
        <td>
          {month}
        </td>
        <td>{totals[month].points}
        </td>
      </tr>
    )
  }

  return (
    <table className={classes.Table__monthlytotals}>
      <tbody>
        <tr>
          <th>monthly</th>
          <th>point totals</th>
        </tr>
        {monthlylTotalRows}
      </tbody>
    </table>);
};

const Customer = props => {
  const totalPoints = () => {
    let points = 0;
    props.customer.purchases.forEach(purchase => {
      points += purchasePoints(purchase.amount)
    })
    return points;
  };

  return (
    <div key={props.customer.id} className={classes.Card}>
      <div
        className={classes.Cardname}
        data-testid={props.customer.testid}>{props.customer.name}</div>
      <table>
        <div className={classes.Table__purchases_label}>purchases</div>
        <tbody>
          <tr>
            <th>date</th>
            <th>amount</th>
            <th>points</th>
          </tr>
          {purchasesTable(props.customer.purchases)}
        </tbody>
      </table>
      {monthlyTotalsTable(props.customer.purchases)}
      <div className={classes.Card__totalpoints}>
        total points: {totalPoints()}
      </div>
    </div>
  )
}

export default Customer;
