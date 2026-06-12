import { useEffect, useState } from "react";

export default function Win95Loader() {
  const [progress, setProgress] = useState(7);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 96) return 96;

        const nextStep = current < 45 ? 4 : current < 78 ? 2 : 1;
        return Math.min(current + nextStep, 96);
      });
    }, 260);

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
