import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import "./App.css";
import BackgroundAnimated from "./background";

export default function App() {
  return (
    <>
    <Canvas>
      <Environment preset="city"/>
      <directionalLight intensity={1} position={[0, 3, 2]}/>
      <directionalLight intensity={0.7} position={[-5, 3, 0]}/>
      <directionalLight intensity={1} position={[5, 3, 0]}/>
      <directionalLight intensity={0.4} position={[0, -3, 2]}/>
      <directionalLight intensity={0.2} position={[0, 3, 2]}/>
      <Model/>
    </Canvas>
    </>
  )
}