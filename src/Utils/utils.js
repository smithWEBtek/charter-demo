
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
