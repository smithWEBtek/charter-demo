import React, { useState, useEffect } from 'react';
import Customer from './Customer/Customer';
import classes from './App.modules.css';

const App = () => {
  const [data, setData] = useState({});
  const url = 'data.json'
  const getData = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('catch error: ', error))
  };

  useEffect(() => {
    getData()
  }, [])

  const renderedCustomerPurchases = data.customers?.map(customer => {
    return <Customer customer={customer} key={customer.id} />
  })

  return (
    <div className="App">
      <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Charter_Communications_logo.svg/2880px-Charter_Communications_logo.svg.png" alt="charter-communications-logo" />
      <h3>Customer reward points</h3>
      <button data-testid="data-button" onClick={() => getData()}>refresh data</button>
      {renderedCustomerPurchases}
    </div>
  );
}

export default App;
