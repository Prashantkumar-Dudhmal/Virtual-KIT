{
  /*import { Experience } from "./components/Experience";
  import { Sky, OrbitControls } from "@react-three/drei";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GridHelper, AxesHelper } from "three";

import { FPSControls } from "react-three-fpscontrols";

function SceneHelpers() {
  const gridRef = useRef();
  const axesRef = useRef();

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.position.y = 0;
    }
    if (axesRef.current) {
      axesRef.current.position.y = 0;
    }
  });

  return (
    <>
      <gridHelper ref={gridRef} args={[10, 10]} />
      <axesHelper ref={axesRef} args={[5]} />
    </>
  );
}
function App() {
  return (
    <Canvas dpr={[1, 2]}>
      <FPSControls
        camProps={{ makeDefault: enable, fov: 80, position: [0, 2.5, 0.7] }}
        enableJoystick
        enableKeyboard
      />
      <Sky />
      <SceneHelpers />
      <ambientLight intensity={Math.PI / 2} />
      <Experience />
      <OrbitControls />
    </Canvas>
  );
}
export default App;*/
}

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
