import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Servicesec from "./components/Servicesec"
import ThankYou from "./components/ThankYou";
import Contactsec from "./components/Contactsec";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<Home section="about_section" />} />
              <Route path="/services" element={<Servicesec />} />
              <Route path="/contact" element={<Contactsec />} />
              <Route path="/services/:serviceName" element={<Home section="services_section" />} />
              <Route path="/thank-you" element={<ThankYou />} />
  <Route path="/blog/*" element={<div />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
