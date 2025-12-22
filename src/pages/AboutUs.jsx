import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('company-profile');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Recruitment Process Slides Data
    const recruitmentSlides = [
        {
            title: 'PROCESS FLOW FOR RECRUITMENT',
            description: '',
            image: null
        },
        {
            title: 'Job Posting',
            description: 'Open requisition is posted on the website.',
            image: '📋'
        },
        {
            title: 'Candidate Generation',
            description: 'from internet portals, employee referrals, headhunters.',
            image: '🌐'
        },
        {
            title: 'Resume Screening',
            description: 'consultants screen resumes for specific match',
            image: '📄'
        },
        {
            title: 'Internal Candidates Review',
            description: 'Review the candidate CVs matching the job requisition',
            image: '👥'
        },
        {
            title: 'First Approach',
            description: 'The consultants approach the screened candidates',
            image: '📞'
        },
        {
            title: 'First Shortlist',
            description: 'consultants forward the first list of shortlisted candidates to the hiring company.',
            image: '📝'
        },
        {
            title: 'Hiring Manager Reviews',
            description: 'the hiring manager reviews the pre-screened candidate resumes submitted by the consultants',
            image: '👔'
        },
        {
            title: 'Interview Scheduled',
            description: 'qualified candidates are called for a face to face interview with the company',
            image: '🤝'
        },
        {
            title: 'Reference Check',
            description: 'whether the candidate participates in the interview or not in checked from both ends',
            image: '✅'
        },
        {
            title: 'Offer Developed',
            description: 'if selected the HR manager of the company extends the offer to the candidate',
            image: '📨'
        },
        {
            title: 'Offer Declined',
            description: 'If candidate turns offer then the consultants again review back the candidates and present a fresh list of shortlist',
            image: '❌'
        },
        {
            title: 'Follow Up',
            description: 'if candidate leaves the company within 3 months or is terminated from the office, a replacement is provided',
            image: '🔄'
        }
    ];

    const totalSlides = recruitmentSlides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

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
            {/* About Us Introduction */}
            <section className="about-intro">
                <div className="about-intro-container">
                    <h1 className="about-intro-heading">ABOUT US</h1>
                    <div className="about-intro-divider"></div>
                    <p>
                        Core careers Pvt ltd is a staffing and recruitment services firm based in Kolkata, West Bengal. Core was established in the year 2002. Since then we are providing recruitment services in more than 500 companies (including FORTUNE 500 companies) across the country. Our client base over the years has grown extensively and today we are dealing with the best organizations in the industry. Starting from engineering and manufacturing to pharmaceuticals, banking and financial services, consumer goods and service industry, we are catering the recruitment needs of almost every sector of the industry. We are one of the leading consultancy firm engaged in offering our solutions for Job seekers, Head hunting, Man Power recruitment, Internships, Campus placements, Market research, Industrial training, Professional resume writing and other career related solutions and advisory services.
                    </p>
                </div>
            </section>

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
                        
                        {/* About Core - Establishment Info */}
                        <p className="justify-text">
                            Core careers Pvt ltd is a staffing and recruitment services firm based in Kolkata, West Bengal. Core was established in the year 2002. Since then we are providing recruitment services in more than 500 companies (including FORTUNE 500 companies) across the country. Our client base over the years has grown extensively and today we are dealing with the best organizations in the industry. Starting from engineering and manufacturing to pharmaceuticals, banking and financial services, consumer goods and service industry, we are catering the recruitment needs of almost every sector of the industry. We are one of the leading consultancy firm engaged in offering our solutions for Job seekers, Head hunting, Man Power recruitment, Internships, Campus placements, Market research, Industrial training, Professional resume writing and other career related solutions and advisory services.
                        </p>

                        {/* Our Mission */}
                        <div className="mission-strength-item">
                            <div className="bubble-label mission">
                                <span>OUR</span>
                                <span>MISSION</span>
                            </div>
                            <p className="justify-text">
                                We start with bridging a perpetual relationship with our clients and help them in finding the most talented and outstanding candidates fitted to the company's profile and culture. All this is done within a scheduled framework saving the both ends their time and energy.
                            </p>
                        </div>

                        {/* Strengths */}
                        <div className="mission-strength-item">
                            <div className="bubble-label strengths">
                                <span>STRENGTHS</span>
                            </div>
                            <p className="justify-text">
                                The Core group of consultants are consistently working on the best recruiting strategies. Clients can count on us as we take care of the candidates pre-screening, evaluation, interview, research, opening and closing of jobs.
                            </p>
                        </div>

                        <p className="justify-text">
                            Core Career is one of India's leading placement consultancies, established with a vision to bridge the gap between talented professionals and growing organizations. With over 25+ years of experience in the recruitment industry, we have successfully placed thousands of candidates across various sectors.
                        </p>
                        <p className="justify-text">
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
                    <section id="why-core" className="content-section why-core-section">
                        <h2>WHY CORE and HOW CAN CORE HELP YOU?</h2>
                        
                        <div className="why-core-intro">
                            <p>
                                Technology is developing, so are recruitment methods. Especially over a decade technology has played an increasingly larger role in the recruitment industry. By looking at these technological progressions it's easy to make out how hiring methods have transformed immensely.
                            </p>
                            <p>
                                Advertisement- which apparently acted as a source of recruitment has given away to the whole new concept of recruitment consultancies. Advertising job openings in newspapers, televisions, magazines or pamphlets considered as effective modes of recruitment few years back is slowly losing its significance. The main reason behind this is time has become the most important thing today. Any process that incorporates a huge amount of time is a complete no in today's technological world. Besides, you need to pay your fees in advance when hiring through these advertising mediums and after all this you are assured with no guaranteed results.
                            </p>
                            <p>
                                Fortunately, the contemporary workplace has given rise to the necessities of recruitment the best means to get the labour force that you want, at the same time ensuring that you obtain only the finest and the most dexterous employee in the work pool to suit your definite job opening requirements.
                            </p>
                        </div>

                        {/* Feature Cards */}
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

                        {/* Core Assistance Section */}
                        <h3 className="core-assistance-title">CORE ASSISTANCE:</h3>
                        
                        <div className="assistance-item">
                            <span className="assistance-label">FIND EMPLOYEES EASILY:</span>
                            <span className="assistance-text"> We make the hiring process easier by sourcing candidates, filtering them through an intense interview process, assessing their skill and finally sending the cream of the crop to the company.</span>
                        </div>
                        
                        <div className="assistance-item">
                            <span className="assistance-label">SAVE MONEY:</span>
                            <span className="assistance-text"> Instead of paying unreasonably high prices just to circulate advertisements through newspapers, televisions, magazines and all other forms of media just to advertise for vacancies, followed by spending more economy in human resources to sort out various resumes and applicants, pay the services to CORE to get the best qualified employees as needed. If the prices paid for ads and human resources are compared against the fee paid for CORE services, it can be openly understood how much money one is saving. Unlike advertising or other modes of recruitment payment is accepted only after the requirement is fulfilled with full satisfaction.</span>
                        </div>

                        {/* Time Saver Section */}
                        <div className="time-saver-box">
                            <span className="time-saver-label">TIME SAVER:</span>
                            <span className="time-saver-text"> CORE entitles to lessen the amount of applicants that one would get and have to monitor through, compared to posting various advertisements in different forms of media. CORE only sends a selected pool of employees that are assured to platform with all the required skills.</span>
                        </div>

                        {/* Comparison Cards */}
                        <div className="comparison-cards">
                            <div className="comparison-card advertisement">
                                <h4>ADVERTISEMENT</h4>
                                <p>Risky, lots of responses</p>
                                <p>=</p>
                                <p>Lots of work</p>
                                <p>All the money paid upfront</p>
                                <p className="highlight-text">No guarantee.</p>
                            </div>
                            <div className="comparison-card core">
                                <h4>CORE</h4>
                                <p>Less expensive,</p>
                                <p>screened candidates</p>
                                <p>No hire = No fee</p>
                                <p className="highlight-text">3 months<br/>replacement guaranteed</p>
                            </div>
                        </div>
                    </section>

                    {/* Recruitment Process */}
                    <section id="recruitment-process" className="content-section">
                        <h2>Recruitment Process</h2>
                        <p>
                            Core Careers have designed a unique recruitment process model that enables our clients to filtrate the best from available candidates. This helps to end the whole process of recruitment which is quite tiresome, to complete quickly.
                        </p>
                        
                        {/* Slideshow Container */}
                        <div className={`slideshow-container ${isFullscreen ? 'fullscreen' : ''}`}>
                            <div className="slideshow-content">
                                <div className="slide">
                                    {recruitmentSlides[currentSlide].image && (
                                        <div className="slide-icon">{recruitmentSlides[currentSlide].image}</div>
                                    )}
                                    <h3 className="slide-title">{recruitmentSlides[currentSlide].title}</h3>
                                    {recruitmentSlides[currentSlide].description && (
                                        <p className="slide-description">{recruitmentSlides[currentSlide].description}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="slideshow-controls">
                                <div className="slide-navigation">
                                    <button className="nav-btn" onClick={prevSlide}>&#10094;</button>
                                    <span className="slide-counter">{currentSlide + 1} of {totalSlides}</span>
                                    <button className="nav-btn" onClick={nextSlide}>&#10095;</button>
                                </div>
                                <div className="slideshow-actions">
                                    <button className="action-btn share-btn" title="Share">
                                        <span>↗</span>
                                    </button>
                                    <button 
                                        className="action-btn fullscreen-btn" 
                                        onClick={toggleFullscreen}
                                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                                    >
                                        <span>{isFullscreen ? '⊡' : '⛶'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <p style={{marginTop: '20px'}}>
                            Our fully integrated staff recruitment and selection process includes an elaborate assignment briefing, short listing of CVs, quick turnaround, psychometric analysis, interview techniques. We also cater to close the placement with the offer letter on behalf of the client and helping the clients in reference checks of offered candidates so that only candidates of highest calibre can ideally match their ultimate needs.
                        </p>
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
