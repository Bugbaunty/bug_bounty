import * as THREE from "three";

declare module "@react-three/fiber" {
  interface AmbientLightProps extends Partial<THREE.AmbientLight> {}
  interface DirectionalLightProps extends Partial<THREE.DirectionalLight> {}
}
