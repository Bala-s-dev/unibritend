import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ScholarshipFundingPage from "./pages/Scholarship";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar/Navbar"
// import Footer from "./components/Footer/Footer";
import CollegeList from "./pages/Universities/CollegeList";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Scholarship" element={<ScholarshipFundingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collegeList" element={<CollegeList />} />
        <Route path="/collegeList/:country" element={<CollegeList />} />
      </Routes>
    </Router>
  );
}

export default App;
