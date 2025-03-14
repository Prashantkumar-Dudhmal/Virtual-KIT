import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <group position-y={-1}>
          <Avatar/>
        </group>
        <ambientLight intensity={1} />
      </mesh>
    </>
  );
};
