
 // Highlights section                                                                     
 // ~~~~~~~~~~~~~~~~~~                                                                      
 // Masonry-style layout showcasing MacBook Pro key features and benefits.                         
 // Features staggered animations triggered by scroll with responsive design.                                 
 // Displays performance improvements, display quality, AI capabilities, and battery life.            
 // Alex Cou 25/10/16

import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import laptopPng from '/laptop.png'
import sunPng from '/sun.png'
import aiPng from '/ai.png'
import batteryPng from '/battery.png'

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id='highlights'>
            <h2> There's never been a better time to upgrade. </h2>
            <h3> Here's what you get with the new MacBook Pro.</h3>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src={laptopPng} alt="Laptop" />
                        <p> Fly through demanding tasks up to 9.8x faster.</p>
                    </div>
                    <div>
                        <img src={sunPng} alt="Sun" />
                        <p> A stunning <br />
                            Liquid Retina XDR <br />
                            display.
                        </p>
                    </div>
                </div>
            

            <div className="right-column">
                    <div className="apple-gradient">
                        <img src={aiPng} alt="AI" />
                        <p> Built for <br/>
                            <span> Apple Intelligence. </span> <br/>
                        </p>
                    </div>

                    <div>
                        <img src={batteryPng} alt="Battery" />
                        <p> Up to <br />
                            <span className="green-gradient">{' '} 14 more hours{' '}</span><br />
                            battery life.
                            <span className="text-dark-100">( Up to 24 hours total. )</span>
                        </p>
                    </div>
                </div>

            </ div>
        </section>
    )
}
export default Highlights