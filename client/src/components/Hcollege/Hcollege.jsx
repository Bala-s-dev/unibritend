import React from 'react';
import "./Hcollege.css"; 
import { Link } from 'react-router-dom'; // Assuming this CSS file contains necessary styles for the layout

class HCollege extends React.Component {
  render() {
    return (
      <div>
        <h2 className="head">Join Topmost UK Universities</h2>
        <div className="container">
          {/* University 1 */}
          <div className="card">
            <div className="img-box">
              <img src="https://cdn.prod.website-files.com/5f13b6a8234e41e4d5c4cb7e/6511a66308ea17f65b12202b_5.png" alt="Anglia Ruskin University" />
            </div>
            <div className="content">
              <h2>Anglia Ruskin University</h2>
              <p>
                Anglia Ruskin University offers a variety of undergraduate and postgraduate programs
                in a dynamic learning environment. Located in Cambridge, it provides students with
                excellent research opportunities and career prospects.
              </p>
              <a href="#"  className='button'>Visit Site</a>
            </div>
          </div>
          
          {/* University 2 */}
          <div className="card">
            <div className="img-box">
              <img src="https://media.istockphoto.com/id/172469072/photo/christ-churchs-tom-tower-and-college-oxford-university-united-kingdom.jpg?s=612x612&w=0&k=20&c=xr6V1ci4P_hBJa5_KGJ1XiqF-THXY71M-f9AdUEemA0=" alt="University of Oxford" />
            </div>
            <div className="content">
              <h2>University of Oxford</h2>
              <p>
                Oxford is one of the oldest and most prestigious universities in the world, known for
                its rigorous academics and diverse student body. The university offers world-class
                education in a wide range of disciplines.
              </p>
              <a href="#"  className='button' >Visit Site</a>
            </div>
          </div>

          {/* University 3 */}
          <div className="card">
            <div className="img-box">
              <img src="https://images.shiksha.com/mediadata/images/articles/1708583568phpp4Gpxz.jpeg" alt="University of Cambridge" />
            </div>
            <div className="content">
              <h2>University of Cambridge</h2>
              <p>
                The University of Cambridge is renowned for its rich history and prestigious reputation.
                It provides a comprehensive selection of programs, from arts and humanities to science and
                technology.
              </p>
              <a href="#" className='button'>Visit Site</a>
            </div>
          </div>
          <span><Link to="/CollegeList" className='button' > {`View More >`} </Link></span>

        </div>
      </div>
    );
  }
}

export default HCollege;
