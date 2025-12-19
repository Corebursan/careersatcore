import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('company-profile');

    const sections = [
        { id: 'company-profile', label: 'Company Profile' },
        { id: 'why-core', label: 'Why Core' },
        { id: 'recruitment-process', label: 'Recruitment process with process flow' },
        { id: 'client-testimonials', label: 'Client Testimonials' },
        { id: 'global-presence', label: 'Global Presence' },
    ];

    useEffect(() => {
        // Handle hash navigation
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveSection(sectionId);
                }, 100);
            }
        }
    }, [location]);

    useEffect(() => {
        // Update active section on scroll
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="about-page">
            <div className="page-banner">
                <div className="banner-content">
                    <h1>About Us</h1>
                    <p>Learn more about Core Career and our mission</p>
                </div>
            </div>

            <div className="page-layout">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-menu">
                        <div className="sidebar-title">About Us</div>
                        <ul>
                            {sections.map(section => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className={activeSection === section.id ? 'active' : ''}
                                    >
                                        {section.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    {/* Company Profile */}
                    <section id="company-profile" className="content-section">
                        <h2>Company Profile</h2>
                        <p>
                            Core Career is one of India's leading placement consultancies, established with a vision to bridge the gap between talented professionals and growing organizations. With over 15 years of experience in the recruitment industry, we have successfully placed thousands of candidates across various sectors.
                        </p>
                        <p>
                            Our team of experienced recruiters understands the unique requirements of both employers and job seekers, ensuring perfect matches that lead to long-term success. We operate across multiple locations in India and have expanded our services internationally.
                        </p>
                        <div className="info-box">
                            <h4>Key Highlights:</h4>
                            <ul>
                                <li>Serving 1000+ clients across industries</li>
                                <li>Operations in 800+ locations</li>
                                <li>Salary placements ranging from 1 Lac to 1.5 Cr per annum</li>
                                <li>50,000+ successful placements</li>
                            </ul>
                        </div>
                    </section>

                    {/* Why Core */}
                    <section id="why-core" className="content-section">
                        <h2>Why Core</h2>
                        <p>
                            Choosing Core Career means partnering with a recruitment agency that truly cares about your success. Here's why businesses and job seekers trust us:
                        </p>
                        <div className="features-list">
                            <div className="feature-card">
                                <div className="feature-icon">🎯</div>
                                <h4>Targeted Approach</h4>
                                <p>We use detailed questionnaires and skill assessments to ensure precise matching between candidates and positions.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🤝</div>
                                <h4>Industry Expertise</h4>
                                <p>Our recruiters specialize in specific industries, giving them deep insights into market trends and requirements.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚡</div>
                                <h4>Fast Turnaround</h4>
                                <p>Our efficient processes ensure quick placements without compromising on quality.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h4>Data-Driven</h4>
                                <p>We leverage technology and data analytics to optimize our recruitment strategies.</p>
                            </div>
                        </div>
                    </section>

                    {/* Recruitment Process */}
                    <section id="recruitment-process" className="content-section">
                        <h2>Recruitment Process with Process Flow</h2>
                        <p>
                            Our streamlined recruitment process ensures efficiency and quality at every step. Here's how we work:
                        </p>
                        <div className="process-flow">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Requirement Analysis</h4>
                                    <p>We begin by understanding your specific requirements, company culture, and expectations.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Candidate Sourcing</h4>
                                    <p>Our team sources candidates through multiple channels including our extensive database, job portals, and referrals.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Screening & Evaluation</h4>
                                    <p>Candidates undergo thorough screening including skill assessments, background verification, and preliminary interviews.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Client Interview</h4>
                                    <p>Shortlisted candidates are presented to clients for interviews, with our team facilitating the entire process.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h4>Selection & Onboarding</h4>
                                    <p>We assist in offer negotiation and ensure smooth onboarding for successful candidates.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">6</div>
                                <div className="step-content">
                                    <h4>Follow-up Support</h4>
                                    <p>Post-placement support to ensure satisfaction of both employer and employee.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Client Testimonials */}
                    <section id="client-testimonials" className="content-section">
                        <h2>Client Testimonials</h2>
                        <p>
                            Don't just take our word for it. Here's what our clients and candidates say about us:
                        </p>
                        <div className="testimonials-grid">
                            <div className="testimonial-card">
                                <div className="testimonial-content">
                                    <p>"Core Career has been our trusted recruitment partner for over 5 years. Their understanding of our requirements and quality of candidates is exceptional."</p>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">RK</div>
                                    <div className="author-info">
                                        <h5>Rajesh Kumar</h5>
                                        <span>HR Director, Tech Solutions Ltd</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="testimonial-content">
                                    <p>"I found my dream job through Core Career. The team was supportive throughout the process and helped me negotiate a great package."</p>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">PS</div>
                                    <div className="author-info">
                                        <h5>Priya Sharma</h5>
                                        <span>Software Engineer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="testimonial-content">
                                    <p>"The bulk hiring solution from Core Career helped us staff our new facility within the deadline. Highly recommended!"</p>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">AM</div>
                                    <div className="author-info">
                                        <h5>Amit Mehta</h5>
                                        <span>CEO, Manufacturing Corp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Global Presence */}
                    <section id="global-presence" className="content-section">
                        <h2>Global Presence</h2>
                        <p>
                            Core Career has expanded its operations beyond India to serve clients globally. Our international presence allows us to provide comprehensive recruitment solutions across borders.
                        </p>
                        <div className="presence-grid">
                            <div className="presence-card">
                                <h4>🇮🇳 India</h4>
                                <p>Headquarters with operations in 800+ cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, and more.</p>
                            </div>
                            <div className="presence-card">
                                <h4>🇦🇪 Middle East</h4>
                                <p>Strong presence in UAE, Saudi Arabia, and Qatar serving major corporations.</p>
                            </div>
                            <div className="presence-card">
                                <h4>🇸🇬 Southeast Asia</h4>
                                <p>Operations in Singapore, Malaysia, and Thailand for regional recruitment needs.</p>
                            </div>
                            <div className="presence-card">
                                <h4>🇬🇧 Europe</h4>
                                <p>Expanding presence in UK and Europe for specialized IT and engineering roles.</p>
                            </div>
                        </div>
                        <div className="info-box">
                            <h4>Our Reach:</h4>
                            <ul>
                                <li>800+ locations in India</li>
                                <li>Present in 15+ countries</li>
                                <li>Network of 500+ partner agencies globally</li>
                                <li>24/7 support for international clients</li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AboutUs;
