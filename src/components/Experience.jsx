import { useControls } from "leva";
import { usePlane } from "@react-three/cannon";

const Floor = (props) => {
  //const [ref] = usePlane((index) => ({ type: "Static", mass: 0, ...props }));

  return (
    <mesh>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export const Experience = () => {
  return (
    <>
      <Floor />
    </>
  );
};
