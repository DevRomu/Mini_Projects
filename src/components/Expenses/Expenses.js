import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterListYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
          {/* {filterListYear.length === 0 && exepensesContent}
      {filterListYear.length > 0 &&
        filterListYear.map((expense) => (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        <ExpensesList items={filterListYear}/>
      </Card>
    </div>
  );
};

export default Expenses;
