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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <Expenseitem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
