/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Kakashi(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/kakashi.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions[props.kakashiAction].reset().fadeIn(0.5).play()
    // return () => actions[props.kakashiAction].fadeOut(0.5)
  }, [actions, props.kakashiAction]);
  console.log('Kakashi Actions:', actions)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_1.geometry}
          material={materials.Model001_Material001}
          skeleton={nodes.Hatake_Kakashi_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_2.geometry}
          material={materials.Model001_Material002}
          skeleton={nodes.Hatake_Kakashi_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_3.geometry}
          material={nodes.Hatake_Kakashi_3.material}
          skeleton={nodes.Hatake_Kakashi_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_4.geometry}
          material={nodes.Hatake_Kakashi_4.material}
          skeleton={nodes.Hatake_Kakashi_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_5.geometry}
          material={nodes.Hatake_Kakashi_5.material}
          skeleton={nodes.Hatake_Kakashi_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_6.geometry}
          material={nodes.Hatake_Kakashi_6.material}
          skeleton={nodes.Hatake_Kakashi_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_7.geometry}
          material={nodes.Hatake_Kakashi_7.material}
          skeleton={nodes.Hatake_Kakashi_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_8.geometry}
          material={materials.Model001_Material008}
          skeleton={nodes.Hatake_Kakashi_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_9.geometry}
          material={materials.Model001_Material009}
          skeleton={nodes.Hatake_Kakashi_9.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_10.geometry}
          material={nodes.Hatake_Kakashi_10.material}
          skeleton={nodes.Hatake_Kakashi_10.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_11.geometry}
          material={nodes.Hatake_Kakashi_11.material}
          skeleton={nodes.Hatake_Kakashi_11.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_12.geometry}
          material={nodes.Hatake_Kakashi_12.material}
          skeleton={nodes.Hatake_Kakashi_12.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hatake_Kakashi_13.geometry}
          material={nodes.Hatake_Kakashi_13.material}
          skeleton={nodes.Hatake_Kakashi_13.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/kakashi.glb')
