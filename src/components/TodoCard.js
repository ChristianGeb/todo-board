import React, { useState } from "react";
import Todo from "./Todo";
import EdiText from "react-editext";
import { v4 as uuidv4 } from "uuid";
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';


const TodoCard = ({ title, cardId, todos, setTodos, cards, setCards }) => {

  const [value, setValue] = useState(title);

  const handleSave = (val) => {
    console.log('Edited Value -> ', val);
    setValue(val);
  };

  const StyledEdiText = styled(EdiText)`
  button {
    border-radius: 5px;
  }

  button[editext="edit-button"] {
    color: #2f4d6b;
    font-size: 18px;
    width: 10px;
    background: #6293C3;
    border: #6293C3;
    margin-right: 8px;
  }

  button[editext="save-button"] {
    width: 50px;
    &:hover {
      background: greenyellow;
    }
  }

  button[editext="cancel-button"] {
    &:hover {
      background: crimson;
      color: #fff;
    }
  }

  input, textarea {
    background: white;
    color: black;
    font-weight: bold;
    border-radius: 5px;
  }

  div[editext="edit-container"] {
    background: #6293C3;
    width: 250px;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
  }

  div[editext="view-container"] {
    background: #6293C3;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    color: #fff;
}
`;

  return (
    <div className="todo-card">
      <Typography
        variant="h5"
        align="center"
      >
        <StyledEdiText
          type="text"
          value={value}
          onSave={handleSave}
        /* showButtonsOnHover */
        />
      </Typography>
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