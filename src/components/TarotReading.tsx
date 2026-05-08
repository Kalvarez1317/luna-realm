"use client";

import { useEffect, useState } from "react";
import { tarotCards } from "@/data/tarotCards";

function shuffleArray(array: any[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function TarotReading() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const [shuffledCards, setShuffledCards] = useState(tarotCards);

  useEffect(() => {
    setShuffledCards(shuffleArray(tarotCards));
  }, []);

  const resetReading = () => {
    setSelectedCard(null);

    setTimeout(() => {
      setShuffledCards(shuffleArray(tarotCards));
    }, 300);
  };

  const card =
    selectedCard !== null ? shuffledCards[selectedCard] : null;

  return (
    <section className="luna-card tarot-section">
      <div className="tarot-header">
        <p className="eyebrow">The Moon’s Guidance</p>

        <h2>Choose Your Card</h2>

        <p>
          Let the Children of the Moon choose the card they feel drawn to.
          The moon reveals only what they are ready to see.
        </p>
      </div>

      <div className="tarot-grid">
        {shuffledCards.map((card, index) => {
          const isFlipped = selectedCard === index;

          return (
            <button
              key={card.name}
              onClick={() => setSelectedCard(index)}
              disabled={selectedCard !== null}
              className="tarot-card-button"
            >
              <div className={`tarot-card-inner ${isFlipped ? "flipped" : ""}`}>
                <div className="tarot-card-back">
                  <img
                    src="/tarot/tarot-back.png"
                    alt="Luna tarot card back"
                  />
                </div>

                <div className="tarot-card-front">
                  <img src={card.image} alt={card.name} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {card && (
        <div className="tarot-modal">
          <div className="tarot-modal-card">
            <button
              className="tarot-close"
              onClick={resetReading}
            >
              ✕
            </button>

            <img
              src={card.image}
              alt={card.name}
              className="tarot-modal-img"
            />

            <div className="tarot-modal-reading">
              <p className="eyebrow">Your Reading</p>

              <h3>{card.name}</h3>

              <p>{card.meaning}</p>

              <button onClick={resetReading}>
                Pull Again
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}