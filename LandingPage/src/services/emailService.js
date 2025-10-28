import emailjs from "@emailjs/browser";

// EmailJS configuration from environment variables
// Configuration is stored in .env file for security
// Make sure to set up your EmailJS credentials in the .env file

const emailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  recipientEmail: import.meta.env.VITE_RECIPIENT_EMAIL,
};

// Validate that all required environment variables are present
const validateConfig = () => {
  const missing = [];
  if (!emailJSConfig.serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
  if (!emailJSConfig.templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
  if (!emailJSConfig.publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");

  if (missing.length > 0) {
    console.error("Missing EmailJS environment variables:", missing.join(", "));
    console.error(
      "Please check your .env file and make sure all EmailJS variables are set."
    );
    return false;
  }
  return true;
};

// Initialize EmailJS
if (validateConfig()) {
  emailjs.init(emailJSConfig.publicKey);
}

export const sendEmail = async (formData) => {
  try {
    // Check if configuration is valid before attempting to send
    if (!validateConfig()) {
      return {
        success: false,
        error:
          "EmailJS is not properly configured. Please check your environment variables.",
      };
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Company CMS Team",
      to_email: emailJSConfig.recipientEmail, // Your email from environment variables
      reply_to: formData.email, // So you can reply directly to the sender
    };

    const response = await emailjs.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error: error.text || "Failed to send email. Please try again.",
    };
  }
};

export default {
  sendEmail,
};
