import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./AdminLogin.css";

const AdminPortal = () => {
  const [collegeName, setCollegeName] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isViewingApplications, setIsViewingApplications] = useState(false); // Toggle between views

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const fetchApplications = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "applications"));
      const apps = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApplications(apps);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    if (user && isViewingApplications) fetchApplications();
  }, [user, isViewingApplications]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out.");
    }
  };

  const handleAddCollege = async (e) => {
    e.preventDefault();

    if (!collegeName || !location || !website || !country) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      const docRef = doc(db, "college", country);
      const docSnap = await getDoc(docRef);

      const newCollege = {
        name: collegeName.trim(),
        location: location.trim(),
        website: website.trim(),
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          colleges: arrayUnion(newCollege),
        });
      } else {
        await setDoc(docRef, {
          colleges: [newCollege],
        });
      }

      alert("College added successfully!");
      setCollegeName("");
      setLocation("");
      setWebsite("");
      setCountry("");
    } catch (error) {
      console.error("Error adding college:", error);
      alert("Failed to add college. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      <div className="admin-navigation">
        <button
          onClick={() => setIsViewingApplications(false)}
          className={!isViewingApplications ? "active-tab" : ""}
        >
          Add College
        </button>
        <span>
        <button
          onClick={() => setIsViewingApplications(true)}
          className={isViewingApplications ? "active-tab" : ""}
        >
          View Applications
        </button>
        </span>
      </div>

      {!isViewingApplications ? (
        <div className="add-college">
          <h2>Add College Information</h2>
          <form onSubmit={handleAddCollege} className="admin-form">
            <input
              type="text"
              placeholder="Country (Document ID)"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="College Name"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              type="url"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Adding..." : "Add College"}
            </button>
          </form>
        </div>
      ) : (
        <div className="view-applications">
          <h2>Client Applications</h2>
          <div className="applications-list">
            {applications.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>City</th>
                    <th>Location</th>
                    <th>Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td>{app.name}</td>
                      <td>{app.email}</td>
                      <td>{app.course}</td>
                      <td>{app.city}</td>
                      <td>{app.location}</td>
                      <td>{app.mobileNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No applications found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPortal;
