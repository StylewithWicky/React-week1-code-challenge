import React, { useState } from 'react';
import './ExpenseForm.css';  

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({...formData, id: Date.now()});
    setFormData({category: '', amount: '', date: new Date().toISOString().split('T')[0]});
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
      </div>
      <div className="form-group">
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
      </div>
      <div className="form-group">
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;