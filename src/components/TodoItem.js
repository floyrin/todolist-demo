import { useEffect, useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todoId, desc, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);
  const [text, setText] = useState("");
  let todoClassName = isDone ? "todo-item-done" : "todo-item-not-done";

  useEffect(() => {
    setText(desc);
  }, [desc]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={"todo-item " + todoClassName}>
      <input type="checkbox" onChange={() => setIsDone(!isDone)} />
      <input type="text" value={text} onChange={handleChange} />
      <button className="delete-button" onClick={() => deleteTodo(todoId)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
