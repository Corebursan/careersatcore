import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    
    // Services carousel state - continuous circular sliding
    const [servicesTranslate, setServicesTranslate] = useState(0);
    const [isServicesPaused, setIsServicesPaused] = useState(false);
    const [isServicesTransitioning, setIsServicesTransitioning] = useState(true);
    
    // Sidebar state
    const [othersExpanded, setOthersExpanded] = useState(false);

    // Sidebar menu items
    const sidebarItems = [
        { label: 'Company Profile', link: '/about-us#company-profile' },
        { label: 'Why Core', link: '/about-us#why-core' },
        { label: 'Recruitment Process', link: '/about-us#recruitment-process' },
        { label: 'Testimonials', link: '/about-us#client-testimonials' },
        { label: 'View/Apply Jobs', link: '/jobs' },
        { label: 'Our Clients', link: '/clients' },
        { label: 'Student', link: '/register?type=student' },
        { label: 'Employer', link: '/register?type=employer' },
        { label: 'Job Seeker', link: '/register?type=jobseeker' },
        { label: 'Resume Writing', link: '/services#resume-writing' },
        { label: 'Login/Register', link: '/register' },
        { label: 'Jobs', link: '/jobs' },
    ];

    const othersSubItems = [
        { label: 'Information Technology', link: '/jobs?category=it' },
        { label: 'BPO', link: '/jobs?category=bpo' },
        { label: 'Manufacturing', link: '/jobs?category=manufacturing' },
        { label: 'Retail', link: '/jobs?category=retail' },
        { label: 'Education', link: '/jobs?category=education' },
        { label: 'Banking & Financial', link: '/jobs?category=banking' },
        { label: 'Chemical', link: '/jobs?category=chemical' },
        { label: 'FMCG', link: '/jobs?category=fmcg' },
        { label: 'Real Estate', link: '/jobs?category=realestate' },
        { label: 'Hotel Infrastructure', link: '/jobs?category=hotel' },
        { label: 'Healthcare', link: '/jobs?category=healthcare' },
    ];

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
            title: 'You Get',
            subtitle: 'Total solution specialist for all your recruiting need',
            highlights: [
                { left: 'Serving 1000+ clients', right: 'Clients across industry, functions, levels' },
                { left: 'Salary levels of 1 lac to 1.5 crore', right: 'Several value added services' },
                { left: 'Serve job seekers at 800+ locations', right: 'Shape careers. Don\'t just get you jobs.' }
            ]
        },
        {
            title: 'Blue Collars',
            subtitle: 'Find jobs for maids, drivers, delivery boys.',
            highlights: [
                { left: 'Background verified workers', right: 'Blue collars at your desired location' }
            ]
        },
        {
            title: 'Internships',
            subtitle: 'Upgrade yourself this semester',
            highlights: [
                { left: 'Target India and in international market', right: 'Start earning while you are in college' },
                { left: 'Connect with leading organizations', right: 'Absolutely free for students' }
            ]
        },
        {
            title: 'Questionnaire',
            subtitle: '',
            highlights: [
                { left: 'Answer proprietary questionnaires', right: 'Get direct access to recruiters' },
                { left: 'Get your professional skills evaluated', right: 'Ensure maximum attention of recruiters' }
            ]
        },
        {
            title: 'Resume Writing',
            subtitle: 'Specialized interview-winning result oriented professional resume',
            highlights: [
                { left: '2 years+ experience', right: 'Quick delivery within two business days' },
                { left: 'Professionally done cover letter', right: 'Instant Impression on Employers' }
            ]
        }
    ];

    // Function to go to next slide
    const goToSlide = (nextIndex) => {
        if (isAnimating || nextIndex === currentSlide) return;
        
        setIsAnimating(true);
        setPrevSlide(currentSlide);
        setCurrentSlide(nextIndex);
        
        // Reset animation state after transition completes
        setTimeout(() => {
            setIsAnimating(false);
            setPrevSlide(null);
        }, 500);
    };

    // Auto-slide every 2 seconds (pauses on hover)
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            goToSlide((currentSlide + 1) % heroSlides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentSlide, heroSlides.length, isAnimating, isPaused]);

    const handleDotClick = (index) => {
        goToSlide(index);
    };

    // Pause on hover
    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    // Resume on mouse leave
    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    // Get slide class based on its state
    const getSlideClass = (index) => {
        if (index === currentSlide) return 'hero-slide active slide-in';
        if (index === prevSlide) return 'hero-slide slide-out';
        return 'hero-slide';
    };

    // Services data
    const services = [
        {
            id: 'permanent-recruitment',
            icon: '🔍',
            title: 'RECRUITMENT FOR EMPLOYERS',
            description: 'Core Careers, one of the best manpower consultancy firms in India, provides complete recruitment services to more than 500 clients across the country.'
        },
        {
            id: 'bulk-hiring',
            icon: '👥',
            title: 'BULK HIRING',
            description: 'Core helps you put your team together. A mix of traditional methods and technology helps you reach the best talent in the market.'
        },
        {
            id: 'outsourcing',
            icon: '🔄',
            title: 'OUTSOURCING',
            description: 'Core helps you fill the position in time, and for just as long, as you need to.'
        },
        {
            id: 'blue-collar',
            icon: '🏠',
            title: 'BLUE COLLARS',
            description: 'Finding a good and trustworthy domestic worker is a full time task. Core helps you find skilled workers for your home, office & factory effortlessly through our network.'
        },
        {
            id: 'internships',
            icon: '🧪',
            title: 'RECRUITMENT FOR INTERNS',
            description: 'Core helps you find smart and talented interns for your new projects. You could retain them as full time employees.'
        },
        {
            id: 'recruitment-job-seekers',
            icon: '🚩',
            title: 'RECRUITMENT FOR JOB SEEKERS',
            description: 'Core Careers, a reputed placement agency having footprint in Kolkata, Mumbai and Bangalore, helps you find the right job at the right place on the right time through its special job search assistance.'
        },
        {
            id: 'training-program',
            icon: '📋',
            title: 'TRAINING',
            description: 'Core enters into partnership with leading training institutes and provides training programs that add value to your career.'
        },
        {
            id: 'resume-writing',
            icon: '👍',
            title: 'RESUME WRITING',
            description: 'Take our expert advice over the phone or via email and get your resume upgraded to professional industry standards.'
        }
    ];

    // Card width for sliding calculation (230px card + 20px margin = 250px total)
    const cardWidth = 250;

    // Services continuous circular sliding
    useEffect(() => {
        if (isServicesPaused || services.length <= 4) return;

        const interval = setInterval(() => {
            setServicesTranslate(prev => {
                const newTranslate = prev + cardWidth;
                // When we've scrolled through all original cards, reset seamlessly
                if (newTranslate >= cardWidth * services.length) {
                    // Instant reset without transition
                    setIsServicesTransitioning(false);
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            setIsServicesTransitioning(true);
                        });
                    });
                    return 0;
                }
                return newTranslate;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isServicesPaused, services.length, cardWidth]);

    // Services hover handlers
    const handleServicesMouseEnter = () => {
        setIsServicesPaused(true);
    };

    const handleServicesMouseLeave = () => {
        setIsServicesPaused(false);
    };

    // Manual navigation for services carousel
    const handleServicesPrev = () => {
        setServicesTranslate(prev => {
            const newTranslate = prev - cardWidth;
            if (newTranslate < 0) {
                // Jump to end instantly
                setIsServicesTransitioning(false);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsServicesTransitioning(true);
                    });
                });
                return cardWidth * (services.length - 1);
            }
            return newTranslate;
        });
    };

    const handleServicesNext = () => {
        setServicesTranslate(prev => {
            const newTranslate = prev + cardWidth;
            if (newTranslate >= cardWidth * services.length) {
                // Jump to start instantly
                setIsServicesTransitioning(false);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsServicesTransitioning(true);
                    });
                });
                return 0;
            }
            return newTranslate;
        });
    };

    return (
        <>
        <div className="home-page">
            {/* Sidebar */}
            <aside className="home-sidebar">
                <ul className="sidebar-menu">
                    {sidebarItems.map((item, index) => (
                        <li key={index} className="sidebar-item">
                            <Link to={item.link} className="sidebar-link">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="sidebar-item has-submenu">
                        <button 
                            className={`sidebar-link sidebar-toggle ${othersExpanded ? 'expanded' : ''}`}
                            onClick={() => setOthersExpanded(!othersExpanded)}
                        >
                            Others
                            <span className="toggle-icon">{othersExpanded ? '−' : '+'}</span>
                        </button>
                        {othersExpanded && (
                            <ul className="sidebar-submenu">
                                {othersSubItems.map((subItem, subIndex) => (
                                    <li key={subIndex} className="submenu-item">
                                        <Link to={subItem.link} className="submenu-link">
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="home-main-content">
            {/* Hero Section */}
            <section 
                className="hero-section"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="hero-container">
                    {/* Image Grid */}
                    <div className="image-grid">
                        {teamImages.map((img, index) => (
                            <div key={index} className="image-item">
                                <img src={img} alt={`Team member ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    {/* Hero Content - Carousel */}
                    <div className="hero-content">
                        <div className="hero-carousel">
                            {heroSlides.map((slide, index) => (
                                <div 
                                    key={index} 
                                    className={getSlideClass(index)}
                                >
                                    <h1 className="hero-title">{slide.title}</h1>
                                    {slide.subtitle && (
                                        <p className="hero-subtitle-text">{slide.subtitle}</p>
                                    )}
                                    <div className="hero-highlights-grid">
                                        {slide.highlights.map((highlight, hIndex) => (
                                            <div key={hIndex} className="highlight-row">
                                                <span className="highlight-tag red">
                                                    &gt; {highlight.left}
                                                </span>
                                                <span className="highlight-tag red">
                                                    &gt; {highlight.right}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="carousel-dots">
                        {heroSlides.map((_, index) => (
                            <span 
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
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
                    <h2 className="services-section-title">Our Services</h2>
                    <div 
                        className="services-carousel-container"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                    >
                        <button className="carousel-arrow carousel-arrow-left" onClick={handleServicesPrev}>
                            &#10094;
                        </button>
                        <div className="services-carousel-wrapper">
                            <div 
                                className={`services-carousel ${isServicesTransitioning ? 'transitioning' : ''}`}
                                style={{ transform: `translateX(-${servicesTranslate}px)` }}
                            >
                                {/* Original cards */}
                                {services.map((service, index) => (
                                    <Link 
                                        to={`/services#${service.id}`} 
                                        key={index} 
                                        className="service-card-new"
                                    >
                                        <div className="service-icon-new">{service.icon}</div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <span className="read-more-btn">Read more</span>
                                    </Link>
                                ))}
                                {/* Duplicated cards for seamless loop */}
                                {services.slice(0, 4).map((service, index) => (
                                    <Link 
                                        to={`/services#${service.id}`} 
                                        key={`dup-${index}`} 
                                        className="service-card-new"
                                    >
                                        <div className="service-icon-new">{service.icon}</div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <span className="read-more-btn">Read more</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <button className="carousel-arrow carousel-arrow-right" onClick={handleServicesNext}>
                            &#10095;
                        </button>
                    </div>
                </div>
            </section>
            </main>
        </div>

        {/* Full Width Sections - Outside Sidebar */}
        {/* Why Choose Us */}
        <section className="why-choose-section full-width-section">
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
                        <div className="feature-number">25+</div>
                        <div className="feature-text">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta full-width-section">
            <div className="contact-cta-container">
                <h2>Ready to find your perfect career match?</h2>
                <p>Get in touch with us today and let us help you achieve your goals.</p>
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
        </section>
        </>
    );
};

export default Home;
