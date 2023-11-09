import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

// ... (previous code)

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
  
    // Load user data from local storage on component mount
    useEffect(() => {
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }, []);
  
    // Function to clear user data (email) and redirect to the login page
    const logout = () => {
      localStorage.removeItem("userEmail"); // Clear email from local storage
      setEmail(""); // Clear the email state
      window.location.href = "/login"; // Redirect to the login page
    };
  
    return (
      <UserContext.Provider value={{ email, setEmail, logout }}>
        {children}
      </UserContext.Provider>
    );
  };
  