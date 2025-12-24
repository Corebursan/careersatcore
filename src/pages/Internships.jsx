import React from 'react';
import './Internships.css';

const Internships = () => {
    return (
        <div className="internships-page">
            {/* Page Header */}
            <section className="page-intro">
                <div className="page-intro-container">
                    <h1 className="page-intro-heading">INTERNSHIPS</h1>
                    <div className="page-intro-divider"></div>
                </div>
            </section>

            <div className="page-layout">
                {/* Main Content */}
                <main className="main-content full-width">
                    {/* Benefits Section */}
                    <section className="content-section">
                        <h2>BENEFITS</h2>
                        <div className="three-column-grid">
                            <div className="column-item">
                                <h4 className="column-title students">STUDENTS</h4>
                                <ul className="check-list">
                                    <li>Know whether you are truly interested in the subject you are studying.</li>
                                    <li>Get challenging assignments to prove your talent.</li>
                                    <li>Add value to your resume before applying for a job.</li>
                                </ul>
                            </div>
                            <div className="column-item">
                                <h4 className="column-title colleges">COLLEGES</h4>
                                <ul className="check-list">
                                    <li>Place your college students before they complete studies.</li>
                                    <li>Add value to your institution name</li>
                                    <li>Add value to the course curriculum</li>
                                </ul>
                            </div>
                            <div className="column-item">
                                <h4 className="column-title employers">EMPLOYERS</h4>
                                <ul className="check-list">
                                    <li>Hire interns for a fresh perspective (for clients who are hiring Interns for the first time).</li>
                                    <li>Induce energy of new generation into your workplace.</li>
                                    <li>Cost savings.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Capabilities Section */}
                    <section className="content-section">
                        <h2>CAPABILITIES</h2>
                        <div className="three-column-grid">
                            <div className="column-item">
                                <h4 className="column-title students">STUDENTS</h4>
                                <ul className="check-list">
                                    <li>Our <strong>proprietary technology</strong> of online test gives you the scope to show your talent.</li>
                                </ul>
                            </div>
                            <div className="column-item">
                                <h4 className="column-title colleges">COLLEGES</h4>
                                <ul className="check-list">
                                    <li>Upload all your students CVs and view progress.</li>
                                    <li>You can check their online test performance and evaluate them via our <strong>proprietary software</strong> tools.</li>
                                </ul>
                            </div>
                            <div className="column-item">
                                <h4 className="column-title employers">EMPLOYERS</h4>
                                <ul className="check-list">
                                    <li>Evaluate the candidates before recruiting through our <strong>proprietary software</strong> tools.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Services Offered Section */}
                    <section className="content-section">
                        <h2>SERVICES OFFERED</h2>
                        <div className="three-column-grid">
                            <div className="column-item">
                                <h4 className="column-title students">STUDENTS</h4>
                                <ul className="check-list">
                                    <li>Our consultants help search the jobs for you.</li>
                                    <li>We send your projects, assignments to the top recruiters.</li>
                                    <li>Our consultants guide you till you join an organization.</li>
                                </ul>
                            </div>
                            <div className="column-item">
                                <h4 className="column-title colleges">COLLEGES</h4>
                                <ul className="check-list">
                                    <li>On performance basis we place as many students as possible.</li>
                                    <li>Our consultants constantly coordinate with your students.</li>
                                </ul>
                            </div>
                            <div className="column-item">
                                <h4 className="column-title employers">EMPLOYERS</h4>
                                <ul className="check-list">
                                    <li>Special search assistance gives you screened candidates.</li>
                                    <li>Online test cut shorts your interview time via our <strong>proprietary software tools</strong>.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section className="content-section">
                        <h2>PRICING</h2>
                        <p className="pricing-note">(Only applicable to employers)</p>
                        <div className="internship-pricing-grid">
                            <div className="internship-price-card">
                                <div className="price-header teal">BRONZE</div>
                                <div className="price-body">
                                    <p>Validity 1 month</p>
                                    <p>10 fulfilled applications</p>
                                    <p>4 at a time</p>
                                    <p>unlimited hires during this period</p>
                                </div>
                                <div className="price-footer">
                                    <span className="price-amount">INR 1,799</span>
                                    <button className="book-now-btn explore-btn">BOOK NOW →</button>
                                </div>
                            </div>
                            <div className="internship-price-card">
                                <div className="price-header teal">SILVER</div>
                                <div className="price-body">
                                    <p>Validity 2 month</p>
                                    <p>10 fulfilled applications</p>
                                    <p>4 at a time</p>
                                    <p>unlimited hires during this period</p>
                                </div>
                                <div className="price-footer">
                                    <span className="price-amount">INR 2,999</span>
                                    <button className="book-now-btn explore-btn">BOOK NOW →</button>
                                </div>
                            </div>
                            <div className="internship-price-card">
                                <div className="price-header teal">PEARL</div>
                                <div className="price-body">
                                    <p>Validity 2 month</p>
                                    <p>10 fulfilled applications</p>
                                    <p>5 at a time</p>
                                    <p>unlimited hires during this period</p>
                                </div>
                                <div className="price-footer">
                                    <span className="price-amount">INR 3,999</span>
                                    <button className="book-now-btn explore-btn">BOOK NOW →</button>
                                </div>
                            </div>
                            <div className="internship-price-card">
                                <div className="price-header teal">GOLD</div>
                                <div className="price-body">
                                    <p>Validity 6 month</p>
                                    <p>10 fulfilled applications</p>
                                    <p>6 at a time</p>
                                    <p>unlimited hires during this period</p>
                                </div>
                                <div className="price-footer">
                                    <span className="price-amount">INR 5,999</span>
                                    <button className="book-now-btn explore-btn">BOOK NOW →</button>
                                </div>
                            </div>
                            <div className="internship-price-card">
                                <div className="price-header teal">DIAMOND</div>
                                <div className="price-body">
                                    <p>Validity 9 month</p>
                                    <p>10 fulfilled applications</p>
                                    <p>6 at a time</p>
                                    <p>unlimited hires during this period</p>
                                </div>
                                <div className="price-footer">
                                    <span className="price-amount">INR 6,999</span>
                                    <button className="book-now-btn explore-btn">BOOK NOW →</button>
                                </div>
                            </div>
                            <div className="internship-price-card">
                                <div className="price-header teal">PLATINUM</div>
                                <div className="price-body">
                                    <p>Validity 1 year</p>
                                    <p>10 fulfilled applications</p>
                                    <p>6 at a time</p>
                                    <p>unlimited hires during this period</p>
                                </div>
                                <div className="price-footer">
                                    <span className="price-amount">INR 7,999</span>
                                    <button className="book-now-btn explore-btn">BOOK NOW →</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Internships;
