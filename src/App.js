import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList 
        expenses={expenses} 
        onDelete={deleteExpense}  
      />
    </div>
  );
}

export default App;