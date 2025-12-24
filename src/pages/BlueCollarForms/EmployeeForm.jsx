import React, { useState } from 'react';
import './Forms.css';

const EmployeeForm = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        // Step 1
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        photo: null,
        // Step 2
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        // Step 3
        totalExperience: '',
        category: '',
        currentSalary: '',
        expectedSalary: '',
        preferredLocation: '',
        streetArea: '',
        jobType: '',
        shiftPreference: '',
        daysAvailable: '',
        hoursPerWeek: '',
        hoursPerDay: '',
        preferableTiming: '',
        drivingLicense: 'no',
        drivingLicenseFile: null,
        voterId: 'no',
        voterIdFile: null,
        panCard: 'no',
        panCardFile: null,
        relevantTraining: 'no',
        trainingFile: null,
        idProof: null,
        experienceLevel: '',
        employmentHistory: [
            { companyName: '', employmentDate: '', referenceContact: '' }
        ]
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleEmploymentChange = (index, field, value) => {
        const updated = [...formData.employmentHistory];
        updated[index][field] = value;
        setFormData(prev => ({ ...prev, employmentHistory: updated }));
    };

    const validateStep = (stepNum) => {
        const newErrors = {};
        
        if (stepNum === 1) {
            if (!formData.fullName) newErrors.fullName = 'Please enter your full name';
            if (!formData.username) newErrors.username = 'Please enter username/mobile';
            if (!formData.password) newErrors.password = 'Please enter password';
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
            if (!formData.gender) newErrors.gender = 'Please select gender';
        } else if (stepNum === 2) {
            if (!formData.address) newErrors.address = 'Please enter address';
            if (!formData.country) newErrors.country = 'Please enter country';
            if (!formData.state) newErrors.state = 'Please enter state';
            if (!formData.city) newErrors.city = 'Please enter city';
            if (!formData.pincode) newErrors.pincode = 'Please enter pincode';
        } else if (stepNum === 3) {
            if (!formData.totalExperience) newErrors.totalExperience = 'Please enter your experience';
            if (!formData.category) newErrors.category = 'Please select category';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(3)) {
            // Handle form submission
            console.log('Form submitted:', formData);
            alert('Registration successful!');
            onClose();
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>BLUE COLLAR REGISTRATION - EMPLOYEE</h2>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <div className="form-progress">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>
                <div className="step-tabs">
                    <div className={`step-tab ${step >= 1 ? 'active' : ''}`}>Step 1 Personal Info</div>
                    <div className={`step-tab ${step >= 2 ? 'active' : ''}`}>Step 2 Contact Info</div>
                    <div className={`step-tab ${step >= 3 ? 'active' : ''}`}>Step 3 Work Info</div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="registration-form">
                {step === 1 && (
                    <div className="form-step">
                        <h3>Step 1: Personal Info</h3>
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
                                <label>Username/Mobile *</label>
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
                            <label>Gender *</label>
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
                            {errors.gender && <span className="error-text">{errors.gender}</span>}
                        </div>
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
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <h3>Step 2: Contact Info</h3>
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
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step">
                        <h3>Step 3: Work Info</h3>
                        <div className="form-group">
                            <label>Total Experience *</label>
                            <input
                                type="text"
                                name="totalExperience"
                                value={formData.totalExperience}
                                onChange={handleChange}
                                className={errors.totalExperience ? 'error' : ''}
                            />
                            {errors.totalExperience && <span className="error-text">{errors.totalExperience}</span>}
                        </div>
                        <div className="form-group">
                            <label>Category *</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className={errors.category ? 'error' : ''}
                            >
                                <option value="">Select Category</option>
                                <option value="manufacturing">Manufacturing</option>
                                <option value="logistics">Logistics</option>
                                <option value="construction">Construction</option>
                                <option value="electrical">Electrical</option>
                                <option value="maintenance">Maintenance</option>
                                <option value="retail">Retail</option>
                            </select>
                            {errors.category && <span className="error-text">{errors.category}</span>}
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Current Salary</label>
                                <input
                                    type="text"
                                    name="currentSalary"
                                    value={formData.currentSalary}
                                    onChange={handleChange}
                                    placeholder="/month"
                                />
                            </div>
                            <div className="form-group">
                                <label>Expected Salary</label>
                                <input
                                    type="text"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleChange}
                                    placeholder="/month"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Preferred Location</label>
                            <select
                                name="preferredLocation"
                                value={formData.preferredLocation}
                                onChange={handleChange}
                            >
                                <option value="">Select City</option>
                                <option value="kolkata">Kolkata</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="delhi">Delhi</option>
                                <option value="bangalore">Bangalore</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Street/Area</label>
                            <input
                                type="text"
                                name="streetArea"
                                value={formData.streetArea}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Type of Job</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="jobType"
                                        value="full-time"
                                        checked={formData.jobType === 'full-time'}
                                        onChange={handleChange}
                                    />
                                    Full Time
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="jobType"
                                        value="contractual"
                                        checked={formData.jobType === 'contractual'}
                                        onChange={handleChange}
                                    />
                                    Contractual
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="jobType"
                                        value="hourly"
                                        checked={formData.jobType === 'hourly'}
                                        onChange={handleChange}
                                    />
                                    Hourly
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Shift/Time Preferences</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="shiftPreference"
                                        value="any-shift"
                                        checked={formData.shiftPreference === 'any-shift'}
                                        onChange={handleChange}
                                    />
                                    Any Shift
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="shiftPreference"
                                        value="night-shift"
                                        checked={formData.shiftPreference === 'night-shift'}
                                        onChange={handleChange}
                                    />
                                    Night Shift
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="shiftPreference"
                                        value="day-shift"
                                        checked={formData.shiftPreference === 'day-shift'}
                                        onChange={handleChange}
                                    />
                                    Day Shift
                                </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>No of days available</label>
                                <input
                                    type="text"
                                    name="daysAvailable"
                                    value={formData.daysAvailable}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>No of hours available per week</label>
                                <input
                                    type="text"
                                    name="hoursPerWeek"
                                    value={formData.hoursPerWeek}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>No of hours available per day</label>
                                <input
                                    type="text"
                                    name="hoursPerDay"
                                    value={formData.hoursPerDay}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Preferable timing</label>
                                <input
                                    type="text"
                                    name="preferableTiming"
                                    value={formData.preferableTiming}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Document Uploads */}
                        <div className="document-section">
                            <h4>Documents</h4>
                            <div className="form-group">
                                <label>Driving Licence</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            name="drivingLicense"
                                            value="yes"
                                            checked={formData.drivingLicense === 'yes'}
                                            onChange={handleChange}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="drivingLicense"
                                            value="no"
                                            checked={formData.drivingLicense === 'no'}
                                            onChange={handleChange}
                                        />
                                        No
                                    </label>
                                </div>
                                {formData.drivingLicense === 'yes' && (
                                    <div className="file-upload">
                                        <input
                                            type="file"
                                            name="drivingLicenseFile"
                                            onChange={handleChange}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />
                                        <button type="button" className="select-file-btn">Select file</button>
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Voter Id</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            name="voterId"
                                            value="yes"
                                            checked={formData.voterId === 'yes'}
                                            onChange={handleChange}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="voterId"
                                            value="no"
                                            checked={formData.voterId === 'no'}
                                            onChange={handleChange}
                                        />
                                        No
                                    </label>
                                </div>
                                {formData.voterId === 'yes' && (
                                    <div className="file-upload">
                                        <input
                                            type="file"
                                            name="voterIdFile"
                                            onChange={handleChange}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />
                                        <button type="button" className="select-file-btn">Select file</button>
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Pan Card</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            name="panCard"
                                            value="yes"
                                            checked={formData.panCard === 'yes'}
                                            onChange={handleChange}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="panCard"
                                            value="no"
                                            checked={formData.panCard === 'no'}
                                            onChange={handleChange}
                                        />
                                        No
                                    </label>
                                </div>
                                {formData.panCard === 'yes' && (
                                    <div className="file-upload">
                                        <input
                                            type="file"
                                            name="panCardFile"
                                            onChange={handleChange}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />
                                        <button type="button" className="select-file-btn">Select file</button>
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Relevant Training</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            name="relevantTraining"
                                            value="yes"
                                            checked={formData.relevantTraining === 'yes'}
                                            onChange={handleChange}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="relevantTraining"
                                            value="no"
                                            checked={formData.relevantTraining === 'no'}
                                            onChange={handleChange}
                                        />
                                        No
                                    </label>
                                </div>
                                {formData.relevantTraining === 'yes' && (
                                    <div className="file-upload">
                                        <label>Upload Special expertise proof</label>
                                        <input
                                            type="file"
                                            name="trainingFile"
                                            onChange={handleChange}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />
                                        <button type="button" className="select-file-btn">Select file</button>
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Upload ID Proof</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        name="idProof"
                                        onChange={handleChange}
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                    <button type="button" className="select-file-btn">Select file</button>
                                </div>
                            </div>
                        </div>

                        {/* Experience Level */}
                        <div className="form-group">
                            <label>You Are</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="experienceLevel"
                                        value="experience"
                                        checked={formData.experienceLevel === 'experience'}
                                        onChange={handleChange}
                                    />
                                    Experience
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="experienceLevel"
                                        value="fresher"
                                        checked={formData.experienceLevel === 'fresher'}
                                        onChange={handleChange}
                                    />
                                    Fresher
                                </label>
                            </div>
                        </div>

                        {/* Employment History */}
                        {formData.experienceLevel === 'experience' && (
                            <div className="employment-history">
                                <h4>Employment History</h4>
                                {formData.employmentHistory.map((emp, index) => (
                                    <div key={index} className="employment-entry">
                                        <div className="form-group">
                                            <label>Company Name / Employer (the company you most recently worked for)</label>
                                            <input
                                                type="text"
                                                value={emp.companyName}
                                                onChange={(e) => handleEmploymentChange(index, 'companyName', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Employment Date (duration of time you are/were working here)</label>
                                            <input
                                                type="text"
                                                value={emp.employmentDate}
                                                onChange={(e) => handleEmploymentChange(index, 'employmentDate', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Reference Contact (Please supply the Name and contact phone number of someone who work/s there with you, OR the job owner.)</label>
                                            <input
                                                type="text"
                                                value={emp.referenceContact}
                                                onChange={(e) => handleEmploymentChange(index, 'referenceContact', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <div className="form-actions">
                    {step > 1 && (
                        <button type="button" className="btn-back" onClick={handleBack}>
                            &lt; Back
                        </button>
                    )}
                    {step < 3 ? (
                        <button type="button" className="btn-next" onClick={handleNext}>
                            Next &gt;
                        </button>
                    ) : (
                        <button type="submit" className="btn-submit">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;
