import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { FaPlusCircle,FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const handleAddExpense = () => {
    dispatch({
      type: "ADDD_EXPENSE",
      payload: props.id,
    });
  };

  const handleSubExpense = () => {
    dispatch({
      type: "SUBB_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item">
      <div className="row mt-3">
        <div className="col-sm">{props.name}</div>
        <div className="col-sm">
          {props.currency} {props.cost}
        </div>
        <div className="col-sm">

            <FaPlusCircle
  size={30}
  color="green"
  style={{ backgroundColor: 'white', borderRadius: '50%' }}
  onClick={handleAddExpense}
/>
        </div>
        <div className="col-sm">
          <FaMinusCircle
  size={30}
  color="firebrick"
  style={{ backgroundColor: 'white', borderRadius: '50%' }}
  onClick={handleSubExpense}
/>
        </div>

        <div className="col-sm">
          <TiDelete size="1.5em" onClick={handleDeleteExpense} />
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
