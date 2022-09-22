import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([{}]);

  useEffect(() => {
    setTodos([
      { id: "1", desc: "Clean house" },
      { id: "2", desc: "COMP2511" },
      { id: "3", desc: "Vacuuming" },
    ]);
  }, []);

  // Given an id, delete it from the todolist
  // and re-render the component
  const deleteTodo = (todoId) => {
    let newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  };

  const handleClick = () => {
    let newTodos = [...todos];

    let todoObject = {
      id: uuidv4(),
      desc: "Default todo",
    };

    newTodos.push(todoObject);

    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div>
      {/* {id: "1", desc: "Clean House"} */}
      {todos.map(({ id, desc }) => (
        <TodoItem todoId={id} desc={desc} deleteTodo={deleteTodo} />
      ))}

      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
