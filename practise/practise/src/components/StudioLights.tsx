// Studio Light
// The light on the canvas
// ~~~~~~~~~~~~~~~
// environment resolution, spotlight, ambient light, direct light
// Alex Cou 25/10/15
import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer 
                        form="rect"
                        intensity={10}
                        position={[-10,5,-5]}
                        scale={10}
                />
                </group>
            </Environment>

            <group name="spotLight">
                <spotLight 
                    position={[-2,10,5]}
                    angle={0.15}
                    decay={0}
                    intensity={Math.PI * 0.4}
                />
                <spotLight 
                    position={[0,-25,5]}
                    angle={0.15}
                    decay={0}
                    intensity={Math.PI * 0.4}
                />
                <spotLight 
                    position={[0,25,5]}
                    angle={0.15}
                    decay={0}
                    intensity={Math.PI * 0.4}
                />
            </group>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        </group>
    )
}
export default StudioLights