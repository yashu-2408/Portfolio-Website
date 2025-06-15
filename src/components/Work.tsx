import { useEffect, useRef } from 'react'; // Removed React import
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollTrigger is globally registered in splitText.ts
// gsap.registerPlugin(ScrollTrigger); // Not needed here if globally registered

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
  const workSectionRef = useRef<HTMLDivElement>(null);
  const workFlexRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLHeadingElement>(null);

  // Horizontal scroll animation
  useEffect(() => {
    const workSectionElement = workSectionRef.current;
    const workFlexElement = workFlexRef.current;

    if (!workSectionElement || !workFlexElement) {
      // If refs are not yet available, do nothing.
      // This might happen on initial render before refs are assigned.
      return;
    }

    let translateX: number = 0;
    let timeline: gsap.core.Timeline | undefined;

    // Pass guarded elements as parameters to ensure TypeScript recognizes their non-null status
    function setTranslateX(currentWorkFlexElement: HTMLDivElement, currentWorkSectionElement: HTMLDivElement) {
      const boxElements = document.getElementsByClassName("work-box") as HTMLCollectionOf<HTMLElement>;
      if (boxElements.length === 0) {
        translateX = 0;
        return;
      }

      const workContainer = currentWorkSectionElement.querySelector(".work-container");
      if (!workContainer || !currentWorkFlexElement.parentElement) {
        translateX = 0;
        return;
      }

      const parentWidth = currentWorkFlexElement.parentElement.getBoundingClientRect().width;
      let totalWidthOfBoxes = 0;
      for(let i=0; i < boxElements.length; i++) {
        totalWidthOfBoxes += boxElements[i].getBoundingClientRect().width;
      }

      translateX = totalWidthOfBoxes - parentWidth + parseFloat(window.getComputedStyle(currentWorkFlexElement).paddingLeft);

      if (translateX < 0) translateX = 0;
    }

    const handleResize = () => {
      if (timeline) timeline.kill();
      ScrollTrigger.getById("work")?.kill();
      // Ensure elements are still non-null before creating timeline again
      if (workFlexElement && workSectionElement) {
        createTimeline(workFlexElement, workSectionElement);
      }
    };

    function createTimeline(currentWorkFlexElement: HTMLDivElement, currentWorkSectionElement: HTMLDivElement) {
      setTranslateX(currentWorkFlexElement, currentWorkSectionElement);
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: currentWorkSectionElement,
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(currentWorkFlexElement, {
        x: -translateX,
        ease: "none",
      });
    }

    // Initial creation, using the guarded workFlexElement and workSectionElement
    createTimeline(workFlexElement, workSectionElement);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeline) {
        const st = timeline.scrollTrigger; // Get ScrollTrigger from timeline
        if (st) st.kill(); // Kill ScrollTrigger
        timeline.kill(); // Kill timeline
      }
      // Fallback for safety, though above should handle it.
      ScrollTrigger.getById("work")?.kill();
    };
  }, [projects]);

  // Parallax for the section title
  useEffect(() => {
    const workSectionElement = workSectionRef.current;
    const workTitleElement = workTitleRef.current;
    let titleTween: gsap.core.Tween | undefined;

    // Guard refs for title parallax animation
    if (workTitleElement && workSectionElement) {
      titleTween = gsap.to(workTitleElement, { // workTitleElement is HTMLHeadingElement, safe
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: workSectionElement, // workSectionElement is HTMLDivElement, safe
          start: "top center+=10%",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }
    return () => {
      if (titleTween) {
        titleTween.kill();
        const st = titleTween.scrollTrigger;
        if (st) {
            st.kill();
        } else if (workSectionElement) { // Add null check for workSectionElement
            ScrollTrigger.getAll().forEach(instance => {
                if (instance.trigger === workSectionElement && instance.animation === titleTween) {
                    instance.kill();
                }
            });
        }
      }
    };
  }, []);

  return (
    <div className="work-section" id="work" ref={workSectionRef}>
      <div className="work-container section-container">
        <h2 ref={workTitleRef}>
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={workFlexRef}>
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
