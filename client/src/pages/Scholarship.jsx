// React Component: ScholarshipFundingPage
import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaMoneyBillWave, FaInfoCircle, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Scholarship.css";

const ScholarshipFundingPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [overlayIndex, setOverlayIndex] = useState(null);
  const [fundingOpportunities, setFundingOpportunities] = useState([]);

  const scholarships = [
    {
      name: "Chevening Scholarships",
      description: "UK government-funded global scholarship program.",
      brief: "Chevening Scholarships are the UK Government's global scholarship programme, funded by the Foreign and Commonwealth Office and partner organisations.",
      link: "https://www.chevening.org/",
    },
    {
      name: "Commonwealth Masters Scholarships",
      description: "For students from low and middle-income Commonwealth countries.",
      brief: "These scholarships are for candidates from low and middle-income Commonwealth countries, for full-time Master’s study in the UK.",
      link: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/",
    },
    {
      name: "GREAT Scholarships",
      description: "Funded by the UK Government for international students.",
      brief: "GREAT Scholarships offer funding opportunities to students from a variety of countries to study in the UK.",
      link: "https://study-uk.britishcouncil.org/scholarships/great-scholarships",
    },
    {
      name: "Fulbright Scholarships",
      description: "Scholarships for international exchange programs in the USA.",
      brief: "The Fulbright Program offers grants to individuals for international educational exchange programs, fostering mutual understanding.",
      link: "https://foreign.fulbrightonline.org/",
    },
    {
      name: "Erasmus Mundus Joint Master Degrees",
      description: "EU-funded scholarships for joint master's programs.",
      brief: "Erasmus Mundus provides scholarships to the best candidates for joint master's degree programs conducted by consortia of European universities.",
      link: "https://www.eacea.ec.europa.eu/erasmus-plus/actions/key-action-1-learning-mobility-individuals/erasmus-mundus-joint-master-degrees_en",
    },
    {
      name: "DAAD Scholarships",
      description: "Scholarships for studying in Germany.",
      brief: "DAAD scholarships provide opportunities for students from developing countries to pursue postgraduate courses in Germany.",
      link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    },
    {
      name: "Rhodes Scholarships",
      description: "Scholarships for postgraduate studies at the University of Oxford.",
      brief: "Rhodes Scholarships are prestigious awards supporting outstanding students to study at the University of Oxford.",
      link: "https://www.rhodeshouse.ox.ac.uk/scholarships/",
    },
    {
      name: "Gates Cambridge Scholarships",
      description: "Scholarships for postgraduate students at the University of Cambridge.",
      brief: "The Gates Cambridge Scholarship program supports postgraduate students with exceptional academic and leadership potential.",
      link: "https://www.gatescambridge.org/",
    },
    {
      name: "Australia Awards Scholarships",
      description: "Scholarships for students from developing countries to study in Australia.",
      brief: "Australia Awards Scholarships are long-term development awards administered by the Australian Government.",
      link: "https://www.dfat.gov.au/people-to-people/australia-awards/Pages/australia-awards-scholarships",
    },
    {
      name: "Vanier Canada Graduate Scholarships",
      description: "Scholarships for doctoral studies in Canada.",
      brief: "The Vanier CGS program supports world-class doctoral students by providing financial support during their studies in Canada.",
      link: "https://vanier.gc.ca/en/home-accueil.html",
    },
  ];

  useEffect(() => {
    const fetchFundingOpportunities = async () => {
      const fetchedOpportunities = [
        { title: "Student Loans", details: "Loans available to cover tuition fees and living costs." },
        { title: "Research Grants", details: "Grants available for postgraduate research students." },
        { title: "Part-Time Work Opportunities", details: "Students can work up to 20 hours per week during term." },
        { title: "University Scholarships", details: "Many universities offer their own scholarships." },
        { title: "Crowdfunding Options", details: "Leverage online platforms to raise funds for education." },
      ];
      setFundingOpportunities(fetchedOpportunities);
    };

    fetchFundingOpportunities();
  }, []);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const openOverlay = (index) => {
    setOverlayIndex(index);
  };

  const closeOverlay = () => {
    setOverlayIndex(null);
  };

  return (
    <div className="scholarship-funding-page">

      <section className="intro">
        <p>
          Explore various scholarship and funding opportunities to help you pursue your academic goals. Our resources cater to students from diverse backgrounds, making education accessible and affordable.
        </p>
        <div className="intro-links">
          <a href="https://example.com/scholarship-guides" target="_blank" rel="noopener noreferrer" className="intro-link">
            Detailed Scholarship Guides <FaExternalLinkAlt />
          </a>
          <a href="https://example.com/funding-resources" target="_blank" rel="noopener noreferrer" className="intro-link">
            Funding Resources <FaExternalLinkAlt />
          </a>
        </div>
      </section>

      <section className="scholarships">
        <h2>
          <FaGraduationCap /> Available Scholarships
        </h2>
        <div className="grid-container">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="material-card">
              <div className="material-card__img-holder"></div>
              <div className="material-card__body">
                <div className="material-card__title">
                  <h3>{scholarship.name}</h3>
                  <span className="overlay-open" onClick={() => openOverlay(index)}>
                    ?
                  </span>
                </div>
                <p>{scholarship.description}</p>
                <a
                  href={scholarship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scholarship-link"
                >
                  Learn More <FaExternalLinkAlt />
                </a>
              </div>
              <div
                className={`material-card__overlay ${overlayIndex === index ? "visible" : ""}`}
              >
                <div className="overlay__closer">
                  <h3>{scholarship.name}</h3>
                  <p onClick={closeOverlay}>&times;</p>
                </div>
                <div className="overlay__body">
                  <p>{scholarship.brief}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="funding-opportunities">
        <h2>
          <FaMoneyBillWave /> Funding Opportunities
        </h2>
        <div className="grid-container">
          {fundingOpportunities.map((opportunity, index) => (
            <div key={index} className="grid-item">
              <FaMoneyBillWave className="icon" />
              <strong>{opportunity.title}</strong>
              <p>{opportunity.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="application-tips">
        <h2>
          <FaInfoCircle /> Application Tips
        </h2>
        <p>Here are some tips on how to effectively apply for scholarships:</p>
        <ol>
          <li>Start your application early.</li>
          <li>Carefully read the eligibility criteria.</li>
          <li>Gather all necessary documents in advance.</li>
          <li>Write a compelling personal statement.</li>
          <li>Seek references from reliable sources.</li>
          <li>Follow up on your application status.</li>
        </ol>
      </section>

      <footer className="footer">
        <p>© 2025 Scholarships & Funding. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://example.com/contact" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
          <a href="https://example.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ScholarshipFundingPage;
