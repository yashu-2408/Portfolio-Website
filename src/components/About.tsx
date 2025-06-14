import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// ScrollTrigger is already registered globally by splitText.ts, but importing for clarity if needed
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/About.css";

const About = () => {
  useGSAP(() => {
    // Ensure a class or unique selector for the photo placeholder if there are multiple
    // For now, assuming '.about-photo-placeholder' is specific enough or the only one.
    const photoPlaceholder = document.querySelector(".about-photo-placeholder");
    const aboutSection = document.querySelector(".about-section");

    if (photoPlaceholder && aboutSection) {
      gsap.to(photoPlaceholder, {
        yPercent: -15, // Move up by 15% of its own height
        ease: "none",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top bottom", // When the top of about-section hits the bottom of the viewport
          end: "bottom top",   // When the bottom of about-section hits the top of the viewport
          scrub: true,         // Smooth scrubbing effect
          invalidateOnRefresh: true, // Recalculate on resize
        },
      });
    }
    // The .para and .title elements within About.tsx are handled by the global setSplitText()
  }, []); // Empty dependency array, runs once on mount

  return (
    <div className="about-section" id="about">
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
          <div className="about-photo-placeholder">
            {/* Placeholder for photo. This element will have parallax. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
