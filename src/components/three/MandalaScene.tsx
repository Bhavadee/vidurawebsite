import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

const GOLD = "#d4a53a";

type RingSpec = { r: number; n: number; w: number; h: number; dir: number; tilt: number };
const RINGS: RingSpec[] = [
  { r: 0.9, n: 8, w: 0.18, h: 0.5, dir: 1, tilt: 0 },
  { r: 1.65, n: 14, w: 0.16, h: 0.55, dir: -1, tilt: 0.12 },
  { r: 2.45, n: 22, w: 0.15, h: 0.6, dir: 1, tilt: 0.06 },
  { r: 3.3, n: 30, w: 0.14, h: 0.64, dir: -1, tilt: 0.18 },
  { r: 4.2, n: 40, w: 0.12, h: 0.66, dir: 1, tilt: 0.1 },
];

function PetalRing({ spec, progress, idx }: { spec: RingSpec; progress: MotionValue<number>; idx: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const geometry = useMemo(() => {
    const g = new THREE.SphereGeometry(0.5, 20, 20);
    g.scale(spec.w, spec.h, 0.06);
    return g;
  }, [spec.w, spec.h]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const p = progress.get();
    const base = p * Math.PI * 1.2 * spec.dir + t * 0.05 * spec.dir;
    const breathe = 1 + Math.sin(t * 0.8 + idx) * 0.03 + p * 0.25;
    for (let i = 0; i < spec.n; i++) {
      const ang = (i / spec.n) * Math.PI * 2 + base;
      const r = spec.r * breathe;
      dummy.position.set(Math.cos(ang) * r, Math.sin(ang) * r, Math.sin(ang * 3 + t) * spec.tilt);
      dummy.rotation.set(0, 0, ang - Math.PI / 2);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[geometry, undefined, spec.n]}>
      <meshStandardMaterial color={GOLD} metalness={1} roughness={0.28} emissive={GOLD} emissiveIntensity={0.18} />
    </instancedMesh>
  );
}

function Core({ progress }: { progress: MotionValue<number> }) {
  const g = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!g.current) return;
    const t = state.clock.elapsedTime;
    g.current.rotation.z = -t * 0.1 - progress.get() * 2;
    g.current.rotation.x = Math.sin(t * 0.3) * 0.25;
  });
  return (
    <group ref={g}>
      <mesh>
        <torusKnotGeometry args={[0.32, 0.09, 160, 20, 2, 5]} />
        <meshStandardMaterial color="#f1d27e" metalness={1} roughness={0.2} emissive={GOLD} emissiveIntensity={0.5} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.62, 0.01, 8, 80]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={1.2} />
      </mesh>
    </group>
  );
}

function Scene({ progress }: { progress: MotionValue<number> }) {
  const g = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (!g.current) return;
    const p = progress.get();
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, -0.5 + p * 0.5 + state.pointer.y * 0.08, 3, dt);
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, state.pointer.x * 0.15, 3, dt);
  });
  return (
    <group ref={g} scale={0.6}>
      <Core progress={progress} />
      {RINGS.map((spec, i) => (
        <PetalRing key={spec.r} spec={spec} progress={progress} idx={i} />
      ))}
    </group>
  );
}

export function MandalaScene({ progress, active = true }: { progress: MotionValue<number>; active?: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
      eventSource={document.body}
      eventPrefix="client"
    >
      <ambientLight intensity={0.3} color="#ffe6b8" />
      <directionalLight position={[3, 5, 6]} intensity={2} color="#ffd98a" />
      <pointLight position={[0, 0, 3]} intensity={5} color="#d4a53a" distance={10} />
      <Scene progress={progress} />
      <Environment resolution={64} frames={1}>
        <Lightformer intensity={3} color="#ffe9b0" position={[0, 5, -6]} scale={[10, 6, 1]} />
        <Lightformer intensity={2} color="#f1d27e" position={[-5, 0, 3]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} form="ring" />
        <Lightformer intensity={1.2} color="#ff9a7a" position={[5, -2, 3]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
      </Environment>
    </Canvas>
  );
}
