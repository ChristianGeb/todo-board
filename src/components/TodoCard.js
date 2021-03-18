import React from "react";
import Todo from "./Todo";

const TodoCard = ({ title, cardId, todos, setTodos }) => {
  return (
    <div className="todo-card">
      <h3>{title}</h3>
      <ul>
        {todos
          .filter(todo => todo.selectCard === title)
          .map(todo => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              todoId={todo.id}
              cardId={cardId}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoCard;