import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [years, setYears] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const interestRate = 0.10; // 10% annual interest rate

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = years * 12;

    const payment = (principal * monthlyInterestRate) / 
                    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Loan Calculator</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Loan Amount: ${loanAmount}
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            style={{ display: 'block', width: '100%' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Number of Years: {years}
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            style={{ display: 'block', width: '100%' }}
          />
        </label>
      </div>
      <button onClick={calculatePayment} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Calculate
      </button>
      {monthlyPayment !== null && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
          <h3>Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
