import React from "react";
import './App.scss';
import TaxDeductionButton from './components/tax-deduction-button/tax-deduction-button';
import TaxDeductionPopup from './components/tax-deduction-popup/tax-deduction-popup';

function App() {
  return (
    <div className="app">
      <TaxDeductionButton/>
      <TaxDeductionPopup/>
    </div>
  );
}

export default App;
