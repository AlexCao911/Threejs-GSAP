// Features section                                                                     
// ~~~~~~~~~~~~~~~~                                                                      
// Interactive 3D MacBook showcase with rotating model and feature highlights.                         
// Synchronizes video textures with scroll-triggered animations using GSAP.                                 
// Features dynamic content boxes that appear as the model rotates through features.            
// Alex Cou 25/10/16

import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import { features, featureSequence } from "../constants/index";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { MacbookModel } from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { Group } from 'three';
import feature1Video from '/videos/feature-1.mp4';
import feature2Video from '/videos/feature-2.mp4';
import feature3Video from '/videos/feature-3.mp4';
import feature4Video from '/videos/feature-4.mp4';
import feature5Video from '/videos/feature-5.mp4';

const ModelScroll = () => {
    const groupRef = useRef<Group>(null);
    const videoElementsRef = useRef<HTMLVideoElement[]>([]);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const { setTexture } = useMacbookStore();

    // Pre-load all feature videos during component mount
    useEffect(() => {
        // Clear any existing video elements
        videoElementsRef.current = [];

        featureSequence.forEach((feature) => {
            const v = document.createElement('video');

            Object.assign(v, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            });

            v.load();

            // Store reference to prevent garbage collection
            videoElementsRef.current.push(v);
        });

        // Cleanup function to clear video references on unmount
        return () => {
            videoElementsRef.current.forEach(video => {
                video.src = '';
                video.load();
            });
            videoElementsRef.current = [];
        };
    }, []);

    useGSAP(() => {
        // 3D MODEL ROTATION ANIMATION
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
            }
        });

        // SYNC THE FEATURE CONTENT
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom  top',
                scrub: 1,
            }
        })

        // 3D SPIN
        if (groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut' })
        }

        // Content & Texture Sync
        timeline
            .call(() => setTexture(feature1Video))
            .to('.box1', { opacity: 1, y: 0, delay: 1 })

            .call(() => setTexture(feature2Video))
            .to('.box2', { opacity: 1, y: 0 })

            .call(() => setTexture(feature3Video))
            .to('.box3', { opacity: 1, y: 0 })

            .call(() => setTexture(feature4Video))
            .to('.box4', { opacity: 1, y: 0 })

            .call(() => setTexture(feature5Video))
            .to('.box5', { opacity: 1, y: 0 })
    }, [setTexture]);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas" camera={{}}>
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features