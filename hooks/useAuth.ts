"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("furniclass_admin_session");
    if (session) {
      try {
        setUser(JSON.parse(session));
      } catch {
        localStorage.removeItem("furniclass_admin_session");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoggingIn(true);

    // Admin Credentials
    if (email === "admin@studio.com" && password === "AdminPass123!") {
      const userData = { name: "Studio Owner", email };
      localStorage.setItem(
        "furniclass_admin_session",
        JSON.stringify(userData),
      );
      setUser(userData);
      setIsLoggingIn(false);
      return userData;
    } else {
      setIsLoggingIn(false);
      throw new Error("Invalid Email or Password");
    }
  };

  const logout = () => {
    localStorage.removeItem("furniclass_admin_session");
    setUser(null);
    window.location.href = "/admin/login";
  };

  return { user, isLoading, isLoggingIn, login, logout };
}
