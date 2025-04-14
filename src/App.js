import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Fixed filter function with proper property names
  const filteredExpenses = expenses.filter(expense => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (expense.category && expense.category.toLowerCase().includes(searchLower)) ||
      (expense.amount && expense.amount.toString().includes(searchTerm)) ||
      (expense.date && expense.date.includes(searchTerm))
    );
  });

  return (
    <div className="App">
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseList 
        expenses={filteredExpenses} 
        onDelete={deleteExpense}  
      />
    </div>
  );
}

export default App;