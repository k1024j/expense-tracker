import "./ExpenseForm.css";
import React, { useState } from "react";

export default function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setEnteredNumber(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      number: +enteredNumber,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredNumber("");
    setEnteredDate("");
    setShowPanel(false);
  };

  const topPanelHandler = () => {
    return showPanel ? setShowPanel(false) : setShowPanel(true);
  };

  return (
    <>
      {showPanel && (
        <form onSubmit={formSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
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
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-expense__actions">
              <button type="button" onClick={topPanelHandler}>
                Cancel
              </button>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      )}
      {!showPanel && (
        <button type="button" onClick={topPanelHandler}>
          Add New Expense
        </button>
      )}
    </>
  );
}
