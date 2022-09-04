import React from 'react';
import './Customer.css';

const Customer = props => {

  const getPoints = (amount) => {
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

  const getTotalPoints = () => {
    let totalPoints = 0;
    props.customer.purchases.forEach(purchase => {
      totalPoints += getPoints(purchase.amount)
    })
    return totalPoints;
  };

  const filterPurchasesByDate = purchases => {
    const currentDate = new Date()
    return purchases.filter(purchase => {
      const purchaseDate = new Date(purchase.date)
      const reportStartDate = currentDate.setMonth(currentDate.getMonth() - 3);
      return purchaseDate <= reportStartDate

    })
  }

  const getMonthlyTotalPoints = (purchases) => {
    const filteredPurchases = filterPurchasesByDate(purchases)
    const monthlyTotals = {};
    filteredPurchases.forEach(purchase => {
      const purchaseDate = new Date(purchase.date)
      const purchaseMonthName = purchaseDate.toLocaleString('default', { month: 'short' });

      if (!monthlyTotals[purchaseMonthName]) {
        monthlyTotals[purchaseMonthName] = getPoints(purchase.amount)
      } else {
        monthlyTotals[purchaseMonthName] += getPoints(purchase.amount)
      }
    })

    console.log('monthlyTotals: ', monthlyTotals);
    return monthlyTotals;
  }

  getMonthlyTotalPoints(props.customer.purchases)

  const customerPurchases = props.customer.purchases?.map(purchase => {
    return (
      <tr key={purchase.id}>
        <td>{purchase.date}</td>
        <td>${purchase.amount}</td>
        <td>{getPoints(purchase.amount)}</td>
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
          {customerPurchases}
        </tbody>
      </table>
      {/* <h4 className="card__totalpoints">monthly total rewards: {getMonthlyTotalPoints(props.customer.purchases)}</h4> */}
      <h4 className="card__totalpoints">total rewards: {getTotalPoints()}</h4>
    </div>
  )
}

export default Customer;
