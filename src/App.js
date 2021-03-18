import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import "./styles/styles.css";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <TodoCard
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
      />
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
