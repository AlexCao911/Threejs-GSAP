 // Showcase section                                                                     │
 // ~~~~~~~~~~~~~~~                                                                      │
 // A video background with a masked logo that scales on scroll.                         │
// Features promotional text for the new "Rocket Chip".                                 │
 // Includes performance stats and uses GSAP for scroll-triggered animations.            │
 // Alex Cou 25/10/15 
 
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {

    const isTablet = useMediaQuery({ query: '(max-width: 1024px'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }  
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content" >
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2 >Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing{" "}
                                <span className="text-white">
                                M4, the next generation of Apple silicon
                                </span>
                                .M4 Powers
                            </p>
                            <p>
                                Our most powerful chip yet, M4 delivers a quantum leap in performance. With a more powerful CPU and our most advanced GPU, everyday tasks are faster than ever, while pro apps and demanding games run with breathtaking fluidity. All with industry-leading efficiency for amazing battery life.
                            </p>
                            <p>
                                The new 16-core Neural Engine supercharges machine learning, making this the ultimate device for AI. And with a revolutionary new graphics architecture, M4 brings hardware-accelerated ray tracing to the Mac for the first time, rendering incredibly realistic and immersive visuals for pro applications and the next generation of games.
                            </p>
                            <p className="text-primary">
                                Learn more about Apple Intelligence
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
export default Showcase 