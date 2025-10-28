# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with the following variables:

   ```
   Subject: New message from {{from_name}} - {{subject}}

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}

   ---
   Sent from Company CMS Contact Form
   ```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abc123xyz789`)

## Step 5: Update Configuration

Open `/src/services/emailService.js` and replace the placeholder values:

```javascript
const emailJSConfig = {
  serviceId: "service_abc123", // Your actual service ID
  templateId: "template_xyz789", // Your actual template ID
  publicKey: "abc123xyz789", // Your actual public key
};
```

## Step 6: Test the Form

1. Save your changes
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email to see if the message was received

## Template Variables Available

The following variables are sent to your EmailJS template:

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{subject}}` - The message subject
- `{{message}}` - The message content
- `{{to_name}}` - Set to "Company CMS Team" (you can customize this)

## Troubleshooting

### Common Issues:

1. **"Failed to send email"** - Check your service ID, template ID, and public key
2. **"Invalid template"** - Make sure your template exists and uses the correct variable names
3. **"Quota exceeded"** - EmailJS free plan has a monthly limit. Upgrade if needed

### Email Template Tips:

- Use double curly braces for variables: `{{variable_name}}`
- Test your template using the EmailJS dashboard before implementing
- Set up email filters to organize contact form messages

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production deployment
- EmailJS public key is safe to expose in frontend code

## Production Deployment

For production, you may want to:

1. Set up environment variables:

   ```javascript
   const emailJSConfig = {
     serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
     templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
     publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
   };
   ```

2. Add to your `.env` file:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=service_abc123
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
   REACT_APP_EMAILJS_PUBLIC_KEY=abc123xyz789
   ```

That's it! Your contact form should now be fully functional with EmailJS integration.
