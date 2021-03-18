import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "./AddButton";

const Todo = ({ text, todoId, todos, setTodos }) => {

  const handleDelete = () => {
    setTodos(todos.filter((todoFromArray) => todoFromArray.id !== todoId));
  };

  return (
    <div className="todo">
      <li>
        {text}
        <Button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="xs" />
        </Button>
      </li>

    </div>
  );
};

export default Todo;