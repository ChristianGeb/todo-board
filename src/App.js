import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import CreateCard from "./components/CreateCard";
import CreateTodo from "./components/CreateTodo";
import "./styles/styles.css";


const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [cardName, setCardName] = useState("");
  const [cards, setCards] = useState([]);
  const [selectCard, setSelectCard] = useState("");

  return (
    <div>
      <div className="create-row">
        <CreateCard
          className="create-card"
          cardName={cardName}
          setCardName={setCardName}
          cards={cards}
          setCards={setCards} />
        <CreateTodo
          inputTodo={inputTodo}
          setInputTodo={setInputTodo}
          todos={todos}
          setTodos={setTodos}
          cards={cards}
          selectCard={selectCard}
          setSelectCard={setSelectCard}
        />
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <TodoCard
            key={index}
            title={card.name}
            cardId={card.id}
            inputTodo={inputTodo}
            setInputTodo={setInputTodo}
            todos={todos}
            setTodos={setTodos}
            cards={cards}
            setCards={setCards}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
