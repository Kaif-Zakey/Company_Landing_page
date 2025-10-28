import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../utils/api";

const ComponentContext = createContext();

export const useComponents = () => {
  const context = useContext(ComponentContext);
  if (!context) {
    throw new Error("useComponents must be used within a ComponentProvider");
  }
  return context;
};

export const ComponentProvider = ({ children }) => {
  // Initialize state with defaults
  const [header, setHeader] = useState({
    title: "Welcome to Our Company",
    imageUrl: "https://via.placeholder.com/800x400",
  });

  const [navbar, setNavbar] = useState({
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
  });

  const [footer, setFooter] = useState({
    email: "contact@company.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, Suite 100, City, State 12345",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load data from backend on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await api.getComponents();
        if (response.success && response.data) {
          setHeader(response.data.header);
          setNavbar(response.data.navbar);
          setFooter(response.data.footer);
        }
      } catch (err) {
        console.error("Error loading data from backend:", err);
        setError("Failed to load data from server");
        // Fall back to localStorage if backend is not available
        const savedHeader = localStorage.getItem("header");
        const savedNavbar = localStorage.getItem("navbar");
        const savedFooter = localStorage.getItem("footer");

        if (savedHeader) setHeader(JSON.parse(savedHeader));
        if (savedNavbar) setNavbar(JSON.parse(savedNavbar));
        if (savedFooter) setFooter(JSON.parse(savedFooter));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Also save to localStorage as backup
  useEffect(() => {
    localStorage.setItem("header", JSON.stringify(header));
  }, [header]);

  useEffect(() => {
    localStorage.setItem("navbar", JSON.stringify(navbar));
  }, [navbar]);

  useEffect(() => {
    localStorage.setItem("footer", JSON.stringify(footer));
  }, [footer]);

  const updateHeader = async (newHeader) => {
    try {
      const updatedHeader = { ...header, ...newHeader };
      setHeader(updatedHeader);

      // Save to backend
      await api.updateSection("header", updatedHeader);
    } catch (err) {
      setError("Failed to save header to server");
    }
  };

  const updateNavbar = async (newNavbar) => {
    try {
      const updatedNavbar = { ...navbar, ...newNavbar };
      setNavbar(updatedNavbar);

      // Save to backend
      await api.updateSection("navbar", updatedNavbar);
    } catch (err) {
      setError("Failed to save navbar to server");
    }
  };

  const updateFooter = async (newFooter) => {
    try {
      const updatedFooter = { ...footer, ...newFooter };
      setFooter(updatedFooter);

      // Save to backend
      await api.updateSection("footer", updatedFooter);
    } catch (err) {
      setError("Failed to save footer to server");
    }
  };

  const saveAllToBackend = async (customData = null) => {
    try {
      const dataToSave = customData || { header, navbar, footer };
      const result = await api.saveComponents(dataToSave);
      return { success: true, data: result };
    } catch (err) {
      setError("Failed to save all data to server");
      return { success: false, error: err.message };
    }
  };

  const value = {
    header,
    navbar,
    footer,
    loading,
    error,
    updateHeader,
    updateNavbar,
    updateFooter,
    saveAllToBackend,
  };

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
};
