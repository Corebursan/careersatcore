import React, { useState, useMemo, useCallback, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoWithoutBackground from '../assets/LogoWithoutBackgroung.jpg';
import './Header.css';

// Extract static data outside component
const ABOUT_US_DROPDOWN = [
    { label: 'Company Profile', id: 'company-profile' },
    { label: 'Why Core', id: 'why-core' },
    { label: 'Recruitment process with process flow', id: 'recruitment-process' },
    { label: 'Client Testimonials', id: 'client-testimonials' },
    { label: 'Global Presence', id: 'global-presence' },
];

const SERVICES_DROPDOWN = [
    { label: 'Permanent Recruitment', id: 'permanent-recruitment' },
    { label: 'Bulk Hiring', id: 'bulk-hiring' },
    { label: 'Outsourcing', id: 'outsourcing' },
    { label: 'Blue collar', id: 'blue-collar' },
    { label: 'Internships', id: 'internships' },
    { label: 'Recruitment for job seekers', id: 'recruitment-job-seekers' },
    { label: 'Training Program', id: 'training-program' },
    { label: 'Resume Writing', id: 'resume-writing' },
];

const Header = memo(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDropdownClick = useCallback((path, sectionId) => {
        navigate(path);
        // Wait for navigation to complete then scroll to section
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }, [navigate]);

    const isActive = useCallback((path) => {
        return location.pathname === path;
    }, [location.pathname]);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
    }, []);

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
                            onClick={toggleMobileMenu}
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
                                        onClick={closeMobileMenu}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* About Us with Dropdown */}
                                <li className="nav-item has-dropdown">
                                    <Link 
                                        to="/about-us" 
                                        className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}
                                        onClick={closeMobileMenu}
                                    >
                                        About Us
                                    </Link>
                                    <div className="dropdown">
                                        <ul className="dropdown-menu">
                                            {ABOUT_US_DROPDOWN.map((item, index) => (
                                                <li key={index}>
                                                    <button 
                                                        onClick={() => {
                                                            handleDropdownClick('/about-us', item.id);
                                                            closeMobileMenu();
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
                                        onClick={closeMobileMenu}
                                    >
                                        Services
                                    </Link>
                                    <div className="dropdown">
                                        <ul className="dropdown-menu">
                                            {SERVICES_DROPDOWN.map((item, index) => (
                                                <li key={index}>
                                                    <button 
                                                        onClick={() => {
                                                            handleDropdownClick('/services', item.id);
                                                            closeMobileMenu();
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
                                        onClick={closeMobileMenu}
                                    >
                                        Clients
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="/jobs" 
                                        className={`nav-link ${isActive('/jobs') ? 'active' : ''}`}
                                        onClick={closeMobileMenu}
                                    >
                                        Jobs
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="/register" 
                                        className={`nav-link ${isActive('/register') ? 'active' : ''}`}
                                        onClick={closeMobileMenu}
                                    >
                                        Register
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="/contact" 
                                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                                        onClick={closeMobileMenu}
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
});

Header.displayName = 'Header';

export default Header;
