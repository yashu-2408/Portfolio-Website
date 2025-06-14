import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: 1,
    title: "AI Travel Planner",
    category: "Web Application",
    description: "A smart travel planner using AI to generate personalized itineraries.",
    techStack: ["React", "Gemini API", "Google Maps API", "Firebase"],
    imageUrl: "/images/ai-travel-planner.jpg",
    videoPreviewUrl: "/videos/ai-travel-planner-preview.mp4", // Example video preview
    demoUrl: "https://momotravelplanner.netlify.app/",
    githubUrl: "https://github.com/yashu-2408/AI-Travel-Planner"
  },
  {
    id: 2,
    title: "Facial Recognition Attendance",
    category: "AI/ML System",
    description: "System for marking attendance accurately using facial recognition technology.",
    techStack: ["Django", "OpenCV", "Python", "Deep Learning"],
    imageUrl: "/images/facial-recognition.jpg", // Ensure this image exists or use a placeholder
    demoUrl: null, // No demo link provided
    githubUrl: "https://github.com/yashu-2408/facial-recognition-attendance" // Placeholder
  },
  {
    id: 3,
    title: "Custom Android ROM",
    category: "Mobile Development",
    description: "Development of a custom Android ROM based on AOSP with Linux Kernel modifications for enhanced performance and features.",
    techStack: ["AOSP", "Linux Kernel", "C/C++", "Java", "Android"],
    imageUrl: "/images/android-rom.jpg", // Ensure this image exists or use a placeholder
    demoUrl: null,
    githubUrl: "https://github.com/yashu-2408/custom-android-rom" // Placeholder
  },
  {
    id: 4,
    title: "Stock Market Prediction App",
    category: "Data Science",
    description: "A web application that predicts stock market trends using machine learning models.",
    techStack: ["Flask", "PyCaret", "Python", "Scikit-learn", "ML"],
    imageUrl: "/images/stock-prediction.jpg", // Ensure this image exists or use a placeholder
    demoUrl: null,
    githubUrl: "https://github.com/yashu-2408/stock-market-prediction" // Placeholder
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const boxElements = document.getElementsByClassName("work-box");
      if (boxElements.length === 0) return;

      const box = boxElements[0];
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box.getBoundingClientRect();
      const parentWidth = box.parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box).paddingLeft) + parseInt(window.getComputedStyle(box).paddingRight); // Considering both left and right padding

      // Calculate total width of all boxes
      let totalWidthOfBoxes = 0;
      for(let i=0; i < boxElements.length; i++) {
        totalWidthOfBoxes += boxElements[i].getBoundingClientRect().width;
      }

      // translateX = totalWidthOfBoxes - parentWidth + rectLeft; // Adjusted calculation
      // Simplified: scroll until the end of the last box is visible
      translateX = totalWidthOfBoxes - parentWidth + (boxElements.length > 0 ? parseFloat(window.getComputedStyle(boxElements[0].parentElement!).paddingLeft) : 0) ;


      if (translateX < 0) translateX = 0; // Ensure translateX is not negative
    }

    // Debounce or delay setTranslateX if window resize impacts it
    const handleResize = () => {
      setTranslateX();
      // Update ScrollTrigger's end value if needed
      ScrollTrigger.getById("work")?.kill(); // Kill existing before re-initializing
      if (timeline) timeline.kill();
      createTimeline();
    };

    let timeline: gsap.core.Timeline;

    function createTimeline() {
      setTranslateX(); // Recalculate translateX
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true, // Recalculates values on resize/refresh
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    }

    createTimeline(); // Initial timeline creation

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeline) timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, {dependencies: [projects]}); // Rerun if projects array changes

  // Parallax for the section title
  useGSAP(() => {
    const workSection = document.querySelector(".work-section");
    // Targeting h2 within .work-container to be specific
    const workTitle = document.querySelector(".work-container > h2");

    if (workTitle && workSection) {
      gsap.to(workTitle, {
        yPercent: -30, // Move title up by 30% of its height
        ease: "none",
        scrollTrigger: {
          trigger: workSection, // Trigger based on the whole work-section
          start: "top center+=10%", // When top of work-section is a bit past center of viewport
          end: "bottom top",    // When bottom of work-section hits top of viewport
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }
  }, []); // Empty dependency array, runs once on mount

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <div className="work-tech-stack">
                  {project.techStack.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
                </div>
                <div className="work-links">
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="work-link">Demo</a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="work-link">GitHub</a>}
                </div>
              </div>
              <WorkImage image={project.imageUrl} alt={project.title} videoPreviewUrl={project.videoPreviewUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
