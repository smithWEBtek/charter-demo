import React, { useState, useEffect } from 'react';
import Customer from './Customer/Customer';
import classes from './App.modules.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const url = 'http://localhost:3000/data.json'
  const getData = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('catch error: ', error))
  };

  useEffect(() => {
    getData()
    setLoading(false)
  }, [])

  const renderedCustomerPurchases = data.customers?.map(customer => {
    return <Customer customer={customer} key={customer.id} />
  })

  const renderedData = loading ? (<p>Loading data ...</p >) :
    (<div className="App">
      <img className={classes.logo} src="charter-communications-logo.ico" alt="charter-communications-logo" />
      <h3>Customer reward points</h3>
      {renderedCustomerPurchases}
    </div>);

  return renderedData;
}

export default App;
