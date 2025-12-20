import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <div className="logo-bars">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span className="logo-text">ORE</span>
                    </div>
                    <p>
                        Core Career is one of India's leading placement consultancies, 
                        helping businesses find the right talent and job seekers find 
                        their dream careers.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="LinkedIn">💼</a>
                        <a href="#" aria-label="Instagram">📷</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/services#permanent-recruitment">Permanent Recruitment</Link></li>
                        <li><Link to="/services#bulk-hiring">Bulk Hiring</Link></li>
                        <li><Link to="/services#outsourcing">Outsourcing</Link></li>
                        <li><Link to="/services#internships">Internships</Link></li>
                        <li><Link to="/services#training-program">Training Program</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul className="contact-info">
                        <li>
                            <span className="icon">📍</span>
                            <span>Kolkata, West Bengal, India</span>
                        </li>
                        <li>
                            <span className="icon">📞</span>
                            <span>+91 98 3051 8296</span>
                        </li>
                        <li>
                            <span className="icon">✉️</span>
                            <span>info@careersatcore.com</span>
                        </li>
                        <li>
                            <span className="icon">⏰</span>
                            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Core Career. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

