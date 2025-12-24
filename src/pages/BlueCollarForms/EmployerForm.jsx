import React, { useState } from 'react';
import './Forms.css';

const EmployerForm = ({ onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: 'male',
        areYou: 'company',
        photo: null,
        logo: null,
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        category: '',
        jobDescription: '',
        experienceFromYear: '',
        experienceFromMonth: '',
        experienceToYear: '',
        experienceToMonth: '',
        education: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        
        if (!formData.fullName) newErrors.fullName = 'Required';
        if (!formData.username) newErrors.username = 'Required';
        if (!formData.password) newErrors.password = 'Required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.address) newErrors.address = 'Required';
        if (!formData.country) newErrors.country = 'Required';
        if (!formData.state) newErrors.state = 'Required';
        if (!formData.city) newErrors.city = 'Required';
        if (!formData.pincode) newErrors.pincode = 'Required';
        if (!formData.jobDescription) newErrors.jobDescription = 'Required';

        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            alert('Registration successful!');
            onClose();
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>BLUE COLLAR REGISTRATION - EMPLOYER</h2>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit} className="registration-form single-step">
                <div className="form-row">
                    <div className="form-group">
                        <label>Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={errors.fullName ? 'error' : ''}
                        />
                        {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Username/ Mobile *</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={errors.username ? 'error' : ''}
                        />
                        {errors.username && <span className="error-text">{errors.username}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Your password *</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="eg. X8df!90EO"
                                className={errors.password ? 'error' : ''}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password *</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="eg. X8df!90EO"
                                className={errors.confirmPassword ? 'error' : ''}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Are You a</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="areYou"
                                value="household"
                                checked={formData.areYou === 'household'}
                                onChange={handleChange}
                            />
                            Household
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="areYou"
                                value="company"
                                checked={formData.areYou === 'company'}
                                onChange={handleChange}
                            />
                            Company
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Upload Photo</label>
                        <div className="file-upload">
                            <input
                                type="file"
                                name="photo"
                                onChange={handleChange}
                                accept="image/*"
                            />
                            <button type="button" className="select-file-btn">Select file</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Upload Logo</label>
                        <div className="file-upload">
                            <input
                                type="file"
                                name="logo"
                                onChange={handleChange}
                                accept="image/*"
                            />
                            <button type="button" className="select-file-btn">Select file</button>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Address *</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="3"
                        className={errors.address ? 'error' : ''}
                    ></textarea>
                    {errors.address && <span className="error-text">{errors.address}</span>}
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Country *</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={errors.country ? 'error' : ''}
                        />
                        {errors.country && <span className="error-text">{errors.country}</span>}
                    </div>
                    <div className="form-group">
                        <label>City *</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={errors.city ? 'error' : ''}
                        />
                        {errors.city && <span className="error-text">{errors.city}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>State *</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className={errors.state ? 'error' : ''}
                        />
                        {errors.state && <span className="error-text">{errors.state}</span>}
                    </div>
                    <div className="form-group">
                        <label>Pincode *</label>
                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            className={errors.pincode ? 'error' : ''}
                        />
                        {errors.pincode && <span className="error-text">{errors.pincode}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="logistics">Logistics</option>
                        <option value="construction">Construction</option>
                        <option value="electrical">Electrical</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="retail">Retail</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Job Description *</label>
                    <textarea
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        rows="4"
                        className={errors.jobDescription ? 'error' : ''}
                    ></textarea>
                    {errors.jobDescription && <span className="error-text">{errors.jobDescription}</span>}
                </div>
                <div className="form-group">
                    <label>Experience</label>
                    <div className="experience-range">
                        <div className="experience-from">
                            <label>From</label>
                            <div className="experience-inputs">
                                <select
                                    name="experienceFromYear"
                                    value={formData.experienceFromYear}
                                    onChange={handleChange}
                                >
                                    <option value="">Year</option>
                                    {[...Array(20)].map((_, i) => (
                                        <option key={i} value={i}>{i} Year</option>
                                    ))}
                                </select>
                                <select
                                    name="experienceFromMonth"
                                    value={formData.experienceFromMonth}
                                    onChange={handleChange}
                                >
                                    <option value="">Month</option>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i} value={i}>{i} Month</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="experience-to">
                            <label>To</label>
                            <div className="experience-inputs">
                                <select
                                    name="experienceToYear"
                                    value={formData.experienceToYear}
                                    onChange={handleChange}
                                >
                                    <option value="">Year</option>
                                    {[...Array(20)].map((_, i) => (
                                        <option key={i} value={i}>{i} Year</option>
                                    ))}
                                </select>
                                <select
                                    name="experienceToMonth"
                                    value={formData.experienceToMonth}
                                    onChange={handleChange}
                                >
                                    <option value="">Month</option>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i} value={i}>{i} Month</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Education</label>
                    <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                    >
                        <option value="">Select Educational Stream</option>
                        <option value="high-school">High School</option>
                        <option value="diploma">Diploma</option>
                        <option value="graduate">Graduate</option>
                        <option value="post-graduate">Post Graduate</option>
                    </select>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn-back" onClick={onClose}>
                        Cancel
                    </button>
                    <button type="submit" className="btn-submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployerForm;
