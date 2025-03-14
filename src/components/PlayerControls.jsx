import { useFrame } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export function PlayerControls() {
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const controlsRef = useRef();

  useFrame(({ camera }, delta) => {
    if (!controlsRef.current) return;

    const speed = 5;
    direction.current.set(0, 0, 0);

    if (keys["w"]) {
      direction.current.z -= 1;
    }
    if (keys["s"]) {
      direction.current.z += 1;
    }
    if (keys["a"]) {
      direction.current.x -= 1;
    }
    if (keys["d"]) {
      direction.current.x += 1;
    }
    if (keys["q"]) {
      direction.current.y += 1;
    }
    if (keys["e"]) {
      direction.current.y -= 1;
    }

    direction.current.normalize();

    // Move in the direction the camera is facing
    const movement = new THREE.Vector3();
    camera.getWorldDirection(movement);
    //console.log(movement);
    if (camera.position.y < 3) camera.position.y = 3; // Lock movement to ground plane
    movement.normalize().multiplyScalar(speed * delta);

    if (keys["w"]) camera.position.add(movement);
    if (keys["s"]) camera.position.sub(movement);
    if (keys["a"])
      camera.position.sub(
        movement
          .clone()
          .cross(new THREE.Vector3(0, 1, 0))
          .multiplyScalar(speed * delta)
      );
    if (keys["d"])
      camera.position.add(
        movement
          .clone()
          .cross(new THREE.Vector3(0, 1, 0))
          .multiplyScalar(speed * delta)
      );

    if (keys["q"]) camera.position.y += speed * delta;
    if (keys["e"]) camera.position.y -= speed * delta;
  });

  return <PointerLockControls ref={controlsRef} />;
}
const keys = {};
window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));
