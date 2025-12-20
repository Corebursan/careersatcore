import React, { useState } from 'react';
import './Jobs.css';

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');

    const categories = ['All', 'IT', 'Finance', 'Marketing', 'Engineering', 'HR', 'Sales'];
    const locations = ['All', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune'];

    const jobs = [
        {
            id: 1,
            title: 'Senior Software Engineer',
            company: 'Tech Solutions Ltd',
            location: 'Bangalore',
            category: 'IT',
            salary: '15-25 LPA',
            experience: '5-8 years',
            type: 'Full Time',
            posted: '2 days ago'
        },
        {
            id: 2,
            title: 'Financial Analyst',
            company: 'Finance Corp',
            location: 'Mumbai',
            category: 'Finance',
            salary: '8-12 LPA',
            experience: '2-4 years',
            type: 'Full Time',
            posted: '1 day ago'
        },
        {
            id: 3,
            title: 'Digital Marketing Manager',
            company: 'Marketing Hub',
            location: 'Delhi',
            category: 'Marketing',
            salary: '10-15 LPA',
            experience: '4-6 years',
            type: 'Full Time',
            posted: '3 days ago'
        },
        {
            id: 4,
            title: 'Mechanical Engineer',
            company: 'Engineering Works',
            location: 'Chennai',
            category: 'Engineering',
            salary: '6-10 LPA',
            experience: '2-5 years',
            type: 'Full Time',
            posted: '5 days ago'
        },
        {
            id: 5,
            title: 'HR Business Partner',
            company: 'Global Corp',
            location: 'Hyderabad',
            category: 'HR',
            salary: '12-18 LPA',
            experience: '6-8 years',
            type: 'Full Time',
            posted: '1 week ago'
        },
        {
            id: 6,
            title: 'Sales Executive',
            company: 'Retail Group',
            location: 'Pune',
            category: 'Sales',
            salary: '4-6 LPA',
            experience: '1-3 years',
            type: 'Full Time',
            posted: '4 days ago'
        },
        {
            id: 7,
            title: 'Frontend Developer',
            company: 'Web Solutions',
            location: 'Bangalore',
            category: 'IT',
            salary: '8-14 LPA',
            experience: '2-4 years',
            type: 'Full Time',
            posted: '2 days ago'
        },
        {
            id: 8,
            title: 'Product Manager',
            company: 'Startup Inc',
            location: 'Mumbai',
            category: 'IT',
            salary: '18-25 LPA',
            experience: '5-7 years',
            type: 'Full Time',
            posted: '1 day ago'
        }
    ];

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || job.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase() === selectedLocation.toLowerCase();
        return matchesSearch && matchesCategory && matchesLocation;
    });

    return (
        <div className="jobs-page">
            {/* Jobs Introduction */}
            <section className="page-intro">
                <div className="page-intro-container">
                    <h1 className="page-intro-heading">JOB OPENINGS</h1>
                    <div className="page-intro-divider"></div>
                    <p>Find your perfect career opportunity</p>
                </div>
            </section>

            <div className="jobs-container">
                {/* Search and Filter Section */}
                <section className="jobs-search">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search jobs by title, company..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <button className="search-btn">🔍 Search</button>
                    </div>
                    <div className="filter-options">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="filter-select"
                        >
                            {categories.map((cat, index) => (
                                <option key={index} value={cat.toLowerCase()}>{cat}</option>
                            ))}
                        </select>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="filter-select"
                        >
                            {locations.map((loc, index) => (
                                <option key={index} value={loc.toLowerCase()}>{loc}</option>
                            ))}
                        </select>
                    </div>
                </section>

                {/* Results Count */}
                <div className="results-count">
                    Showing {filteredJobs.length} jobs
                </div>

                {/* Jobs List */}
                <section className="jobs-list">
                    {filteredJobs.map(job => (
                        <div key={job.id} className="job-card">
                            <div className="job-header">
                                <div className="job-title-section">
                                    <h3>{job.title}</h3>
                                    <p className="company-name">{job.company}</p>
                                </div>
                                <span className="job-type">{job.type}</span>
                            </div>
                            <div className="job-details">
                                <span className="job-detail">
                                    <span className="detail-icon">📍</span>
                                    {job.location}
                                </span>
                                <span className="job-detail">
                                    <span className="detail-icon">💰</span>
                                    {job.salary}
                                </span>
                                <span className="job-detail">
                                    <span className="detail-icon">📅</span>
                                    {job.experience}
                                </span>
                            </div>
                            <div className="job-footer">
                                <span className="posted-date">{job.posted}</span>
                                <button className="apply-btn">Apply Now</button>
                            </div>
                        </div>
                    ))}
                </section>

                {filteredJobs.length === 0 && (
                    <div className="no-results">
                        <p>No jobs found matching your criteria. Try adjusting your filters.</p>
                    </div>
                )}

                {/* Job Seeker CTA */}
                <section className="jobseeker-cta">
                    <div className="cta-content">
                        <h2>Can't find the right job?</h2>
                        <p>Register with us and we'll notify you when a matching opportunity comes up!</p>
                        <a href="/register" className="btn btn-primary">Register as Job Seeker</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Jobs;
