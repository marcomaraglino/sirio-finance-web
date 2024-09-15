import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import "./App.css";
import { Suspense } from "react";

export default function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Canvas>
      <Environment preset="city"/>
      <Model/>
    </Canvas>
    </Suspense>
    </>
  )
}