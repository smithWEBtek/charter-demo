import React from 'react'
import { purchasePoints } from '../Utils/utils'
import classes from './Table.module.css'

const PurchasesTable = (purchases) => {
  const rows = purchases.map(purchase => (
    <tr key={purchase.id}>
      <td>{purchase.date.split('T')[0]}</td>
      <td>${purchase.amount}</td>
      <td>{purchasePoints(purchase.amount)}</td>
    </tr>
  ))

  return (
    <div>
      <div className={classes.Table__purchases_label}>Purchases</div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Points</th>
          </tr>
          {rows}
        </tbody>
      </table>
    </div >
  )
}

export default PurchasesTable
