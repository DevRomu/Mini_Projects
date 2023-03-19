import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function Expenseitem(props) {
  // Initial
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div>
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default Expenseitem;
