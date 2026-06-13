import { useEffect, useState } from "react";
import deskSceneUrl from "../assets/desk-scene.jpg";

export default function DeskStage() {
  const [desktopTakeover, setDesktopTakeover] = useState(false);

  useEffect(() => {
    // After zoom completes (~4.8s after mount), takeover full screen
    const t = setTimeout(() => setDesktopTakeover(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="desk-scene desk-scene--zoom">
      {/* Desk background — zooms in then fades behind takeover */}
      <img
        src={deskSceneUrl}
        alt="Pixel desk"
        className={`desk-scene__image ${desktopTakeover ? "desk-scene__image--faded" : ""}`}
      />

      {/* Full-screen Win95 desktop that expands from monitor area */}
      <div className={`desktop-takeover ${desktopTakeover ? "desktop-takeover--active" : ""}`}>
        <div className="desktop">
          {/* Desktop icons */}
          <div className="desktop-icons">
            <div className="desktop-icon">
              <span className="icon-img">📁</span>
              <span className="icon-label">Files</span>
            </div>
            <div className="desktop-icon">
              <span className="icon-img">🗑️</span>
              <span className="icon-label">Bin</span>
            </div>
          </div>

          {/* Pink window with green terminal */}
          <div className="window95">
            <div className="window95-titlebar">
              <span className="window95-title">zen.x — terminal</span>
              <div className="window95-controls">
                <span className="win-btn win-btn-min">_</span>
                <span className="win-btn win-btn-max">□</span>
                <span className="win-btn win-btn-close">✕</span>
              </div>
            </div>
            <div className="window95-body">
              <div className="terminal-output">
                <div className="term-line term-welcome">Welcome to zen.x v0.1</div>
                <div className="term-line">Copyright © 2026 zen.x systems</div>
                <div className="term-line term-blank">&nbsp;</div>
                <div className="term-line term-hash">################################</div>
                <div className="term-line term-hash">################################</div>
                <div className="term-line term-hash">################################</div>
                <div className="term-line term-blank">&nbsp;</div>
                <div className="term-line">Loading kernel.......... <span className="term-ok">OK</span></div>
                <div className="term-line">Mounting filesystems.... <span className="term-ok">OK</span></div>
                <div className="term-line">Starting network........ <span className="term-ok">OK</span></div>
                <div className="term-line">Initializing GUI........ <span className="term-blink">▌</span></div>
              </div>
            </div>
          </div>

          {/* Taskbar */}
          <div className="taskbar">
            <button className="start-btn">
              <span className="start-logo">⊞</span> Start
            </button>
            <div className="taskbar-tray">
              <span className="tray-clock">6:66</span>
            </div>
          </div>
        </div>

        {/* CRT scanlines on the full desktop */}
        <div className="desktop-crt" />
      </div>

      {/* Small monitor overlay visible during zoom (before takeover) */}
      {!desktopTakeover && (
        <div className="monitor-screen-shell">
          <div className="desktop">
            <div className="desktop-icons">
              <div className="desktop-icon"><span className="icon-img">📁</span><span className="icon-label">Files</span></div>
              <div className="desktop-icon"><span className="icon-img">🗑️</span><span className="icon-label">Bin</span></div>
            </div>
            <div className="window95">
              <div className="window95-titlebar">
                <span className="window95-title">zen.x</span>
                <div className="window95-controls">
                  <span className="win-btn">_</span>
                  <span className="win-btn">□</span>
                  <span className="win-btn">✕</span>
                </div>
              </div>
              <div className="window95-body">
                <div className="terminal-output">
                  <div className="term-line term-welcome">zen.x v0.1</div>
                  <div className="term-line">Loading...</div>
                </div>
              </div>
            </div>
            <div className="taskbar">
              <button className="start-btn"><span className="start-logo">⊞</span> Start</button>
              <div className="taskbar-tray"><span className="tray-clock">6:66</span></div>
            </div>
          </div>
          <div className="monitor-screen-crt" />
        </div>
      )}
    </section>
  );
}
