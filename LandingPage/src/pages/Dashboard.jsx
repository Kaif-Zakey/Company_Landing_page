import { useState, useEffect } from "react";
import { useComponents } from "../context/ComponentContext";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const Dashboard = () => {
  const {
    header,
    navbar,
    footer,
    updateHeader,
    updateNavbar,
    updateFooter,
    saveAllToBackend,
    loading,
  } = useComponents();
  const navigate = useNavigate();

  // Local state for form inputs
  const [headerData, setHeaderData] = useState({
    title: "",
    imageUrl: "",
  });

  const [navbarData, setNavbarData] = useState({
    links: [],
  });

  const [footerData, setFooterData] = useState({
    email: "",
    phone: "",
    address: "",
  });

  // Sync local state with context when context data changes
  useEffect(() => {
    if (!loading) {
      setHeaderData({
        title: header.title || "",
        imageUrl: header.imageUrl || "",
      });
      setNavbarData({
        links: navbar.links ? [...navbar.links] : [],
      });
      setFooterData({
        email: footer.email || "",
        phone: footer.phone || "",
        address: footer.address || "",
      });
    }
  }, [header, navbar, footer, loading]);

  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(header.imageUrl);

  // Toast notification state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({
      show: true,
      message,
      type,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({
      ...prev,
      show: false,
    }));
  };

  const CLOUDINARY_CLOUD_NAME = "djb8thtjx";
  const CLOUDINARY_UPLOAD_PRESET = "zakCompany";

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.secure_url) {
        const newHeaderData = { ...headerData, imageUrl: data.secure_url };
        setHeaderData(newHeaderData);
        setImagePreview(data.secure_url);
        // Automatically save the updated header with the new image
        await updateHeader(newHeaderData);
        showToast("Image uploaded and saved successfully!", "success");
      } else {
        console.error("Cloudinary upload failed:", data);
        console.error("Full error details:", JSON.stringify(data, null, 2));
        showToast(
          `Upload failed: ${
            data.error?.message || data.message || "Unknown error"
          }`,
          "error"
        );
        setImagePreview(header.imageUrl);
      }
    } catch (error) {
      console.error("Upload error:", error);
      showToast("Upload failed: Network error", "error");
      setImagePreview(header.imageUrl);
    } finally {
      setUploading(false);
    }
  };

  const handleNavbarLinkChange = (index, field, value) => {
    const newLinks = [...navbarData.links];
    newLinks[index][field] = value;
    setNavbarData({ links: newLinks });
  };

  const handleSaveAll = async () => {
    try {
      // Update context state first
      await updateHeader(headerData);
      await updateNavbar(navbarData);
      await updateFooter(footerData);

      // Save all data to backend using the current form data
      const result = await saveAllToBackend({
        header: headerData,
        navbar: navbarData,
        footer: footerData,
      });

      if (result.success) {
        showToast("All changes saved successfully!", "success");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        showToast("Failed to save all changes: " + result.error, "error");
      }
    } catch (error) {
      showToast("Failed to save all changes", "error");
    }
  };

  const handleSaveHeader = async () => {
    try {
      await updateHeader(headerData);
      showToast("Header saved successfully!", "success");
    } catch (error) {
      showToast("Failed to save header", "error");
    }
  };

  const handleSaveNavbar = async () => {
    try {
      await updateNavbar(navbarData);
      showToast("Navigation saved successfully!", "success");
    } catch (error) {
      showToast("Failed to save navigation", "error");
    }
  };

  const handleSaveFooter = async () => {
    try {
      await updateFooter(footerData);
      showToast("Footer saved successfully!", "success");
    } catch (error) {
      showToast("Failed to save footer", "error");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-16 border border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              Dashboard
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Back to Home
              </button>
              <button
                onClick={handleSaveAll}
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Save All Changes
              </button>
            </div>
          </div>

          <section className="mb-10 sm:mb-12 md:mb-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-blue-800">
              Header Settings
            </h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div>
                <label className="block text-gray-700 font-semibold mb-3 sm:mb-4 text-base sm:text-lg md:text-xl">
                  Title
                </label>
                <input
                  type="text"
                  value={headerData.title}
                  onChange={(e) =>
                    setHeaderData({ ...headerData, title: e.target.value })
                  }
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg transition-all duration-300"
                  placeholder="Enter header title"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                  Header Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                {uploading && (
                  <p className="text-blue-600 mt-2 text-sm">
                    Uploading image...
                  </p>
                )}

                {imagePreview && (
                  <div className="mt-3">
                    <p className="text-gray-700 font-semibold mb-2 text-sm">
                      Preview:
                    </p>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full max-w-sm h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}

                <div className="mt-3">
                  <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Or enter image URL
                  </label>
                  <input
                    type="text"
                    value={headerData.imageUrl}
                    onChange={(e) => {
                      setHeaderData({
                        ...headerData,
                        imageUrl: e.target.value,
                      });
                      setImagePreview(e.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Enter image URL"
                  />
                </div>
              </div>

              <button
                onClick={handleSaveHeader}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors text-sm"
              >
                Save Header
              </button>
            </div>
          </section>

          <section className="mb-6 md:mb-8 p-4 sm:p-5 bg-gray-50 rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-gray-800">
              Navbar Settings
            </h2>

            <div className="space-y-3 md:space-y-4">
              {navbarData.links.map((link, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white rounded-lg shadow"
                >
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                      Link {index + 1} Label
                    </label>
                    <input
                      type="text"
                      value={link.label}
                      onChange={(e) =>
                        handleNavbarLinkChange(index, "label", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                      placeholder="Enter link label"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                      Link {index + 1} URL
                    </label>
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) =>
                        handleNavbarLinkChange(index, "url", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                      placeholder="Enter link URL"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={handleSaveNavbar}
                className="w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition-colors text-sm"
              >
                Save Navbar
              </button>
            </div>
          </section>

          <section className="mb-5 md:mb-6 p-4 sm:p-5 bg-purple-50 rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-purple-800">
              Footer Settings
            </h2>

            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={footerData.email}
                  onChange={(e) =>
                    setFooterData({ ...footerData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={footerData.phone}
                  onChange={(e) =>
                    setFooterData({ ...footerData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                  Address
                </label>
                <textarea
                  value={footerData.address}
                  onChange={(e) =>
                    setFooterData({ ...footerData, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  placeholder="Enter address"
                  rows="3"
                />
              </div>

              <button
                onClick={handleSaveFooter}
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition-colors text-sm"
              >
                Save Footer
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={hideToast}
      />
    </div>
  );
};

export default Dashboard;
