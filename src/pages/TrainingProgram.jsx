import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TrainingProgram.css';

const TrainingProgram = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('hr-training-program');
    const [activeTab, setActiveTab] = useState('benefits');
    const [activeSyllabusTab, setActiveSyllabusTab] = useState('recruiter-function');

    const sections = [
        { id: 'hr-training-program', label: 'HR Training Program' },
        { id: 'benefit-overview', label: 'Benefit & Overview' },
        { id: 'syllabus', label: 'Syllabus' },
        { id: 'faculty', label: 'Faculty' },
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

    return (
        <div className="training-program-page">
            {/* Page Header */}
            <section className="page-intro">
                <div className="page-intro-container">
                    <h1 className="page-intro-heading">Our Training Program</h1>
                    <div className="page-intro-divider"></div>
                </div>
            </section>

            <div className="page-layout">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-menu">
                        <div className="sidebar-title">Training Program</div>
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
                    {/* HR Training Program Section */}
                    <section id="hr-training-program" className="content-section">
                        <h2>HR Training Program</h2>
                        <p>
                            Core Careers Pvt. Ltd. (CCPL), A Kolkata based registered Pvt. Ltd. Company. From 2002 onwards, we are functioning as professional Placement Consultants, who have a large number of clients all over India (Man-power requirements). Core Careers Providing Professional HR Training Course -
                        </p>
                        
                        <div className="training-intro-content">
                            <div className="training-image-wrapper">
                                <img 
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop" 
                                    alt="HR Training" 
                                    className="training-intro-image"
                                />
                            </div>
                            <div className="training-features">
                                <ul className="check-list">
                                    <li>Over a 3 month long intensive training programmes</li>
                                    <li>Propose to train serious students and convert them to professionally competent Executives.</li>
                                    <li>Weekly Full Day On-Job Training Workshop</li>
                                    <li>A perfect course for Fresh Graduate students, from any discipline</li>
                                    <li>Enhance your accomplishments</li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            Core Careers Pvt Ltd a premier Recruitment and staffing solutions company. We have training process mentioned below to ensure smooth end to end RECRUITMENT skill. We are having opportunity of training and get a proper employment with our company as well as other projects too. After intensive training, the best few may be absorbed at Core Careers Pvt. Ltd. Itself. Others will receive free campus interviews.
                        </p>

                        <div className="cta-box">
                            <button className="cta-button">Admission Going On... Apply Now!</button>
                        </div>
                    </section>

                    {/* Benefit & Overview Section */}
                    <section id="benefit-overview" className="content-section">
                        <h2>Our Training Program - Benefit & Overview</h2>
                        
                        <div className="tab-navigation">
                            <button 
                                className={activeTab === 'benefits' ? 'active' : ''} 
                                onClick={() => setActiveTab('benefits')}
                            >
                                Benefit
                            </button>
                            <span className="tab-divider">|</span>
                            <button 
                                className={activeTab === 'overview' ? 'active' : ''} 
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </button>
                        </div>

                        {activeTab === 'benefits' && (
                            <div className="tab-content">
                                <ul className="check-list">
                                    <li>Human resources are the lifeblood of many businesses. They are fundamental to any company's success.</li>
                                    <li>This course will teach you to see people as assets, improve performance, achieve competitive advantage, practical implementation, and get everyone to work together.</li>
                                    <li>These programmes will enhance your HR industry knowledge, lead to new career opportunities, add value to your organisation, and result in a respected accreditation for a professional HR practitioner.</li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'overview' && (
                            <div className="tab-content">
                                <ul className="check-list">
                                    <li>Programmes of study will cover a wide range of topics, and are focused on bringing students up to date with the latest thinking and research on key HR sectors. As an introduction to human resources it will provide you with a detailed understanding of all aspects of the field. This will be done through coursework assignments, case studies, practical examples and workshop sessions.</li>
                                    <li>At every stage of their studies students will receive the full support of expert trainers, as well as regular feedback from them. Apart from teaching you they will also be available to give you helpful career advice.</li>
                                    <li>Through a high standard of training you will be fully prepared to respond to and anticipate the strategic and operational challenges a HR department faces. Students will be equipped with the skills and techniques needed to ensure staff perform to the peak of their abilities. Ultimately you will be able to deliver a level of HR performance that enhances your organisation.</li>
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Syllabus Section */}
                    <section id="syllabus" className="content-section">
                        <h2>Our Training Program - Syllabus</h2>
                        
                        <div className="syllabus-intro">
                            <h3>Training material-</h3>
                            <p>You will be given excellent training material that covers all the course modules in detail, as well as useful online resources and course assignments.</p>
                        </div>

                        <h3 className="syllabus-heading">Typical subjects taught on a HR training course</h3>
                        
                        <div className="syllabus-tabs">
                            <button 
                                className={activeSyllabusTab === 'recruiter-function' ? 'active' : ''} 
                                onClick={() => setActiveSyllabusTab('recruiter-function')}
                            >
                                Recruiter Function
                            </button>
                            <span className="tab-divider">|</span>
                            <button 
                                className={activeSyllabusTab === 'other-functions' ? 'active' : ''} 
                                onClick={() => setActiveSyllabusTab('other-functions')}
                            >
                                Other Functions
                            </button>
                            <span className="tab-divider">|</span>
                            <button 
                                className={activeSyllabusTab === 'payroll-functions' ? 'active' : ''} 
                                onClick={() => setActiveSyllabusTab('payroll-functions')}
                            >
                                Payroll Functions
                            </button>
                            <span className="tab-divider">|</span>
                            <button 
                                className={activeSyllabusTab === 'compliance' ? 'active' : ''} 
                                onClick={() => setActiveSyllabusTab('compliance')}
                            >
                                Compliance
                            </button>
                        </div>

                        {activeSyllabusTab === 'recruiter-function' && (
                            <div className="syllabus-content">
                                <ul className="check-list">
                                    <li>Recruitment</li>
                                    <li>Recruitment Policy and implementation</li>
                                    <li>Manpower planning</li>
                                    <li>pre screening interview (over the phone)</li>
                                    <li>Face to face interview</li>
                                    <li>post recruitment and joining</li>
                                    <li>Documents</li>
                                    <li>Induction</li>
                                    <li>Job portals</li>
                                    <li>Headhunting</li>
                                    <li>Other recruitment process</li>
                                    <li>Recruitment tracker</li>
                                </ul>
                            </div>
                        )}

                        {activeSyllabusTab === 'other-functions' && (
                            <div className="syllabus-content">
                                <ul className="check-list">
                                    <li>Performance</li>
                                    <li>Management and Appraisal</li>
                                    <li>SWOT (STRENGTH, WEEKNESS, OPPORTUNITY, THREATS) analysis</li>
                                    <li>Appointment Letter</li>
                                    <li>HrDashbord</li>
                                    <li>Hr audit</li>
                                    <li>Attrition Management</li>
                                </ul>
                            </div>
                        )}

                        {activeSyllabusTab === 'payroll-functions' && (
                            <div className="syllabus-content">
                                <ul className="check-list">
                                    <li>Salary Components</li>
                                    <li>CTC designing</li>
                                    <li>Salary processing</li>
                                    <li>Attendance systems</li>
                                    <li>F and F settlement</li>
                                    <li>PF, ESIC, PROFESSIONAL TAX, INCOME TAX</li>
                                    <li>Over time wages</li>
                                </ul>
                            </div>
                        )}

                        {activeSyllabusTab === 'compliance' && (
                            <div className="syllabus-content">
                                <ul className="check-list">
                                    <li>EPF, ESI calculations</li>
                                    <li>various forms</li>
                                    <li>challans and returns</li>
                                    <li>Gratuity Act</li>
                                    <li>Equal remuneration act</li>
                                    <li>workmen compensation act</li>
                                    <li>other legal act rules and regulations</li>
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Faculty Section */}
                    <section id="faculty" className="content-section">
                        <h2>Our Training Program - Faculty</h2>
                        
                        <div className="faculty-members">
                            <div className="faculty-member">
                                <h4 className="faculty-name">Prof.(Dr.) P.K.Ghosh</h4>
                                <p className="faculty-description">
                                    <strong>Theoretical part: Foundation of Management:</strong> Prof.(Dr.) P.K.Ghosh. B.CHE, AMICHE, FELLOW IN MANAGEMENT, IIM, AHMEDABAD (1973-'77 BATCH), 40 years teaching and training experience
                                </p>
                                <p className="faculty-email">
                                    <strong>Email:</strong> <a href="mailto:prasantaghos@gmail.com">prasantaghos@gmail.com</a>
                                </p>
                            </div>

                            <div className="faculty-member">
                                <h4 className="faculty-name">Mr. Rajiv Ghosh, CEO</h4>
                                <p className="faculty-description">
                                    28 year long experience in recruitment / all Placement activities.
                                </p>
                                <p className="faculty-email">
                                    <strong>Email:</strong> <a href="mailto:rajiv@careersatcore.com">rajiv@careersatcore.com</a>
                                </p>
                            </div>

                            <div className="faculty-member">
                                <h4 className="faculty-name">Ms. Ayesha Parveen</h4>
                                <p className="faculty-description">
                                    Professional HR Trainer and Recruiter.
                                </p>
                                <p className="faculty-email">
                                    <strong>Email:</strong> <a href="mailto:coreparveen@gmail.com">coreparveen@gmail.com</a>
                                </p>
                            </div>

                            <div className="faculty-member">
                                <h4 className="faculty-name">Ms. Dhrupadi Dutta Roy</h4>
                                <p className="faculty-description">
                                    Professional HR Trainer and Recruiter.
                                </p>
                                <p className="faculty-email">
                                    <strong>Email:</strong> <a href="mailto:core.dhrupadi@gmail.com">core.dhrupadi@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default TrainingProgram;
