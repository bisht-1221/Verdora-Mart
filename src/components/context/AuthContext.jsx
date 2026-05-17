import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if someone is already logged in when the app loads
  useEffect(() => {
    const loggedUser = localStorage.getItem("verdora_currentUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const registerUser = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("verdora_users")) || [];
    
    // Check if email already exists
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "Email is already registered! Please login." };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    
    // Save to "database" and log them in
    localStorage.setItem("verdora_users", JSON.stringify(users));
    localStorage.setItem("verdora_currentUser", JSON.stringify(newUser));
    setUser(newUser);
    
    return { success: true };
  };

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("verdora_users")) || [];
    const found = users.find((u) => u.email === email && u.password === password);
    
    if (found) {
      localStorage.setItem("verdora_currentUser", JSON.stringify(found));
      setUser(found);
      return { success: true };
    }
    return { success: false, message: "Invalid email or password!" };
  };

  const logoutUser = () => {
    localStorage.removeItem("verdora_currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};