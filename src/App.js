import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import CreateCard from "./components/CreateCard";
import CreateTodo from "./components/CreateTodo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./styles/styles.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2f94d8"
    },
    secondary: {
      main: "#6a5fd4"
    }
  }
});

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [cardName, setCardName] = useState("");
  const [cards, setCards] = useState([]);
  const [selectCard, setSelectCard] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="create-row">
          <CreateCard
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
    </ThemeProvider>
  );
};

export default App;
