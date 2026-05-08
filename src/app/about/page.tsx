export default function AboutPage() {
  const darkLunaGallery = [
    "/luna/luna-1.png",
    "/luna/luna-2.png",
    "/luna/luna-3.png",
    "/luna/luna-4.png",
    "/luna/luna-5.png",
  ];

  const lightLunaGallery = [
    "/luna/luna-6.png",
    "/luna/luna-7.png",
    "/luna/luna-8.png",
    "/luna/luna-9.png",
    "/luna/luna-10.png",
  ];

  return (
    <main className="luna-page">
      <div className="luna-bg" />
      <div className="pastel-wash" />
      <div className="moon-ambience" />
      <div className="cloud-ambience" />
      <div className="stars-small" />
      <div className="stars-big" />

      <div className="luna-container about-container">
        <nav className="luna-nav">
          <a href="/">← Home</a>
          <a href="/about">About Luna</a>
        </nav>

        <section className="luna-card goddess-card">
          <img
            src="/luna-goddess.png"
            alt="Luna the moon goddess"
            className="goddess-image"
          />
        </section>

        <section className="luna-card lore-card">
          <p className="eyebrow">Children of the Moon</p>

          <h1>The Lore of Luna</h1>

          <div className="lore-text">
            <p>
              Long before stars were named, Luna wandered the silent sky between
              dying worlds.
            </p>

            <p>
              Her eyes burned crimson beneath pale moonlight, watching over
              dreamers, outcasts, and those who felt forgotten beneath the
              night. Some called her a goddess. Others feared her. Most believed
              she never truly existed at all.
            </p>

            <p>
              Legends speak of a celestial being born from the hidden side of
              the moon — a realm untouched by sunlight, where silence became
              power and stars carried the memories of lost souls.
            </p>

            <p>
              It is said she walks through dreams like drifting stardust,
              appearing only to those who feel alone beneath the endless sky.
            </p>

            <div className="lore-emphasis">
              <p>Some arrive seeking comfort.</p>
              <p>Some arrive seeking escape.</p>
              <p>Most never truly leave.</p>
            </div>

            <p className="final-line">
              And somewhere beyond the sleeping sky, the moon still watches.
            </p>
          </div>
        </section>

        {/* DARK MOON */}

        <section className="luna-card lore-gallery-card">
          <p className="eyebrow">The Two Faces of Luna</p>

          <h2>🌑 The Veiled Moon</h2>

          <p className="gallery-description">
            The darker face of Luna watches over forgotten dreamers,
            restless souls, and those who wander through grief, silence,
            and chaos beneath the night sky.
          </p>

          <div className="lore-gallery">
            {darkLunaGallery.map((image) => (
              <img key={image} src={image} alt="Dark Luna" />
            ))}
          </div>
        </section>

        {/* QUOTE */}

        <section className="quote-section">
          <p>
            “Not all stars wish to be found.”
          </p>
        </section>

        {/* LIGHT MOON */}

        <section className="luna-card lore-gallery-card">
          <p className="eyebrow">The Luminous Moon</p>

          <h2>🌕 The Celestial Light</h2>

          <p className="gallery-description">
            Yet beyond the darkness exists another side of Luna —
            softer, luminous, and serene. A guardian of healing,
            comfort, moonlit dreams, and the quiet hope carried
            through the stars.
          </p>

          <div className="lore-gallery">
            {lightLunaGallery.map((image) => (
              <img key={image} src={image} alt="Light Luna" />
            ))}
          </div>
        </section>

        {/* FINAL SECTION */}

        <section className="luna-card invitation-card">
          <p className="eyebrow">Children of the Moon</p>

          <h2>Beyond the Sleeping Sky</h2>

          <p>
            Whether drawn toward the Veiled Moon or the Celestial Light,
            all wandering souls are welcome within Luna Realm.
          </p>

          <p>
            Beneath drifting clouds and forgotten stars, the moon watches
            over all who wander here.
          </p>
        </section>
      </div>
    </main>
  );
}