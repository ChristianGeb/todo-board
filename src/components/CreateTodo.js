import React from "react";

return (
  <div>
    <input
      onChange={handleCardName}
      value={cardName}
      type="text"
      placeholder="Karte hinzufügen" />
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