export default function DeskScene({ reveal }) {
  return (
    <section className={`desk-scene ${reveal ? "desk-scene--zoom" : ""}`}>
      <img
        src="/desk-scene.jpg"
        alt="Pixel desk with retro computer"
        className="desk-scene__image"
      />

      <div className="monitor-screen-shell">
        <img
          src="/monitor-desktop.png"
          alt="Desktop UI on CRT screen"
          className="monitor-screen-image"
        />
        <div className="monitor-screen-crt" />
      </div>
    </section>
  );
}
