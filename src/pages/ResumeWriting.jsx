import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ResumeWriting.css';

const ResumeWriting = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('about');
    const [activeTab, setActiveTab] = useState('entry');

    const sections = [
        { id: 'about', label: 'About' },
        { id: 'text-resume', label: 'Text Resume' },
        { id: 'resume-quality-check', label: 'Resume Quality Check' },
        { id: 'visual-resume', label: 'Visual Resume' },
        { id: 'why-us', label: 'Why Us' },
        { id: 'contact-us', label: 'Contact Us' },
        { id: 'agreement', label: 'Agreement' },
    ];

    useEffect(() => {
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

    // Pricing data
    const textResumePricing = {
        entry: {
            title: 'Entry Level (0 to 3 years)',
            description: 'This package is for all of them who have little or no experience. Usually university graduates starting their professional career or people who are just gaining some job experience.',
            content: [
                'It often appears intimidating to attempt and create resume or CV without much job experience. It often gets fiddly to know what to get rid off and what to put on your resume. In that case it is more important to highlight your accomplishments and achievements that can give you a better exposure.',
                'Our experts guide you from germination to full bloom. Take our expert advice over the phone or via email and get your resume upgraded to professional industry standards.',
                'Any Resume is incomplete without a Cover Letter. It explains the context of your resume and highlights you as an individual. A cover letter is like a preface to a book.'
            ],
            packages: [
                { delivery: '2 days', price: '2,499', color: 'orange' },
                { delivery: '5 days', price: '2,049', color: 'purple' },
                { delivery: '8 days', price: '1,599', color: 'teal' }
            ]
        },
        mid: {
            title: 'Mid-Level (3 to 8 years)',
            description: 'This package is designed for professionals with substantial experience looking to advance their career.',
            content: [
                'With 3-8 years of experience, your resume needs to showcase your growth, achievements, and the value you bring to organizations.',
                'Our experts help you articulate your career progression effectively, highlighting key accomplishments and leadership experiences.',
                'Any Resume is incomplete without a Cover Letter. It explains the context of your resume and highlights you as an individual. A cover letter is like a preface to a book.'
            ],
            packages: [
                { delivery: '2 days', price: '3,499', color: 'orange' },
                { delivery: '5 days', price: '2,999', color: 'purple' },
                { delivery: '8 days', price: '2,499', color: 'teal' }
            ]
        },
        senior: {
            title: 'Senior Level (8+ years)',
            description: 'Executive-level resume writing for senior professionals and leadership positions.',
            content: [
                'Senior professionals need resumes that reflect their strategic impact, leadership capabilities, and industry expertise.',
                'Our expert writers craft executive resumes that position you for C-suite and senior management roles.',
                'Any Resume is incomplete without a Cover Letter. It explains the context of your resume and highlights you as an individual. A cover letter is like a preface to a book.'
            ],
            packages: [
                { delivery: '2 days', price: '4,999', color: 'orange' },
                { delivery: '5 days', price: '4,499', color: 'purple' },
                { delivery: '8 days', price: '3,999', color: 'teal' }
            ]
        }
    };

    const qualityCheckPricing = {
        entry: {
            title: 'Entry Level (0 to 3 years)',
            description: 'Our experts check your existing resume for the quality and re-do the resume to get you the right job. Our expert can either recommend for the complete make-over of the resume or the changes in the existing resume depending on the quality. With this package, you can have telephonic discussion with our resume writers / quality control consultants.',
            checkpoints: [
                'consistency of language',
                'right format',
                'grammatical mistakes',
                'to see the balance of focus on your educational qualifications VS kind of job / jobs you will be applying for',
                'check and align font type and size',
                'other finer details if missing will be suggested'
            ],
            packages: [
                { delivery: '2 days', price: '799', color: 'orange' },
                { delivery: '5 days', price: '599', color: 'purple' },
                { delivery: '8 days', price: '399', color: 'teal' }
            ]
        },
        mid: {
            title: 'Mid-Level (3 to 8 years)',
            description: 'Comprehensive quality check for mid-career professionals with detailed feedback and recommendations.',
            checkpoints: [
                'consistency of language',
                'right format',
                'grammatical mistakes',
                'career progression analysis',
                'achievement highlighting review',
                'industry-specific keyword optimization'
            ],
            packages: [
                { delivery: '2 days', price: '999', color: 'orange' },
                { delivery: '5 days', price: '799', color: 'purple' },
                { delivery: '8 days', price: '599', color: 'teal' }
            ]
        },
        senior: {
            title: 'Senior Level (8+ years)',
            description: 'Executive-level resume quality assessment with strategic positioning recommendations.',
            checkpoints: [
                'executive summary review',
                'leadership impact analysis',
                'strategic achievement highlighting',
                'industry positioning',
                'executive presence optimization',
                'board-ready formatting'
            ],
            packages: [
                { delivery: '2 days', price: '1,499', color: 'orange' },
                { delivery: '5 days', price: '1,199', color: 'purple' },
                { delivery: '8 days', price: '899', color: 'teal' }
            ]
        }
    };

    const visualResumePricing = {
        entry: {
            title: 'Entry Level (0 to 3 years)',
            description: 'Our team lets you quickly and easily build dynamic and secure online resumes that gets you noticed. Transform your word resume to a perfect organized representation of who you are.',
            content: 'Take our expert\'s advice over the telephone as well as over email and get your resume organized. Your visual CV can let your employer download your resume & cover letter, browse through your skills, thus increasing the calls of the right job.',
            packages: [
                { delivery: '2 days', price: '2,699', color: 'orange' },
                { delivery: '5 days', price: '2,199', color: 'purple' },
                { delivery: '8 days', price: '1,599', color: 'teal' }
            ]
        },
        mid: {
            title: 'Mid-Level (3 to 8 years)',
            description: 'Professional visual resume with enhanced design elements for experienced professionals.',
            content: 'Stand out with a professionally designed visual resume that showcases your career journey and achievements in an engaging format.',
            packages: [
                { delivery: '2 days', price: '3,499', color: 'orange' },
                { delivery: '5 days', price: '2,999', color: 'purple' },
                { delivery: '8 days', price: '2,499', color: 'teal' }
            ]
        },
        senior: {
            title: 'Senior Level (8+ years)',
            description: 'Executive visual resume with premium design and personal branding elements.',
            content: 'Create a powerful executive presence with our premium visual resume service designed for senior leaders.',
            packages: [
                { delivery: '2 days', price: '4,999', color: 'orange' },
                { delivery: '5 days', price: '4,499', color: 'purple' },
                { delivery: '8 days', price: '3,999', color: 'teal' }
            ]
        }
    };

    const teamMembers = [
        {
            name: 'Devika Ghosh',
            image: 'https://randomuser.me/api/portraits/women/45.jpg',
            bio: 'Devika is a B.Ed. and Masters in English Literature (Gold Medalist) from Jadavpur University. She is serving the recruitment area for about 10 years now with experience in end to end recruitment process, and CV writing. She is the overall incharge of the resume writing and has helped several professionals and job-seekers in getting the right job.',
            email: 'devika@careersatcore.com'
        },
        {
            name: 'Sarita Fernandes',
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            bio: 'Sarita Fernandes, has been in the field of Human Resources for over a decade. As a professional resume writer, Sarita believes that a resume is the most important document a candidate can own. In her opinion, resumes, when adapted to perfection enables prospective recruiters to have a preliminary silent and non verbal interview with candidates that could speak volumes about his/her potential and professional approach. Having written professional resumes for the Australian, USA, UK and gulf markets, Sarita is adept at writing resumes for various industries, and hierarchical levels, including IT, Medical, Aeronautical, Marine, Educational, Musical, etc and even for unskilled labourers. She intends to lend a new dimension and chart a ground breaking path in resume writing and career enhancement objectives.',
            email: 'sarita.fernandes@careersatcore.com'
        }
    ];

    const agreementTerms = [
        'The applicant shall certify that the data supplied by him / her to Core Careers Pvt. Ltd. is accurate and correct.',
        'The applicant shall give Core Careers Pvt. Ltd. Atleast the time frame mentioned in the package bought, for delivery of said resume. In case multiple drafts are required, the applicant shall agree to the time frame that will emerge thereafter.',
        'The applicant shall respond to all queries raised by Core Careers Pvt. Ltd. With regard to said resume within 24 hours, failing which the additional time will get added to the delivery time mentioned in your package.',
        'The subscription amount once paid for by the applicant is not refundable.',
        'The liability, if any, of Core Careers Pvt. Ltd. is limited to the extent of the amount paid by the applicant.',
        'Core Careers Pvt. Ltd. offers no guarantee nor warranties that there would be a satisfactory response or any response at all once the resume is written and used by the apply to apply for jobs.',
        'Core Careers Pvt. Ltd. shall not be held liable for loss of any data technical or otherwise, information, particulars supplied by applicant due to reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond Core Careers Pvt. Ltd.\'s reasonable control including but not limited to strikes, riots, civil unrest, Govt. policies, tampering of data by unauthorized persons like hackers, war and natural calamities.',
        'Core Careers Pvt. Ltd. reserves its right to reject any insertion or information/data provided by the applicant without assigning any reason.',
        'Core Careers Pvt. Ltd. will commence providing services only upon receipt of amount/charges upfront either from applicant or from a third party on behalf of the applicant.',
        'All disputes arising out of the transactions between a user and Core Careers Pvt. Ltd. will be resolved in accordance with the laws of India as applicable.',
        'All Disputes arising out of the transactions between a user and Core Careers Pvt. Ltd. will be subject to the jurisdiction of Courts situated in Kolkata alone.',
        'Content and Images (Visuals) in visual resume are provided by Applicant, unless specified by Core Careers Pvt. Ltd. Core Careers Pvt. Ltd. disclaims all warranties against infringement from said material.'
    ];

    return (
        <div className="resume-writing-page">
            {/* Page Header */}
            <section className="page-intro">
                <div className="page-intro-container">
                    <h1 className="page-intro-heading">RESUME WRITING</h1>
                    <div className="page-intro-divider"></div>
                </div>
            </section>

            <div className="page-layout">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-menu">
                        <div className="sidebar-title">Resume Writing</div>
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
                    {/* About Section */}
                    <section id="about" className="content-section">
                        <h2>About Resume Writing</h2>
                        <p className="highlight-text">
                            A resume is like an identity for a job seeker. Recruiters hardly spent 30 seconds on judging a resume and validating that candidate for the required position. In this case what you need is a professionally written resumes that will-
                        </p>
                        
                        <div className="resume-benefits">
                            <div className="benefit-item">
                                <span className="check-icon">✔</span>
                                <span>Customize your career objectives</span>
                            </div>
                            <div className="benefit-item">
                                <span className="check-icon">✔</span>
                                <span>Highlight your credentials</span>
                            </div>
                            <div className="benefit-item">
                                <span className="check-icon">✔</span>
                                <span>Project the areas required for the desired industry</span>
                            </div>
                            <div className="benefit-item">
                                <span className="check-icon">✔</span>
                                <span>Provide a dynamic, branded positioning statement</span>
                            </div>
                            <div className="benefit-item">
                                <span className="check-icon">✔</span>
                                <span>Enhance your accomplishments</span>
                            </div>
                            <div className="benefit-item">
                                <span className="check-icon">✔</span>
                                <span>Present a resume having clear, concise, strong, convincing and error free language</span>
                            </div>
                        </div>

                        <p>
                            In order to make a captivating impression, it is critically important to have a professionally written resume that will help a job seeker to stand out from the crowd. An expert written resume is like an advertisement. It acts as an effective marketing document in this competitive world.
                        </p>

                        <Link to="/contact" className="cta-button">Contact Us</Link>
                    </section>

                    {/* Text Resume Section */}
                    <section id="text-resume" className="content-section">
                        <h2>Text Resume</h2>
                        
                        <div className="level-tabs">
                            <button 
                                className={activeTab === 'entry' ? 'active' : ''} 
                                onClick={() => setActiveTab('entry')}
                            >
                                Entry Level<br/><small>(exp: 0 to 3 yrs)</small>
                            </button>
                            <button 
                                className={activeTab === 'mid' ? 'active' : ''} 
                                onClick={() => setActiveTab('mid')}
                            >
                                Mid-Level<br/><small>(exp: 3 to 8 year)</small>
                            </button>
                            <button 
                                className={activeTab === 'senior' ? 'active' : ''} 
                                onClick={() => setActiveTab('senior')}
                            >
                                Senior Level<br/><small>(exp: 8 to above year)</small>
                            </button>
                        </div>

                        <div className="level-content">
                            <h3 className="level-title">{textResumePricing[activeTab].title}</h3>
                            <p>{textResumePricing[activeTab].description}</p>
                            {textResumePricing[activeTab].content.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                            <p className="cover-letter-note">
                                <strong>Cover letter written in 2 days post approval and final delivery of your cv.</strong>
                            </p>
                        </div>

                        <div className="pricing-cards">
                            {textResumePricing[activeTab].packages.map((pkg, idx) => (
                                <div key={idx} className={`pricing-card ${pkg.color}`}>
                                    <div className="pricing-header">Delivery in {pkg.delivery}</div>
                                    <div className="pricing-features">
                                        <p>Cover letter</p>
                                        <p>Include 2 Printed Copies</p>
                                    </div>
                                    <div className="pricing-footer">
                                        <span className="price">INR {pkg.price}</span>
                                        <button className="book-btn">Book Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Resume Quality Check Section */}
                    <section id="resume-quality-check" className="content-section">
                        <h2>Resume Quality Check</h2>
                        
                        <div className="level-tabs">
                            <button 
                                className={activeTab === 'entry' ? 'active' : ''} 
                                onClick={() => setActiveTab('entry')}
                            >
                                Entry Level<br/><small>(exp: 0 to 3 yrs)</small>
                            </button>
                            <button 
                                className={activeTab === 'mid' ? 'active' : ''} 
                                onClick={() => setActiveTab('mid')}
                            >
                                Mid-Level<br/><small>(exp: 3 to 8 year)</small>
                            </button>
                            <button 
                                className={activeTab === 'senior' ? 'active' : ''} 
                                onClick={() => setActiveTab('senior')}
                            >
                                Senior Level<br/><small>(exp: 8 to above year)</small>
                            </button>
                        </div>

                        <div className="level-content">
                            <h3 className="level-title">{qualityCheckPricing[activeTab].title}</h3>
                            <p>{qualityCheckPricing[activeTab].description}</p>
                            <p>Take our expert's advice over the telephone as well as over email and get your resume checked for:</p>
                            
                            <div className="checkpoints-list">
                                {qualityCheckPricing[activeTab].checkpoints.map((point, idx) => (
                                    <div key={idx} className="checkpoint-item">
                                        <span className="check-icon">✔</span>
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>

                            <p>Any Resume is incomplete without a Cover Letter. It explains the context of your resume and highlights you as an individual. A cover letter is like a preface to a book.</p>
                            <p className="cover-letter-note">
                                <strong>Cover letter written in 2 days post approval and final delivery of your cv.</strong>
                            </p>
                        </div>

                        <div className="pricing-cards">
                            {qualityCheckPricing[activeTab].packages.map((pkg, idx) => (
                                <div key={idx} className={`pricing-card ${pkg.color}`}>
                                    <div className="pricing-header">Delivery in {pkg.delivery}</div>
                                    <div className="pricing-features">
                                        <p>Cover letter</p>
                                        <p>Include 2 Printed Copies</p>
                                    </div>
                                    <div className="pricing-footer">
                                        <span className="price">INR {pkg.price}</span>
                                        <button className="book-btn">Book Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Visual Resume Section */}
                    <section id="visual-resume" className="content-section">
                        <h2>Visual Resume</h2>
                        
                        <div className="level-tabs">
                            <button 
                                className={activeTab === 'entry' ? 'active' : ''} 
                                onClick={() => setActiveTab('entry')}
                            >
                                Entry Level<br/><small>(exp: 0 to 3 yrs)</small>
                            </button>
                            <button 
                                className={activeTab === 'mid' ? 'active' : ''} 
                                onClick={() => setActiveTab('mid')}
                            >
                                Mid-Level<br/><small>(exp: 3 to 8 year)</small>
                            </button>
                            <button 
                                className={activeTab === 'senior' ? 'active' : ''} 
                                onClick={() => setActiveTab('senior')}
                            >
                                Senior Level<br/><small>(exp: 8 to above year)</small>
                            </button>
                        </div>

                        <div className="level-content">
                            <h3 className="level-title">{visualResumePricing[activeTab].title}</h3>
                            <p>{visualResumePricing[activeTab].description}</p>
                            <p>{visualResumePricing[activeTab].content}</p>
                            <p>Any Resume is incomplete without a Cover Letter. It explains the context of your resume and highlights you as an individual. A cover letter is like a preface to a book.</p>
                        </div>

                        <div className="pricing-cards">
                            {visualResumePricing[activeTab].packages.map((pkg, idx) => (
                                <div key={idx} className={`pricing-card ${pkg.color}`}>
                                    <div className="pricing-header">Delivery in {pkg.delivery}</div>
                                    <div className="pricing-features">
                                        <p>Cover letter</p>
                                        <p>Include 2 Printed Copies</p>
                                    </div>
                                    <div className="pricing-footer">
                                        <span className="price">INR {pkg.price}</span>
                                        <button className="book-btn">Book Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Why Us Section */}
                    <section id="why-us" className="content-section">
                        <h2>Resume Writing - Why Us</h2>
                        
                        <h3 className="section-subtitle">Our People</h3>
                        
                        <div className="team-members">
                            {teamMembers.map((member, idx) => (
                                <div key={idx} className="team-member">
                                    <h4>{member.name}</h4>
                                    <div className="member-content">
                                        <img src={member.image} alt={member.name} className="member-image" />
                                        <p>{member.bio}</p>
                                    </div>
                                    <p className="member-email">
                                        <strong>Write to her:</strong> <a href={`mailto:${member.email}`}>{member.email}</a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Us Section */}
                    <section id="contact-us" className="content-section">
                        <h2>Contact Us</h2>
                        <p>Have questions about our resume writing services? Get in touch with us!</p>
                        
                        <div className="contact-info-cards">
                            <div className="contact-card">
                                <div className="contact-icon-wrapper email-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <h4>Email</h4>
                                    <p>info@careersatcore.com</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon-wrapper phone-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <h4>Phone</h4>
                                    <p>+91 98 3051 8296</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon-wrapper location-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <h4>Location</h4>
                                    <p>Kolkata, West Bengal, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-link">
                            <p>For detailed inquiries, please visit our contact page:</p>
                            <Link to="/contact" className="cta-button">Go to Contact Page</Link>
                        </div>
                    </section>

                    {/* Agreement Section */}
                    <section id="agreement" className="content-section">
                        <h2>Agreement</h2>
                        <p>Please read the following terms and conditions carefully before using our resume writing services:</p>
                        
                        <div className="agreement-terms">
                            {agreementTerms.map((term, idx) => (
                                <div key={idx} className="agreement-item">
                                    <span className="term-number">{idx + 1}.</span>
                                    <p>{term}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ResumeWriting;
