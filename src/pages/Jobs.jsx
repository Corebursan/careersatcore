import React, { useState, useEffect } from 'react';
import './Jobs.css';

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalJobs: 0,
        limit: 20,
        hasNextPage: false,
        hasPrevPage: false
    });
    const [selectedJob, setSelectedJob] = useState(null);
    const [showJobDetails, setShowJobDetails] = useState(false);
    
    // Filter states - all support multiple selections
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState([]);
    const [selectedExperiences, setSelectedExperiences] = useState([]);
    const [selectedWorkModes, setSelectedWorkModes] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedQualifications, setSelectedQualifications] = useState([]);
    const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);
    const [selectedOpenings, setSelectedOpenings] = useState([]);
    const [selectedPostedDates, setSelectedPostedDates] = useState([]);
    const [selectedEndDates, setSelectedEndDates] = useState([]);

    // Filter options
    const departments = ['IT/Software', 'Sales & Marketing', 'HR', 'Finance', 'Operations', 'Engineering', 'Product', 'Design', 'Customer Support', 'Legal', 'Administration', 'Manufacturing', 'Healthcare', 'Education'];
    const jobTypes = ['Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract', 'Temporary'];
    const employmentTypes = ['Permanent', 'Contract', 'Temporary'];
    const experiences = ['Fresher', '0-2 years', '2-5 years', '5-10 years', '10+ years'];
    const workModes = ['Remote', 'On-site', 'Hybrid'];
    const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Noida'];
    const qualifications = ['10th', '12th', 'Diploma', 'Graduate', 'Post Graduate', 'PhD', 'Other'];
    const salaryRanges = ['0-5 Lakhs', '5-10 Lakhs', '10-15 Lakhs', '15-20 Lakhs', '20-25 Lakhs', '25-30 Lakhs', '30-50 Lakhs', '50+ Lakhs'];
    const openingsOptions = ['Less than 10', 'Less than 50', 'Less than 100', 'Less than 200', 'Less than 300', '300+'];
    const dateOptions = ['Any time', 'Today', 'Past week', 'Past month'];

    // Default/mock job data - used as fallback
    const defaultJobs = [
        {
            id: 1,
            title: 'Senior Software Engineer',
            company: 'Tech Solutions Ltd',
            location: 'Bangalore',
            department: 'IT/Software',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '5-10 years',
            workMode: 'Hybrid',
            qualification: 'Graduate',
            salary: { min: 15, max: 25 },
            openings: 5,
            postedDate: '2024-01-15',
            endDate: '2024-02-15',
            posted: '2 days ago'
        },
        {
            id: 2,
            title: 'Financial Analyst',
            company: 'Finance Corp',
            location: 'Mumbai',
            department: 'Finance',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '2-5 years',
            workMode: 'On-site',
            qualification: 'Graduate',
            salary: { min: 8, max: 12 },
            openings: 3,
            postedDate: '2024-01-16',
            endDate: '2024-02-16',
            posted: '1 day ago'
        },
        {
            id: 3,
            title: 'Digital Marketing Manager',
            company: 'Marketing Hub',
            location: 'Delhi',
            department: 'Sales & Marketing',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '5-10 years',
            workMode: 'Remote',
            qualification: 'Post Graduate',
            salary: { min: 10, max: 15 },
            openings: 2,
            postedDate: '2024-01-14',
            endDate: '2024-02-14',
            posted: '3 days ago'
        },
        {
            id: 4,
            title: 'Mechanical Engineer',
            company: 'Engineering Works',
            location: 'Chennai',
            department: 'Engineering',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '2-5 years',
            workMode: 'On-site',
            qualification: 'Graduate',
            salary: { min: 6, max: 10 },
            openings: 4,
            postedDate: '2024-01-12',
            endDate: '2024-02-12',
            posted: '5 days ago'
        },
        {
            id: 5,
            title: 'HR Business Partner',
            company: 'Global Corp',
            location: 'Hyderabad',
            department: 'HR',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '5-10 years',
            workMode: 'Hybrid',
            qualification: 'Post Graduate',
            salary: { min: 12, max: 18 },
            openings: 1,
            postedDate: '2024-01-10',
            endDate: '2024-02-10',
            posted: '1 week ago'
        },
        {
            id: 6,
            title: 'Sales Executive',
            company: 'Retail Group',
            location: 'Pune',
            department: 'Sales & Marketing',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '0-2 years',
            workMode: 'On-site',
            qualification: 'Graduate',
            salary: { min: 4, max: 6 },
            openings: 10,
            postedDate: '2024-01-13',
            endDate: '2024-02-13',
            posted: '4 days ago'
        },
        {
            id: 7,
            title: 'Frontend Developer',
            company: 'Web Solutions',
            location: 'Bangalore',
            department: 'IT/Software',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '2-5 years',
            workMode: 'Remote',
            qualification: 'Graduate',
            salary: { min: 8, max: 14 },
            openings: 6,
            postedDate: '2024-01-15',
            endDate: '2024-02-15',
            posted: '2 days ago'
        },
        {
            id: 8,
            title: 'Product Manager',
            company: 'Startup Inc',
            location: 'Mumbai',
            department: 'Product',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '5-10 years',
            workMode: 'Hybrid',
            qualification: 'Post Graduate',
            salary: { min: 18, max: 25 },
            openings: 2,
            postedDate: '2024-01-16',
            endDate: '2024-02-16',
            posted: '1 day ago'
        },
        {
            id: 9,
            title: 'UI/UX Designer',
            company: 'Design Studio',
            location: 'Delhi',
            department: 'Design',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: '2-5 years',
            workMode: 'Remote',
            qualification: 'Graduate',
            salary: { min: 7, max: 12 },
            openings: 3,
            postedDate: '2024-01-14',
            endDate: '2024-02-14',
            posted: '3 days ago'
        },
        {
            id: 10,
            title: 'Customer Support Executive',
            company: 'Service Corp',
            location: 'Bangalore',
            department: 'Customer Support',
            jobType: 'Full-time',
            employmentType: 'Permanent',
            experience: 'Fresher',
            workMode: 'On-site',
            qualification: 'Graduate',
            salary: { min: 3, max: 5 },
            openings: 15,
            postedDate: '2024-01-15',
            endDate: '2024-02-15',
            posted: '2 days ago'
        },
        {
            id: 11,
            title: 'Software Intern',
            company: 'Tech Startup',
            location: 'Pune',
            department: 'IT/Software',
            jobType: 'Internship',
            employmentType: 'Temporary',
            experience: 'Fresher',
            workMode: 'Hybrid',
            qualification: 'Graduate',
            salary: { min: 0, max: 2 },
            openings: 8,
            postedDate: '2024-01-13',
            endDate: '2024-03-13',
            posted: '4 days ago'
        },
        {
            id: 12,
            title: 'Part-time Content Writer',
            company: 'Media House',
            location: 'Mumbai',
            department: 'Sales & Marketing',
            jobType: 'Part-time',
            employmentType: 'Contract',
            experience: '0-2 years',
            workMode: 'Remote',
            qualification: 'Graduate',
            salary: { min: 2, max: 4 },
            openings: 5,
            postedDate: '2024-01-12',
            endDate: '2024-02-12',
            posted: '5 days ago'
        }
    ];

    // Function to normalize job data from API to our format
    const normalizeJobData = (apiJob) => {
        // Debug: Log the raw API job to see its structure
        console.log('Raw API Job:', apiJob);
        
        // Extract employer info
        const employer = apiJob.employerId || {};
        const companyName = employer.companyName || apiJob.company || 'Company';
        
        // Extract title - check multiple possible field names (MUST BE FIRST)
        const jobTitle = apiJob.title || apiJob.jobTitle || apiJob.position || 
                        apiJob.name || apiJob.role || apiJob.designation || 
                        apiJob.jobName || 'Job Title';
        
        // Debug: Log extracted title
        if (!apiJob.title) {
            console.warn('Title not found in API job, using fallback. Available keys:', Object.keys(apiJob));
        }
        
        // Extract salary range (in LPA - Lakhs per annum)
        const minSalary = apiJob.minSalary ? Math.floor(apiJob.minSalary / 100000) : 0;
        const maxSalary = apiJob.maxSalary ? Math.floor(apiJob.maxSalary / 100000) : 0;
        const salary = { min: minSalary, max: maxSalary };

        // Extract experience
        const experience = apiJob.experience || apiJob.experienceRequired || 'Fresher';
        
        // Extract location (can be array or string)
        const locationArray = apiJob.location || [];
        const location = Array.isArray(locationArray) && locationArray.length > 0 
            ? locationArray.join(', ') 
            : (typeof locationArray === 'string' ? locationArray : 'Not specified');
        
        // Extract department
        const department = apiJob.department || 'Other';
        
        // Extract job type
        const jobType = apiJob.jobType || 'Full-time';
        
        // Extract work mode
        const workMode = apiJob.workMode || 'On-site';
        
        // Extract qualification
        const qualification = apiJob.highestQualification || apiJob.qualification || 'Graduate';
        
        // Extract openings
        const openings = apiJob.numberOfOpenings || apiJob.openings || 1;
        
        // Extract dates
        const postedDate = apiJob.createdAt ? new Date(apiJob.createdAt).toISOString().split('T')[0] :
                         new Date().toISOString().split('T')[0];
        const endDate = apiJob.applicationClosingDate ? new Date(apiJob.applicationClosingDate).toISOString().split('T')[0] :
                       new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        // Calculate posted time ago
        const posted = calculateTimeAgo(postedDate);

        return {
            id: apiJob._id || apiJob.id || Math.random(),
            title: jobTitle,
            company: companyName,
            location: location,
            department: department,
            jobType: jobType,
            employmentType: apiJob.employmentType || 'Permanent',
            experience: experience,
            workMode: workMode,
            qualification: qualification,
            salary: salary,
            openings: openings,
            postedDate: postedDate,
            endDate: endDate,
            posted: posted,
            // Store full API job data for details view
            fullJobData: apiJob
        };
    };

    // Helper function to calculate time ago
    const calculateTimeAgo = (dateString) => {
        try {
            const date = new Date(dateString);
            const now = new Date();
            const diffTime = Math.abs(now - date);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 0) return 'Today';
            if (diffDays === 1) return '1 day ago';
            if (diffDays < 7) return `${diffDays} days ago`;
            if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
            return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
        } catch (e) {
            return 'Recently';
        }
    };

    // Build API query parameters from filters
    const buildQueryParams = (page = 1) => {
        const params = new URLSearchParams();
        params.append('page', page.toString());
        params.append('limit', '20');

        // Add filter parameters
        if (selectedDepartments.length > 0) {
            selectedDepartments.forEach(dept => params.append('department', dept));
        }
        if (selectedJobTypes.length > 0) {
            selectedJobTypes.forEach(type => params.append('jobType', type));
        }
        if (selectedEmploymentTypes.length > 0) {
            selectedEmploymentTypes.forEach(type => params.append('employmentType', type));
        }
        if (selectedExperiences.length > 0) {
            selectedExperiences.forEach(exp => params.append('experience', exp));
        }
        if (selectedWorkModes.length > 0) {
            selectedWorkModes.forEach(mode => params.append('workMode', mode));
        }
        if (selectedLocations.length > 0) {
            selectedLocations.forEach(loc => params.append('location', loc));
        }
        if (selectedQualifications.length > 0) {
            selectedQualifications.forEach(qual => params.append('highestQualification', qual));
        }
        if (selectedSalaryRanges.length > 0) {
            // Convert salary ranges to min/max
            selectedSalaryRanges.forEach(range => {
                const match = range.match(/(\d+)\s*-\s*(\d+)/i);
                if (match) {
                    params.append('minSalary', (parseInt(match[1]) * 100000).toString());
                    params.append('maxSalary', (parseInt(match[2]) * 100000).toString());
                } else if (range.includes('50+')) {
                    params.append('minSalary', '5000000');
                }
            });
        }
        if (selectedOpenings.length > 0) {
            selectedOpenings.forEach(open => params.append('numberOfOpenings', open));
        }
        if (selectedPostedDates.length > 0) {
            selectedPostedDates.forEach(date => {
                // Map UI date options to API format
                let apiDate = date;
                if (date === 'Any time') apiDate = 'any';
                else if (date === 'Today') apiDate = 'today';
                else if (date === 'Past week') apiDate = 'week';
                else if (date === 'Past month') apiDate = 'month';
                params.append('freshness', apiDate);
            });
        }
        if (selectedEndDates.length > 0) {
            selectedEndDates.forEach(date => {
                // Map UI date options to API format
                let apiDate = date;
                if (date === 'Any time') apiDate = 'any';
                else if (date === 'Today') apiDate = 'today';
                else if (date === 'Past week') apiDate = 'week';
                else if (date === 'Past month') apiDate = 'month';
                params.append('openingDateFreshness', apiDate);
            });
        }

        return params.toString();
    };

    // Fetch jobs from API
    const fetchJobs = async (page = 1) => {
        setLoading(true);
        setError(null);
        
        try {
            const queryParams = buildQueryParams(page);
            const apiUrl = `https://api.atract.in/job/public?${queryParams}`;
            
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                mode: 'cors',
            });

            if (response.ok) {
                const data = await response.json();
                
                if (data.success && data.data && Array.isArray(data.data)) {
                    // Debug: Log first job to see structure
                    if (data.data.length > 0) {
                        console.log('Sample job from API:', data.data[0]);
                    }
                    const normalizedJobs = data.data.map(normalizeJobData);
                    // Debug: Log normalized job
                    if (normalizedJobs.length > 0) {
                        console.log('Normalized job:', normalizedJobs[0]);
                    }
                    setJobs(normalizedJobs);
                    
                    // Update pagination
                    if (data.pagination) {
                        setPagination({
                            currentPage: data.pagination.currentPage || page,
                            totalPages: data.pagination.totalPages || 1,
                            totalJobs: data.pagination.totalJobs || 0,
                            limit: data.pagination.limit || 20,
                            hasNextPage: data.pagination.hasNextPage || false,
                            hasPrevPage: data.pagination.hasPrevPage || false
                        });
                    }
                } else {
                    throw new Error('Invalid API response format');
                }
            } else {
                throw new Error(`API request failed: ${response.status}`);
            }
        } catch (err) {
            console.error('Error fetching jobs:', err);
            setError('Failed to load jobs from API. Using default jobs.');
            setJobs(defaultJobs);
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch and refetch when filters change
    useEffect(() => {
        fetchJobs(pagination.currentPage);
    }, [
        selectedDepartments, selectedJobTypes, selectedEmploymentTypes, 
        selectedExperiences, selectedWorkModes, selectedLocations, 
        selectedQualifications, selectedSalaryRanges, selectedOpenings,
        selectedPostedDates, selectedEndDates
    ]);

    // Helper function to handle checkbox toggle
    const toggleFilter = (filterArray, setFilterArray, value) => {
        if (filterArray.includes(value)) {
            setFilterArray(filterArray.filter(item => item !== value));
        } else {
            setFilterArray([...filterArray, value]);
        }
    };

    // Helper function to check if salary matches selected ranges
    const matchesSalaryRange = (jobSalary, selectedRanges) => {
        if (selectedRanges.length === 0) return true;
        
        return selectedRanges.some(range => {
            const jobAvg = (jobSalary.min + jobSalary.max) / 2;
            switch (range) {
                case '0-5 Lakhs': return jobAvg >= 0 && jobAvg <= 5;
                case '5-10 Lakhs': return jobAvg > 5 && jobAvg <= 10;
                case '10-15 Lakhs': return jobAvg > 10 && jobAvg <= 15;
                case '15-20 Lakhs': return jobAvg > 15 && jobAvg <= 20;
                case '20-25 Lakhs': return jobAvg > 20 && jobAvg <= 25;
                case '25-30 Lakhs': return jobAvg > 25 && jobAvg <= 30;
                case '30-50 Lakhs': return jobAvg > 30 && jobAvg <= 50;
                case '50+ Lakhs': return jobAvg > 50;
                default: return false;
            }
        });
    };

    // Helper function to check if openings match selected options
    const matchesOpenings = (jobOpenings, selectedOptions) => {
        if (selectedOptions.length === 0) return true;
        
        return selectedOptions.some(option => {
            switch (option) {
                case 'Less than 10': return jobOpenings < 10;
                case 'Less than 50': return jobOpenings < 50;
                case 'Less than 100': return jobOpenings < 100;
                case 'Less than 200': return jobOpenings < 200;
                case 'Less than 300': return jobOpenings < 300;
                case '300+': return jobOpenings >= 300;
                default: return false;
            }
        });
    };

    // Helper function to check if date matches selected options
    const matchesDate = (jobDate, selectedOptions) => {
        if (selectedOptions.length === 0) return true;
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const jobDateObj = new Date(jobDate);
        jobDateObj.setHours(0, 0, 0, 0);
        const daysDiff = Math.floor((today - jobDateObj) / (1000 * 60 * 60 * 24));
        
        return selectedOptions.some(option => {
            switch (option) {
                case 'Any time': 
                    return true;
                case 'Today': 
                    return daysDiff === 0;
                case 'Past week': 
                    return daysDiff >= 0 && daysDiff <= 7;
                case 'Past month': 
                    return daysDiff >= 0 && daysDiff <= 30;
                default: 
                    return false;
            }
        });
    };

    // Filter jobs based on all selected criteria
    const filteredJobs = jobs.filter(job => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());

        // Department filter
        const matchesDepartment = selectedDepartments.length === 0 || 
            selectedDepartments.includes(job.department);

        // Job Type filter
        const matchesJobType = selectedJobTypes.length === 0 || 
            selectedJobTypes.includes(job.jobType);

        // Employment Type filter
        const matchesEmploymentType = selectedEmploymentTypes.length === 0 || 
            selectedEmploymentTypes.includes(job.employmentType);

        // Experience filter
        const matchesExperience = selectedExperiences.length === 0 || 
            selectedExperiences.includes(job.experience);

        // Work Mode filter
        const matchesWorkMode = selectedWorkModes.length === 0 || 
            selectedWorkModes.includes(job.workMode);

        // Location filter
        const matchesLocation = selectedLocations.length === 0 || 
            selectedLocations.includes(job.location);

        // Qualification filter
        const matchesQualification = selectedQualifications.length === 0 || 
            selectedQualifications.includes(job.qualification);

        // Salary range filter
        const matchesSalary = matchesSalaryRange(job.salary, selectedSalaryRanges);

        // Openings filter
        const matchesOpeningsFilter = matchesOpenings(job.openings, selectedOpenings);

        // Posted date filter
        const matchesPostedDate = matchesDate(job.postedDate, selectedPostedDates);

        // End date filter
        const matchesEndDate = matchesDate(job.endDate, selectedEndDates);

        return matchesSearch && matchesDepartment && matchesJobType && matchesEmploymentType &&
            matchesExperience && matchesWorkMode && matchesLocation && matchesQualification &&
            matchesSalary && matchesOpeningsFilter && matchesPostedDate && matchesEndDate;
    });

    // Clear all filters
    const clearFilters = () => {
        setSelectedDepartments([]);
        setSelectedJobTypes([]);
        setSelectedEmploymentTypes([]);
        setSelectedExperiences([]);
        setSelectedWorkModes([]);
        setSelectedLocations([]);
        setSelectedQualifications([]);
        setSelectedSalaryRanges([]);
        setSelectedOpenings([]);
        setSelectedPostedDates([]);
        setSelectedEndDates([]);
        setSearchTerm('');
    };

    // Handle scroll to show/hide search bar - hide only when reaching CTA section
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const headerHeight = 120;
            const searchBarHeight = 100; // Approximate search bar height
            
            // Find the jobseeker-cta section
            const ctaSection = document.querySelector('.jobseeker-cta');
            
            if (ctaSection) {
                const ctaRect = ctaSection.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // Calculate when CTA section starts entering viewport
                // Hide search bar when CTA section top is within viewport
                const ctaTopInViewport = ctaRect.top <= viewportHeight;
                const ctaBottomInViewport = ctaRect.bottom >= 0;
                
                // Hide search bar when CTA section is visible in viewport
                const ctaVisible = ctaTopInViewport && ctaBottomInViewport;
                
                setIsSearchVisible(!ctaVisible);
            } else {
                // If CTA section not found, always show search bar
                setIsSearchVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        // Use requestAnimationFrame for smoother performance
        let ticking = false;
        const scrollHandler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollHandler, { passive: true });
        handleScroll(); // Check on mount
        
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [lastScrollY]);

    return (
        <div className="jobs-page">
            {/* Search and Filter Toggle - Fixed below header */}
            <section className={`jobs-search ${isSearchVisible ? 'visible' : 'hidden'}`}>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search jobs by title, company..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <button 
                            className="filter-toggle-btn"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            {showFilters ? '✕ Hide Filters' : '☰ Show Filters'}
                        </button>
                        <button className="search-btn">🔍 Search</button>
                    </div>
                </section>

            <div className="jobs-container">
                <div className="jobs-layout">
                    {/* Filter Sidebar */}
                    <aside className={`filter-sidebar ${showFilters ? 'active' : ''}`}>
                        <div className="filter-header">
                            <h3>Filters</h3>
                            <button className="clear-filters-btn" onClick={clearFilters}>
                                Clear All
                            </button>
                        </div>

                        <div className="filter-content">
                            {/* Department Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Department</h4>
                                <div className="filter-options-list">
                                    {departments.map((dept, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedDepartments.includes(dept)}
                                                onChange={() => toggleFilter(selectedDepartments, setSelectedDepartments, dept)}
                                            />
                                            <span>{dept}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Job Type Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Job Type</h4>
                                <div className="filter-options-list">
                                    {jobTypes.map((type, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedJobTypes.includes(type)}
                                                onChange={() => toggleFilter(selectedJobTypes, setSelectedJobTypes, type)}
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Employment Type Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Employment Type</h4>
                                <div className="filter-options-list">
                                    {employmentTypes.map((type, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedEmploymentTypes.includes(type)}
                                                onChange={() => toggleFilter(selectedEmploymentTypes, setSelectedEmploymentTypes, type)}
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Experience</h4>
                                <div className="filter-options-list">
                                    {experiences.map((exp, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedExperiences.includes(exp)}
                                                onChange={() => toggleFilter(selectedExperiences, setSelectedExperiences, exp)}
                                            />
                                            <span>{exp}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Work Mode Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Work Mode</h4>
                                <div className="filter-options-list">
                                    {workModes.map((mode, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedWorkModes.includes(mode)}
                                                onChange={() => toggleFilter(selectedWorkModes, setSelectedWorkModes, mode)}
                                            />
                                            <span>{mode}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Location</h4>
                                <div className="filter-options-list">
                                    {locations.map((loc, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedLocations.includes(loc)}
                                                onChange={() => toggleFilter(selectedLocations, setSelectedLocations, loc)}
                                            />
                                            <span>{loc}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Minimum Qualification Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Minimum Qualification</h4>
                                <div className="filter-options-list">
                                    {qualifications.map((qual, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedQualifications.includes(qual)}
                                                onChange={() => toggleFilter(selectedQualifications, setSelectedQualifications, qual)}
                                            />
                                            <span>{qual}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Salary Range Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Salary Range</h4>
                                <div className="filter-options-list">
                                    {salaryRanges.map((range, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedSalaryRanges.includes(range)}
                                                onChange={() => toggleFilter(selectedSalaryRanges, setSelectedSalaryRanges, range)}
                                            />
                                            <span>{range}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Number of Openings Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Number of Openings</h4>
                                <div className="filter-options-list">
                                    {openingsOptions.map((option, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedOpenings.includes(option)}
                                                onChange={() => toggleFilter(selectedOpenings, setSelectedOpenings, option)}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Posted Date Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Posted Date</h4>
                                <div className="filter-options-list">
                                    {dateOptions.map((option, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedPostedDates.includes(option)}
                                                onChange={() => toggleFilter(selectedPostedDates, setSelectedPostedDates, option)}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Opening Date Filter */}
                            <div className="filter-group">
                                <h4 className="filter-title">Opening Date</h4>
                                <div className="filter-options-list">
                                    {dateOptions.map((option, index) => (
                                        <label key={index} className="filter-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedEndDates.includes(option)}
                                                onChange={() => toggleFilter(selectedEndDates, setSelectedEndDates, option)}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Jobs Results Section */}
                    <div className="jobs-results">
                        {/* Loading State */}
                        {loading && (
                            <div className="loading-state">
                                <div className="loading-spinner"></div>
                                <p>Loading jobs from atract.in...</p>
                            </div>
                        )}

                        {/* Error State */}
                        {error && !loading && (
                            <div className="error-state">
                                <p>{error}</p>
                            </div>
                        )}

                        {/* Results Count */}
                        {!loading && (
                            <div className="results-count">
                                Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
                            </div>
                        )}

                        {/* Jobs List */}
                        {!loading && filteredJobs.length > 0 ? (
                            <section className="jobs-list">
                                {filteredJobs.map(job => (
                                    <div key={job.id} className="job-card">
                                        <div className="job-header">
                                            <div className="job-title-section">
                                                <h3>{job.title || 'Job Title'}</h3>
                                                <p className="company-name">{job.company || 'Company'}</p>
                                            </div>
                                            <span className="job-type">{job.jobType || 'Full-time'}</span>
                                        </div>
                                        <div className="job-details">
                                            <span className="job-detail">
                                                <span className="detail-icon">📍</span>
                                                {job.location}
                                            </span>
                                            <span className="job-detail">
                                                <span className="detail-icon">💰</span>
                                                {job.salary.min}-{job.salary.max} LPA
                                            </span>
                                            <span className="job-detail">
                                                <span className="detail-icon">📅</span>
                                                {job.experience}
                                            </span>
                                            <span className="job-detail">
                                                <span className="detail-icon">💼</span>
                                                {job.department}
                                            </span>
                                            <span className="job-detail">
                                                <span className="detail-icon">🏢</span>
                                                {job.workMode}
                                            </span>
                                            <span className="job-detail">
                                                <span className="detail-icon">👥</span>
                                                {job.openings} openings
                                            </span>
                                        </div>
                                        <div className="job-footer">
                                            <span className="posted-date">{job.posted}</span>
                                            <div className="job-actions">
                                                <button 
                                                    className="view-details-btn"
                                                    onClick={() => {
                                                        setSelectedJob(job);
                                                        setShowJobDetails(true);
                                                    }}
                                                >
                                                    View Details
                                                </button>
                                                <button 
                                                    className="apply-btn"
                                                    onClick={() => {
                                                        // Open signin page in new tab with job information
                                                        const jobParams = new URLSearchParams({
                                                            jobId: job.id,
                                                            title: job.title,
                                                            company: job.company
                                                        });
                                                        window.open(`https://atract.in/signin/jobseeker?${jobParams.toString()}`, '_blank', 'noopener,noreferrer');
                                                    }}
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        ) : (
                            <div className="no-results">
                                <div className="no-results-icon">🔍</div>
                                <h3>No Jobs Found</h3>
                                <p>We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.</p>
                                <button className="clear-filters-btn" onClick={clearFilters}>
                                    Clear All Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {!loading && filteredJobs.length > 0 && pagination.totalPages > 1 && (
                            <div className="pagination">
                                <button
                                    className="pagination-btn"
                                    onClick={() => fetchJobs(pagination.currentPage - 1)}
                                    disabled={!pagination.hasPrevPage}
                                >
                                    Previous
                                </button>
                                <span className="pagination-info">
                                    Page {pagination.currentPage} of {pagination.totalPages}
                                </span>
                                <button
                                    className="pagination-btn"
                                    onClick={() => fetchJobs(pagination.currentPage + 1)}
                                    disabled={!pagination.hasNextPage}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Job Details Modal */}
                {showJobDetails && selectedJob && (
                    <div className="job-details-modal-overlay" onClick={() => setShowJobDetails(false)}>
                        <div className="job-details-modal" onClick={(e) => e.stopPropagation()}>
                            <div className="job-details-header">
                                <h2>{selectedJob.title}</h2>
                                <button 
                                    className="close-modal-btn"
                                    onClick={() => setShowJobDetails(false)}
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="job-details-content">
                                {/* Quick Info Cards */}
                                <div className="job-quick-info">
                                    <div className="info-card">
                                        <div className="info-icon">🏢</div>
                                        <div className="info-content">
                                            <span className="info-label">Company</span>
                                            <span className="info-value">{selectedJob.company}</span>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <div className="info-icon">📍</div>
                                        <div className="info-content">
                                            <span className="info-label">Location</span>
                                            <span className="info-value">{selectedJob.location}</span>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <div className="info-icon">💼</div>
                                        <div className="info-content">
                                            <span className="info-label">Department</span>
                                            <span className="info-value">{selectedJob.department}</span>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <div className="info-icon">💰</div>
                                        <div className="info-content">
                                            <span className="info-label">Salary Range</span>
                                            <span className="info-value">{selectedJob.salary.min}-{selectedJob.salary.max} LPA</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Details Grid */}
                                <div className="job-details-grid">
                                    <div className="detail-item">
                                        <div className="detail-icon">📋</div>
                                        <div className="detail-text">
                                            <span className="detail-label">Job Type</span>
                                            <span className="detail-value">{selectedJob.jobType}</span>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="detail-icon">⏰</div>
                                        <div className="detail-text">
                                            <span className="detail-label">Employment Type</span>
                                            <span className="detail-value">{selectedJob.employmentType}</span>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="detail-icon">📅</div>
                                        <div className="detail-text">
                                            <span className="detail-label">Experience</span>
                                            <span className="detail-value">{selectedJob.experience}</span>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="detail-icon">🏢</div>
                                        <div className="detail-text">
                                            <span className="detail-label">Work Mode</span>
                                            <span className="detail-value">{selectedJob.workMode}</span>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="detail-icon">🎓</div>
                                        <div className="detail-text">
                                            <span className="detail-label">Qualification</span>
                                            <span className="detail-value">{selectedJob.qualification}</span>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="detail-icon">👥</div>
                                        <div className="detail-text">
                                            <span className="detail-label">Openings</span>
                                            <span className="detail-value">{selectedJob.openings} positions</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Job Description */}
                                {selectedJob.fullJobData?.description && (
                                    <div className="job-details-section enhanced">
                                        <div className="section-header">
                                            <span className="section-icon">📝</span>
                                            <h3>Job Description</h3>
                                        </div>
                                        <div className="section-content">
                                            <div className="job-description" dangerouslySetInnerHTML={{ __html: selectedJob.fullJobData.description.replace(/\n/g, '<br />') }} />
                                        </div>
                                    </div>
                                )}

                                {/* Requirements */}
                                {selectedJob.fullJobData?.requirements && (
                                    <div className="job-details-section enhanced">
                                        <div className="section-header">
                                            <span className="section-icon">✅</span>
                                            <h3>Requirements</h3>
                                        </div>
                                        <div className="section-content">
                                            <div className="job-requirements" dangerouslySetInnerHTML={{ __html: selectedJob.fullJobData.requirements.replace(/\n/g, '<br />') }} />
                                        </div>
                                    </div>
                                )}

                                {/* Skills */}
                                {selectedJob.fullJobData?.skills && selectedJob.fullJobData.skills.length > 0 && (
                                    <div className="job-details-section enhanced">
                                        <div className="section-header">
                                            <span className="section-icon">🛠️</span>
                                            <h3>Skills Required</h3>
                                        </div>
                                        <div className="section-content">
                                            <div className="job-skills">
                                                {selectedJob.fullJobData.skills.map((skill, index) => (
                                                    <span key={index} className="skill-tag">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Perks & Benefits */}
                                {selectedJob.fullJobData?.perksAndBenefits && (
                                    <div className="job-details-section enhanced">
                                        <div className="section-header">
                                            <span className="section-icon">🎁</span>
                                            <h3>Perks & Benefits</h3>
                                        </div>
                                        <div className="section-content">
                                            <div className="job-perks" dangerouslySetInnerHTML={{ __html: selectedJob.fullJobData.perksAndBenefits.replace(/\n/g, '<br />') }} />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="job-details-footer">
                                <button 
                                    className="apply-btn" 
                                    onClick={() => {
                                        // Open signin page in new tab with job information
                                        const jobParams = new URLSearchParams({
                                            jobId: selectedJob.id,
                                            title: selectedJob.title,
                                            company: selectedJob.company
                                        });
                                        window.open(`https://atract.in/signin/jobseeker?${jobParams.toString()}`, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
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
