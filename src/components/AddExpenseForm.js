import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
  const { dispatch, budget,currency,expenses } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (totalExpenses > budget) {
      alert("You cannot reduce the budget value lower than the spending");
    } else if (totalExpenses + expense.cost > budget) {
      alert(
        `The value cannot exceed remaining funds  ${currency}${
          budget - totalExpenses
        }`
      );
    } 
  
    else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });

      setName("");
      setCost("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row mt-4">
        <div class="col-sm">
          <div className="alert " style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#e2e3e5",
                borderColor: "#d6d8db",
                border: "1px solid transparent",
                borderRadius: ".25rem",
              }}
            >
              <span> Department </span>
            </div>
            <div>
              <select
                value={name}
                onChange={(event) => setName(event.target.value)}
              >
                <option value="">Choose Department</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales </option>
                <option value="Human Resource">Human Resource </option>
                <option value="IT">IT </option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-sm" style={{width:"fit-content", marginLeft: "-0.5in" }} >
          <div className="alert" style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#e2e3e5",
                borderColor: "#d6d8db",
                border: "1px solid transparent",
                borderRadius: ".25rem",
              }}
            >
              <span> Allocation </span>
            </div>
            <div>
              <select
                value={name}
                onChange={(event) => setName(event.target.value)}
              >
                <option value="Add">Add</option>
                <option value="Sub">Sub</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-sm"  style={{ marginLeft: "-1.8in" }}>
          <div className="alert " style={{ display: "flex" }}>
            <span for="cost">{currency} </span>
            <input
              required="required"
              type="number"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
        <div className="col-sm"  style={{ marginLeft: "-1.1in "}}> 
          <div className="alert" >
            <button type="submit" class="btn  btn-primary" style={{padding:"2px" }}>
              Save
            </button>
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
