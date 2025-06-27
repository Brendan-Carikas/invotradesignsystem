// Email templates data
export interface EmailTemplate {
  id: number;
  name: string;
  description: string;
  to: string;
  cc: string;
  from: string;
  subject: string;
  date: string;
  htmlBody: string;
  plainTextBody: string;
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: 1,
    name: "Invite User",
    description: "Send to invite new users to the platform",
    to: "[recipient]@example.com",
    cc: "admin@arto.com",
    from: "invitations@arto.com",
    subject: "Welcome! You’ve Been Invited to Arto",
    date: "2025-06-18",
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="text-align: left;">
              <!-- Using width attribute for Outlook and inline style for other clients -->
              <img src="/assets/arto-site-logo.png" alt="Arto Logo" width="120" class="mobile-logo" style="width: 30%; max-width: 150px; height: auto; margin-bottom: 2rem;" />
            </td>
          </tr>
        </table>
        
        <!-- Hidden styles for mobile responsiveness -->
        <div style="display:none; max-height:0; overflow:hidden;">
          <!--[if !mso]><!-->
          <style type="text/css">
            @media screen and (max-width: 480px) {
              .mobile-logo { width: 40% !important; }
            }
          </style>
          <!--<![endif]-->
        </div>
        
        <p>Welcome,</p>
        <p>You've been invited to join your organisation’s Arto account.</p>
        <p>Click below to set up your account and get started:</p>
        <p style="text-align: center;">
          <a href="https://armada-dev-dev-login.auth.eu-west-2.amazoncognito.com/signup?client_id=1prcurugcmkvue1i7b3loo4mme&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=eyJpbnZpdGF0aW9uSWQiOiJiNGI2M2UxMS04ODVkLTQyMmMtODVkZC0yYjJhNTllZmJlN2YiLCJ0ZW5hbnRJZCI6ImM1YWM0ZmI4LWRkODItNDhmZi1hMmNhLTVmZGIwODY5YTJiMSJ9" style="background-color:#0e092e

; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Accept Invitation</a>
        </p>
        <p>If the button above doesn't work, you can also copy and paste the following link into your browser:</p>
        <div style="word-break: break-all; overflow-wrap: break-word; max-width: 100%; margin-bottom: 1.5rem;">
          <a href="https://armada-dev-dev-login.auth.eu-west-2.amazoncognito.com/signup?client_id=1prcurugcmkvue1i7b3loo4mme&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=eyJpbnZpdGF0aW9uSWQiOiJiNGI2M2UxMS04ODVkLTQyMmMtODVkZC0yYjJhNTllZmJlN2YiLCJ0ZW5hbnRJZCI6ImM1YWM0ZmI4LWRkODItNDhmZi1hMmNhLTVmZGIwODY5YTJiMSJ9" style="color: #0066cc; word-break: break-all;">https://armada-dev-dev-login.auth.eu-west-2.amazoncognito.com/signup?client_id=1prcurugcmkvue1i7b3loo4mme&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=eyJpbnZpdGF0aW9uSWQiOiJiNGI2M2UxMS04ODVkLTQyMmMtODVkZC0yYjJhNTllZmJlN2YiLCJ0ZW5hbnRJZCI6ImM1YWM0ZmI4LWRkODItNDhmZi1hMmNhLTVmZGIwODY5YTJiMSJ9</a>
        </div>
        <p>This invitation is valid for 7 days.</p>
        <p>Glad to have you on board!<br>The Arto Team</p>
      </div>
    `,
    plainTextBody: `
Welcome,

You have been invited to join the Arto platform. We're excited to have you on board!

Please visit the following link to create your account and get started:
https://armada-dev-dev-login.auth.
eu-west-2.amazoncognito.com/signup?
client_id=1prcurugcmkvue1i7b3loo4
mme&response_type=code&scope=email
+openid+profile&redirect_uri=http%
3A%2F%2Flocalhost%3A3000%2Fcallback
&state=eyJpbnZpdGF0aW9uSWQiOiJiNGI2
M2UxMS04ODVkLTQyMmMtODVkZC0yYjJhNT
llZmJlN2YiLCJ0ZW5hbnRJZCI6ImM1YWM0
ZmI4LWRkODItNDhmZi1hMmNhLTVmZGIwO
DY5YTJiMSJ9

This invitation is valid for 7 days.

Glad to have you on board!
The Arto Team
    `
  },
  {
    id: 2,
    name: "Welcome Email",
    description: "Send to new users after registration",
    to: "[new-user]@example.com",
    cc: "admin@arto.com",
    from: "welcome@arto.com",
    subject: "Welcome to Arto!",
    date: "2025-06-15",
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="text-align: left;">
              <!-- Using width attribute for Outlook and inline style for other clients -->
              <img src="/assets/arto-site-logo.png" alt="Arto Logo" width="120" class="mobile-logo" style="width: 30%; max-width: 150px; height: auto; margin-bottom: 2rem;" />
            </td>
          </tr>
        </table>
        
        <!-- Hidden styles for mobile responsiveness -->
        <div style="display:none; max-height:0; overflow:hidden;">
          <!--[if !mso]><!-->
          <style type="text/css">
            @media screen and (max-width: 480px) {
              .mobile-logo { width: 40% !important; }
            }
          </style>
          <!--<![endif]-->
        </div>
        
        <p>Hello and welcome to Arto!</p>
        <p>Your account has been successfully created. We're thrilled to have you join our community.</p>
        <p>Here are a few things you can do to get started:</p>
        <ul>
          <li>Complete your <a href="https://example.com/profile">profile information</a></li>
          <li>Explore the <a href="https://example.com/dashboard">dashboard</a></li>
          <li>Check out our <a href="https://example.com/help">help center</a> for guides and tutorials</li>
        </ul>
        <p>If you have any questions, please don't hesitate to contact our support team.</p>
        <p>Best regards,<br>The Arto Team</p>
      </div>
    `,
    plainTextBody: `
Welcome to Arto!

Hello and welcome to Arto!

Your account has been successfully created. We're thrilled to have you join our community.

Here are a few things you can do to get started:
- Complete your profile information: https://example.com/profile
- Explore the dashboard: https://example.com/dashboard
- Check out our help center for guides and tutorials: https://example.com/help

If you have any questions, please don't hesitate to contact our support team.

Best regards,
The Arto Team
    `
  },
  {
    id: 3,
    name: "Notification Email",
    description: "Send when there are important updates",
    to: "[user]@example.com",
    cc: "notifications@arto.com",
    from: "updates@arto.com",
    subject: "Important Update from Arto",
    date: "2025-06-10",
    htmlBody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="text-align: left;">
              <!-- Using width attribute for Outlook and inline style for other clients -->
              <img src="/assets/arto-site-logo.png" alt="Arto Logo" width="120" class="mobile-logo" style="width: 30%; max-width: 150px; height: auto; margin-bottom: 2rem;" />
            </td>
          </tr>
        </table>
        
        <!-- Hidden styles for mobile responsiveness -->
        <div style="display:none; max-height:0; overflow:hidden;">
          <!--[if !mso]><!-->
          <style type="text/css">
            @media screen and (max-width: 480px) {
              .mobile-logo { width: 40% !important; }
            }
          </style>
          <!--<![endif]-->
        </div>
        
        <p>Hello,</p>
        <p>We wanted to inform you about an important update to our platform.</p>
        <p>We've added several new features that we think you'll find useful:</p>
        <ul>
          <li><strong>Enhanced Security</strong>: We've improved our security measures to better protect your data.</li>
          <li><strong>New Dashboard</strong>: A redesigned dashboard with improved analytics is now available.</li>
          <li><strong>Mobile App</strong>: Our new mobile app is now available for <a href="https://example.com/ios">iOS</a> and <a href="https://example.com/android">Android</a>.</li>
        </ul>
        <p>To learn more about these updates, please visit our <a href="https://example.com/updates">updates page</a>.</p>
        <p>Thank you for being a valued user!</p>
        <p>Best regards,<br>The Arto Team</p>
      </div>
    `,
    plainTextBody: `
Important Update from Arto

Hello,

We wanted to inform you about an important update to our platform.

We've added several new features that we think you'll find useful:
- Enhanced Security: We've improved our security measures to better protect your data.
- New Dashboard: A redesigned dashboard with improved analytics is now available.
- Mobile App: Our new mobile app is now available for iOS and Android.

To learn more about these updates, please visit our updates page: https://example.com/updates

Thank you for being a valued user!

Best regards,
The Arto Team
    `
  }
];
