/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/dance.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions);
    actions.dance.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorig9Hips} />
        <skinnedMesh geometry={nodes.Mesh.geometry} material={materials.Ch06_body} skeleton={nodes.Mesh.skeleton} />
        <skinnedMesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.Ch06_eyelashes}
          skeleton={nodes.Mesh_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_2.geometry}
          material={materials.Ch06_body1}
          skeleton={nodes.Mesh_2.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/dance.glb')
