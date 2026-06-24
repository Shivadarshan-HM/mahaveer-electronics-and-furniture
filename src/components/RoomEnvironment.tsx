"use client";

import React from "react";
import * as THREE from "three";

/**
 * Premium architectural room — always fully rendered.
 * Camera is pulled back and slightly angled for an interior perspective.
 * Everything feels like a real room, not a product stage.
 */
export default function RoomEnvironment() {

  // ── Materials ──────────────────────────────────────────────
  const travertine = new THREE.MeshPhysicalMaterial({
    color: "#e0d9ca",
    roughness: 0.82,
    metalness: 0.04,
    clearcoat: 0.18,
    clearcoatRoughness: 0.35,
  });

  const plaster = new THREE.MeshStandardMaterial({
    color: "#f5f1e8",
    roughness: 0.96,
    metalness: 0.0,
  });

  const walnut = new THREE.MeshPhysicalMaterial({
    color: "#271508",
    roughness: 0.52,
    metalness: 0.14,
    clearcoat: 0.12,
    clearcoatRoughness: 0.28,
  });

  const walnutLight = new THREE.MeshPhysicalMaterial({
    color: "#3d2110",
    roughness: 0.60,
    metalness: 0.08,
    clearcoat: 0.06,
  });

  const gold = new THREE.MeshPhysicalMaterial({
    color: "#c8a840",
    roughness: 0.12,
    metalness: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
  });

  const brushedGold = new THREE.MeshPhysicalMaterial({
    color: "#b8983a",
    roughness: 0.45,
    metalness: 0.95,
    clearcoat: 0.3,
  });

  const blackMetal = new THREE.MeshStandardMaterial({
    color: "#181410",
    roughness: 0.22,
    metalness: 0.9,
  });

  const lampShade = new THREE.MeshPhysicalMaterial({
    color: "#f2e8d0",
    roughness: 0.88,
    metalness: 0.0,
    transparent: true,
    opacity: 0.90,
    side: THREE.DoubleSide,
  });

  const marbleTop = new THREE.MeshPhysicalMaterial({
    color: "#eae5d8",
    roughness: 0.55,
    metalness: 0.05,
    clearcoat: 0.6,
    clearcoatRoughness: 0.15,
  });

  const darkMarble = new THREE.MeshPhysicalMaterial({
    color: "#1e1812",
    roughness: 0.45,
    metalness: 0.08,
    clearcoat: 0.55,
    clearcoatRoughness: 0.12,
  });

  const rug = new THREE.MeshStandardMaterial({
    color: "#d8cfba",
    roughness: 0.99,
    metalness: 0.0,
  });

  const rugBorder = new THREE.MeshStandardMaterial({
    color: "#b8a88a",
    roughness: 0.99,
    metalness: 0.0,
  });

  const ceramicWhite = new THREE.MeshPhysicalMaterial({
    color: "#f4f0e8",
    roughness: 0.35,
    metalness: 0.02,
    clearcoat: 0.8,
    clearcoatRoughness: 0.08,
  });

  return (
    <group>

      {/* ══ 1. FLOOR — Travertine slab ══ */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[28, 28]} />
        <primitive object={travertine} attach="material" />
      </mesh>

      {/* Floor tile grout lines — very subtle */}
      {[-3, 0, 3].map((x) =>
        [-3, 0, 3].map((z) => (
          <mesh key={`tile-${x}-${z}`} position={[x, -0.498, z]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[2.98, 2.98]} />
            <meshStandardMaterial color="#d8d1c0" roughness={0.88} />
          </mesh>
        ))
      )}

      {/* ══ 2. BACK WALL ══ */}
      <mesh position={[0, 2, -4.5]} receiveShadow>
        <boxGeometry args={[28, 12, 0.12]} />
        <primitive object={plaster} attach="material" />
      </mesh>

      {/* ══ 3. LEFT SIDE WALL ══ */}
      <mesh position={[-9, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[20, 12, 0.12]} />
        <primitive object={plaster} attach="material" />
      </mesh>

      {/* ══ 4. CEILING ══ */}
      <mesh position={[0, 4.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[28, 28]} />
        <meshStandardMaterial color="#f8f5ee" roughness={1} />
      </mesh>

      {/* ══ 5. ARCHITECTURAL WALL PANELS — Back wall ══ */}
      {/* Main wide panel zone */}
      <mesh position={[0, 1.8, -4.38]} receiveShadow castShadow>
        <boxGeometry args={[8.5, 5.2, 0.14]} />
        <primitive object={walnut} attach="material" />
      </mesh>

      {/* Vertical divider strip centre */}
      <mesh position={[0, 1.8, -4.26]}>
        <boxGeometry args={[0.08, 5.2, 0.06]} />
        <primitive object={walnutLight} attach="material" />
      </mesh>

      {/* Left narrower panel */}
      <mesh position={[-5.5, 1.8, -4.38]}>
        <boxGeometry args={[2.8, 5.2, 0.12]} />
        <primitive object={walnutLight} attach="material" />
      </mesh>
      {/* Right narrower panel */}
      <mesh position={[5.5, 1.8, -4.38]}>
        <boxGeometry args={[2.8, 5.2, 0.12]} />
        <primitive object={walnutLight} attach="material" />
      </mesh>

      {/* Gold horizontal rails separating panels */}
      <mesh position={[0, 0.35, -4.30]}>
        <boxGeometry args={[9, 0.025, 0.06]} />
        <primitive object={gold} attach="material" />
      </mesh>
      <mesh position={[0, 3.25, -4.30]}>
        <boxGeometry args={[9, 0.025, 0.06]} />
        <primitive object={gold} attach="material" />
      </mesh>

      {/* Skirting board */}
      <mesh position={[0, -0.38, -4.44]}>
        <boxGeometry args={[28, 0.24, 0.1]} />
        <primitive object={walnut} attach="material" />
      </mesh>

      {/* Ceiling cornice */}
      <mesh position={[0, 4.28, -4.44]}>
        <boxGeometry args={[28, 0.22, 0.12]} />
        <primitive object={plaster} attach="material" />
      </mesh>

      {/* ══ 6. WINDOW on left wall — creates the aspirational sunlight beam ══ */}
      {/* Window recess */}
      <mesh position={[-8.7, 2.0, 1.5]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[3.8, 3.2, 0.3]} />
        <meshStandardMaterial color="#e8f0f8" roughness={1} />
      </mesh>
      {/* Window glass pane glow — emissive warm light coming through */}
      <mesh position={[-8.7, 2.0, 1.5]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[3.5, 3.0]} />
        <meshStandardMaterial
          color="#fff8e0"
          emissive="#fff4c8"
          emissiveIntensity={0.35}
          transparent
          opacity={0.22}
        />
      </mesh>
      {/* Window frame */}
      {/* Top */}
      <mesh position={[-8.78, 3.68, 1.5]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[3.8, 0.06, 0.12]} />
        <primitive object={plaster} attach="material" />
      </mesh>
      {/* Bottom */}
      <mesh position={[-8.78, 0.32, 1.5]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[3.8, 0.06, 0.12]} />
        <primitive object={plaster} attach="material" />
      </mesh>
      {/* Centre mullion */}
      <mesh position={[-8.78, 2.0, 1.5]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.04, 3.2, 0.12]} />
        <primitive object={plaster} attach="material" />
      </mesh>

      {/* Left panel on left wall (beside window) */}
      <mesh position={[-8.78, 1.8, -1.2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[3.5, 4.8, 0.1]} />
        <primitive object={walnutLight} attach="material" />
      </mesh>

      {/* ══ 7. FLOOR LAMP (left, near window) ══ */}
      {/* Weighted base */}
      <mesh position={[-3.0, -0.47, -0.8]} castShadow>
        <cylinderGeometry args={[0.25, 0.28, 0.055, 32]} />
        <primitive object={blackMetal} attach="material" />
      </mesh>
      {/* Slender upright pole */}
      <mesh position={[-3.0, 0.72, -0.8]} castShadow>
        <cylinderGeometry args={[0.022, 0.022, 2.38, 16]} />
        <primitive object={blackMetal} attach="material" />
      </mesh>
      {/* Slightly curved arm */}
      <mesh position={[-2.78, 1.86, -0.55]} rotation={[0, 0, -0.18]} castShadow>
        <cylinderGeometry args={[0.018, 0.018, 0.52, 12]} />
        <primitive object={blackMetal} attach="material" />
      </mesh>
      {/* Drum shade */}
      <mesh position={[-2.62, 2.06, -0.44]} castShadow>
        <cylinderGeometry args={[0.38, 0.32, 0.42, 32, 1, true]} />
        <primitive object={lampShade} attach="material" />
      </mesh>
      {/* Shade top ring */}
      <mesh position={[-2.62, 2.27, -0.44]}>
        <torusGeometry args={[0.38, 0.014, 8, 32]} />
        <primitive object={brushedGold} attach="material" />
      </mesh>
      {/* Shade bottom ring */}
      <mesh position={[-2.62, 1.85, -0.44]}>
        <torusGeometry args={[0.32, 0.012, 8, 32]} />
        <primitive object={brushedGold} attach="material" />
      </mesh>

      {/* ══ 8. LUXURY SIDE TABLE (right of sofa) ══ */}
      {/* Marble top */}
      <mesh position={[2.3, -0.18, 0.2]} receiveShadow castShadow>
        <cylinderGeometry args={[0.42, 0.40, 0.045, 48]} />
        <primitive object={marbleTop} attach="material" />
      </mesh>
      {/* Gold rim */}
      <mesh position={[2.3, -0.16, 0.2]}>
        <torusGeometry args={[0.41, 0.012, 8, 48]} />
        <primitive object={gold} attach="material" />
      </mesh>
      {/* Slender leg cluster */}
      {[0, Math.PI * 0.66, Math.PI * 1.32].map((angle, i) => (
        <mesh
          key={i}
          position={[2.3 + Math.cos(angle) * 0.22, -0.44, 0.2 + Math.sin(angle) * 0.22]}
          rotation={[Math.sin(angle) * 0.12, 0, -Math.cos(angle) * 0.12]}
          castShadow
        >
          <cylinderGeometry args={[0.018, 0.014, 0.52, 12]} />
          <primitive object={brushedGold} attach="material" />
        </mesh>
      ))}

      {/* ── Vase on side table ── */}
      <mesh position={[2.3, -0.08, 0.2]} castShadow>
        <cylinderGeometry args={[0.04, 0.08, 0.18, 24]} />
        <primitive object={ceramicWhite} attach="material" />
      </mesh>
      <mesh position={[2.3, 0.03, 0.2]}>
        <cylinderGeometry args={[0.025, 0.04, 0.07, 24]} />
        <primitive object={ceramicWhite} attach="material" />
      </mesh>

      {/* ══ 9. COFFEE TABLE ══ */}
      {/* Dark marble top */}
      <mesh position={[0, -0.30, 1.4]} receiveShadow castShadow>
        <boxGeometry args={[1.95, 0.04, 0.88]} />
        <primitive object={darkMarble} attach="material" />
      </mesh>
      {/* Gold edge trim */}
      <mesh position={[0, -0.278, 1.4]}>
        <boxGeometry args={[1.97, 0.008, 0.90]} />
        <primitive object={gold} attach="material" />
      </mesh>
      {/* Four hairpin legs */}
      {[[-0.88, 0.4], [0.88, 0.4], [-0.88, 1.0], [0.88, 1.0]].map(([x, z], i) => (
        <mesh key={i} position={[x as number, -0.42, z as number]} castShadow>
          <boxGeometry args={[0.026, 0.22, 0.026]} />
          <primitive object={blackMetal} attach="material" />
        </mesh>
      ))}

      {/* ── Coffee table decor: art books ── */}
      <mesh position={[-0.5, -0.264, 1.38]}>
        <boxGeometry args={[0.32, 0.028, 0.24]} />
        <meshStandardMaterial color="#d4c9b0" roughness={0.92} />
      </mesh>
      <mesh position={[-0.5, -0.236, 1.40]}>
        <boxGeometry args={[0.28, 0.022, 0.22]} />
        <meshStandardMaterial color="#c4b89e" roughness={0.92} />
      </mesh>

      {/* ── Small sculptural object ── */}
      <mesh position={[0.45, -0.258, 1.40]} castShadow>
        <sphereGeometry args={[0.065, 20, 20]} />
        <primitive object={ceramicWhite} attach="material" />
      </mesh>
      {/* Candle holder */}
      <mesh position={[0.45, -0.298, 1.40]}>
        <cylinderGeometry args={[0.05, 0.058, 0.04, 20]} />
        <primitive object={gold} attach="material" />
      </mesh>

      {/* ══ 10. AREA RUG ══ */}
      <mesh position={[0, -0.496, 0.75]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6.5, 4.0]} />
        <primitive object={rug} attach="material" />
      </mesh>
      {/* Rug border stripe */}
      <mesh position={[0, -0.494, 0.75]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 3.25, 4, 1, 0, Math.PI * 2]} />
        <primitive object={rugBorder} attach="material" />
      </mesh>

      {/* ══ 11. WALL ART — framed canvas ══ */}
      {/* Frame */}
      <mesh position={[4.5, 2.2, -4.36]} castShadow>
        <boxGeometry args={[1.62, 1.18, 0.07]} />
        <primitive object={walnut} attach="material" />
      </mesh>
      {/* Canvas */}
      <mesh position={[4.5, 2.2, -4.30]}>
        <planeGeometry args={[1.44, 1.02]} />
        <meshStandardMaterial color="#e8dfc8" roughness={0.98} />
      </mesh>
      {/* Gold frame inner bevel */}
      <mesh position={[4.5, 2.2, -4.32]}>
        <ringGeometry args={[0.68, 0.73, 4, 1, 0, Math.PI * 2]} />
        <primitive object={brushedGold} attach="material" />
      </mesh>

      {/* Second frame — left side */}
      <mesh position={[-4.5, 2.2, -4.36]} castShadow>
        <boxGeometry args={[1.08, 1.38, 0.07]} />
        <primitive object={walnut} attach="material" />
      </mesh>
      <mesh position={[-4.5, 2.2, -4.30]}>
        <planeGeometry args={[0.9, 1.22]} />
        <meshStandardMaterial color="#d4c8b0" roughness={0.98} />
      </mesh>

    </group>
  );
}
