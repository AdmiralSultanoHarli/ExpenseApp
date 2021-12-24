import React, {useState} from "react";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const expenseDate = new Date(2021, 12, 21);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated');
  //   console.log(title);
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate 
        date={props.date}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={() => {clickHandler()}}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
