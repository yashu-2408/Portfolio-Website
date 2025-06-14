import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Back End Developer</h4>
                <h5>The Detailing Hustler</h5>
              </div>
              <h3>Aug 2023 - Jan 2024</h3>
            </div>
            <p>
              Led API optimization and integrated Firebase, resulting in a 30% performance boost. (Remote, Canada)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
