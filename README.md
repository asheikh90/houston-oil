# Houston Oil Supply Landing Page

This is a landing page for Houston Oil Supply, featuring a lead capture form that stores submissions in Supabase and sends email notifications.

## Features

- Responsive design for all device sizes
- Interactive form with multi-step process
- Lead capture with Supabase database integration
- Automated email notifications for new leads
- Click-to-call phone functionality

## Setup Instructions

1. Install dependencies:
   ```
   pnpm install
   ```

2. Set up environment variables:
   - Create a `.env` file with your Supabase credentials
   - The file should contain:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

3. Set up Resend API key for email notifications:
   - In Supabase SQL Editor, run:
     ```sql
     ALTER DATABASE postgres SET "app.resend_api_key" TO 'your_resend_api_key';
     ```
   - Replace `your_resend_api_key` with your actual Resend API key

4. Run the development server:
   ```
   pnpm run dev
   ```

## Email Notification Setup

The application uses Supabase's pg_net extension and Resend for sending email notifications when new leads are submitted. When a form is submitted:

1. The lead data is stored in the Supabase `leads` table
2. A database trigger calls the `handle_new_lead_notification` function
3. This function formats the lead data and sends an email notification to `info@houstonoilsupply.com`

## Customization

- To change the recipient email address, modify the `to` field in the `handle_new_lead_notification` function
- To customize the email template, edit the HTML content in the same function
