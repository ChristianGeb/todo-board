import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./AddButton";

const Form = ({ inputTodo, setInputTodo, todos, setTodos }) => {

  const handleInputText = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputTodo, id: uuidv4() }]);
    setInputTodo("");
  };

  return (
    <div>
      <p>Aufgabe hinzufügen</p>
      <input
        onChange={handleInputText}
        value={inputTodo}
        type="text" />
      <AddButton
        onClick={handleSubmitTodo}
        type="submit">
        Hinzufügen
      </AddButton>
    </div>
  );
};

export default Form;