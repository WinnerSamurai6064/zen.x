export default function Win95Loader({ label = "PIXEL WORLD LOADING" }) {
  return (
    <section className="loader-overlay" aria-label="Pixel world loading screen">
      <div className="boot-panel">
        <p className="boot-label">{label}</p>
        <p className="boot-loading-text">Loading...</p>

        <div className="pixel-load-frame" role="progressbar" aria-label={label}>
          <div className="pixel-load-track">
            <span className="pixel-load-runner" />
          </div>
        </div>
      </div>
    </section>
  );
}
