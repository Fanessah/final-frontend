// eslint-disable-next-line
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardReviews from "./components/CardReviews";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>x
        <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/allreviews" element={<Feed/>}/>
        <Route path="/addreview" element={<CardReviews/>}/>


      </Routes>
        <Feed />
      </Router>

        <Footer />
    </div>
  );
}

export default App;
