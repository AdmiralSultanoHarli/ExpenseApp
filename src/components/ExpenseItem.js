import './ExpenseItem.css'

function ExpenseItem(props) {
const expenseDate = new Date(2021, 12, 21);
const expenseTitle = 'Car Insurance';
const expenseAmount = 294.67;

const day = props.date.toLocaleString('id-ID', {day: '2-digit'});
const month = props.date.toLocaleString('id-ID', {month: 'long'});
const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
