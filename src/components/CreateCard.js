import React from "react";

const CreateCard = ({ cardName, setCardName, cards, setCards }) => {
  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleCreateCard = (e) => {
    e.preventDefault();
    setCards([...cards, { value: cardName, label: cardName, name: cardName }]);
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