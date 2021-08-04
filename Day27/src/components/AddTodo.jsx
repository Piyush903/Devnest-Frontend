import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, LoadTodoList } from "../actions";
function AddTodo() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch("");
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
        placeholder="Add a Todo"
      />
      <button
        onClick={() => {
          dispatch(
            addItem({
              title: item,
              done: false
            })
          );
          setItem("");
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(LoadTodoList());
        }}
      >
        Load Todo
      </button>
    </div>
  );
}

export default AddTodo;
