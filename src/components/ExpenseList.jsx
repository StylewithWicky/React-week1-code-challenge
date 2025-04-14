import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses = [], onDelete }) {  
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>${expense.amount}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseList;