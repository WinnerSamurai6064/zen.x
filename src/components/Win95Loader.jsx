export default function Win95Loader() {
  return (
    <section className="loader-overlay" aria-label="Pixel world loading screen">
      <div className="win95-window">
        <header className="win95-titlebar">
          <span>ZEN.X</span>
          <div className="win95-controls" aria-hidden="true">
            <button type="button">_</button>
            <button type="button">□</button>
            <button type="button">×</button>
          </div>
        </header>

        <div className="win95-content">
          <p className="loader-title">Pixel World Loading...</p>
          <div className="progress-frame" role="progressbar" aria-label="Loading pixel world">
            <div className="progress-bar" />
          </div>
          <p className="loader-subtext">Preparing floating cloth mesh</p>
        </div>
      </div>
    </section>
  );
}
