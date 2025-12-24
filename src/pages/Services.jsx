import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
        { id: 'resume-writing', label: 'Resume Writing', isLink: true, path: '/resume-writing' },
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
                                    {section.isLink ? (
                                        <Link to={section.path} className="sidebar-link-btn">
                                            {section.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={activeSection === section.id ? 'active' : ''}
                                        >
                                            {section.label}
                                        </button>
                                    )}
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
                        <div className="outsourcing-cta">
                            <Link to="/outsourcing" className="btn btn-primary explore-btn">EXPLORE OUTSOURCING SERVICES →</Link>
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
                        <div className="blue-collar-cta">
                            <Link to="/blue-collar" className="btn btn-primary explore-btn">EXPLORE BLUE COLLAR SERVICES →</Link>
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
                        <div className="internship-cta">
                            <Link to="/internships" className="btn btn-primary explore-btn">EXPLORE INTERNSHIPS →</Link>
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

                        {/* Training Programme Types */}
                        <div className="training-programmes">
                            <div className="programme-item">
                                <h4>Generic Training Programmes</h4>
                                <p>
                                    Generic training programmes relating to soft skill development attitude, motivation, communication skills, grooming, body language and the like. As these are generalized plans they could be customized to meet the specific needs of the target audience, and scaled up or down based on the genre being addressed.
                                </p>
                            </div>

                            <div className="programme-item">
                                <h4>Product Training Programmes</h4>
                                <p>
                                    Product training programmes these could be approached in 2 ways either, where the client briefs us with the raw content and we channelize it into a training format with additional inputs from the various relevant areas of soft skills; or, where the entire pre-designed content dump and program flow comes from them, and our trainers just act as facilitators to deliver this to the target audience.
                                </p>
                            </div>

                            <div className="programme-item">
                                <h4>Lifestyle Enhancement Programmes</h4>
                                <p>
                                    Lifestyle enhancement programmes like de-stress and time management workshops, both at local venues and at outside locales, improving the quality of life etc.
                                </p>
                            </div>

                            <div className="programme-item">
                                <h4>Specialized Programs</h4>
                                <p>
                                    Specialized programs in selling skills, HR, team building, marketing techniques etc. based on the specific requirements of the client. These would be positioned so that content is suited to the genre of people that it is aimed at.
                                </p>
                            </div>

                            <div className="programme-item">
                                <h4>Psychological Testing & Assessment</h4>
                                <p>
                                    Any programmes that require psychological testing or SWOT analysis, to help formulate KRAs or training needs, and also as an employment tool.
                                </p>
                            </div>
                        </div>

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
                        <div className="training-cta">
                            <Link to="/training-program" className="btn btn-primary explore-btn">EXPLORE TRAINING PROGRAM →</Link>
                        </div>
                    </section>

                    {/* Resume Writing */}
                    <section id="resume-writing" className="content-section">
                        <h2>Resume Writing</h2>
                        <p>
                            A resume is like an identity for a job seeker. Recruiters hardly spent 30 seconds on judging a resume and validating that candidate for the required position. In this case what you need is a professionally written resume that will help you stand out from the crowd.
                        </p>
                        <p>
                            Our professional resume writing service offers Text Resume, Resume Quality Check, and Visual Resume services at various levels - Entry Level, Mid-Level, and Senior Level.
                        </p>
                        <div className="resume-service-highlights">
                            <div className="highlight-card">
                                <h4>📝 Text Resume</h4>
                                <p>Professionally written resumes tailored to your industry</p>
                            </div>
                            <div className="highlight-card">
                                <h4>✅ Quality Check</h4>
                                <p>Expert review and optimization of your existing resume</p>
                            </div>
                            <div className="highlight-card">
                                <h4>🎨 Visual Resume</h4>
                                <p>Dynamic, branded visual representation of your profile</p>
                            </div>
                        </div>
                        <div className="resume-writing-cta">
                            <Link to="/resume-writing" className="btn btn-primary explore-btn">
                                EXPLORE RESUME WRITING SERVICES →
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Services;
