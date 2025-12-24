import React, { useState } from 'react';
import './Forms.css';

const HelpSomeoneForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        yourName: '',
        yourEmail: '',
        yourPhone: '',
        personName: '',
        personEmail: '',
        personPhone: '',
        personAddress: '',
        personCategory: '',
        personExperience: '',
        personSkills: '',
        preferredLocation: '',
        expectedSalary: '',
        relationship: '',
        additionalInfo: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        
        if (!formData.yourName) newErrors.yourName = 'Required';
        if (!formData.yourEmail) newErrors.yourEmail = 'Required';
        if (!formData.yourPhone) newErrors.yourPhone = 'Required';
        if (!formData.personName) newErrors.personName = 'Required';
        if (!formData.personEmail && !formData.personPhone) {
            newErrors.personContact = 'Please provide either email or phone';
        }
        if (!formData.personCategory) newErrors.personCategory = 'Required';
        if (!formData.relationship) newErrors.relationship = 'Required';

        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            alert('Thank you for helping someone find a job! We will contact them soon.');
            onClose();
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>HELP SOMEONE FIND A JOB</h2>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit} className="registration-form single-step">
                <h3>Your Information</h3>
                <div className="form-row">
                    <div className="form-group">
                        <label>Your Name *</label>
                        <input
                            type="text"
                            name="yourName"
                            value={formData.yourName}
                            onChange={handleChange}
                            className={errors.yourName ? 'error' : ''}
                        />
                        {errors.yourName && <span className="error-text">{errors.yourName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Your Email *</label>
                        <input
                            type="email"
                            name="yourEmail"
                            value={formData.yourEmail}
                            onChange={handleChange}
                            className={errors.yourEmail ? 'error' : ''}
                        />
                        {errors.yourEmail && <span className="error-text">{errors.yourEmail}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label>Your Phone *</label>
                    <input
                        type="tel"
                        name="yourPhone"
                        value={formData.yourPhone}
                        onChange={handleChange}
                        className={errors.yourPhone ? 'error' : ''}
                    />
                    {errors.yourPhone && <span className="error-text">{errors.yourPhone}</span>}
                </div>

                <h3>Person's Information (The person you're helping)</h3>
                <div className="form-row">
                    <div className="form-group">
                        <label>Person's Name *</label>
                        <input
                            type="text"
                            name="personName"
                            value={formData.personName}
                            onChange={handleChange}
                            className={errors.personName ? 'error' : ''}
                        />
                        {errors.personName && <span className="error-text">{errors.personName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Relationship with Person *</label>
                        <select
                            name="relationship"
                            value={formData.relationship}
                            onChange={handleChange}
                            className={errors.relationship ? 'error' : ''}
                        >
                            <option value="">Select Relationship</option>
                            <option value="family">Family Member</option>
                            <option value="friend">Friend</option>
                            <option value="colleague">Colleague</option>
                            <option value="neighbor">Neighbor</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.relationship && <span className="error-text">{errors.relationship}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Person's Email</label>
                        <input
                            type="email"
                            name="personEmail"
                            value={formData.personEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Person's Phone</label>
                        <input
                            type="tel"
                            name="personPhone"
                            value={formData.personPhone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {errors.personContact && <span className="error-text">{errors.personContact}</span>}
                <div className="form-group">
                    <label>Person's Address</label>
                    <textarea
                        name="personAddress"
                        value={formData.personAddress}
                        onChange={handleChange}
                        rows="3"
                    ></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Category *</label>
                        <select
                            name="personCategory"
                            value={formData.personCategory}
                            onChange={handleChange}
                            className={errors.personCategory ? 'error' : ''}
                        >
                            <option value="">Select Category</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="logistics">Logistics</option>
                            <option value="construction">Construction</option>
                            <option value="electrical">Electrical</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="retail">Retail</option>
                        </select>
                        {errors.personCategory && <span className="error-text">{errors.personCategory}</span>}
                    </div>
                    <div className="form-group">
                        <label>Experience</label>
                        <input
                            type="text"
                            name="personExperience"
                            value={formData.personExperience}
                            onChange={handleChange}
                            placeholder="e.g., 2 years"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Skills</label>
                    <textarea
                        name="personSkills"
                        value={formData.personSkills}
                        onChange={handleChange}
                        rows="3"
                        placeholder="List relevant skills"
                    ></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Preferred Location</label>
                        <input
                            type="text"
                            name="preferredLocation"
                            value={formData.preferredLocation}
                            onChange={handleChange}
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
                    <label>Additional Information</label>
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Any additional information about the person..."
                    ></textarea>
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

export default HelpSomeoneForm;
