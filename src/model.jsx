import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Model() {
    const { nodes } = useGLTF("/black_hole.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    useFrame( (state, delta) => {
        torus.current.rotation.z += delta * 0.5
    })

    const materialProps = {
        thickness: 3.0,
        roughness: 0.4,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 1.0,
        backside: true,
    }
    const isSmartphone = viewport.width < 5 // Adjust this threshold as needed

    // Calculate scale based on device type
    const scale_hole = isSmartphone ? 0.09 : 0.04;
    
    return (
        <group scale={viewport.width / 3.75} >
            <Text font="./Sora-VariableFont_wght.ttf" position={[0, 0, -2]} fontSize={0.7} color="white" anchorX="center" anchorY="middle">
                sirio finance
            </Text>
            <group position= {[0,0,0]} scale={scale_hole}>
            <mesh ref={torus} {...nodes.Object_4}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
            </group>
        </group>
    )
}