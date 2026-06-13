import { useEffect, useState } from "react";
import ClothScene from "./components/ClothScene.jsx";
import Win95Loader from "./components/Win95Loader.jsx";
import DeskScene from "./components/DeskScene.jsx";

export default function App() {
  const [showCloth, setShowCloth] = useState(true);
  const [clothDissolve, setClothDissolve] = useState(false);

  const [showDeskScene, setShowDeskScene] = useState(false);
  const [showDeskLoader, setShowDeskLoader] = useState(false);
  const [deskLoaderDissolve, setDeskLoaderDissolve] = useState(false);
  const [deskReveal, setDeskReveal] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setClothDissolve(true), 5000);
    const t2 = setTimeout(() => {
      setShowCloth(false);
      setShowDeskScene(true);
      setShowDeskLoader(true);
    }, 6000);

    const t3 = setTimeout(() => setDeskLoaderDissolve(true), 11000);
    const t4 = setTimeout(() => {
      setShowDeskLoader(false);
      setDeskReveal(true);
    }, 12000);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <main className="app-shell">
      {showCloth && (
        <div className={`stage-layer ${clothDissolve ? "stage-layer--dissolve" : ""}`}>
          <ClothScene />
          <Win95Loader label="PIXEL WORLD LOADING" />
        </div>
      )}

      {showDeskScene && (
        <div className="stage-layer">
          <DeskScene reveal={deskReveal} />
        </div>
      )}

      {showDeskScene && showDeskLoader && (
        <div
          className={`stage-layer stage-layer--overlay ${
            deskLoaderDissolve ? "stage-layer--dissolve" : ""
          }`}
        >
          <Win95Loader label="INITIALIZING WORKSTATION" />
        </div>
      )}
    </main>
  );
}
