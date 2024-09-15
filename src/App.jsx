import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import "./App.css";
import BackgroundAnimated from "./background";
import { Suspense } from "react";

export default function App() {
  return (
    <>
    <div className="-z-10 opacity-45 absolute blur-3xl"><BackgroundAnimated/></div>
    <Suspense fallback={<div>Loading...</div>}>
    <Canvas>
      <Environment preset="city"/>
      <Model/>
    </Canvas>
    </Suspense>
    </>
  )
}