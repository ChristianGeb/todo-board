import React from "react";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";
import Button from "@material-ui/core/Button";


const CreateTodo = ({ inputTodo, setInputTodo, selectCard, setSelectCard, todos, setTodos, cards }) => {

  const handleInputText = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectCard(e.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputTodo, id: uuidv4(), selectCard }]);
    setInputTodo("");

  };
  return (
    <div className="create-todo">
      <input
        onChange={handleInputText}
        value={inputTodo}
        type="text"
        placeholder="Aufgabe" />
      <div className="select">
        <Select
          onChange={handleSelect}
          placeholder={selectCard}
          options={cards} />
      </div>
      <Button variant="contained"
        color="secondary"
        className="add-button"
        onClick={handleSubmitTodo}
        type="submit">
        Hinzufügen
        </Button>
    </div>
  );
};

export default CreateTodo;