// Expenses.js
import { UserAuth } from '@/context/AuthContext';
import { db } from '@/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { FormEvent, useEffect, useState } from 'react';

const Expenses = () => {
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const { user } = UserAuth();
  
  useEffect(() => {
    const fetchUserExpenses = async () => {
      const userDocRef = doc(db, 'users', user?.uid ?? '');
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setExpenses(userData.expenses || []);
      }
    };

    if (user) {
      fetchUserExpenses();
    }
  }, [user]);



  const handleExpenseSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDocRef = doc(db, 'users', user?.uid ?? "");

    const docSnapshot = await getDoc(userDocRef);
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();

      const updatedExpenses = [...userData.expenses, { description: expenseDescription, amount: parseFloat(expenseAmount) }];

      await updateDoc(userDocRef, {
        expenses: updatedExpenses,
      });

      setExpenseDescription('');
      setExpenseAmount('');
    }
  };

  return (
    <div>
      <h2>Expenses</h2>
      <form onSubmit={handleExpenseSubmit}>
        <input
          type="text"
          placeholder="Expense Description"
          value={expenseDescription}
          onChange={(e) => setExpenseDescription(e.target.value)}
          required
          className="text-black"
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          required
          className="text-black"
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
