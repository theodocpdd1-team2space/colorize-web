"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "id";
    }

    const savedLanguage = window.localStorage.getItem("colorize-language");
    if (savedLanguage === "id" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "id";
  });

  useEffect(() => {
    document.documentElement.lang = language === "id" ? "id" : "en";
    window.localStorage.setItem("colorize-language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
