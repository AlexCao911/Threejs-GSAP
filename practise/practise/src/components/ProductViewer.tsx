// The Product viewer
// The interactive canva
// ~~~~~~~~~~~~~~~
// An interacitve canva (with fiber & drei), OrbitControl enable the interaction
// Two button that can modify the color and size
// Alex Cou 25/10/14

import useMacbookStore from "../store";
import clsx from 'clsx';
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from '@react-three/drei'; 
// import { MacbookModel_14 } from './models/Macbook-14';
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/modelSwitcher";
import { useMediaQuery } from "react-responsive";


const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>

            <div className="controls">
                <p className="info">MacbookPro {scale} in {color} </p>

                <div className="flex-center gap-5 mt-5">  {/* leave enough space for the render canva */}
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx("bg-neutral-300", color === '#adb5db' && 'active')}
                        />

                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className="size-control">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>


            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>

                <StudioLights></StudioLights>

                {/*<MacbookModel_14 scale={0.06} position={[0, 0, 0]} /> {/*the key 3D model*/}

                {/* <OrbitControls enableZoom={false} /> */}

                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>


        </section>
    )
}
export default ProductViewer 