import { useEffect, useState } from "react";
import BootStage from "./components/BootStage.jsx";
import DeskStage from "./components/DeskStage.jsx";

export default function App() {
  const [stage, setStage] = useState("boot");
  const [bootDissolve, setBootDissolve] = useState(false);
  const [deskZoom, setDeskZoom] = useState(false);

  useEffect(() => {
    // 5s: begin dissolve
    const t1 = setTimeout(() => setBootDissolve(true), 5000);
    // 6s: switch to desk stage
    const t2 = setTimeout(() => setStage("desk"), 6000);
    // 8s: start zoom into monitor
    const t3 = setTimeout(() => setDeskZoom(true), 8000);

    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <main className="app-shell">
      {stage === "boot" && <BootStage dissolve={bootDissolve} />}
      {stage === "desk" && <DeskStage reveal={deskZoom} />}
    </main>
  );
}
