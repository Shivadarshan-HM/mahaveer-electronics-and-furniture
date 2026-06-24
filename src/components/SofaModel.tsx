"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface SofaModelProps {
  scrollRef: React.MutableRefObject<number>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

export default function SofaModel({ mouseRef }: SofaModelProps) {
  const sofaRef = useRef<THREE.Group>(null);
  const t = useRef(0);

  /* ── Premium materials — Poliform / Minotti palette ── */
  const walnutLegs = new THREE.MeshPhysicalMaterial({
    color: "#2c1a10",
    roughness: 0.45,
    metalness: 0.12,
    clearcoat: 0.1,
    clearcoatRoughness: 0.25,
  });

  const ivoryFabric = new THREE.MeshPhysicalMaterial({
    color: "#f4f0e5",   // warm linen ivory
    roughness: 0.93,
    metalness: 0.0,
  });

  const warmBeige = new THREE.MeshPhysicalMaterial({
    color: "#e8dfc8",   // slightly darker cushion accent
    roughness: 0.95,
    metalness: 0.0,
  });

  const warmLinen = new THREE.MeshPhysicalMaterial({
    color: "#ddd4ba",   // accent pillows — slightly saturated linen
    roughness: 0.97,
    metalness: 0.0,
  });

  useFrame(() => {
    t.current += 0.006;
    if (!sofaRef.current) return;

    // Very subtle ambient float — barely perceptible, like breathing
    const floatY = Math.sin(t.current * 0.9) * 0.018;

    // Gentle mouse parallax — max ±3°
    const targetRotY = mouseRef.current.x * 0.055;
    const targetRotX = -mouseRef.current.y * 0.025;

    sofaRef.current.position.y = THREE.MathUtils.lerp(
      sofaRef.current.position.y,
      -0.05 + floatY,
      0.04
    );
    sofaRef.current.rotation.y = THREE.MathUtils.lerp(
      sofaRef.current.rotation.y,
      targetRotY,
      0.04
    );
    sofaRef.current.rotation.x = THREE.MathUtils.lerp(
      sofaRef.current.rotation.x,
      targetRotX,
      0.04
    );
  });

  return (
    <group ref={sofaRef} position={[0, -0.05, 0]}>

      {/* ── Walnut base platform ── */}
      <mesh position={[0, -0.42, 0]} material={walnutLegs} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.07, 1.65]} />
      </mesh>

      {/* ── Four walnut legs ── */}
      <mesh position={[-1.6, -0.58, 0.64]} material={walnutLegs} castShadow>
        <cylinderGeometry args={[0.055, 0.038, 0.32, 16]} />
      </mesh>
      <mesh position={[1.6, -0.58, 0.64]} material={walnutLegs} castShadow>
        <cylinderGeometry args={[0.055, 0.038, 0.32, 16]} />
      </mesh>
      <mesh position={[-1.6, -0.58, -0.64]} material={walnutLegs} castShadow>
        <cylinderGeometry args={[0.055, 0.038, 0.32, 16]} />
      </mesh>
      <mesh position={[1.6, -0.58, -0.64]} material={walnutLegs} castShadow>
        <cylinderGeometry args={[0.055, 0.038, 0.32, 16]} />
      </mesh>

      {/* ── Seat cushions (two sections) ── */}
      <RoundedBox
        position={[-0.88, -0.2, 0.1]}
        args={[1.62, 0.38, 1.42]}
        radius={0.09}
        smoothness={6}
        castShadow receiveShadow
      >
        <primitive object={ivoryFabric} attach="material" />
      </RoundedBox>
      <RoundedBox
        position={[0.88, -0.2, 0.1]}
        args={[1.62, 0.38, 1.42]}
        radius={0.09}
        smoothness={6}
        castShadow receiveShadow
      >
        <primitive object={ivoryFabric} attach="material" />
      </RoundedBox>

      {/* ── Back cushions ── */}
      <RoundedBox
        position={[-0.88, 0.26, -0.5]}
        args={[1.55, 0.64, 0.36]}
        radius={0.08}
        smoothness={6}
        castShadow receiveShadow
      >
        <primitive object={warmBeige} attach="material" />
      </RoundedBox>
      <RoundedBox
        position={[0.88, 0.26, -0.5]}
        args={[1.55, 0.64, 0.36]}
        radius={0.08}
        smoothness={6}
        castShadow receiveShadow
      >
        <primitive object={warmBeige} attach="material" />
      </RoundedBox>

      {/* ── Left armrest ── */}
      <RoundedBox
        position={[-1.76, 0.05, -0.05]}
        args={[0.32, 0.56, 1.55]}
        radius={0.09}
        smoothness={6}
        castShadow receiveShadow
      >
        <primitive object={ivoryFabric} attach="material" />
      </RoundedBox>
      {/* ── Right armrest ── */}
      <RoundedBox
        position={[1.76, 0.05, -0.05]}
        args={[0.32, 0.56, 1.55]}
        radius={0.09}
        smoothness={6}
        castShadow receiveShadow
      >
        <primitive object={ivoryFabric} attach="material" />
      </RoundedBox>

      {/* ── Accent pillow — left (rotated slightly) ── */}
      <RoundedBox
        position={[-1.08, -0.02, -0.32]}
        rotation={[0.08, 0.22, -0.05]}
        args={[0.7, 0.46, 0.16]}
        radius={0.09}
        smoothness={5}
        castShadow
      >
        <primitive object={warmLinen} attach="material" />
      </RoundedBox>
      {/* ── Accent pillow — right ── */}
      <RoundedBox
        position={[1.08, -0.02, -0.32]}
        rotation={[0.08, -0.2, 0.05]}
        args={[0.7, 0.46, 0.16]}
        radius={0.09}
        smoothness={5}
        castShadow
      >
        <primitive object={warmLinen} attach="material" />
      </RoundedBox>

    </group>
  );
}
