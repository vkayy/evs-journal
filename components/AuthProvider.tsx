"use client";

import { app } from "@/firebase/firebase.config";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "./Loading";

interface AuthProviderProps {
  children: React.ReactNode;
}

const auth = getAuth(app);
export const AuthContext = createContext<{ user: User | null }>({ user: null });
export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Loading></Loading> : children}
    </AuthContext.Provider>
  );
}
