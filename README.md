# Loan App V3

Mobile-first loan application implemented with React, Vite, Konsta UI v5, Tailwind CSS v4, React Router, and PWA support.

## Main views

- `/` — Home
- `/loans` — Loans
- `/profile` — Profile

## Standalone flows

- `/apply` — Loan application
- `/kyc` — KYC
- `/status` — Loan status
- `/loan/active` — Loan detail
- `/repayment` — Repayment
- `/payment` — Payment detail

## Stack

- React 19
- Vite 7
- Konsta UI 5.4
- Tailwind CSS 4
- React Router 7
- PWA / Service Worker
- Vercel SPA rewrite

## Architecture

`App → AppShell → Content(Home/Loans/Profile)`

Standalone loan flows are kept outside the main shell and do not render the bottom navigation.

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```
