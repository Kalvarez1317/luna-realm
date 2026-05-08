"use client";

import { socials } from "@/data/socials";
import { useEffect, useState } from "react";
import { clipCategories } from "@/data/clips";
import TarotReading from "@/components/TarotReading";
import StarConstellation from "@/components/StarConstellation";

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [stream, setStream] = useState<any>(null);
  const [parentDomain, setParentDomain] = useState("");

  useEffect(() => {
    setParentDomain(window.location.hostname);

    async function checkLive() {
      try {
        const res = await fetch("/api/twitch");
        const data = await res.json();

        setIsLive(data.isLive);
        setStream(data.stream);
      } catch (err) {
        console.error("Twitch API error:", err);
      }
    }

    checkLive();
    const interval = setInterval(checkLive, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="luna-page">
      <div className="luna-bg" />
      <div className="pastel-wash" />
      <div className="moon-ambience" />
      <div className="cloud-ambience" />
      <div className="stars-small" />
      <div className="stars-big" />

      <div className="luna-container">
        <section className="hero-section luna-card">
          <div>
            <p className="eyebrow">Children of the Moon</p>
            <h1 className="hero-title">Luna Realm</h1>
            <p className="hero-quote">
              “The moon watches over all who wander here.”
            </p>
          </div>

          <nav className="luna-nav">
            <a href="/">Home</a>
            <a href="/about">About Luna</a>
          </nav>
        </section>

        <section className="live-section luna-card">
          <div>
            <p className="eyebrow">Live Status</p>
            <h2>{isLive ? "Luna is currently live." : "The realm is resting."}</h2>
            {isLive && stream && <p className="live-title">{stream.title}</p>}
          </div>

          <div className={`live-badge ${isLive ? "live" : "offline"}`}>
            {isLive ? "LIVE" : "OFFLINE"}
          </div>
        </section>

        <section className="social-section luna-card">
  <p className="eyebrow">Celestial Gateways</p>

  <h2>Paths Beyond the Moon</h2>

  <p>
    The realm extends beyond the sleeping sky. Follow the stars to find Luna
    across distant worlds. Every sanctuary has its gateways. These are yours.
  </p>

  <div className="social-links">
    {socials.map((social) => (
      <a
        key={social.platform}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        className={`social-button ${social.className}`}
      >
        <span>{social.name}</span>
        <small>{social.platform}</small>
      </a>
    ))}
  </div>
</section>

        <section className="schedule-section luna-card">
          <p className="eyebrow">Celestial Schedule</p>
          <h2>When Luna Appears</h2>
          <p>
            Streams most days except <strong>Thursday & Sunday</strong>.
          </p>
          <p>
            The realm usually awakens between <strong>8–10 PM EST</strong>.
          </p>
        </section>

        {clipCategories.map((category) => (
          <section key={category.title} className="clips-section luna-card">
            <div className="section-header">
              <p className="eyebrow">Clips Archive</p>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>

            <div className="embedded-clips-grid">
              {category.clips.map((clip) => (
                <div key={clip.slug} className="embedded-clip-card">
                  {parentDomain && (
                    <iframe
                      src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=${parentDomain}`}
                      allowFullScreen
                      className="embedded-clip"
                      title={clip.title}
                    />
                  )}

                  <div className="clip-info">
                    <p>{clip.title}</p>
                    <a href={clip.url} target="_blank">
                      Open on Twitch
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="about-preview luna-card">
          <div className="about-preview-content">
            <div>
              <p className="eyebrow">The Moon Goddess</p>
              <h2>Beyond the Sleeping Sky</h2>
              <p>
                Explore the celestial mythology, lore, and hidden realm watched
                over by Luna herself.
              </p>

              <a href="/about" className="lore-button">
                Enter the Lore
              </a>
            </div>

            <img src="/luna-goddess.png" alt="Luna" className="preview-image" />
          </div>
        </section>

        <TarotReading />

        <StarConstellation />

        <footer className="footer-text">
          <p>Children of the Moon</p>
          <span>The moon watches over all who wander here.</span>
        </footer>
      </div>
    </main>
  );
}