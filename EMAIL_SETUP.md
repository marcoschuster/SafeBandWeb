# Email Setup Guide for SafeBand Contact Form

The contact form at `/contact` sends emails directly to your Gmail account. Follow these steps to set it up:

## Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Scroll to "Signing in to Google"
4. Click on **2-Step Verification**
5. Follow the prompts to enable it (if not already enabled)

## Step 2: Generate App Password

1. After enabling 2-Step Verification, go back to **Security**
2. Click on **2-Step Verification** again
3. Scroll down to the bottom and click on **App passwords**
4. You might need to sign in again
5. Under "Select app" dropdown, choose **Mail**
6. Under "Select device" dropdown, choose **Other (Custom name)**
7. Enter a name like "SafeBand Website"
8. Click **Generate**
9. Google will show you a 16-digit password (like: `xxxx xxxx xxxx xxxx`)
10. **Copy this password** - you won't be able to see it again!

## Step 3: Update .env.local File

1. Open `.env.local` in the root of your project
2. Replace the values:

```env
GMAIL_USER=your-actual-email@gmail.com
GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
```

**Important:** 
- Use your full Gmail address (e.g., `john.doe@gmail.com`)
- Remove spaces from the app password (just 16 characters together)
- Do NOT use your regular Gmail password - use the App Password you just generated

## Step 4: Test the Contact Form

1. Start your dev server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out the form and submit
4. Check your Gmail inbox - you should receive:
   - The contact form submission with the user's message
   - The user will also receive a confirmation email

## Troubleshooting

### "Invalid credentials" error
- Make sure you're using the App Password, not your regular password
- Double-check there are no spaces in the password
- Verify 2-Step Verification is enabled

### "Less secure app access" error
- This shouldn't happen with App Passwords
- Make sure you generated an App Password (not trying to use regular password)

### Emails not arriving
- Check your spam folder
- Verify the email addresses in .env.local are correct
- Check the terminal/console for error messages

## Security Notes

- Never commit `.env.local` to git (it's in .gitignore)
- Keep your App Password secret
- If compromised, you can revoke it from Google Account settings
- Each app password is unique - you can have multiple

## Production Deployment

When deploying to Netlify/Vercel:

1. Go to your project settings
2. Find Environment Variables
3. Add these two variables:
   - `GMAIL_USER` = your email
   - `GMAIL_APP_PASSWORD` = your app password

## Alternative Email Services

If you prefer not to use Gmail, you can modify `app/api/contact/route.ts` to use:
- **SendGrid**: https://sendgrid.com/
- **Mailgun**: https://www.mailgun.com/
- **Amazon SES**: https://aws.amazon.com/ses/
- **Resend**: https://resend.com/

Each service has its own setup process and pricing.
