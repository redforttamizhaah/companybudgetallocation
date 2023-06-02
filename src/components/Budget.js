
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const enteredValue = event.target.value;
    if (enteredValue <= 20000) {
      dispatch({
        type: "SET_BUDGET",
        payload: enteredValue,
      });
    }
  };

  return (
    <div className="alert alert-secondary p-4" style={{ display: "flex", alignItems: "center" }}>
      <span style={{ width: "80px" }}>Budget: {currency}</span>
      <input
        required
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
		
      />
    </div>
  );
};

export default Budget;
