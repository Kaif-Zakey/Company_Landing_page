import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Component from "./models/Component.js";

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ["MONGODB_URI"];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(
    "❌ Missing required environment variables:",
    missingEnvVars.join(", ")
  );
  console.error(
    "Please check your .env file and make sure all required variables are set."
  );
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.FRONTEND_URL,
    ].filter(Boolean), // Remove any undefined values
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

// Initialize database connection
connectDB();

// Routes

// GET - Fetch component data
app.get("/api/components", async (req, res) => {
  try {
    let component = await Component.findOne();

    // If no component exists, create a default one
    if (!component) {
      component = new Component({
        header: {
          title: "Welcome to Our Company",
          imageUrl: "https://via.placeholder.com/800x400",
        },
        navbar: {
          links: [
            { label: "Home", url: "/" },
            { label: "About", url: "/about" },
            { label: "Contact", url: "/contact" },
          ],
        },
        footer: {
          email: "contact@company.com",
          phone: "+1 (555) 123-4567",
          address: "123 Business St, Suite 100, City, State 12345",
        },
      });
      await component.save();
    }

    res.json({
      success: true,
      data: component,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching component data",
      error: error.message,
    });
  }
});

// POST - Save/Update component data
app.post("/api/components", async (req, res) => {
  try {
    const { header, navbar, footer } = req.body;

    // Validation
    if (!header || !navbar || !footer) {
      return res.status(400).json({
        success: false,
        message: "Header, navbar, and footer data are required",
      });
    }

    let component = await Component.findOne();

    if (component) {
      // Update existing component
      component.header = header;
      component.navbar = navbar;
      component.footer = footer;
      await component.save();
    } else {
      // Create new component
      component = new Component({ header, navbar, footer });
      await component.save();
    }

    res.json({
      success: true,
      message: "Component data saved successfully",
      data: component,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving component data",
      error: error.message,
    });
  }
});

// PUT - Update specific section
app.put("/api/components/:section", async (req, res) => {
  try {
    const { section } = req.params;
    const validSections = ["header", "navbar", "footer"];

    // Debug logging
    console.log(
      `📝 Updating ${section} with data:`,
      JSON.stringify(req.body, null, 2)
    );

    if (!validSections.includes(section)) {
      return res.status(400).json({
        success: false,
        message: "Invalid section. Must be header, navbar, or footer",
      });
    }

    let component = await Component.findOne();

    if (!component) {
      return res.status(404).json({
        success: false,
        message: "Component not found",
      });
    }

    component[section] = req.body;
    await component.save();

    res.json({
      success: true,
      message: `${section} updated successfully`,
      data: component,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error updating ${req.params.section}`,
      error: error.message,
    });
  }
});

// Test route to manually update title
app.post("/api/test-update", async (req, res) => {
  try {
    let component = await Component.findOne();
    if (component) {
      component.header.title =
        "Test Title Updated - " + new Date().toLocaleTimeString();
      await component.save();
      res.json({
        success: true,
        message: "Test update successful",
        data: component,
      });
    } else {
      res.json({
        success: false,
        message: "No component found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Test update failed",
      error: error.message,
    });
  }
});

// Health check route
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: err.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/components`);
});

export default app;
