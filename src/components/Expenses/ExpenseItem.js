import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expenseitem = (props) => {
  // function handler 
  // let title = props.title;
  const [title, setTitle] = useState(props.title); 

  const clickhandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  // Initial
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickhandler}>Change Title</button>S
    </Card>
  );
}

export default Expenseitem;
