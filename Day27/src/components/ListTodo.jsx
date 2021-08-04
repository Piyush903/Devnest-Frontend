import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, SelectDone } from "../actions/index";

function ListTodo() {
  const dispatch = useDispatch();
  const [DoneStatus, setDoneStatus] = useState(false);
  const todos = useSelector((state) => state.todo);
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <h5>{todo.title}</h5>
          <button
            style={{ padding: "5px", height: "25px" }}
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            Delete
          </button>
          <input
            type="radio"
            checked={DoneStatus}
            value={DoneStatus}
            onChange={(e) => {}}
            onClick={() => {
              dispatch(SelectDone(index));
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
