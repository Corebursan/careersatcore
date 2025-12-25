import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoWithoutBackground from '../assets/LogoWithoutBackgroung.jpg';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const aboutUsDropdown = [
        { label: 'Company Profile', id: 'company-profile' },
        { label: 'Why Core', id: 'why-core' },
        { label: 'Recruitment process with process flow', id: 'recruitment-process' },
        { label: 'Client Testimonials', id: 'client-testimonials' },
        { label: 'Global Presence', id: 'global-presence' },
    ];

    const servicesDropdown = [
        { label: 'Permanent Recruitment', id: 'permanent-recruitment' },
        { label: 'Bulk Hiring', id: 'bulk-hiring' },
        { label: 'Outsourcing', id: 'outsourcing' },
        { label: 'Blue collar', id: 'blue-collar' },
        { label: 'Internships', id: 'internships' },
        { label: 'Recruitment for job seekers', id: 'recruitment-job-seekers' },
        { label: 'Training Program', id: 'training-program' },
        { label: 'Resume Writing', id: 'resume-writing' },
    ];

    const handleDropdownClick = (path, sectionId) => {
        navigate(path);
        // Wait for navigation to complete then scroll to section
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            {/* Top Banner */}
            <div className="top-banner">
                <div className="top-banner-content">
                    <div className="banner-left">
                        <span className="banner-icon">🚀</span>
                        <span className="banner-text">Boost your Career with Our Free Career Hacks:</span>
                        <div className="email-subscribe">
                            <input type="email" placeholder="Email Address" className="email-input" />
                            <button className="subscribe-btn">Subscribe</button>
                        </div>
                    </div>
                    <button className="banner-close">✕</button>
                </div>
            </div>

            {/* Main Header */}
            <div className="main-header">
                <div className="header-content">
                    {/* Logo and Navigation */}
                    <div className="logo-nav-container">
                        <Link to="/" className="logo">
                            <img src={logoWithoutBackground} alt="CORE Careers Private Limited" className="logo-image" />
                            <span className="beta-badge">BETA</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className="mobile-menu-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* Navigation */}
                        <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <Link 
                                        to="/" 
                                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* About Us with Dropdown */}
                                <li className="nav-item has-dropdown">
                                    <Link 
                                        to="/about-us" 
                                        className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <div className="dropdown">
                                        <ul className="dropdown-menu">
                                            {aboutUsDropdown.map((item, index) => (
                                                <li key={index}>
                                                    <button 
                                                        onClick={() => {
                                                            handleDropdownClick('/about-us', item.id);
                                                            setMobileMenuOpen(false);
                                                        }}
                                                        className="dropdown-link"
                                                    >
                                                        {item.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>

                                {/* Services with Dropdown */}
                                <li className="nav-item has-dropdown">
                                    <Link 
                                        to="/services" 
                                        className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Services
                                    </Link>
                                    <div className="dropdown">
                                        <ul className="dropdown-menu">
                                            {servicesDropdown.map((item, index) => (
                                                <li key={index}>
                                                    <button 
                                                        onClick={() => {
                                                            handleDropdownClick('/services', item.id);
                                                            setMobileMenuOpen(false);
                                                        }}
                                                        className="dropdown-link"
                                                    >
                                                        {item.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="/clients" 
                                        className={`nav-link ${isActive('/clients') ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Clients
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="/jobs" 
                                        className={`nav-link ${isActive('/jobs') ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Jobs
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="/register" 
                                        className={`nav-link ${isActive('/register') ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="/contact" 
                                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
