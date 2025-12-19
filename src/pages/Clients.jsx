import React from 'react';
import './Clients.css';

const Clients = () => {
    const clientCategories = [
        {
            name: 'IT & Technology',
            clients: ['Tech Solutions Ltd', 'Digital Innovations', 'CloudTech Systems', 'DataCore Analytics']
        },
        {
            name: 'Manufacturing',
            clients: ['Steel Industries', 'Auto Components Ltd', 'Precision Engineering', 'Metal Works Corp']
        },
        {
            name: 'Banking & Finance',
            clients: ['National Bank', 'Finance Solutions', 'Investment Group', 'Insurance Partners']
        },
        {
            name: 'Healthcare',
            clients: ['City Hospital', 'Medical Center', 'Pharma Ltd', 'Health Services']
        },
        {
            name: 'Retail & E-commerce',
            clients: ['Retail Chain', 'Online Mart', 'Fashion Hub', 'Electronics Store']
        },
        {
            name: 'Hospitality',
            clients: ['Hotel Group', 'Restaurant Chain', 'Travel Services', 'Event Management']
        }
    ];

    const stats = [
        { value: '1000+', label: 'Happy Clients' },
        { value: '50+', label: 'Industries Served' },
        { value: '98%', label: 'Client Retention' },
        { value: '4.8/5', label: 'Client Satisfaction' }
    ];

    return (
        <div className="clients-page">
            <div className="page-banner">
                <div className="banner-content">
                    <h1>Our Clients</h1>
                    <p>Trusted by leading organizations across industries</p>
                </div>
            </div>

            <div className="clients-container">
                {/* Stats Section */}
                <section className="clients-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </section>

                {/* Intro Section */}
                <section className="clients-intro">
                    <h2>Our Valued Partners</h2>
                    <p>
                        At Core Career, we are proud to partner with some of the most respected organizations across various industries. 
                        Our commitment to quality and understanding of diverse business needs has helped us build lasting relationships 
                        with our clients over the years.
                    </p>
                </section>

                {/* Client Categories */}
                <section className="clients-categories">
                    {clientCategories.map((category, index) => (
                        <div key={index} className="category-card">
                            <h3>{category.name}</h3>
                            <ul>
                                {category.clients.map((client, idx) => (
                                    <li key={idx}>
                                        <span className="client-icon">🏢</span>
                                        {client}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Client Testimonials */}
                <section className="client-testimonials">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonials-slider">
                        <div className="testimonial-slide">
                            <div className="testimonial-text">
                                "Core Career has been instrumental in helping us build our engineering team. Their understanding of technical requirements is exceptional."
                            </div>
                            <div className="testimonial-author">
                                <strong>Vikram Singh</strong>
                                <span>CTO, Tech Solutions Ltd</span>
                            </div>
                        </div>
                        <div className="testimonial-slide">
                            <div className="testimonial-text">
                                "The bulk hiring solution from Core Career helped us staff our new manufacturing plant within tight deadlines. Highly recommended!"
                            </div>
                            <div className="testimonial-author">
                                <strong>Priya Mehta</strong>
                                <span>HR Head, Steel Industries</span>
                            </div>
                        </div>
                        <div className="testimonial-slide">
                            <div className="testimonial-text">
                                "Professional service and quality candidates. Core Career understands our healthcare staffing needs perfectly."
                            </div>
                            <div className="testimonial-author">
                                <strong>Dr. Rajesh Kumar</strong>
                                <span>Director, City Hospital</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="clients-cta">
                    <h2>Become Our Partner</h2>
                    <p>Join our growing list of satisfied clients and experience the Core Career difference.</p>
                    <a href="/contact" className="btn btn-primary">Contact Us Today</a>
                </section>
            </div>
        </div>
    );
};

export default Clients;
