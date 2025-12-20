import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('jobseeker');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        // Job Seeker fields
        resume: null,
        experience: '',
        skills: '',
        preferredLocation: '',
        // Employer fields
        companyName: '',
        designation: '',
        companySize: '',
        industry: '',
        // Student fields
        college: '',
        course: '',
        graduationYear: ''
    });

    useEffect(() => {
        // Get type from URL query params
        const params = new URLSearchParams(location.search);
        const type = params.get('type');
        if (type && ['employer', 'student', 'jobseeker'].includes(type)) {
            setActiveTab(type);
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Registration successful! We will contact you soon.');
    };

    return (
        <div className="register-page">
            {/* Register Introduction */}
            <section className="page-intro">
                <div className="page-intro-container">
                    <h1 className="page-intro-heading">REGISTER</h1>
                    <div className="page-intro-divider"></div>
                    <p>Join Core Career and unlock career opportunities</p>
                </div>
            </section>

            <div className="register-container">
                {/* Registration Type Tabs */}
                <div className="register-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'jobseeker' ? 'active' : ''}`}
                        onClick={() => setActiveTab('jobseeker')}
                    >
                        Job Seeker
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'employer' ? 'active' : ''}`}
                        onClick={() => setActiveTab('employer')}
                    >
                        Employer
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'student' ? 'active' : ''}`}
                        onClick={() => setActiveTab('student')}
                    >
                        Student
                    </button>
                </div>

                {/* Registration Form */}
                <div className="register-form-container">
                    <form onSubmit={handleSubmit} className="register-form">
                        {/* Common Fields */}
                        <div className="form-section">
                            <h3>Basic Information</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your full name"
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
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password *</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Create a password"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Job Seeker Fields */}
                        {activeTab === 'jobseeker' && (
                            <div className="form-section">
                                <h3>Professional Details</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="experience">Years of Experience *</label>
                                        <select
                                            id="experience"
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select experience</option>
                                            <option value="fresher">Fresher</option>
                                            <option value="1-2">1-2 Years</option>
                                            <option value="3-5">3-5 Years</option>
                                            <option value="5-10">5-10 Years</option>
                                            <option value="10+">10+ Years</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="preferredLocation">Preferred Location *</label>
                                        <select
                                            id="preferredLocation"
                                            name="preferredLocation"
                                            value={formData.preferredLocation}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select location</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="bangalore">Bangalore</option>
                                            <option value="chennai">Chennai</option>
                                            <option value="hyderabad">Hyderabad</option>
                                            <option value="pune">Pune</option>
                                            <option value="any">Open to any location</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="skills">Key Skills *</label>
                                    <textarea
                                        id="skills"
                                        name="skills"
                                        value={formData.skills}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your key skills (separated by commas)"
                                        rows="3"
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="resume">Upload Resume (PDF/DOC) *</label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        onChange={handleInputChange}
                                        accept=".pdf,.doc,.docx"
                                        className="file-input"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Employer Fields */}
                        {activeTab === 'employer' && (
                            <div className="form-section">
                                <h3>Company Details</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="companyName">Company Name *</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter company name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="designation">Your Designation *</label>
                                        <input
                                            type="text"
                                            id="designation"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your designation"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="companySize">Company Size *</label>
                                        <select
                                            id="companySize"
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select company size</option>
                                            <option value="1-10">1-10 employees</option>
                                            <option value="11-50">11-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201-500">201-500 employees</option>
                                            <option value="500+">500+ employees</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="industry">Industry *</label>
                                        <select
                                            id="industry"
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select industry</option>
                                            <option value="it">IT & Technology</option>
                                            <option value="finance">Banking & Finance</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="retail">Retail</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Student Fields */}
                        {activeTab === 'student' && (
                            <div className="form-section">
                                <h3>Educational Details</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="college">College/University *</label>
                                        <input
                                            type="text"
                                            id="college"
                                            name="college"
                                            value={formData.college}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your college name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="course">Course/Degree *</label>
                                        <input
                                            type="text"
                                            id="course"
                                            name="course"
                                            value={formData.course}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="e.g., B.Tech, MBA, etc."
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="graduationYear">Expected Graduation Year *</label>
                                        <select
                                            id="graduationYear"
                                            name="graduationYear"
                                            value={formData.graduationYear}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select year</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="preferredLocation">Preferred Internship Location</label>
                                        <select
                                            id="preferredLocation"
                                            name="preferredLocation"
                                            value={formData.preferredLocation}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select location</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="bangalore">Bangalore</option>
                                            <option value="chennai">Chennai</option>
                                            <option value="remote">Remote/Work from Home</option>
                                            <option value="any">Open to any location</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Terms and Submit */}
                        <div className="form-section">
                            <div className="form-group checkbox-group">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">
                                    I agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>
                                </label>
                            </div>
                            <button type="submit" className="submit-btn">
                                Register Now
                            </button>
                        </div>
                    </form>

                    {/* Benefits Sidebar */}
                    <div className="register-benefits">
                        <h3>Why Register with Us?</h3>
                        {activeTab === 'jobseeker' && (
                            <ul>
                                <li>Access to 10,000+ job opportunities</li>
                                <li>Direct connection with recruiters</li>
                                <li>Free profile optimization</li>
                                <li>Job alerts matching your profile</li>
                                <li>Interview preparation support</li>
                            </ul>
                        )}
                        {activeTab === 'employer' && (
                            <ul>
                                <li>Access to verified candidate database</li>
                                <li>Dedicated recruitment support</li>
                                <li>Quick turnaround time</li>
                                <li>Bulk hiring solutions</li>
                                <li>Industry-specific expertise</li>
                            </ul>
                        )}
                        {activeTab === 'student' && (
                            <ul>
                                <li>Free registration for students</li>
                                <li>Internship opportunities with top companies</li>
                                <li>Start earning while studying</li>
                                <li>Build your professional network</li>
                                <li>Career guidance and mentorship</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
