export default function BootLoader() {
  return (
    <div className="loader-overlay">
      <div className="boot-panel">
        <p className="boot-loading-text">Loading...</p>
        <div className="pixel-load-frame" role="progressbar" aria-label="Loading">
          <div className="pixel-load-track">
            <span className="pixel-load-runner" />
          </div>
        </div>
      </div>
    </div>
  );
}
