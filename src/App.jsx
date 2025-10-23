import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"; 
import Home from "./Pages/Home";
import Download from "./Pages/Downlaod";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import TermsofUse from "./Pages/TermsofUse";
import NotFound from "./Pages/NotFound";
import ScrollTopComp from "./Components/ScrollTopComp"; 


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="download">
                <Download />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="features">
                <Features />
              </section>
              <section id="faq">
                <FAQ />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />
        <Route path="/termsofuse" element={<TermsofUse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollTopComp />
    </BrowserRouter>
  );
}
