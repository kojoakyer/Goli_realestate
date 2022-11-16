
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from './components/navbar/Navbar';
import ScrowToTop from "./components/ScrowToTop";
import ChairmansMessage from "./pages/ChairmansMessage";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Home from './pages/Home';
import HowToBuy from "./pages/HowToBuy";
import PaymentMethod from "./pages/PaymentMethod";
import RequestInfo from "./pages/RequestInfo";
import Teams from "./pages/Teams";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";


function App() {
  return (
    <>
      <Navbar/>
      <ScrowToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/chairmans-message" element={<ChairmansMessage />}/>
        <Route path="/about-us" element={<WhoWeAre />}/>
        <Route path="/faqs" element={<Faq />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/how-to-buy" element={<HowToBuy />}/>
        <Route path="/payment-method" element={<PaymentMethod />}/>
        <Route path="/teams" element={<Teams />}/>
        <Route path="/what-we-do" element={<WhatWeDo />}/>
        <Route path="/info-request" element={<RequestInfo />}/>
      </Routes>
      </ScrowToTop>
      <Footer/>
    </>
  );
}

export default App;
