import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WOOD = "#6b3417";
const WOOD_DARK = "#2a1208";
const GOLD = "#d4a53a";
const IVORY = "#efe3c8";

function Peg({ x, y }: { x: number; y: number }) {
  const dir = Math.sign(x);
  return (
    <group position={[x, y, 0.36]}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.07, 0.5, 16]} />
        <meshStandardMaterial color={WOOD_DARK} roughness={0.45} metalness={0.1} />
      </mesh>
      <mesh position={[dir * 0.3, 0, 0]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color={WOOD_DARK} roughness={0.35} metalness={0.15} />
      </mesh>
    </group>
  );
}

function GoldRing({ y, r = 0.34, tube = 0.025 }: { y: number; r?: number; tube?: number }) {
  return (
    <mesh position={[0, y, 0.36]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[r, tube, 12, 48]} />
      <meshStandardMaterial color={GOLD} metalness={1} roughness={0.22} emissive={GOLD} emissiveIntensity={0.25} />
    </mesh>
  );
}

export function Tanpura() {
  const group = useRef<THREE.Group>(null);
  const strings = useRef<THREE.Group>(null);
  const stringX = useMemo(() => [-0.15, -0.05, 0.05, 0.15], []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.25) * 0.18;
    }
    if (strings.current) {
      strings.current.children.forEach((c, i) => {
        // subtle "vibrating" strings
        c.position.x = stringX[i] + Math.sin(t * (14 + i * 3)) * 0.004;
      });
    }
  });

  return (
    <group ref={group} rotation={[0.05, 0, -0.42]} scale={0.56}>
      {/* gourd */}
      <mesh position={[0, -2.3, 0]} scale={[1.15, 1.25, 0.6]}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial color={WOOD} roughness={0.32} metalness={0.12} />
      </mesh>
      {/* gourd rosette + gold trim */}
      <mesh position={[0, -2.45, 0.69]}>
        <torusGeometry args={[0.28, 0.02, 10, 48]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.25} emissive={GOLD} emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, -2.45, 0.69]}>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial color={WOOD_DARK} roughness={0.5} />
      </mesh>
      <mesh position={[0, -2.3, 0]} scale={[1.15, 1.25, 0.6]}>
        <torusGeometry args={[1.102, 0.012, 8, 96]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} emissive={GOLD} emissiveIntensity={0.2} />
      </mesh>

      {/* neck */}
      <mesh position={[0, 1.2, 0.36]}>
        <boxGeometry args={[0.56, 5.4, 0.5]} />
        <meshStandardMaterial color={WOOD} roughness={0.35} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.2, 0.615]}>
        <boxGeometry args={[0.42, 5.3, 0.02]} />
        <meshStandardMaterial color={WOOD_DARK} roughness={0.5} />
      </mesh>
      <GoldRing y={-1.5} />
      <GoldRing y={3.7} />

      {/* pegbox */}
      <mesh position={[0, 4.3, 0.36]}>
        <boxGeometry args={[0.7, 1.0, 0.56]} />
        <meshStandardMaterial color={WOOD} roughness={0.35} metalness={0.1} />
      </mesh>
      <mesh position={[0, 4.86, 0.36]}>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.2} emissive={GOLD} emissiveIntensity={0.35} />
      </mesh>
      <Peg x={-0.6} y={4.05} />
      <Peg x={0.6} y={4.05} />
      <Peg x={-0.6} y={4.5} />
      <Peg x={0.6} y={4.5} />

      {/* bridge + tail */}
      <mesh position={[0, -1.85, 0.72]}>
        <boxGeometry args={[0.46, 0.1, 0.18]} />
        <meshStandardMaterial color={IVORY} roughness={0.4} />
      </mesh>
      <mesh position={[0, -3.25, 0.5]}>
        <boxGeometry args={[0.3, 0.14, 0.12]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.25} />
      </mesh>

      {/* strings */}
      <group ref={strings}>
        {stringX.map((x) => (
          <mesh key={x} position={[x, 0.55, 0.65]}>
            <cylinderGeometry args={[0.009, 0.009, 7.4, 6]} />
            <meshStandardMaterial
              color="#fff1c4"
              emissive="#f1d27e"
              emissiveIntensity={0.8}
              metalness={1}
              roughness={0.15}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
