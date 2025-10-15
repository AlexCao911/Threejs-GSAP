
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { MacbookModel_16 } from "../models/Macbook-16";
import { MacbookModel_14 } from "../models/Macbook-14";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { Group, Mesh } from "three";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group: Group | null, opacity: number) => {
    if (!group) return;

    group.traverse((child) => {
        if (child instanceof Mesh) {
            if (Array.isArray(child.material)) {
                child.material.forEach(material => {
                    material.transparent = true;
                    gsap.to(material, { opacity, duration: ANIMATION_DURATION });
                });
            } else {
                child.material.transparent = true;
                gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
            }
        }
    })
}

const moveGroup = (group: Group | null, x: number) => {
    if (!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

interface ModelSwitcherProps {
    scale: number;
    isMobile: boolean;
}

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {

    const smallMacbookRef = useRef<Group>(null);
    const largeMacbookRef = useRef<Group>(null);
    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE)
            moveGroup(largeMacbookRef.current, 0)
            fadeMeshes(smallMacbookRef.current, 0)
            fadeMeshes(largeMacbookRef.current, 1)
        } else {
            moveGroup(smallMacbookRef.current, 0)
            moveGroup(largeMacbookRef.current, -OFFSET_DISTANCE)
            fadeMeshes(smallMacbookRef.current, 1)
            fadeMeshes(largeMacbookRef.current, 0)
        }
    }, [scale])

    const controlConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI, Math.PI] as [number, number],
        azimuth: [-Infinity, Infinity] as [number, number],
        config: { mass: 1, tension: 0, friction: 26 }
    }

    return (
        <>
            <PresentationControls {...controlConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel_16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel_14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
