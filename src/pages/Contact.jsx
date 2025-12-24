import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Head Office',
            content: 'Kolkata, West Bengal, India'
        },
        {
            icon: '📞',
            title: 'Phone',
            content: '+91 98 3051 8296'
        },
        {
            icon: '✉️',
            title: 'Email',
            content: 'info@careersatcore.com'
        },
        {
            icon: '⏰',
            title: 'Business Hours',
            content: 'Mon - Sat: 9:00 AM - 6:00 PM'
        }
    ];

    const branches = [
        { city: 'Mumbai', address: 'Andheri West, Mumbai' },
        { city: 'Delhi', address: 'Connaught Place, New Delhi' },
        { city: 'Bangalore', address: 'Koramangala, Bangalore' },
        { city: 'Chennai', address: 'T. Nagar, Chennai' },
        { city: 'Hyderabad', address: 'Banjara Hills, Hyderabad' },
        { city: 'Pune', address: 'Kothrud, Pune' }
    ];

    return (
        <div className="contact-page">
            {/* Contact Introduction */}
            <section className="page-intro">
                <div className="page-intro-container">
                    <h1 className="page-intro-heading">CONTACT US</h1>
                    <div className="page-intro-divider"></div>
                    <p>Get in touch with us for any queries or support</p>
                </div>
            </section>

            <div className="contact-container">
                <div className="contact-grid">
                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h2>Get In Touch</h2>
                        <p>
                            Have questions about our services? Want to partner with us? 
                            We'd love to hear from you. Reach out to us through any of the following channels.
                        </p>

                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-card">
                                    <span className="contact-icon">{info.icon}</span>
                                    <div className="contact-details">
                                        <h4>{info.title}</h4>
                                        <p>{info.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-links">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                                <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                                <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
                                <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="recruitment">Recruitment Services</option>
                                        <option value="job">Job Application</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Type your message here..."
                                    rows="5"
                                />
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Branch Offices */}
                <section className="branches-section">
                    <h2>Our Branch Offices</h2>
                    <div className="branches-grid">
                        {branches.map((branch, index) => (
                            <div key={index} className="branch-card">
                                <h4>{branch.city}</h4>
                                <p>{branch.address}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Map Section */}
                <section className="map-section">
                    <h2>Find Us</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps?q=22.5157808,88.3865064&hl=en&z=16&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Core Careers Location - Vindhya Heights, Kolkata"
                        ></iframe>
                        <div className="map-info">
                            <p className="map-address">
                                <strong>Vindhya Heights</strong><br />
                                Kolkata, West Bengal, India
                            </p>
                            <a 
                                href="https://www.google.com/maps/place/Vindhya+Heights/@22.515658,88.386549,16z/data=!4m14!1m7!3m6!1s0x3a02714b504e82e9:0x5071755ef2fd7e3!2sVindhya+Heights!8m2!3d22.5157808!4d88.3865064!16s%2Fg%2F11b6jgnf4_!3m5!1s0x3a02714b504e82e9:0x5071755ef2fd7e3!8m2!3d22.5157808!4d88.3865064!16s%2Fg%2F11b6jgnf4_?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link"
                            >
                                View on Google Maps →
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>How do I register as a job seeker?</h4>
                            <p>Simply click on the "Register" button in the navigation menu and select "Job Seeker" to create your profile.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Is registration free?</h4>
                            <p>Yes, registration is completely free for job seekers and students. Employers can contact us for pricing details.</p>
                        </div>
                        <div className="faq-item">
                            <h4>How long does the recruitment process take?</h4>
                            <p>The timeline varies based on the position and requirements. Typically, we aim to complete the process within 2-4 weeks.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you provide training services?</h4>
                            <p>Yes, we offer various training programs including technical skills, soft skills, and industry certifications.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
