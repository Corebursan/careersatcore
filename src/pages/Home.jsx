import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // Placeholder images - using placeholder service
    const teamImages = [
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg',
        'https://randomuser.me/api/portraits/men/3.jpg',
        'https://randomuser.me/api/portraits/women/3.jpg',
        'https://randomuser.me/api/portraits/men/4.jpg',
        'https://randomuser.me/api/portraits/women/4.jpg',
        'https://randomuser.me/api/portraits/men/5.jpg',
        'https://randomuser.me/api/portraits/women/5.jpg',
        'https://randomuser.me/api/portraits/men/6.jpg',
        'https://randomuser.me/api/portraits/women/6.jpg',
        'https://randomuser.me/api/portraits/men/7.jpg',
        'https://randomuser.me/api/portraits/women/7.jpg',
        'https://randomuser.me/api/portraits/men/8.jpg',
        'https://randomuser.me/api/portraits/women/8.jpg',
    ];

    const heroSlides = [
        {
            title: 'Register with Questionnaire',
            subtitle: 'You Get Jobs',
            highlights: [
                'Detailed questionnaires',
                'Get direct access to recruiters',
                'Get your skills evaluated',
                'Ensure maximum attention of recruiters'
            ]
        },
        {
            title: 'Total solution specialist',
            subtitle: 'You Get Jobs',
            highlights: [
                'Serving 1000+ clients',
                'Salary levels of 1 lac to 1.5 Cr per annum',
                'Serve job seekers at 800+ locations'
            ]
        },
        {
            title: 'Best Internships',
            subtitle: 'For Students',
            highlights: [
                'Start earning while you are in college',
                'Absolutely free for students',
                'Connect with leading organizations'
            ]
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    {/* Image Grid */}
                    <div className="image-grid">
                        {teamImages.map((img, index) => (
                            <div key={index} className="image-item">
                                <img src={img} alt={`Team member ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    {/* Hero Content */}
                    <div className="hero-content">
                        <div className="hero-slide">
                            <h1 className="hero-title">
                                Register with <span className="highlight">Questionnaire</span>
                            </h1>
                            <div className="hero-subtitle">
                                <h2>You Get Jobs</h2>
                                <p>Total solution specialist</p>
                            </div>
                            <ul className="hero-highlights">
                                <li>
                                    <span className="highlight-tag red">Detailed questionnaires</span>
                                    <span className="highlight-arrow">&gt; Get direct access to recruiters</span>
                                </li>
                                <li>
                                    <span className="highlight-tag red">Get your skills evaluated</span>
                                    <span className="highlight-arrow">&gt; Ensure maximum attention of recruiters</span>
                                </li>
                            </ul>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span>&gt; Serving 1000+ clients</span>
                            </div>
                            <div className="stat-item">
                                <span>&gt; Salary levels of 1 lac to 1.5 Cr per annum</span>
                            </div>
                            <div className="stat-item">
                                <span>&gt; Serve job seekers at 800+ locations</span>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="carousel-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </section>

            {/* CTA Buttons */}
            <section className="cta-section">
                <div className="cta-container">
                    <Link to="/register?type=employer" className="cta-btn employer">
                        I AM AN EMPLOYER
                    </Link>
                    <Link to="/register?type=student" className="cta-btn student">
                        I AM A STUDENT
                    </Link>
                    <Link to="/register?type=jobseeker" className="cta-btn jobseeker">
                        I AM A JOB SEEKER
                    </Link>
                </div>
            </section>

            {/* Company Profile Section */}
            <section className="company-profile-section">
                <div className="profile-container">
                    <div className="profile-tabs">
                        <Link to="/about-us#company-profile" className="profile-tab active">
                            Company Profile
                        </Link>
                    </div>
                    <div className="profile-content">
                        <h2>Best Placement Consultancy in India</h2>
                        <p>
                            Being one of the most reliable placement consultancies in India, Core Career has through the years provided high-quality recruitment solutions to businesses across various industries. With a commitment to excellence and a deep understanding of the job market, we have helped countless organizations find the perfect talent to drive their success.
                        </p>
                        <Link to="/about-us" className="read-more">
                            Read More <span>▼</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="services-overview">
                <div className="services-container">
                    <h2 className="section-title">Our Services</h2>
                    <div className="services-grid">
                        <Link to="/services#permanent-recruitment" className="service-card">
                            <div className="service-icon">👔</div>
                            <h3>Permanent Recruitment</h3>
                            <p>Find the right talent for permanent positions</p>
                        </Link>
                        <Link to="/services#bulk-hiring" className="service-card">
                            <div className="service-icon">👥</div>
                            <h3>Bulk Hiring</h3>
                            <p>Large scale recruitment solutions</p>
                        </Link>
                        <Link to="/services#internships" className="service-card">
                            <div className="service-icon">🎓</div>
                            <h3>Internships</h3>
                            <p>Connect students with opportunities</p>
                        </Link>
                        <Link to="/services#training-program" className="service-card">
                            <div className="service-icon">📚</div>
                            <h3>Training Program</h3>
                            <p>Skill development and training</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-section">
                <div className="why-choose-container">
                    <h2 className="section-title">Why Choose Core Career?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-number">1000+</div>
                            <div className="feature-text">Clients Served</div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">800+</div>
                            <div className="feature-text">Locations</div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">50000+</div>
                            <div className="feature-text">Placements</div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">15+</div>
                            <div className="feature-text">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="contact-cta">
                <div className="contact-cta-container">
                    <h2>Ready to find your perfect career match?</h2>
                    <p>Get in touch with us today and let us help you achieve your goals.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
