/*
  # Set Resend API key for email notifications

  1. Configuration
    - Set app.resend_api_key secret for email notifications
*/

-- Set the Resend API key as a secret
ALTER DATABASE postgres SET "app.resend_api_key" TO 're_123YourResendAPIKeyHere456';

-- Enable the pg_net extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_net;
