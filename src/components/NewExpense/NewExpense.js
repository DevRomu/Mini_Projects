import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExepenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  

  return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExepenseDataHandler}/>
  </div>
};

export default NewExpense;
