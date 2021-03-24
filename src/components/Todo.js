import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = ({ text, todoId, todos, setTodos }) => {

  const handleDelete = () => {
    setTodos(todos.filter((todoFromArray) => todoFromArray.id !== todoId));
  };


  return (
    <div className="todo">
      <li className="todo-points">
        <p className="todo-points-text">{text}</p>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon className="delete-button" color="primary" />
        </IconButton>
      </li>

    </div>
  );
};

export default Todo;