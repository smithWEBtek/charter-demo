import React from 'react';
import { purchasePoints } from '../Utils/utils';
import MonthlyTotalsTable from '../Table/MontlyTotalsTable';
import PurchasesTable from '../Table/PurchasesTable';
import classes from './Customer.module.css';

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
      {PurchasesTable(props.customer.purchases)}
      {MonthlyTotalsTable(props.customer.purchases)}
      <div className={classes.Card__totalpoints}>
        Total reward points {totalPoints()}
      </div>
    </div>
  )
}

export default Customer;
