import React, { useState } from "react";
import Expenseitem from "./ExpenseItem.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterListYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let exepensesContent = <p>No expenses found</p>;

  if (filterListYear.length > 0){
    exepensesContent =  filterListYear.map((expense) => (
      <Expenseitem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

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
        {exepensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
