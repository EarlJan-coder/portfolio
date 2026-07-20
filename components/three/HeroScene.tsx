"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#4d7cff";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1400;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute in a soft sphere shell
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.008;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8aa4ff"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function WireframeSphere() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.z += delta * 0.03;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.4) * 0.25;
  });

  return (
    <group ref={ref}>
      <Icosahedron args={[2.4, 3]}>
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.16} />
      </Icosahedron>
      <Icosahedron args={[1.5, 1]}>
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.06} />
      </Icosahedron>
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    const x = (state.pointer.x * 0.4);
    const y = (state.pointer.y * 0.4);
    state.camera.position.x += (x - state.camera.position.x) * 0.03;
    state.camera.position.y += (-y - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ParticleField />
      <WireframeSphere />
      <Rig />
    </Canvas>
  );
}
