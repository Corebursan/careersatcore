import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('permanent-recruitment');

    const sections = [
        { id: 'permanent-recruitment', label: 'Permanent Recruitment' },
        { id: 'bulk-hiring', label: 'Bulk Hiring' },
        { id: 'outsourcing', label: 'Outsourcing' },
        { id: 'blue-collar', label: 'Blue Collar' },
        { id: 'internships', label: 'Internships' },
        { id: 'recruitment-job-seekers', label: 'Recruitment for job seekers' },
        { id: 'training-program', label: 'Training Program' },
        { id: 'resume-writing', label: 'Resume Writing' },
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
        <div className="services-page">
            {/* Core Services Introduction */}
            <section className="core-services-intro">
                <div className="core-services-container">
                    <h1 className="core-services-heading">CORE SERVICES</h1>
                    <div className="core-services-divider"></div>
                    <p>
                        Core careers recruitment division are a cutting edge in the industry. It combines a pool of both experienced and enthusiastic consultants who aspire to meet all the challenges of this Industry.
                    </p>
                    <p>
                        We are engaged in offering a wide range of Staffing Solutions as per defined industry standards and specific requirements. Geography is not at all a boundary to us and we are always ready to stretch our helpful hands to the extreme limits of our client's needs-in any part of India.
                    </p>
                </div>
            </section>

            <div className="page-layout">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-menu">
                        <div className="sidebar-title">Services</div>
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
                    {/* Permanent Recruitment */}
                    <section id="permanent-recruitment" className="content-section">
                        <h2>Permanent Recruitment</h2>
                        <p>
                            Our permanent recruitment service helps organizations find the perfect long-term employees who will grow with the company. We understand that hiring the right talent is crucial for business success.
                        </p>
                        <div className="service-features">
                            <div className="service-feature">
                                <h4>Executive Search</h4>
                                <p>Specialized headhunting for C-level and senior management positions.</p>
                            </div>
                            <div className="service-feature">
                                <h4>Mid-Level Recruitment</h4>
                                <p>Finding experienced professionals for managerial and specialist roles.</p>
                            </div>
                            <div className="service-feature">
                                <h4>Entry-Level Hiring</h4>
                                <p>Campus recruitment and fresher hiring programs.</p>
                            </div>
                        </div>
                        <div className="service-benefits">
                            <h4>Benefits:</h4>
                            <ul>
                                <li>Dedicated recruiter for each assignment</li>
                                <li>Thorough background verification</li>
                                <li>Replacement guarantee period</li>
                                <li>Industry-specific expertise</li>
                            </ul>
                        </div>
                    </section>

                    {/* Bulk Hiring */}
                    <section id="bulk-hiring" className="content-section">
                        <h2>Bulk Hiring</h2>
                        <p>
                            When you need to staff up quickly, our bulk hiring solutions ensure you get quality candidates at scale. Perfect for new projects, expansions, or seasonal requirements.
                        </p>
                        <div className="service-stats">
                            <div className="stat-box">
                                <div className="stat-value">500+</div>
                                <div className="stat-label">Candidates per month capacity</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">15</div>
                                <div className="stat-label">Days average turnaround</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">95%</div>
                                <div className="stat-label">Joining ratio</div>
                            </div>
                        </div>
                        <div className="service-process">
                            <h4>Our Process:</h4>
                            <ol>
                                <li>Requirement gathering and job analysis</li>
                                <li>Mass sourcing through multiple channels</li>
                                <li>Screening and shortlisting</li>
                                <li>Assessment centers and group interviews</li>
                                <li>Offer management and onboarding support</li>
                            </ol>
                        </div>
                    </section>

                    {/* Outsourcing */}
                    <section id="outsourcing" className="content-section">
                        <h2>Outsourcing</h2>
                        <p>
                            Our outsourcing solutions help businesses focus on their core competencies while we handle the staffing requirements. We provide complete HR outsourcing services.
                        </p>
                        <div className="service-features">
                            <div className="service-feature">
                                <h4>Payroll Outsourcing</h4>
                                <p>Complete payroll management including compliance and statutory requirements.</p>
                            </div>
                            <div className="service-feature">
                                <h4>Contract Staffing</h4>
                                <p>Flexible workforce solutions for project-based requirements.</p>
                            </div>
                            <div className="service-feature">
                                <h4>RPO Services</h4>
                                <p>Recruitment Process Outsourcing for end-to-end hiring needs.</p>
                            </div>
                        </div>
                    </section>

                    {/* Blue Collar */}
                    <section id="blue-collar" className="content-section">
                        <h2>Blue Collar Recruitment</h2>
                        <p>
                            Specialized recruitment services for blue-collar workforce across manufacturing, logistics, construction, and other industries requiring skilled and semi-skilled workers.
                        </p>
                        <div className="industries-grid">
                            <div className="industry-card">
                                <span className="industry-icon">🏭</span>
                                <h4>Manufacturing</h4>
                            </div>
                            <div className="industry-card">
                                <span className="industry-icon">🚚</span>
                                <h4>Logistics</h4>
                            </div>
                            <div className="industry-card">
                                <span className="industry-icon">🏗️</span>
                                <h4>Construction</h4>
                            </div>
                            <div className="industry-card">
                                <span className="industry-icon">⚡</span>
                                <h4>Electrical</h4>
                            </div>
                            <div className="industry-card">
                                <span className="industry-icon">🔧</span>
                                <h4>Maintenance</h4>
                            </div>
                            <div className="industry-card">
                                <span className="industry-icon">🏪</span>
                                <h4>Retail</h4>
                            </div>
                        </div>
                    </section>

                    {/* Internships */}
                    <section id="internships" className="content-section">
                        <h2>Internships</h2>
                        <p>
                            Connect students and fresh graduates with valuable internship opportunities at leading organizations. Our internship program bridges the gap between academics and industry.
                        </p>
                        <div className="highlight-box">
                            <h4>For Students:</h4>
                            <ul>
                                <li>Start earning while you are in college</li>
                                <li>Absolutely free registration</li>
                                <li>Connect with leading organizations</li>
                                <li>Gain real-world experience</li>
                                <li>Get mentorship and guidance</li>
                            </ul>
                        </div>
                        <div className="highlight-box secondary">
                            <h4>For Companies:</h4>
                            <ul>
                                <li>Access to fresh talent</li>
                                <li>Build your talent pipeline</li>
                                <li>Cost-effective hiring</li>
                                <li>Pre-trained candidates for full-time roles</li>
                            </ul>
                        </div>
                    </section>

                    {/* Recruitment for Job Seekers */}
                    <section id="recruitment-job-seekers" className="content-section">
                        <h2>Recruitment for Job Seekers</h2>
                        <p>
                            If you're looking for your next career opportunity, Core Career is here to help. Our recruitment services for job seekers are designed to match you with the perfect role.
                        </p>
                        <div className="service-features">
                            <div className="service-feature">
                                <h4>Profile Enhancement</h4>
                                <p>We help optimize your profile to stand out to recruiters.</p>
                            </div>
                            <div className="service-feature">
                                <h4>Job Matching</h4>
                                <p>AI-powered matching with relevant job opportunities.</p>
                            </div>
                            <div className="service-feature">
                                <h4>Interview Preparation</h4>
                                <p>Guidance and tips to ace your interviews.</p>
                            </div>
                            <div className="service-feature">
                                <h4>Salary Negotiation</h4>
                                <p>Support in negotiating the best compensation package.</p>
                            </div>
                        </div>
                        <div className="cta-box">
                            <h4>Ready to find your dream job?</h4>
                            <p>Register with us today and get access to thousands of opportunities.</p>
                            <a href="/register" className="btn btn-primary">Register Now</a>
                        </div>
                    </section>

                    {/* Training Program */}
                    <section id="training-program" className="content-section">
                        <h2>Training Program</h2>
                        <p>
                            Enhance your skills and employability with our comprehensive training programs. We offer both technical and soft skills training to help you succeed in today's competitive job market.
                        </p>
                        <div className="training-categories">
                            <div className="training-card">
                                <h4>Technical Training</h4>
                                <ul>
                                    <li>Programming Languages</li>
                                    <li>Data Analytics</li>
                                    <li>Cloud Computing</li>
                                    <li>Digital Marketing</li>
                                </ul>
                            </div>
                            <div className="training-card">
                                <h4>Soft Skills</h4>
                                <ul>
                                    <li>Communication Skills</li>
                                    <li>Leadership Development</li>
                                    <li>Time Management</li>
                                    <li>Team Collaboration</li>
                                </ul>
                            </div>
                            <div className="training-card">
                                <h4>Industry Certifications</h4>
                                <ul>
                                    <li>AWS/Azure Certifications</li>
                                    <li>Project Management (PMP)</li>
                                    <li>Six Sigma</li>
                                    <li>HR Certifications</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Resume Writing */}
                    <section id="resume-writing" className="content-section">
                        <h2>Resume Writing</h2>
                        <p>
                            A well-crafted resume is your first step to landing your dream job. Our professional resume writing service helps you present your skills and experience in the best possible way.
                        </p>
                        <div className="service-packages">
                            <div className="package-card">
                                <div className="package-header">
                                    <h4>Basic</h4>
                                    <div className="package-price">₹999</div>
                                </div>
                                <ul>
                                    <li>Professional resume rewrite</li>
                                    <li>ATS-friendly format</li>
                                    <li>1 revision included</li>
                                    <li>Delivery in 3-5 days</li>
                                </ul>
                            </div>
                            <div className="package-card featured">
                                <div className="package-badge">Popular</div>
                                <div className="package-header">
                                    <h4>Professional</h4>
                                    <div className="package-price">₹2,499</div>
                                </div>
                                <ul>
                                    <li>Everything in Basic</li>
                                    <li>Cover letter</li>
                                    <li>LinkedIn profile optimization</li>
                                    <li>3 revisions included</li>
                                    <li>Priority support</li>
                                </ul>
                            </div>
                            <div className="package-card">
                                <div className="package-header">
                                    <h4>Executive</h4>
                                    <div className="package-price">₹4,999</div>
                                </div>
                                <ul>
                                    <li>Everything in Professional</li>
                                    <li>Executive bio</li>
                                    <li>Personal branding consultation</li>
                                    <li>Unlimited revisions</li>
                                    <li>1-on-1 consultation call</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Services;
