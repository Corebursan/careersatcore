import { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        question: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Country codes with flags
    const countryCodes = [
        { code: '+91', country: 'India', flag: '🇮🇳' },
        { code: '+1', country: 'USA', flag: '🇺🇸' },
        { code: '+44', country: 'UK', flag: '🇬🇧' },
        { code: '+61', country: 'Australia', flag: '🇦🇺' },
        { code: '+971', country: 'UAE', flag: '🇦🇪' },
        { code: '+65', country: 'Singapore', flag: '🇸🇬' },
        { code: '+49', country: 'Germany', flag: '🇩🇪' },
        { code: '+33', country: 'France', flag: '🇫🇷' },
        { code: '+81', country: 'Japan', flag: '🇯🇵' },
        { code: '+86', country: 'China', flag: '🇨🇳' },
    ];

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Show automatic welcome message pop-up when page loads
    useEffect(() => {
        // Check if welcome message was already shown in this session
        const welcomeShown = sessionStorage.getItem('welcomeMessageShown');
        
        if (!welcomeShown) {
            // Show welcome message after 2 seconds of page load
            const timer = setTimeout(() => {
                setShowWelcomeMessage(true);
                sessionStorage.setItem('welcomeMessageShown', 'true');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    // Initial greeting when chat opens
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const greetings = [
                { type: 'bot', text: "👋 Hello! Welcome to Core Careers!", delay: 500 },
                { type: 'bot', text: "I'm your virtual assistant. I can help you with information about our recruitment services, job openings, and more.", delay: 1500 },
                { type: 'bot', text: "How can I assist you today? Feel free to ask any questions!", delay: 2500 }
            ];

            greetings.forEach((msg, index) => {
                setTimeout(() => {
                    setMessages(prev => [...prev, { type: msg.type, text: msg.text, time: new Date() }]);
                }, msg.delay);
            });
        }
    }, [isOpen]);

    // Bot response logic
    const getBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase();

        // Services related
        if (message.includes('service') || message.includes('what do you do') || message.includes('what you do')) {
            return "We offer a wide range of recruitment services including:\n\n🔹 Permanent Recruitment\n🔹 Bulk Hiring\n🔹 Outsourcing\n🔹 Blue Collar Recruitment\n🔹 Internships\n🔹 Resume Writing\n🔹 Training Programs\n🔹 Campus Placements\n\nWould you like to know more about any specific service?";
        }

        // Jobs related
        if (message.includes('job') || message.includes('vacancy') || message.includes('opening') || message.includes('career')) {
            return "We have numerous job openings across various industries! 🎯\n\nYou can browse our latest openings on the Jobs page. We serve 1000+ clients across IT, Manufacturing, Banking, Healthcare, Retail, and more.\n\nWould you like me to help you find jobs in a specific industry?";
        }

        // Contact related
        if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email') || message.includes('address')) {
            return "You can reach us through:\n\n📧 Email: info@careersatcore.com\n📞 Phone: +91 98 3051 8296\n📍 Location: Kolkata, West Bengal, India\n\nOr visit our Contact page for more details!";
        }

        // About company
        if (message.includes('about') || message.includes('company') || message.includes('core career') || message.includes('who are you')) {
            return "Core Careers Pvt Ltd is a leading staffing and recruitment firm based in Kolkata, established in 2002. 🏢\n\n✅ 25+ years of experience\n✅ Serving 1000+ clients\n✅ 50,000+ successful placements\n✅ Operations in 800+ locations\n\nWe serve Fortune 500 companies across India!";
        }

        // Registration
        if (message.includes('register') || message.includes('sign up') || message.includes('create account')) {
            return "You can register with us as:\n\n👔 Employer - Post jobs and find talent\n👨‍🎓 Student - Find internships\n💼 Job Seeker - Explore opportunities\n\nVisit our Register page to get started!";
        }

        // Pricing/Cost
        if (message.includes('price') || message.includes('cost') || message.includes('fee') || message.includes('charge')) {
            return "Great news! 🎉\n\nAt Core Careers:\n✅ No hire = No fee\n✅ Payment only after successful placement\n✅ 3 months replacement guaranteed\n\nContact us for customized pricing based on your requirements!";
        }

        // Industries
        if (message.includes('industry') || message.includes('sector') || message.includes('domain')) {
            return "We serve multiple industries including:\n\n💻 Information Technology\n🏭 Manufacturing\n🏦 Banking & Finance\n🏥 Healthcare\n🛒 Retail\n📚 Education\n🧪 Chemical\n🏨 Hospitality\n🏗️ Real Estate\n📦 FMCG\n\nWhich industry are you interested in?";
        }

        // Resume/CV
        if (message.includes('resume') || message.includes('cv')) {
            return "We offer professional Resume Writing services! 📝\n\nOur experts will help you create a professional, ATS-friendly resume that highlights your skills and experience.\n\nVisit our Services page to learn more!";
        }

        // Internship
        if (message.includes('intern') || message.includes('fresher') || message.includes('student')) {
            return "Looking for internships? 🎓\n\nWe help students and freshers find:\n✅ Paid internships\n✅ Industry training\n✅ Campus placements\n✅ Entry-level positions\n\nRegister as a Student to explore opportunities!";
        }

        // Location
        if (message.includes('location') || message.includes('where') || message.includes('city') || message.includes('branch')) {
            return "Our headquarters is in Kolkata, West Bengal, India. 📍\n\nWe operate across 800+ locations in India and also serve international markets!\n\nWe can help you find opportunities anywhere in India.";
        }

        // Thank you
        if (message.includes('thank') || message.includes('thanks')) {
            return "You're welcome! 😊 Is there anything else I can help you with?";
        }

        // Greeting
        if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
            return "Hello! 👋 How can I assist you today? Feel free to ask about our services, job openings, or anything else!";
        }

        // Help
        if (message.includes('help')) {
            return "I'm here to help! You can ask me about:\n\n🔹 Our Services\n🔹 Job Openings\n🔹 Registration Process\n🔹 Contact Information\n🔹 Company Details\n🔹 Resume Writing\n🔹 Internships\n\nWhat would you like to know?";
        }

        // Default response
        return "Thank you for your message! 😊\n\nFor more detailed information or specific queries, please fill out the contact form and our team will get back to you shortly.\n\nWould you like to submit an inquiry?";
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        setMessages(prev => [...prev, { type: 'user', text: userMessage, time: new Date() }]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            setMessages(prev => [...prev, { type: 'bot', text: botResponse, time: new Date() }]);
            setIsTyping(false);

            // Show form prompt after a few messages
            if (messages.length >= 4 && !formSubmitted) {
                setTimeout(() => {
                    setMessages(prev => [...prev, { 
                        type: 'bot', 
                        text: "💡 Would you like to submit an inquiry? Our team will get back to you with personalized assistance!", 
                        time: new Date(),
                        showFormButton: true 
                    }]);
                }, 1000);
            }
        }, 1000 + Math.random() * 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        if (!formData.fullName || !formData.email || !formData.phone || !formData.question) {
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Phone validation (at least 10 digits)
        if (formData.phone.length < 10) {
            alert('Please enter a valid phone number');
            return;
        }

        setFormSubmitted(true);
        setShowForm(false);
        setMessages(prev => [...prev, { 
            type: 'bot', 
            text: `Thank you, ${formData.fullName}! 🎉\n\nYour inquiry has been submitted successfully. Our team will contact you at ${formData.email} or ${formData.countryCode} ${formData.phone} shortly.\n\nIs there anything else I can help you with?`, 
            time: new Date() 
        }]);

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            countryCode: '+91',
            question: ''
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="chatbot-container">
            {/* Automatic Welcome Message Pop-up */}
            {showWelcomeMessage && (
                <div className="welcome-popup">
                    <button 
                        className="welcome-close-btn"
                        onClick={() => setShowWelcomeMessage(false)}
                        aria-label="Close welcome message"
                    >
                        ✕
                    </button>
                    <div className="welcome-message-content">
                        <p>Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</p>
                    </div>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    {/* Header */}
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <div className="chat-avatar">
                                <span>🤖</span>
                            </div>
                            <div className="chat-header-text">
                                <h4>Core Career Assistant</h4>
                                <span className="online-status">
                                    <span className="status-dot"></span>
                                    Online
                                </span>
                            </div>
                        </div>
                        <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                {msg.type === 'bot' && (
                                    <div className="message-avatar">🤖</div>
                                )}
                                <div className="message-content">
                                    <div className="message-bubble">
                                        {msg.text.split('\n').map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                {i < msg.text.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="message-time">{formatTime(msg.time)}</span>
                                    {msg.showFormButton && !formSubmitted && (
                                        <button 
                                            className="form-trigger-btn"
                                            onClick={() => setShowForm(true)}
                                        >
                                            📝 Submit Inquiry
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        
                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="message bot">
                                <div className="message-avatar">🤖</div>
                                <div className="message-content">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Inquiry Form */}
                    {showForm && (
                        <div className="chat-form-overlay">
                            <div className="chat-form">
                                <div className="chat-form-header">
                                    <h4>📩 Submit Your Inquiry</h4>
                                    <button onClick={() => setShowForm(false)}>✕</button>
                                </div>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleFormChange}
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number *</label>
                                        <div className="phone-input">
                                            <select 
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleFormChange}
                                            >
                                                {countryCodes.map((country) => (
                                                    <option key={country.code} value={country.code}>
                                                        {country.flag} {country.code}
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleFormChange}
                                                placeholder="Phone number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Your Question *</label>
                                        <textarea
                                            name="question"
                                            value={formData.question}
                                            onChange={handleFormChange}
                                            placeholder="Type your question here..."
                                            rows="3"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="form-submit-btn">
                                        <span>📤</span> Send Inquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="chat-input-area">
                        <button 
                            className="inquiry-btn"
                            onClick={() => setShowForm(true)}
                            title="Submit Inquiry"
                        >
                            📝
                        </button>
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                        />
                        <button 
                            className="send-btn"
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim()}
                        >
                            <span>➤</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Chat Button */}
            <button 
                className={`chat-toggle-btn ${isOpen ? 'active' : ''}`}
                onClick={() => {
                    setIsOpen(!isOpen);
                    // Close welcome message when chat is opened
                    if (!isOpen) {
                        setShowWelcomeMessage(false);
                    }
                }}
            >
                {isOpen ? (
                    <span className="close-icon">✕</span>
                ) : (
                    <>
                        <span className="chat-icon">💬</span>
                        <span className="pulse-ring"></span>
                        {showWelcomeMessage && <span className="notification-badge">1</span>}
                    </>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
