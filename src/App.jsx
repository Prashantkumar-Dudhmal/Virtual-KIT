import { PlayerControls } from "./components/PlayerControls";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { BioTech } from "./components/BioTech";
import { KitCSE } from "./components/KitCSE";

export default function App() {
  return (
    <Canvas>
      <Sky />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} />
      <PlayerControls />
      <BioTech position={[20, -1, 20]} />
      <KitCSE position={[0, -10, 0]} />
    </Canvas>
  );
}
