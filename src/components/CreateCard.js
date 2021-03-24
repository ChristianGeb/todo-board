import React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";




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
    <div className="create-card">
      <input
        onChange={handleCardName}
        value={cardName}
        type="text"
        placeholder="Karte" />
      <Button
        p={1}
        variant="contained"
        color="primary"
        className="add-button"
        onClick={handleCreateCard}
        type="submit">
        Hinzufügen
    </Button>
    </div>
  );
};

export default CreateCard;