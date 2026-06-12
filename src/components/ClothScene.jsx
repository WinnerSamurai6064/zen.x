import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import FloatingCloth from "./FloatingCloth.jsx";

export default function ClothScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 40 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#0f1020"]} />

      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 4]} intensity={1.15} />
      <directionalLight position={[-3, -2, 3]} intensity={0.35} />

      <FloatingCloth />

      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </Canvas>
  );
}
