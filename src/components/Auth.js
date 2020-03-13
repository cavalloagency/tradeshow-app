import React, { useEffect, useState } from "react";
import { auth } from "firebase";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
