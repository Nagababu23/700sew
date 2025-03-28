import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Servicesec from "./components/Servicesec";
import ThankYou from "./components/ThankYou";
import Contactsec from "./components/Contactsec";
import { useParams } from "react-router-dom";

const metaTags = {
  "/": {
    title: "Best Cleaning Services in UAE | 700 Sewage Cleaning Services",
    description:
      "700 Sewage Cleaning Services offers professional sewage, drainage, septic tank, and water tank cleaning in UAE. Contact us for top-quality cleaning solutions.",
    keywords:
      "cleaning services UAE, sewage cleaning UAE, drainage cleaning, septic tank cleaning, water tank cleaning, pipeline cleaning, professional cleaning, 700 Cleaning Services",
    image: "https://700sewagecleaningservices.com/images/Contactcard1.jpg",
    url: "https://700sewagecleaningservices.com",
  },
  "/about-us": {
    title: "Sewage Cleaning Services in UAE | 700 Cleaning Services",
    description:
      "700 Cleaning Services offers professional sewage cleaning, drainage cleaning, septic tank cleaning, and water tank cleaning in the UAE. Trusted for efficiency, hygiene, and affordability.",
    keywords:
      "sewage cleaning services UAE, drainage cleaning, septic tank cleaning, water tank cleaning, pipe inspection, stormwater drain cleaning, commercial cleaning services, 700 Cleaning Services",
    image: "https://700sewagecleaningservices.com/images/about.png",
    url: "https://700sewagecleaningservices.com/about-us",
  },
  "/services": {
    title: "Top Cleaning Services | Home & Office Cleaning Experts",
    description:
      "700 Cleaning Services offers professional and affordable sewage tank cleaning, deep cleaning, and more. Book a service today!",
    keywords:
      "cleaning services, sewage cleaning, deep cleaning, professional cleaning, home cleaning, best cleaning service",
    image: "https://www.700cleaningservices.com/images/Contactcard1.jpg",
    url: "https://www.700cleaningservices.com/services",
  },
  "/contact": {
    title: "Contact Us | 700 Cleaning Services UAE",
    description:
      "Get in touch with 700 Cleaning Services for professional sewage, drainage, and sewage tank cleaning in UAE. Contact us today for a free consultation.",
    keywords:
      "contact 700 Cleaning Services, cleaning services UAE, sewage cleaning inquiry, drainage cleaning support, water tank cleaning, professional cleaning consultation",
    image: "https://700sewagecleaningservices.com/images/Contactcard1.jpg",
    url: "https://700sewagecleaningservices.com/contact",
  },
};

const serviceMetaTags = {
  "sewage-tank-cleaning": {
    title: "Sewage Tank Cleaning | 700 Cleaning Services UAE",
    description:
      "Expert sewage tank cleaning services in UAE. We ensure safe and hygienic cleaning with professional standards.",
    keywords:
      "sewage tank cleaning UAE, sewage cleaning services, tank disinfection, septic tank maintenance, professional cleaning, hygiene solutions, drainage cleaning",
    image:
      "https://700sewagecleaningservices.com/images/SewageCleaningServices.png",
    url: "https://700sewagecleaningservices.com/services/sewage-tank-cleaning",
  },
  "sewage-drainage-line-blockage-removal": {
    title: "Sewage Drainage Line Blockage Removal | 700 Cleaning Services",
    description:
      "Get rid of sewage and drainage blockages with our expert cleaning services in UAE. Fast and efficient solutions!",
    keywords:
      "drainage cleaning UAE, sewage blockage removal, drain unclogging, pipeline cleaning, sewer maintenance, emergency drain cleaning, sewage solutions",
    image:
      "https://700sewagecleaningservices.com/images/SewageDrainageLineBlockageRemoval.jpg",
    url: "https://700sewagecleaningservices.com/services/sewage-drainage-line-blockage-removal",
  },
  "oil-tank-cleaning": {
    title: "Oil Tank Cleaning | Professional Cleaning Services UAE",
    description:
      "We provide expert oil tank cleaning services across UAE, ensuring safety and efficiency for homes and businesses.",
    keywords:
      "oil tank cleaning UAE, industrial tank cleaning, fuel tank maintenance, petroleum tank cleaning, sludge removal, tank hygiene, oil residue cleaning",
    image: "https://700sewagecleaningservices.com/images/OilTankCleaning.jpg",
    url: "https://700sewagecleaningservices.com/services/oil-tank-cleaning",
  },
  "water-tank-cleaning": {
    title: "Water Tank Cleaning | 700 Cleaning Services UAE",
    description:
      "Ensure clean and safe water with our professional water tank cleaning services in UAE. Book a service today!",
    keywords:
      "water tank cleaning UAE, drinking water tank hygiene, tank disinfection, algae removal, water purification, residential tank cleaning, commercial water storage cleaning",
    image: "https://700sewagecleaningservices.com/images/WaterTankCleaning.jpg",
    url: "https://700sewagecleaningservices.com/services/water-tank-cleaning",
  },
  "pipeline-&-drain-line-cleaning": {
    title: "Pipeline & Drain Line Cleaning | UAE Cleaning Experts",
    description:
      "Professional pipeline and drain line cleaning services in UAE. We help maintain a clog-free and hygienic environment.",
    keywords:
      "pipeline cleaning UAE, drain cleaning services, pipe maintenance, clogged drain solutions, plumbing cleaning, industrial pipe cleaning, wastewater pipe cleaning",
    image: "https://700sewagecleaningservices.com/images/PipeLineCleaning.jpg",
    url: "https://700sewagecleaningservices.com/services/pipeline-&-drain-line-cleaning",
  },
};

const MetaTags = ({ page }) => {
  const meta = metaTags[page] || metaTags["/"];
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

const ServiceMetaTags = () => {
  const { serviceName } = useParams();
  const meta = serviceMetaTags[serviceName] || metaTags["/services"];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <MetaTags key="home" page="/" />
                    <Home />
                  </>
                }
              />
              <Route
                path="/about-us"
                element={
                  <>
                    <MetaTags key="about" page="/about-us" />
                    <Home section="about_section" />
                  </>
                }
              />
              <Route
                path="/services"
                element={
                  <>
                    <MetaTags page="/services" />
                    <Servicesec />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <MetaTags page="/contact" />
                    <Contactsec />
                  </>
                }
              />
              <Route
                path="/services/:serviceName"
                element={
                  <>
                    <ServiceMetaTags />
                    <Servicesec />
                  </>
                }
              />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/blog/*" element={<></>} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
