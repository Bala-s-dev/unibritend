import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaSearch } from "react-icons/fa";
import "./CollegeList.css";

const CollegeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { country } = useParams();

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setLoading(true);
        setError(null);

        const docRef = doc(db, "college", country || "");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched Colleges Array:", data.colleges); // Log the data
          setColleges(data.colleges || []); // Corrected key name
        } else {
          console.error("Document does not exist!");
          setColleges([]);
        }
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError("Failed to fetch college data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (country) fetchColleges();
    else setColleges([]);
  }, [country]);

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="college-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search colleges..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search for a college"
        />
        <FaSearch className="search-icon" />
      </div>

      {loading ? (
        <p>Loading colleges...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <main className="main">
          <section className="card-area">
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college, index) => (
                <section className="card-section" key={index}>
                  <div className="card">
                    <div className="flip-card">
                      <div className="flip-card__container">
                        <div className="card-front">
                          <div className="card-front__tp">
                            <img
                              src="https://cdn.prod.website-files.com/5f13b6a8234e41e4d5c4cb7e/6511a66308ea17f65b12202b_5.png"
                              alt={college.name}
                              className="card-front__icon"
                            />
                            <p className="cname">{college.name}</p>
                          </div>
                          <div className="card-front__bt">
                            <p className="card-btn">View Details</p>
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
                        <p className="location">{college.location}</p>
                        <p className="college-desc">
                          Discover opportunities and vibrant campus life at {college.name}.
                        </p>
                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-btn"
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              ))
            ) : (
              <p className="no-results">No colleges match your search criteria.</p>
            )}
          </section>
        </main>
      )}
    </div>
  );
};

export default CollegeList;
