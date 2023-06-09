import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredDate, setDate] = useState('');
  const [enteredNumber, setNumber] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredNumber: "",
  //   enteredDate: "",
  // });

  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredNumber: event.target.value };
    // });
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };


    const dateChangeHandler = (event) => {
      setDate(event.target.value);
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredDate: event.target.value };
      // });
    };

    const submitHandler = (event) => {
      // Prevents users from sending requests. 
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredNumber,
        date: new Date(enteredDate)
      };
     
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setNumber('');
      setDate('');
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text"
           value={enteredTitle} 
           onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Number</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredNumber}
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
