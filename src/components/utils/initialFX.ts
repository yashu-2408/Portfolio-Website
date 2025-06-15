// import { SplitText } from "gsap-trial/SplitText"; // Removed SplitText
import gsap from "gsap";
// import { smoother } from "../Navbar"; // Removed smoother import

export function initialFX() {
  document.body.style.overflowY = "auto"; // This is fine, ensures body is scrollable
  // smoother.paused(false); // Removed as smoother is removed

  // Ensure main tag exists before trying to access it
  const mainElement = document.getElementsByTagName("main")[0];
  if (mainElement) {
    mainElement.classList.add("main-active");
  }

  gsap.to("body", {
    // This changes the body background after a delay.
    // If the :root --backgroundColor is already #0b080c, this might be redundant or for a specific effect.
    // For now, keeping it as it's not directly related to trial plugins.
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // All SplitText related animations are removed below.
  // The CSS typewriter animation for .hero-tagline (which is .landing-info h3) will handle that specific element.
  // Other text elements like .landing-intro h1/h2 and .landing-h2-info will now appear statically
  // or rely on any existing basic CSS opacity/transform transitions if present.

  // var landingText = new SplitText( ... ); // Removed
  // gsap.fromTo( landingText.chars, ... ); // Removed

  // let TextProps = { type: "chars,lines", linesClass: "split-h2" }; // Removed

  // var landingText2 = new SplitText(".landing-h2-info", TextProps); // Removed
  // gsap.fromTo( landingText2.chars, ... ); // Removed

  // This animation is not dependent on SplitText, so it can remain.
  // This animates the "Designer / Developer" swap text container
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8, // This delay might need adjustment now that other text intros are gone
    }
  );

  // This animation for header, social icons, and nav-fade can also remain.
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // var landingText3 = new SplitText(...); // Removed
  // var landingText4 = new SplitText(...); // Removed
  // var landingText5 = new SplitText(...); // Removed

  // LoopText function and its calls are removed as they depend on SplitText.
  // LoopText(landingText2, landingText3);
  // LoopText(landingText4, landingText5);
}

// function LoopText(Text1: SplitText, Text2: SplitText) { ... } // Removed
