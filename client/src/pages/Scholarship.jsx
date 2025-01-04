// React Component: ScholarshipFundingPage
import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaMoneyBillWave, FaInfoCircle, FaExternalLinkAlt,  FaBusinessTime , FaBook } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { PiStudent } from "react-icons/pi"; 
import "../styles/Scholarship.css";

const ScholarshipFundingPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [overlayIndex, setOverlayIndex] = useState(null);
  const [fundingOpportunities, setFundingOpportunities] = useState([]);


const scholarships = [
  {
    name: "Chevening Scholarships",
    description: "The UK Government's prestigious global scholarship program for outstanding individuals with leadership potential. This scholarship covers full tuition and living expenses.",
    brief: (
      <ul>
        <li>UK government-funded scholarship program.</li>
        <li>Full tuition and living cost coverage.</li>
        <li>For leaders with high academic achievements.</li>
        <li>Opens up opportunities for global impact.</li>
        <li>International applicants eligible from multiple countries.</li>
      </ul>
    ),
    link: "https://www.chevening.org/",
    img: 'https://static.youthop.com/uploads/2023/09/british-chevening-scholarship-for-international-student.jpg'
  },
  {
    name: "Commonwealth Masters Scholarships",
    description: "These scholarships are designed to support students from low and middle-income Commonwealth countries to pursue a full-time Master's study in the UK.",
    brief: (
      <ul>
        <li>Support for postgraduate students from Commonwealth countries.</li>
        <li>Focus on students from low and middle-income backgrounds.</li>
        <li>Full-time Master's study funding in the UK.</li>
        <li>Helps to improve skills and leadership potential.</li>
        <li>Allows candidates to study at prestigious UK universities.</li>
      </ul>
    ),
    link: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/",
    img:'https://www.latestlaws.com/media/2019/09/1569057552.jpg'
  },
  {
    name: "GREAT Scholarships",
    description: "Funded by the UK Government, these scholarships offer opportunities for international students to study at leading UK institutions, supporting diverse global talent.",
    brief: (
      <ul>
        <li>Funded by the UK Government.</li>
        <li>Supports international students from multiple countries.</li>
        <li>Opportunities to study at top UK institutions.</li>
        <li>Promotes global collaboration in higher education.</li>
        <li>Comprehensive support for postgraduate study programs.</li>
      </ul>
    ),
    link: "https://study-uk.britishcouncil.org/scholarships/great-scholarships",
    img:'https://scholarshiplearn.com/wp-content/uploads/2023/11/GREAT-Scholarship-India.jpg'
  },
  {
    name: "Fulbright Scholarships",
    description: "A highly respected program offering grants for international students to participate in exchange programs aimed at fostering mutual understanding between countries.",
    brief: (
      <ul>
        <li>Fosters mutual understanding through international exchange.</li>
        <li>Supports graduate and professional study programs.</li>
        <li>Promotes academic and cultural diplomacy.</li>
        <li>Applicants from diverse fields of study are encouraged.</li>
        <li>Highly competitive and prestigious scholarship opportunity.</li>
      </ul>
    ),
    link: "https://foreign.fulbrightonline.org/",
    img:'https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/04/02/fulbright.png'
  },
  {
    name: "Erasmus Mundus Joint Master Degrees",
    description: "EU-funded scholarships for students to pursue joint master's programs across multiple European universities, offering exceptional academic opportunities and cultural experiences.",
    brief: (
      <ul>
        <li>EU-funded joint master's degree scholarships.</li>
        <li>Collaboration between several European universities.</li>
        <li>Exceptional academic opportunities for students.</li>
        <li>Supports students' mobility across European nations.</li>
        <li>Students gain multicultural and academic experiences.</li>
      </ul>
    ),
    link: "https://www.eacea.ec.europa.eu/erasmus-plus/actions/key-action-1-learning-mobility-individuals/erasmus-mundus-joint-master-degrees_en",
    img:'https://www.ghana.campusfrance.org/sites/pays/files/ghana/styles/mobile_rte_petit/public/medias/images/2019-10/Erasmus%20Mundus_0.jpg?itok=4RBh1Joh'
  },
  {
    name: "DAAD Scholarships",
    description: "German scholarships aimed at providing talented students from developing countries the opportunity to study postgraduate courses in Germany and gain invaluable academic experience.",
    brief: (
      <ul>
        <li>Opportunities for students from developing countries.</li>
        <li>Support for postgraduate studies in Germany.</li>
        <li>Covers tuition fees, living costs, and travel expenses.</li>
        <li>Helps students gain valuable academic experience.</li>
        <li>Part of Germany's commitment to global development.</li>
      </ul>
    ),
    link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    img:'https://media.assettype.com/freepressjournal/2024-08-14/rt8a988l/122983000_962688407552996_1670934462712489561_n.jpg'
  },
  {
    name: "Rhodes Scholarships",
    description: "The prestigious Rhodes Scholarship program supports exceptional students from around the world to pursue postgraduate studies at the University of Oxford.",
    brief: (
      <ul>
        <li>Prestigious postgraduate scholarships at Oxford University.</li>
        <li>Supports students with exceptional academic potential.</li>
        <li>Helps develop future leaders with global impact.</li>
        <li>Internationally recognized scholarship program.</li>
        <li>Encourages cultural exchange and academic excellence.</li>
      </ul>
    ),
    link: "https://www.rhodeshouse.ox.ac.uk/scholarships/",
    img:'https://www.internationalscholarships.dhet.gov.za/images/article/rhodes_scholarship.jpg'
  },
  {
    name: "Gates Cambridge Scholarships",
    description: "Highly competitive postgraduate scholarships at the University of Cambridge that support students with exceptional academic achievement and leadership potential.",
    brief: (
      <ul>
        <li>Competitive scholarships for postgraduate study at Cambridge.</li>
        <li>For students with exceptional academic and leadership potential.</li>
        <li>Supports individuals from diverse backgrounds.</li>
        <li>Promotes intellectual rigor and global collaboration.</li>
        <li>Recipients benefit from extensive academic resources.</li>
      </ul>
    ),
    link: "https://www.gatescambridge.org/",
    img:'https://www.gatescambridge.org/wp-content/uploads/2020/04/gates-cambridge.jpg'
  },
];


  useEffect(() => {
    const fetchFundingOpportunities = async () => {
      const fetchedOpportunities = [
        { title: "Student Loans", icon:<FaMoneyBillWave />,details: "Loans available to cover tuition fees and living costs." },
        { title: "Research Grants", icon: <GiArchiveResearch /> ,details: "Grants available for postgraduate research students." },
        { title: "Part-Time Work Opportunities",icon:< FaBusinessTime /> , details: "Students can work up to 20 hours per week during term." },
        { title: "University Scholarships",icon: <PiStudent /> , details: "Many universities offer their own scholarships." },
        { title: "Crowdfunding Options", icon: <FaBook />,details: "Leverage online platforms to raise funds for education." },
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
      <section className="scholarships">
        <h2>
          <FaGraduationCap /> Available Scholarships
        </h2>
        <div className="grid-container">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="material-card">
              <div className="material-card__img-holder " >
                <img src={scholarship.img} alt={scholarship.name} />
              </div>
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
          Funding Opportunities
        </h2>
        <div className="grid-container">
          {fundingOpportunities.map((opportunity, index) => (
            <div key={index} className="grid-item">
              <div className="icon"> {opportunity.icon} </div>
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
        <img src="https://example.com/application-tips-image.jpg" alt="Application Tips" className="section-image" />
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

      
    </div>
  );
};

export default ScholarshipFundingPage;
