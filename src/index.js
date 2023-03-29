import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const totalNumbers = 100;

//Function that returns prime numbers
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function PrimeTable() {
  // Build the table rows 
  const rows = [];
  for (let i = 1; i <= totalNumbers; i += 10) {
    const rowCells = [];
    for (let j = i; j < i + 10; j++) {
      const isNumberPrime = isPrime(j);
      rowCells.push(
        <td key={j} className={`${isNumberPrime ? 'prime' : ''}`}>
          {j}
        </td>
      );
    }
    rows.push(
      <tr key={i}>{rowCells}</tr>
    );
  }

  // Return the table template
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="10">Prime Numbers:</th>
        </tr>
      </thead>
        <br/>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeTable />
  </React.StrictMode>,
  document.getElementById('root')
);
