import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { performanceImages, performanceImgPositions } from "../constants";
import { useMediaQuery } from "react-responsive";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

            // Enhanced Text Animation with stagger
            gsap.fromTo(
                ".content p",
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // Enhanced heading animation
            gsap.fromTo(
                sectionEl.querySelector("h2"),
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionEl.querySelector("h2"),
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );

            if (isMobile) return;

            // Image Positioning Timeline - responsive 
            const tl = gsap.timeline({
                defaults: {
                    duration: 2,
                    ease: "power1.inOut",
                    overwrite: "auto"
                },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Position Each Performance Image with responsive positioning
            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars: gsap.TweenVars = {};

                // 选择合适的响应式配置
                let config = item; // 默认配置
                if (isMobile && item.mobile) {
                    config = { ...item, ...item.mobile };
                } else if (isTablet && item.tablet) {
                    config = { ...item, ...item.tablet };
                } else if (item.desktop) {
                    config = { ...item, ...item.desktop };
                }

                // 应用定位和变换
                if (typeof config.left === "number") {
                    vars.left = `${config.left}%`;
                }
                if (typeof config.right === "number") {
                    vars.right = `${config.right}%`;
                }
                if (typeof config.bottom === "number") {
                    vars.bottom = `${config.bottom}%`;
                }
                if (typeof config.top === "number") {
                    vars.top = `${config.top}%`;
                }
                if (config.transform) {
                    vars.transform = config.transform;
                }

                tl.to(selector, vars, 0);
            });


        },
        { scope: sectionRef, dependencies: [isMobile, isTablet] }
    );

    return (
        <section id="performance" ref={sectionRef} className="py-8 md:py-16">
            <h2 className="text-center mb-10 md:mb-15 text-white">Next-level graphics performance.
                Game on.</h2>

            {/* responsive container */}
            <div className="images-viewport w-full overflow-hidden mb-8 md:mb-16">
                <div className="wrapper relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]"
                    style={{
                        transform: `scale(${isMobile ? '0.9' : isTablet ? '0.95' : '1'})`,
                        transformOrigin: 'center center'
                    }}>
                    {performanceImages.map((item, index) => (
                        <img
                            key={index}
                            src={item.src}
                            className={`${item.id} ${isMobile ? 'relative block mx-auto mb-4 w-full max-w-sm' : 'absolute'}`}
                            alt={item.alt || `Performance Image #${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="content px-4 md:px-8 max-w-6xl mx-auto pb-8 md:pb-16">
                <p className="text-base md:text-lg leading-relaxed ">
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white font-semibold" style={{ color: '#ffffff' }}>
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}
export default Performance
