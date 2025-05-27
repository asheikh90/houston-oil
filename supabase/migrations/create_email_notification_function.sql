/*
  # Create email notification function for new leads

  1. New Functions
    - `handle_new_lead_notification`
      - Triggered after insert on leads table
      - Sends email notification with lead details
  
  2. Triggers
    - `on_new_lead_inserted` trigger on leads table
*/

-- Create the function to handle email notifications
CREATE OR REPLACE FUNCTION handle_new_lead_notification()
RETURNS TRIGGER AS $$
DECLARE
  product_list text;
BEGIN
  -- Convert products array to comma-separated string
  SELECT array_to_string(NEW.products, ', ') INTO product_list;
  
  -- Send the email notification
  PERFORM net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || current_setting('app.resend_api_key', true),
      'Content-Type', 'application/json'
    ),
    body := jsonb_build_object(
      'from', 'Houston Oil Supply <notifications@houstonoilsupply.com>',
      'to', 'info@houstonoilsupply.com',
      'subject', 'New Lead: ' || NEW.first_name || ' ' || NEW.last_name || ' from ' || NEW.company_name,
      'html', '<h1>New Lead Submission</h1>' ||
              '<p><strong>Date:</strong> ' || to_char(NEW.created_at, 'YYYY-MM-DD HH:MI:SS') || '</p>' ||
              '<h2>Contact Information</h2>' ||
              '<p><strong>Name:</strong> ' || NEW.first_name || ' ' || NEW.last_name || '</p>' ||
              '<p><strong>Company:</strong> ' || NEW.company_name || '</p>' ||
              '<p><strong>Email:</strong> ' || NEW.email || '</p>' ||
              '<p><strong>Phone:</strong> ' || NEW.phone || '</p>' ||
              '<h2>Request Details</h2>' ||
              '<p><strong>Industry:</strong> ' || CASE WHEN NEW.industry = 'other' THEN NEW.other_industry ELSE NEW.industry END || '</p>' ||
              '<p><strong>Products:</strong> ' || product_list || CASE WHEN NEW.other_product IS NOT NULL THEN ', ' || NEW.other_product ELSE '' END || '</p>' ||
              '<p><strong>Fleet Size:</strong> ' || NEW.fleet_size || '</p>' ||
              '<p><strong>Delivery Timeline:</strong> ' || NEW.delivery_timeline || '</p>' ||
              CASE WHEN NEW.additional_info IS NOT NULL THEN '<p><strong>Additional Information:</strong> ' || NEW.additional_info || '</p>' ELSE '' END ||
              '<p>Please respond to this lead within 24 hours.</p>'
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS on_new_lead_inserted ON leads;
CREATE TRIGGER on_new_lead_inserted
  AFTER INSERT ON leads
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_lead_notification();
