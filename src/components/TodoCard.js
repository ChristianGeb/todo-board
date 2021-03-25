import React, { useState } from "react";
import Todo from "./Todo";
import EdiText from "react-editext";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledEdiText = styled(EdiText)`
  button {
    border-radius: 5px;
  }

  button[editext="edit-button"] {
    color: #2f4d6b;
    font-size: 18px;
    width: 10px;
    background: #2f94d8;
    border: #2f94d8;
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
    background: #2f94d8;
    width: 250px;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
  }

  div[editext="view-container"] {
    background: #2f94d8;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    color: #fff;
}
`;


const TodoCard = ({ title, cardId, todos, setTodos, cards, setCards }) => {

  const [value, setValue] = useState(title);

  const handleSave = (val) => {
    console.log("Edited Value -> ", val);
    setValue(val);
  };

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
        />
      </Typography>
      <ul>
        {todos
          .filter(todo => todo.selectCard === title)
          .map((todo, index) => (
            <Todo
              key={index}
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