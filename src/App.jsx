import { useEffect, useState } from "react";
import BootStage from "./components/BootStage.jsx";
import DeskStage from "./components/DeskStage.jsx";

export default function App() {
  const [stage, setStage] = useState("boot");
  const [bootDissolve, setBootDissolve] = useState(false);

  useEffect(() => {
    // 5s: dissolve boot stage
    const t1 = setTimeout(() => setBootDissolve(true), 5000);
    // 6s: switch to desk stage → zoom starts immediately (4.8s)
    //     at 5s after mount, desktop-takeover expands to fullscreen
    //     total desk phase ≈ 10s end-to-end
    const t2 = setTimeout(() => setStage("desk"), 6000);

    return () => [t1, t2].forEach(clearTimeout);
  }, []);

  return (
    <main className="app-shell">
      {stage === "boot" && <BootStage dissolve={bootDissolve} />}
      {stage === "desk" && <DeskStage />}
    </main>
  );
}
