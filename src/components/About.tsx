import { useEffect, useRef } from 'react'; // Ensure React is removed
import gsap from "gsap";
// ScrollTrigger should be registered globally by splitText.ts.
// If not, or for explicit dependency management, import it:
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); // and register it if not done globally
import "./styles/About.css";

const About = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const photoPlaceholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ScrollTrigger is assumed to be globally registered by splitText.ts.
    // If issues were to arise, one might re-register or explicitly import ScrollTrigger here.
    // gsap.registerPlugin(ScrollTrigger); // Example if needed

    const photoElement = photoPlaceholderRef.current;
    const sectionElement = aboutSectionRef.current;

    let tween: gsap.core.Tween | undefined;

    if (photoElement && sectionElement) {
      tween = gsap.to(photoElement, {
        yPercent: -15, // Move up by 15% of its own height
        ease: "none",
        scrollTrigger: {
          trigger: sectionElement,
          start: "top bottom", // When the top of about-section hits the bottom of the viewport
          end: "bottom top",   // When the bottom of about-section hits the top of the viewport
          scrub: true,         // Smooth scrubbing effect
          invalidateOnRefresh: true, // Recalculate on resize
        },
      });
    }
    // The .para and .title elements within About.tsx are handled by the global setSplitText()

    return () => {
      // Cleanup GSAP animations and ScrollTriggers
      if (tween) {
        tween.kill();
        // If ScrollTrigger was created by this tween directly, killing the tween often handles it.
        // However, explicitly killing ScrollTrigger instances is safer if they might persist.
        // As 'scrub: true' creates a ScrollTrigger instance tied to the tween,
        // killing the tween should be sufficient. For more complex setups:
        // ScrollTrigger.getAll().forEach(st => st.trigger === sectionElement && st.kill());
      }
    };
  }, []); // Empty dependency array, runs once on mount

  return (
    <div className="about-section" id="about" ref={aboutSectionRef}>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-content">
          <div className="about-text">
            <p className="para">
              I am a passionate software engineer with a strong interest in backend development,
              artificial intelligence, and creating efficient developer tooling. I enjoy building robust
              and scalable systems and exploring the latest advancements in AI. I am always looking
              for opportunities to learn and contribute to innovative projects.
            </p>
          </div>
          <div className="about-photo-placeholder" ref={photoPlaceholderRef}>
            {/* Placeholder for photo. This element will have parallax. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
