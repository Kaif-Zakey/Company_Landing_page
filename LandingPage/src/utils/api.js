// API utility for backend integration (optional)

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5002/api";

export const api = {
  // Fetch all component data from backend
  async getComponents() {
    try {
      const response = await fetch(`${API_BASE_URL}/components`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching components:", error);
      throw error;
    }
  },

  // Save all component data to backend
  async saveComponents(componentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/components`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(componentData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Update specific section
  async updateSection(section, sectionData) {
    try {
      const response = await fetch(`${API_BASE_URL}/components/${section}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
