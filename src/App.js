import React, { useState } from "react";
import TodoCard from "./components/TodoCard";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoCard
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
