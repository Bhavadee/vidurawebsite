import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { Tanpura } from "./Tanpura";

const GOLD = "#d4a53a";

/** Two thin orbit rings and a string of light beads, centred on the instrument. */
function Halo() {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  const beads = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const COUNT = 36;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (a.current) {
      a.current.rotation.x = Math.PI / 2.3 + Math.sin(t * 0.2) * 0.15;
      a.current.rotation.z = t * 0.1;
    }
    if (b.current) {
      b.current.rotation.x = Math.PI / 1.8 + Math.cos(t * 0.17) * 0.15;
      b.current.rotation.z = -t * 0.08;
    }
    if (beads.current) {
      for (let i = 0; i < COUNT; i++) {
        const ang = (i / COUNT) * Math.PI * 2 + t * 0.07;
        dummy.position.set(Math.cos(ang) * 2.6, Math.sin(ang) * 1.0, Math.sin(ang * 2 + t * 0.3) * 0.2);
        dummy.scale.setScalar(0.022 + 0.02 * (0.5 + 0.5 * Math.sin(t * 1.4 + i * 0.7)));
        dummy.updateMatrix();
        beads.current.setMatrixAt(i, dummy.matrix);
      }
      beads.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -0.3, -0.8]}>
      <mesh ref={a}>
        <torusGeometry args={[2.3, 0.01, 6, 120]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.8} />
      </mesh>
      <mesh ref={b}>
        <torusGeometry args={[2.9, 0.007, 6, 120]} />
        <meshBasicMaterial color="#f1d27e" transparent opacity={0.5} />
      </mesh>
      <instancedMesh ref={beads} args={[undefined, undefined, COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#ffe9a8" />
      </instancedMesh>
    </group>
  );
}

function Rig({ children, mobile }: { children: React.ReactNode; mobile: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (!g.current) return;
    const tx = mobile ? 0 : state.pointer.x * 0.22;
    const ty = mobile ? 0 : -state.pointer.y * 0.1;
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, tx, 3, dt);
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, ty, 3, dt);
  });
  return (
    <group ref={g} position={mobile ? [0.9, -2.1, -0.5] : [2.5, -0.1, 0]} scale={mobile ? 0.62 : 1}>
      {children}
    </group>
  );
}

export function HeroScene({ mobile = false, active = true }: { mobile?: boolean; active?: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 8], fov: 38 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance", stencil: false, depth: true }}
      style={{ position: "absolute", inset: 0 }}
      eventSource={document.body}
      eventPrefix="client"
    >
      <color attach="background" args={["#120a0b"]} />
      <fog attach="fog" args={["#120a0b", 9, 16]} />
      <ambientLight intensity={0.35} color="#ffe6b8" />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#ffd98a" />
      <directionalLight position={[-6, 2, -3]} intensity={0.8} color="#ff9a7a" />
      <pointLight position={[2, -3, 4]} intensity={5} color="#d4a53a" distance={12} />

      <Suspense fallback={null}>
        <Rig mobile={mobile}>
          <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.8} floatingRange={[-0.12, 0.12]}>
            <Tanpura />
          </Float>
          <Halo />
        </Rig>
        <Sparkles count={mobile ? 60 : 140} scale={[14, 9, 6]} size={2.2} speed={0.2} opacity={0.6} color="#f1d27e" noise={0.5} />
        <Environment resolution={128} frames={1}>
          <Lightformer intensity={3} color="#ffe9b0" position={[0, 6, -8]} scale={[12, 8, 1]} />
          <Lightformer intensity={2.2} color="#f1d27e" position={[-6, 2, 2]} rotation-y={Math.PI / 2} scale={[12, 3, 1]} form="ring" />
          <Lightformer intensity={1.6} color="#ffb199" position={[6, -2, 2]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
          <Lightformer intensity={0.6} color="#7a1c2a" position={[0, -8, 0]} rotation-x={Math.PI / 2} scale={[20, 20, 1]} />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
