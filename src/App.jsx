  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
  import React, { useState, useEffect } from "react";

import Home from "./Pages/Home";
import Download from "./Pages/Downlaod";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import TermsofUse from "./Pages/TermsofUse";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import NotFound from "./Pages/NotFound";

import Header from "./Components/Header";
import ScrollTopComp from "./Components/ScrollTopComp"; 
import Footer from "./Components/Footer";
import LoadingSpinnerComponent from "./Components/LoadingSpinnerComponent";

export default function App() {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingSpinnerComponent />
      ) : (
        <MainApp />
      )}
    </BrowserRouter>
  );
}


const MainApp = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <LoadingSpinnerComponent />;

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="download"><Download /></section>
              <section id="about"><About /></section>
              <section id="features"><Features /></section>
              <section id="faq"><FAQ /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofuse" element={<TermsofUse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollTopComp />
      <Footer />
    </>
  );
};
