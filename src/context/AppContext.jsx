import React, { createContext, useContext, useState, useCallback } from 'react';

// Create Context
const AppContext = createContext();

// Custom hook to use the context
export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};

// Provider Component
export const AppProvider = ({ children }) => {
    // Shared state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [userPreferences, setUserPreferences] = useState({
        theme: 'light',
        notifications: true
    });

    // Memoized callbacks
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const toggleChatbot = useCallback(() => {
        setIsChatbotOpen(prev => !prev);
    }, []);

    const closeChatbot = useCallback(() => {
        setIsChatbotOpen(false);
    }, []);

    const value = {
        // State
        isMobileMenuOpen,
        isChatbotOpen,
        userPreferences,
        
        // Actions
        toggleMobileMenu,
        closeMobileMenu,
        setIsMobileMenuOpen,
        toggleChatbot,
        closeChatbot,
        setIsChatbotOpen,
        setUserPreferences
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

