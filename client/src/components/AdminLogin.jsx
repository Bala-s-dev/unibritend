import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase"; // Make sure to import auth from your firebase config file
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import './AdminLogin.css'

const AdminPortal = () => {
  const [collegeName, setCollegeName] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null); // Track authenticated user
  const [email, setEmail] = useState(""); // Admin email for login
  const [password, setPassword] = useState(""); // Admin password for login
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and portal

  useEffect(() => {
    // Check if the admin is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to log in. Please check your credentials.");
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

  const handleSubmit = async (e) => {
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
      <h2>Add College Information</h2>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
      <form onSubmit={handleSubmit} className="admin-form">
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
  );
};

export default AdminPortal;
