import { useEffect, useState } from "react";

const MIN_PROGRESS = 8;
const MAX_PROGRESS = 96;

export default function Win95Loader() {
  const [progress, setProgress] = useState(MIN_PROGRESS);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= MAX_PROGRESS) return MIN_PROGRESS;

        const nextStep = current < 42 ? 5 : current < 74 ? 3 : 2;
        return Math.min(current + nextStep, MAX_PROGRESS);
      });
    }, 180);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="loader-overlay" aria-label="Pixel world loading screen">
      <div className="boot-panel">
        <p className="boot-label">PIXEL WORLD LOADING</p>

        <div
          className="pixel-load-frame"
          role="progressbar"
          aria-label="Loading pixel world"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progress}
        >
          <div className="pixel-load-track">
            <div className="pixel-load-fill" style={{ width: `${progress}%` }}>
              <span className="load-block load-green" />
              <span className="load-block load-yellow" />
              <span className="load-block load-red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
