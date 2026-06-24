"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ElectronicsModelProps {
  scrollRef: React.MutableRefObject<number>;
}

export default function ElectronicsModel({ scrollRef }: ElectronicsModelProps) {
  const tvRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // Metal body material
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: "#252320", 
    roughness: 0.25,
    metalness: 0.85,
  });

  // Canvas texture for screen
  const textureRef = useRef<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 576;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Luxury warm ambient gradient
      const grad = ctx.createRadialGradient(512, 288, 20, 512, 288, 580);
      grad.addColorStop(0, "#fffefb"); // bright luxury center
      grad.addColorStop(0.3, "#f4e0c4"); // warm champagne gold
      grad.addColorStop(0.7, "#a3704c"); // bronze accent
      grad.addColorStop(1, "#1e130c"); // walnut brown shadow vignette
      
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 576);

      // Subtle Apple-like product text overlay
      ctx.fillStyle = "rgba(255, 254, 251, 0.75)";
      ctx.font = "300 28px 'Plus Jakarta Sans', system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.letterSpacing = "6px";
      ctx.fillText("SIGNATURE SERIES", 512, 260);

      ctx.fillStyle = "rgba(212, 175, 55, 0.95)";
      ctx.font = "500 18px 'Plus Jakarta Sans', system-ui, sans-serif";
      ctx.letterSpacing = "8px";
      ctx.fillText("DESIGNED FOR MODERN LIVING", 512, 310);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    textureRef.current = texture;
  }, []);

  useFrame((state) => {
    const scroll = scrollRef.current;
    if (!tvRef.current) return;

    // TV reveal from 0.5 to 0.75
    const start = 0.5;
    const end = 0.75;
    const p = Math.max(0, Math.min(1, (scroll - start) / (end - start)));

    // TV descends from y = 8 to y = 1.4, mounted to back wall
    const targetY = THREE.MathUtils.lerp(8, 1.4, p);
    tvRef.current.position.y = THREE.MathUtils.lerp(tvRef.current.position.y, targetY, 0.08);

    // Dynamic light emission from screen based on scroll + time glow pulsing
    if (lightRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.5 + 1.5;
      const targetIntensity = THREE.MathUtils.lerp(0.001, 8.0 * pulse, p);
      lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, targetIntensity, 0.08);
    }
  });

  return (
    <group ref={tvRef} position={[0, 8, -2.25]}>
      {/* TV Back Bezel and Frame */}
      <mesh material={metalMaterial} castShadow>
        <boxGeometry args={[3.2, 1.8, 0.06]} />
      </mesh>
      
      {/* Screen Surface (Emissive/Self-lit texture) */}
      <mesh ref={screenRef} position={[0, 0, 0.035]}>
        <planeGeometry args={[3.12, 1.72]} />
        {textureRef.current ? (
          <meshBasicMaterial map={textureRef.current} toneMapped={false} />
        ) : (
          <meshBasicMaterial color="#0c0b0a" />
        )}
      </mesh>

      {/* Screen Light Projection (illuminating the sofa and floor) */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 0.5]}
        distance={6}
        intensity={0}
        color="#f3e6d5"
      />
    </group>
  );
}
