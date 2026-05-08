"use client";

import { useEffect, useState } from "react";

export default function EnteringScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`entering-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="entering-stars" />

      <div className="entering-content">
        <p className="entering-eyebrow">Children of the Moon</p>

        <h1>Entering Luna Realm...</h1>

        <p className="entering-quote">
          “The moon watches over all who wander here.”
        </p>
      </div>
    </div>
  );
}