import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ text, todoId, todos, setTodos }) => {

  const handleDelete = () => {
    setTodos(todos.filter((todoFromArray) => todoFromArray.id !== todoId));
  };

  return (
    <div className="todo">
      <li className="todo-points">
        <p className="todo-points-text">{text}</p>
        <button className="delete-button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faWindowClose} size="xs" />
        </button>
      </li>

    </div>
  );
};

export default Todo;