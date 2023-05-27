import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  console.log("ITEMS", items);
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log("FILTERED EXPENSE", filteredExpenses);
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onDateChangeHandler={filterChangeHandler}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses found</h2>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
      {/* <ExpenseItem props={props[0]} />
      <ExpenseItem props={props[1]} />
      <ExpenseItem props={props[2]} />
      <ExpenseItem props={props[3]} /> */}
    </Card>
  );
}

export default Expenses;
