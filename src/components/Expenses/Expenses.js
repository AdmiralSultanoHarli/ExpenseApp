import React, { useState } from "react";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  // const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    console.log("Selected Year : ", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
