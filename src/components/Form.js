import React from "react";
import { v4 as uuidv4 } from "uuid";

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
      <h3>Aufgabe hinzufügen</h3>
      <input
        onChange={handleInputText}
        value={inputTodo}
        type="text"
        placeholder="Aufgabe hinzufügen" />
      <button
        className="add-button"
        onClick={handleSubmitTodo}
        type="submit">
        Hinzufügen
        </button>
    </div>
  );
};

export default Form;