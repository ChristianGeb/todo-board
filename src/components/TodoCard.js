import React, { useState } from "react";
import Todo from "./Todo";
import EdiText from "react-editext";
import { v4 as uuidv4 } from "uuid";




const TodoCard = ({ title, cardId, todos, setTodos, cards, setCards }) => {

  const [value, setValue] = useState(title);

  const handleSave = (val) => {
    console.log('Edited Value -> ', val);
    setValue(val);
  };

  return (
    <div className="todo-card">
      <EdiText
        type="text"
        value={value}
        onSave={handleSave}
        showButtonsOnHover
      />
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