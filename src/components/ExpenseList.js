import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";


const ExpenseList = () => {
  const { expenses, currency } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);



  return (
    <>
      <ul class="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            currency={currency}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
