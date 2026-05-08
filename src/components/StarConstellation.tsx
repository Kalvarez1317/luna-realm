"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Star = {
  id: string;
  star_index: number;
  display_name: string;
};

const STAR_POSITIONS = [
  { top: "8%", left: "17%", size: "tiny" },
  { top: "13%", left: "31%", size: "medium" },
  { top: "6%", left: "68%", size: "small" },
  { top: "19%", left: "83%", size: "tiny" },
  { top: "27%", left: "11%", size: "large" },
  { top: "22%", left: "39%", size: "tiny" },
  { top: "31%", left: "52%", size: "small" },
  { top: "24%", left: "76%", size: "large" },
  { top: "43%", left: "23%", size: "small" },
  { top: "38%", left: "61%", size: "tiny" },
  { top: "47%", left: "72%", size: "medium" },
  { top: "41%", left: "91%", size: "small" },
  { top: "57%", left: "8%", size: "tiny" },
  { top: "63%", left: "28%", size: "large" },
  { top: "54%", left: "44%", size: "medium" },
  { top: "67%", left: "58%", size: "tiny" },
  { top: "59%", left: "81%", size: "small" },
  { top: "78%", left: "16%", size: "medium" },
  { top: "84%", left: "35%", size: "tiny" },
  { top: "74%", left: "49%", size: "small" },
  { top: "88%", left: "64%", size: "large" },
  { top: "80%", left: "86%", size: "tiny" },
  { top: "16%", left: "7%", size: "small" },
  { top: "10%", left: "49%", size: "tiny" },
  { top: "34%", left: "33%", size: "large" },
  { top: "51%", left: "35%", size: "tiny" },
  { top: "69%", left: "18%", size: "small" },
  { top: "73%", left: "76%", size: "medium" },
  { top: "90%", left: "24%", size: "tiny" },
  { top: "93%", left: "53%", size: "small" },
  { top: "4%", left: "89%", size: "medium" },
  { top: "29%", left: "66%", size: "tiny" },
  { top: "49%", left: "15%", size: "medium" },
  { top: "62%", left: "92%", size: "large" },
  { top: "86%", left: "75%", size: "small" },
  { top: "96%", left: "39%", size: "tiny" },
];

export default function StarConstellation() {
  const [stars, setStars] = useState<Star[]>([]);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchStars() {
    const { data } = await supabase.from("moon_stars").select("*");
    if (data) setStars(data);
  }

  useEffect(() => {
    fetchStars();
  }, []);

  async function claimStar() {
    if (selectedStar === null || !name.trim()) return;

    setLoading(true);

    const { error } = await supabase.from("moon_stars").insert({
      star_index: selectedStar,
      display_name: name.trim(),
    });

    setLoading(false);

    if (!error) {
      setSelectedStar(null);
      setName("");
      fetchStars();
    } else {
      alert("That star may already be claimed.");
    }
  }

  return (
    <section className="luna-card constellation-section">
      <div className="constellation-header">
        <p className="eyebrow">Children of the Moon</p>
        <h2>Become a Star Near the Moon</h2>
        <p>
          Leave your name among the stars and become part of Luna’s celestial realm.
        </p>
      </div>

      <div className="constellation-sky">
        {STAR_POSITIONS.map((position, index) => {
          const claimed = stars.find((s) => s.star_index === index);

          return (
            <button
              key={index}
              disabled={!!claimed}
              className={`constellation-star ${position.size} ${
                claimed ? "claimed" : ""
              }`}
              style={{
                top: position.top,
                left: position.left,
              }}
              onClick={() => setSelectedStar(index)}
              title={claimed ? claimed.display_name : "Claim this star"}
            >
              ✦
              {claimed && (
                <span className="constellation-name">
                  {claimed.display_name}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selectedStar !== null && (
        <div className="star-modal">
          <div className="star-modal-card">
            <h3>Claim Your Star</h3>
            <p>Enter your name and become part of Luna Realm.</p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={24}
              placeholder="Your celestial name..."
            />

            <div className="star-modal-actions">
              <button onClick={() => setSelectedStar(null)}>Cancel</button>
              <button onClick={claimStar} disabled={loading}>
                {loading ? "Claiming..." : "Become a Star"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}