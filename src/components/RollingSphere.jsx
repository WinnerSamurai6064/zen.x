import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import clothTextureUrl from "../assets/cloth-texture.jpg";

function RollingSphereMesh() {
  const meshRef = useRef(null);
  const texture = useLoader(THREE.TextureLoader, clothTextureUrl);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const segments = isMobile ? 24 : 32;

  const geometry = useMemo(
    () => new THREE.SphereGeometry(1.8, segments, segments),
    [segments]
  );

  // Texture settings for pixel-art feel
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    // Continuous Y-axis rotation - image rolls like a planet
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.35;
  });

  return (
    <mesh ref={meshRef} position={[0, 0.2, 0]} geometry={geometry}>
      <meshStandardMaterial
        map={texture}
        roughness={0.75}
        metalness={0.05}
        emissive={new THREE.Color(0x002a10)}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

export default function RollingSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
      }}
      style={{ background: "#0a0a0a" }}
    >
      <color attach="background" args={["#0a0a0a"]} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 4]} intensity={1.0} />
      <directionalLight position={[-2, -1, 3]} intensity={0.25} />

      {/* Green CRT tint point light */}
      <pointLight
        position={[0, 0, 6]}
        intensity={0.3}
        color="#00ff66"
        distance={12}
      />

      <RollingSphereMesh />

      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </Canvas>
  );
}
