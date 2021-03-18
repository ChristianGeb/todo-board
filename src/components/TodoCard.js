import React from "react";
import Form from "./Form";
import Todo from "./Todo";

const TodoCard = ({ inputTodo, setInputTodo, todos, setTodos }) => {
  return (
    <div style={{ background: "#cbeaee" }}>
      <h2>Test</h2>
      <Form
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <ul>
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todoId={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;