import deskSceneUrl from "../assets/desk-scene.jpg";
import monitorDesktopUrl from "../assets/monitor-desktop.jpg";

export default function DeskStage({ reveal }) {
  return (
    <section className={`desk-scene ${reveal ? "desk-scene--zoom" : ""}`}>
      <img
        src={deskSceneUrl}
        alt="Pixel desk with retro computer"
        className="desk-scene__image"
      />

      <div className="monitor-screen-shell">
        <img
          src={monitorDesktopUrl}
          alt="Desktop UI on CRT screen"
          className="monitor-screen-image"
        />
        <div className="monitor-screen-crt" />
      </div>
    </section>
  );
}
