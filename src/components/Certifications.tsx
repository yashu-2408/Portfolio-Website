import React from 'react';
import './styles/Certifications.css';

const certificationsList: string[] = [
  "AI with Flask",
  "React JS",
  "JavaScript",
  "UX/UI Design",
  "Node.js",
  "DevOps CI/CD",
  // Add a few more to make the carousel effect more obvious if needed
  "Cloud Computing Foundations",
  "Agile Project Management"
];

const Certifications: React.FC = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">My Certifications</h2>
      <div className="certifications-carousel-container">
        <div className="certifications-carousel">
          {certificationsList.map((cert, index) => (
            <div className="certification-item" key={index}>
              <div className="certification-card">
                {/* Optional: Add an icon or image placeholder here */}
                {/* <img src="/images/logos/certification-icon.png" alt="" className="certification-icon" /> */}
                <h3 className="certification-name">{cert}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Basic navigation hint, actual buttons would require JS state */}
      <p className="carousel-navigation-hint">Scroll horizontally to see more &rarr;</p>
    </section>
  );
};

export default Certifications;
