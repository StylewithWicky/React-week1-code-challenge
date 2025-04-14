import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and this, Record, categories and analyse your spending.</p>
      <hr className="divider" />
    </header>
  );
}

export default Header;