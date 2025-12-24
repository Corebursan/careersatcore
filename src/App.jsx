import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Jobs from './pages/Jobs';
import Register from './pages/Register';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ResumeWriting from './pages/ResumeWriting';
import Internships from './pages/Internships';
import TrainingProgram from './pages/TrainingProgram';
import BlueCollar from './pages/BlueCollar';
import Outsourcing from './pages/Outsourcing';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/resume-writing" element={<ResumeWriting />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/training-program" element={<TrainingProgram />} />
            <Route path="/blue-collar" element={<BlueCollar />} />
            <Route path="/outsourcing" element={<Outsourcing />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App
