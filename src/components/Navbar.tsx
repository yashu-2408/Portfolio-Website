import { useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Removed as ScrollTrigger not used here now
import HoverLinks from "./HoverLinks";
// import { gsap } from "gsap"; // Removed as gsap not used here now
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother"; // Already removed
import "./styles/Navbar.css";

// Registrations and exports related to ScrollSmoother are removed.

const Navbar = () => {
  useEffect(() => {
    // All ScrollSmoother related code is removed.
    // smoother = ScrollSmoother.create({
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    //   smooth: 1.7,
    //   speed: 1.7,
    //   effects: true,
    //   autoResize: true,
    //   ignoreMobileResize: true,
    // });

    // smoother.scrollTop(0);
    // smoother.paused(true);

    // Native smooth scroll for anchor links will be handled by CSS `scroll-behavior: smooth;`
    // The click prevention and manual scroll for desktop is no longer needed without ScrollSmoother.
    // Links will now behave as standard anchor links.
    // let links = document.querySelectorAll(".header ul a");
    // links.forEach((elem) => {
    //   let element = elem as HTMLAnchorElement;
    //   element.addEventListener("click", (e) => {
    //     if (window.innerWidth > 1024) {
    //       // e.preventDefault(); // No longer needed
    //       // let elem = e.currentTarget as HTMLAnchorElement;
    //       // let section = elem.getAttribute("data-href");
    //       // smoother.scrollTo(section, true, "top top"); // Removed
    //     }
    //   });
    // });

    // The global ScrollTrigger.refresh() might still be useful if other ST instances exist
    // However, ScrollSmoother.refresh(true) is specific and removed.
    // window.addEventListener("resize", () => {
    //   ScrollTrigger.refresh(); // General refresh for other ScrollTriggers if any
    // });
    // For now, removing this resize listener as its primary purpose (ScrollSmoother.refresh) is gone.
    // Other components handle their own ScrollTrigger invalidation/refresh.
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:example@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          example@mail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
