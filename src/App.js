import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";
import Dropdown from "./components/Currency";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Comapany's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm" >
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Dropdown />
          </div>
        </div>

        <h3 className="mt-3">Allocation</h3>

        <div className="row mt-3">
          <div className="col-sm">
            <h5>Department</h5>
          </div>
          <div className="col-sm">
            <h5>Allocated Budget</h5>
          </div>
          <div className="col-sm">
            <h5>Increase by 10</h5>
          </div>
          <div className="col-sm">
            <h5>Decrease by 10</h5>
          </div>
          <div className="col-sm">
            <h5>Delete</h5>
          </div>
        </div>

        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <h3 className="mt-3">Change Allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
