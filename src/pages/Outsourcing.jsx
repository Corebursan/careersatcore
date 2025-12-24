import React from 'react';
import './Outsourcing.css';

const Outsourcing = () => {
    return (
        <div className="outsourcing-page">
            {/* Page Header */}
            <section className="page-intro">
                <div className="page-intro-container">
                    <h1 className="page-intro-heading">OUTSOURCING</h1>
                    <div className="page-intro-divider"></div>
                    <p className="outsourcing-tagline">
                        Have sharper business insights. Stop managing pay slips and recruitment. <strong>WELCOME OUTSOURCING.</strong>
                    </p>
                </div>
            </section>

            <div className="page-layout">
                <main className="main-content full-width">
                    {/* Employee Outsourcing Section */}
                    <section className="content-section">
                        <h2 className="section-title-red">EMPLOYEE OUTSOURCING</h2>
                        <p>
                            Outsourcing recruitment efforts to a third-party service provider offers flexibility, scalability, and helps reduce expenses, especially in a recessionary situation.
                        </p>
                        
                        <div className="benefits-section">
                            <h4>evolving business needs-</h4>
                            <ul className="check-list">
                                <li>Presents your company to be regarded as the leading employer in your industry</li>
                                <li>Ensures all employees are competent in making decisions that meet future business requirements</li>
                                <li>Improves employee commitment by professionally supervising internal movement in a fair manner</li>
                                <li>Reduces costs effectively</li>
                            </ul>
                        </div>

                        <p>
                            <strong>Thus Core helps you-</strong> find business partners, develop recruitment processes, brand your organization, and provide reliable candidate search experiences.
                        </p>
                    </section>

                    {/* Payroll Outsourcing Section */}
                    <section className="content-section">
                        <h2 className="section-title-red">PAYROLL OUTSOURCING</h2>
                        <p>
                            Managing payroll can be a tedious and distracting task. Outsourcing payroll processing through Core provides a solution by analyzing company rules and developing efficient strategies.
                        </p>
                        
                        <div className="benefits-section">
                            <h4>Improved and resourceful payroll process means:</h4>
                            <ul className="check-list">
                                <li>Better resource employment</li>
                                <li>Smooth processes & quicker turnaround time</li>
                                <li>Maintaining entire employee life-cycle, from date of joining to exit</li>
                                <li>Lesser risk related to agreement and penalties</li>
                                <li>Prompt resolution of employee issues</li>
                                <li>Increased efficiency & productivity</li>
                                <li>Consolidated, error free documents</li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Outsourcing;
