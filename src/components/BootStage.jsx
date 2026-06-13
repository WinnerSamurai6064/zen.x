import RollingSphere from "./RollingSphere.jsx";
import BootLoader from "./BootLoader.jsx";

export default function BootStage({ dissolve }) {
  return (
    <div className={`stage-layer boot-stage ${dissolve ? "stage-layer--dissolve" : ""}`}>
      <div className="boot-stage__sphere">
        <RollingSphere />
      </div>
      <BootLoader />
    </div>
  );
}
