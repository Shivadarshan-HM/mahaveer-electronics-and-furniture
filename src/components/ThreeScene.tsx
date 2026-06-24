"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Preload } from "@react-three/drei";
import * as THREE from "three";
import SofaModel from "./SofaModel";
import RoomEnvironment from "./RoomEnvironment";

interface ThreeSceneProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() { /* silent */ }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/* ── Warm breathing point light — simulates floor lamp glow ── */
function BreathingLamp() {
  const ref = useRef<THREE.PointLight>(null);
  const t = useRef(0);
  useFrame(() => {
    t.current += 0.007;
    if (ref.current) {
      ref.current.intensity = 1.6 + Math.sin(t.current * 0.8) * 0.25;
    }
  });
  // Position near the floor lamp location in RoomEnvironment
  return <pointLight ref={ref} position={[-2.62, 2.1, -0.44]} intensity={1.6} color="#f5dfa0" distance={7} decay={1.8} />;
}

/* ── Window sunlight shaft ── */
function WindowLight() {
  // Simulates sunlight entering through the left wall window
  return (
    <>
      <directionalLight
        position={[-8, 4, 2]}
        intensity={2.2}
        color="#fff8e4"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0003}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-camera-near={0.5}
        shadow-camera-far={40}
      />
      {/* Area light approximation — soft bounce from left wall */}
      <directionalLight position={[-6, 1, 3]} intensity={0.45} color="#f0ead8" />
    </>
  );
}

/* ── Gentle interior camera drift — like standing still inside a room ── */
function InteriorCamera({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const t = useRef(0);
  const pos = useRef(new THREE.Vector3(1.0, 0.55, 4.2));
  const look = useRef(new THREE.Vector3(-0.2, 0.05, 0));

  useFrame((state) => {
    t.current += 0.003;

    // Very subtle ambient drift — camera feels alive but static
    const dx = Math.sin(t.current * 0.6) * 0.04;
    const dy = Math.sin(t.current * 0.4) * 0.02;

    // Mouse parallax — barely noticeable (max ±0.07)
    const mx = mouseRef.current.x * 0.07;
    const my = mouseRef.current.y * 0.035;

    const target = new THREE.Vector3(
      1.0 + dx + mx,
      0.55 + dy + my,
      4.2
    );

    pos.current.lerp(target, 0.02);
    state.camera.position.copy(pos.current);
    state.camera.lookAt(look.current);
  });

  return null;
}

const STATIC_SCROLL = { current: 0 };

export default function ThreeScene({ mouseRef }: ThreeSceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        // Slightly off-axis — feels like standing inside a room looking across it
        camera={{ position: [1.0, 0.55, 4.2], fov: 48, near: 0.1, far: 50 }}
        style={{ background: "transparent" }}
      >
        {/* Warm ivory ambient — bounced room fill */}
        <ambientLight intensity={0.85} color="#fdf9f0" />

        {/* Ceiling bounce — soft downward fill */}
        <directionalLight position={[0, 10, 0]} intensity={0.3} color="#f8f2e4" />

        {/* Window sunlight — main dramatic light */}
        <WindowLight />

        {/* Floor lamp warm glow */}
        <BreathingLamp />

        {/* Subtle warm back bounce from walnut panels */}
        <pointLight position={[0, 1, -4]} intensity={0.5} color="#f0dfc0" distance={8} decay={2} />

        {/* Right side cool fill */}
        <directionalLight position={[8, 2, 2]} intensity={0.2} color="#e8eaf5" />

        {/* Room */}
        <ErrorBoundary>
          <Suspense fallback={null}>
            <RoomEnvironment />
          </Suspense>
        </ErrorBoundary>

        {/* Sofa — part of the room, not the hero */}
        <ErrorBoundary>
          <Suspense fallback={null}>
            <SofaModel scrollRef={STATIC_SCROLL} mouseRef={mouseRef} />
          </Suspense>
        </ErrorBoundary>

        <ContactShadows
          position={[0, -0.498, 0]}
          opacity={0.55}
          scale={14}
          blur={4}
          far={2.5}
          color="#2a1a0a"
        />

        <Preload all />
        <InteriorCamera mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
