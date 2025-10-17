// Hero section 
// ~~~~~~~~~~~~~~~
// Macbook Pro slowly openning up animation 
// A title, a decorated slogen with stylish characters,
// an animation and a "Buy" botton
// Alex Cou 25/10/14

import {useEffect, useRef} from "react";
import titlePng from '/title.png'
import heroVideo from '/videos/hero.mp4'

const Hero = () => {
    
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
    // TODO: 
    // More video effect here

    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src={titlePng} alt="Macbook Title" />
            </div>

            <video ref={videoRef} src={heroVideo} autoPlay muted playsInline />

            <button>Buy</button>
            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    )
}

export default Hero