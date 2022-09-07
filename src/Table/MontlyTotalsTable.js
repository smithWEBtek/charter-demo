import { monthlyTotals } from "../Utils/utils"
import classes from './Table.module.css'

const MonthlyTotalsTable = purchases => {
  const totals = monthlyTotals(purchases)
  const monthlylTotalRows = []

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
          <th>Monthly</th>
          <th>point totals</th>
        </tr>
        {monthlylTotalRows}
      </tbody>
    </table>)
}

export default MonthlyTotalsTable
