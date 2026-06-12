import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import clothTextureUrl from "../assets/cloth-texture.jpg";

const TEXTURE_WIDTH = 1023;
const TEXTURE_HEIGHT = 1261;
const TEXTURE_ASPECT = TEXTURE_WIDTH / TEXTURE_HEIGHT;
const CLOTH_WIDTH = 1.62;
const CLOTH_HEIGHT = CLOTH_WIDTH / TEXTURE_ASPECT;

function getSegmentProfile() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return {
    widthSegments: isMobile ? 14 : 18,
    heightSegments: isMobile ? 18 : 24,
  };
}

export default function FloatingCloth() {
  const meshRef = useRef(null);
  const geometryRef = useRef(null);
  const texture = useLoader(THREE.TextureLoader, clothTextureUrl);
  const { widthSegments, heightSegments } = getSegmentProfile();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      CLOTH_WIDTH,
      CLOTH_HEIGHT,
      widthSegments,
      heightSegments
    );

    const positions = geo.attributes.position;
    const originalPositions = [];

    for (let i = 0; i < positions.count; i += 1) {
      originalPositions.push({
        x: positions.getX(i),
        y: positions.getY(i),
        z: positions.getZ(i),
      });
    }

    geo.userData.originalPositions = originalPositions;
    return geo;
  }, [heightSegments, widthSegments]);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame(({ clock }) => {
    const geo = geometryRef.current;
    const mesh = meshRef.current;

    if (!geo || !mesh) return;

    const time = clock.getElapsedTime();
    const positions = geo.attributes.position;
    const original = geo.userData.originalPositions;

    for (let i = 0; i < positions.count; i += 1) {
      const { x: baseX, y: baseY } = original[i];

      const verticalRatio = (baseY + CLOTH_HEIGHT / 2) / CLOTH_HEIGHT;
      const anchorResistance = 0.42 + verticalRatio * 0.78;

      const broadWind = Math.sin(time * 1.7 + baseY * 3.0) * 0.065;
      const sideRipple = Math.cos(time * 2.2 + baseX * 4.0) * 0.04;
      const smallFlutter = Math.sin(time * 3.8 + baseX * 5.0 + baseY * 2.6) * 0.022;
      const breathingX = Math.sin(time * 1.15 + baseY * 2.3) * 0.028;

      positions.setXYZ(
        i,
        baseX + breathingX * anchorResistance,
        baseY,
        (broadWind + sideRipple + smallFlutter) * anchorResistance
      );
    }

    positions.needsUpdate = true;
    geo.computeVertexNormals();

    mesh.rotation.y = Math.sin(time * 0.55) * 0.12;
    mesh.rotation.x = Math.cos(time * 0.5) * 0.045;
    mesh.position.y = Math.sin(time * 0.75) * 0.045;
  });

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]}>
      <primitive object={geometry} ref={geometryRef} attach="geometry" />
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        roughness={0.86}
        metalness={0.02}
      />
    </mesh>
  );
}
