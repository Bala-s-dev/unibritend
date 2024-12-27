import React from 'react';
import "../styles/CollegeList.css";

const colleges = [
  { name: "Anglia Ruskin University", location: "Cambridge, England", website: "https://aru.ac.uk" },
  { name: "Bangor University", location: "Bangor, Wales", website: "https://www.bangor.ac.uk" },
  { name: "Birkbeck University of London", location: "London, England", website: "https://www.bbk.ac.uk" },
  { name: "Birmingham City University", location: "Birmingham, England", website: "https://www.bcu.ac.uk" },
  { name: "Bournemouth University", location: "Bournemouth, England", website: "https://www.bournemouth.ac.uk" },
  { name: "Brunel University", location: "London, England", website: "https://www.brunel.ac.uk" },
  { name: "Cardiff University", location: "Cardiff, Wales", website: "https://www.cardiff.ac.uk" },
  { name: "City University London", location: "London, England", website: "https://www.city.ac.uk" },
  { name: "Coventry University", location: "Coventry, England", website: "https://www.coventry.ac.uk" },
  { name: "De Montfort University", location: "Leicester, England", website: "https://www.dmu.ac.uk" },
  { name: "Durham University", location: "Durham, England", website: "https://www.durham.ac.uk" },
  { name: "Edinburgh Napier University", location: "Edinburgh, Scotland", website: "https://www.napier.ac.uk" },
  { name: "Glasgow Caledonian University", location: "Glasgow, Scotland", website: "https://www.gcu.ac.uk" },
  { name: "Goldsmiths University of London", location: "London, England", website: "https://www.gold.ac.uk" },
  { name: "Heriot-Watt University", location: "Edinburgh, Scotland", website: "https://www.hw.ac.uk" },
  { name: "Kingston University", location: "Kingston upon Thames, England", website: "https://www.kingston.ac.uk" },
  { name: "Leeds Beckett University", location: "Leeds, England", website: "https://www.leedsbeckett.ac.uk" },
  { name: "University of Lincoln", location: "Lincoln, England", website: "https://www.lincoln.ac.uk" },
  { name: "London Metropolitan University", location: "London, England", website: "https://www.londonmet.ac.uk" },
  { name: "London South Bank University", location: "London, England", website: "https://www.lsbu.ac.uk" },
  { name: "Loughborough University", location: "Loughborough, England", website: "https://www.lboro.ac.uk" },
  { name: "Middlesex University", location: "London, England", website: "https://www.mdx.ac.uk" },
  { name: "Newcastle University", location: "Newcastle upon Tyne, England", website: "https://www.ncl.ac.uk" },
  { name: "Northumbria University", location: "Newcastle upon Tyne, England", website: "https://www.northumbria.ac.uk" },
  { name: "Nottingham Trent University", location: "Nottingham, England", website: "https://www.ntu.ac.uk" },
  { name: "Oxford Brookes University", location: "Oxford, England", website: "https://www.brookes.ac.uk" },
  { name: "Queen Mary University of London", location: "London, England", website: "https://www.qmul.ac.uk" },
  { name: "Queen's University Belfast", location: "Belfast, Northern Ireland", website: "https://www.qub.ac.uk" },
  { name: "Robert Gordon University", location: "Aberdeen, Scotland", website: "https://www.rgu.ac.uk" },
  { name: "Royal Holloway University of London", location: "Egham, England", website: "https://www.royalholloway.ac.uk" },
  { name: "SOAS University of London", location: "London, England", website: "https://www.soas.ac.uk" },
  { name: "Sheffield Hallam University", location: "Sheffield, England", website: "https://www.shu.ac.uk" },
  { name: "Solent University", location: "Southampton, England", website: "https://www.solent.ac.uk" },
  { name: "Swansea University", location: "Swansea, Wales", website: "https://www.swansea.ac.uk" },
  { name: "Teesside University", location: "Middlesbrough, England", website: "https://www.tees.ac.uk" },
  { name: "The University of Edinburgh", location: "Edinburgh, Scotland", website: "https://www.ed.ac.uk" },
  { name: "The University of Nottingham", location: "Nottingham, England", website: "https://www.nottingham.ac.uk" },
  { name: "The University of Sheffield", location: "Sheffield, England", website: "https://www.sheffield.ac.uk" },
  { name: "University for the Creative Arts (UCA)", location: "Farnham, England", website: "https://www.uca.ac.uk" },
  { name: "University of Bedfordshire", location: "Luton, England", website: "https://www.beds.ac.uk" },
  { name: "University of Bolton", location: "Bolton, England", website: "https://www.bolton.ac.uk" },
  { name: "University of Brighton", location: "Brighton, England", website: "https://www.brighton.ac.uk" },
  { name: "University of Central Lancashire", location: "Preston, England", website: "https://www.uclan.ac.uk" },
  { name: "University of Dundee", location: "Dundee, Scotland", website: "https://www.dundee.ac.uk" },
  { name: "University of East Anglia", location: "Norwich, England", website: "https://www.uea.ac.uk" },
  { name: "University of East London", location: "London, England", website: "https://www.uel.ac.uk" },
  { name: "University of Essex", location: "Colchester, England", website: "https://www.essex.ac.uk" },
  { name: "University of Exeter", location: "Exeter, England", website: "https://www.exeter.ac.uk" },
  { name: "University of Glasgow", location: "Glasgow, Scotland", website: "https://www.gla.ac.uk" },
  { name: "University of Greenwich", location: "London, England", website: "https://www.gre.ac.uk" },
  { name: "University of Hertfordshire", location: "Hatfield, England", website: "https://www.herts.ac.uk" },
  { name: "University of Huddersfield", location: "Huddersfield, England", website: "https://www.hud.ac.uk" },
  { name: "University of Kent", location: "Canterbury, England", website: "https://www.kent.ac.uk" },
  { name: "University of Leicester", location: "Leicester, England", website: "https://le.ac.uk" },
  { name: "University of Liverpool", location: "Liverpool, England", website: "https://www.liverpool.ac.uk" },
  { name: "University of Northampton", location: "Northampton, England", website: "https://www.northampton.ac.uk" },
  { name: "University of Plymouth", location: "Plymouth, England", website: "https://www.plymouth.ac.uk" },
  { name: "University of Portsmouth", location: "Portsmouth, England", website: "https://www.port.ac.uk" },
  { name: "University of Reading", location: "Reading, England", website: "https://www.reading.ac.uk" },
  { name: "University of Roehampton", location: "London, England", website: "https://www.roehampton.ac.uk" },
  { name: "University of Salford", location: "Salford, England", website: "https://www.salford.ac.uk" },
  { name: "University of Southampton", location: "Southampton, England", website: "https://www.southampton.ac.uk" },
  { name: "University of Stirling", location: "Stirling, Scotland", website: "https://www.stir.ac.uk" },
  { name: "University of Strathclyde", location: "Glasgow, Scotland", website: "https://www.strath.ac.uk" },
  { name: "University of Surrey", location: "Guildford, England", website: "https://www.surrey.ac.uk" },
  { name: "University of Sussex", location: "Brighton, England", website: "https://www.sussex.ac.uk" },
  { name: "Ulster University", location: "Northern Ireland", website: "https://www.ulster.ac.uk" },
  { name: "University of the West of England", location: "Bristol, England", website: "https://www.uwe.ac.uk" },
  { name: "University of Warwick", location: "Coventry, England", website: "https://warwick.ac.uk" },
  { name: "University of Westminster", location: "London, England", website: "https://www.westminster.ac.uk" },
  { name: "University of Wolverhampton", location: "Wolverhampton, England", website: "https://www.wlv.ac.uk" },
  { name: "University of York", location: "York, England", website: "https://www.york.ac.uk" }
];

const CollegeList = () => {
  return (
    
      <main className="main">
        <section className="card-area">
          {colleges.map((college, index) => (
            <section className="card-section" key={index}>
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div className="card-front__tp">
                        <img 
                          src="https://cdn.prod.website-files.com/5f13b6a8234e41e4d5c4cb7e/6511a66308ea17f65b12202b_5.png" // Replace with actual image URLs if available
                          alt={college.name}
                          className="card-front__icon"
                        />
                      
                        <p className="cname">{college.name}</p>
                      </div>
                      <div className="card-front__bt">
                        <p className="card-front-head">View Details</p>
                      </div>
                    </div>
                    <div className="card-back">
                      <iframe
                        className="video__container"
                        autoPlay
                        muted
                        loop
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/t5akgsQsOSk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="inside-page">
                  <div className="inside-page__container">
                    <h3 className="college-name">Explore {college.name}</h3>
                    <p>{college.location}</p>
                    <p className="college-desc">
                      Discover opportunities and vibrant campus life at {college.name}.
                    </p>
                    
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inside-page__btn"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </section>
      </main>
   
  );
};

export default CollegeList;
