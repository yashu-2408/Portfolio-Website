import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Removed: import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// Removed: import { SplitText } from "gsap-trial/SplitText";

// Removed ParaElement interface as it's no longer used after SplitText removal
// interface ParaElement extends HTMLElement {
//   anim?: gsap.core.Animation;
//   split?: any;
// }

// Removed ScrollSmoother and SplitText from registration
gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  // The following animations for .para and .title depended on SplitText.
  // They are removed as per subtask requirements.
  // Users wanting these effects would need to implement them with free alternatives
  // or purchase a GSAP license for SplitText.

  // if (window.innerWidth < 900) return; // This condition might still be relevant for other effects

  // const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  // const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");
  // const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  // const ToggleAction = "play pause resume reverse";

  // paras.forEach((para: ParaElement) => {
  //   para.classList.add("visible");
  //   if (para.anim) {
  //     para.anim.progress(1).kill();
  //     para.split?.revert();
  //   }
  //   // para.split = new SplitText(para, { ... }); // Removed
  //   // para.anim = gsap.fromTo(para.split.words, { ... }); // Removed
  // });

  // titles.forEach((title: ParaElement) => {
  //   if (title.anim) {
  //     title.anim.progress(1).kill();
  //     title.split?.revert();
  //   }
  //   // title.split = new SplitText(title, { ... }); // Removed
  //   // title.anim = gsap.fromTo(title.split.chars, { ... }); // Removed
  // });

  // Hero tagline animation using SplitText also removed.
  // const heroTaglines: NodeListOf<ParaElement> = document.querySelectorAll(".hero-tagline");
  // heroTaglines.forEach((tagline: ParaElement) => {
  //   if (tagline.anim) {
  //     tagline.anim.progress(1).kill();
  //     tagline.split?.revert();
  //   }
  //   // tagline.split = new SplitText(tagline, { ... }); // Removed
  //   // gsap.set(tagline.split.chars, { autoAlpha: 0 }); // Removed
  //   // tagline.anim = gsap.to(tagline.split.chars, { ... }); // Removed
  // });

  // The refresh listener might still be useful if other ScrollTrigger-based animations
  // are added to this file in the future, or if setSplitText is expected to be re-run
  // for other reasons. For now, with SplitText removed, its primary purpose here is diminished.
  // ScrollTrigger.addEventListener("refresh", () => setSplitText());
  // For now, let's comment it out if setSplitText becomes empty or nearly empty.
  // If setSplitText() ends up doing nothing, this listener and the function itself might be removable.

  // If setSplitText() becomes empty, consider removing its call from MainContainer.tsx
}
