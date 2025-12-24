import React, { useState } from 'react';
import './BlueCollar.css';
import EmployeeForm from './BlueCollarForms/EmployeeForm';
import EmployerForm from './BlueCollarForms/EmployerForm';
import HelpSomeoneForm from './BlueCollarForms/HelpSomeoneForm';

const BlueCollar = () => {
    const [showForm, setShowForm] = useState(null); // 'employee', 'employer', 'help'

    const handleFormClose = () => {
        setShowForm(null);
    };

    return (
        <div className="blue-collar-page">
            {!showForm ? (
                <>
                    {/* Page Header */}
                    <section className="page-intro">
                        <div className="page-intro-container">
                            <h1 className="page-intro-heading">Blue Collar Hiring</h1>
                            <div className="page-intro-divider"></div>
                        </div>
                    </section>

                    <div className="page-layout">
                        <main className="main-content full-width">
                            {/* Benefits Section */}
                            <section className="content-section">
                                <h2>BENEFITS</h2>
                                <div className="two-column-grid">
                                    <div className="column-item">
                                        <h4 className="column-title job-seeker">JOB SEEKER</h4>
                                        <ul className="check-list">
                                            <li>Get job online and on your mobile</li>
                                            <li>get jobs according to your preferred location</li>
                                            <li>and according to your desired salary</li>
                                            <li>be registered with us for job offers throughout your career</li>
                                        </ul>
                                    </div>
                                    <div className="column-item">
                                        <h4 className="column-title employers">Employers</h4>
                                        <ul className="check-list">
                                            <li>get informal workers online</li>
                                            <li>Get our consultants to shortlist candidates for you and organize interviews through to recruitment</li>
                                            <li>choose one from many (according to your choice)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Capabilities Section */}
                            <section className="content-section">
                                <h2>CAPABILITIES</h2>
                                <div className="two-column-grid">
                                    <div className="column-item">
                                        <h4 className="column-title job-seeker">JOB SEEKER</h4>
                                        <ul className="check-list">
                                            <li>we search extensively across employers for the right job for you</li>
                                            <li>on employers request we verify your background</li>
                                            <li>which gives you an edge in your career thereon</li>
                                        </ul>
                                    </div>
                                    <div className="column-item">
                                        <h4 className="column-title employers">Employers</h4>
                                        <ul className="check-list">
                                            <li>unique database collected through offline and online proprietary tools</li>
                                            <li>we evaluate the candidates prior to sending for interview</li>
                                            <li>we make video of their professional skills * on request</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Services Offered Section */}
                            <section className="content-section">
                                <h2>SERVICES OFFERED</h2>
                                <div className="two-column-grid">
                                    <div className="column-item">
                                        <h4 className="column-title job-seeker">JOB SEEKER</h4>
                                        <ul className="check-list">
                                            <li>get jobs without paying anything</li>
                                            <li>we make your resume for free</li>
                                        </ul>
                                    </div>
                                    <div className="column-item">
                                        <h4 className="column-title employers">Employers</h4>
                                        <ul className="check-list">
                                            <li>we screen the blue collar workers</li>
                                            <li>we check credentials of applicants</li>
                                            <li>we take their initial round of interview / access interest level</li>
                                            <li>get background verification done</li>
                                            <li>saving you a lot time per hire</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* CTA Buttons */}
                            <section className="content-section">
                                <div className="blue-collar-cta-buttons">
                                    <button 
                                        className="cta-btn want-to-work"
                                        onClick={() => setShowForm('employee')}
                                    >
                                        WANT TO WORK
                                    </button>
                                    <button 
                                        className="cta-btn want-to-hire"
                                        onClick={() => setShowForm('employer')}
                                    >
                                        WANT TO HIRE
                                    </button>
                                    <button 
                                        className="cta-btn help-someone"
                                        onClick={() => setShowForm('help')}
                                    >
                                        HELP SOMEONE FIND A JOB
                                    </button>
                                </div>
                            </section>
                        </main>
                    </div>
                </>
            ) : (
                <>
                    {showForm === 'employee' && <EmployeeForm onClose={handleFormClose} />}
                    {showForm === 'employer' && <EmployerForm onClose={handleFormClose} />}
                    {showForm === 'help' && <HelpSomeoneForm onClose={handleFormClose} />}
                </>
            )}
        </div>
    );
};

export default BlueCollar;
