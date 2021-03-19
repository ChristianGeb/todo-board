import React from "react";
import { v4 as uuidv4 } from "uuid";


const CreateCard = ({ cardName, setCardName, cards, setCards }) => {
  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleCreateCard = (e) => {
    e.preventDefault();
    setCards([...cards, { value: cardName, label: cardName, name: cardName, id: uuidv4() }]);
    setCardName("");
  };

  return (
    <div>
      <input
        onChange={handleCardName}
        value={cardName}
        type="text"
        placeholder="Karte" />
      <button
        className="add-button"
        onClick={handleCreateCard}
        type="submit">
        Hinzufügen
    </button>
    </div>
  );
};

export default CreateCard;