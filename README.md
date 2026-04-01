# Clyde Media Walls — Next.js Website

## Setup

1. `npm install`
2. Copy `.env.local.example` to `.env.local` and fill in SMTP credentials
3. `npm run dev` to preview locally

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables in Vercel dashboard:
   - `SMTP_HOST` — e.g. `smtp.gmail.com`
   - `SMTP_PORT` — `587`
   - `SMTP_USER` — your Gmail address
   - `SMTP_PASS` — Gmail App Password (not your regular password)
   - `CONTACT_EMAIL` — where enquiries should be sent

## Gmail App Password
Go to: Google Account → Security → 2-Step Verification → App Passwords
Generate one for "Mail" and use that as SMTP_PASS.

## Customise
- Phone number: search `0141 000 0000` and replace throughout
- Email: search `hello@clydemediawalls.co.uk` and replace
- Domain canonical URL: update in `app/layout.js`
