// eslint-disable-next-line
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddReview from "./pages/AddReview";
import Feed from "./components/Feed";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allreviews" element={<Feed />} />
          <Route path="/addreview" element={<AddReview />} />
        </Routes>
      
    
      </Router>

      <Footer />
    </div>
  );
}

export default App;
