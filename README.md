# Priyam Portfolio - Next.js Application

This is a modern portfolio website built with Next.js 14, React 18, and TypeScript. The application showcases projects, experience, blog posts, and provides a contact form.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS Modules** - Styling with CSS variables for theming

## Features

- 🎨 **Dark/Light Theme** - Toggle between dark and light modes
- 📱 **Responsive Design** - Mobile-first approach with smooth animations
- 🚀 **Performance Optimized** - Built with Next.js for optimal performance
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 📧 **Contact Form** - Server-side form handling with validation and rate limiting
- 🎭 **Interactive UI** - Mouse aurora effect, reveal animations, and scroll spy navigation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
priyam-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API route for contact form
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── src/
│   ├── assets/                 # Static assets
│   ├── components/             # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   ├── data/
│   │   └── portfolio.ts        # Portfolio data
│   ├── hooks/                  # Custom React hooks
│   │   ├── useActiveSection.ts
│   │   ├── useReveal.ts
│   │   └── useTheme.ts
│   └── types/
│       └── portfolio.ts        # TypeScript types
├── public/                     # Static files served by Next.js
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Contact Form

The contact form includes:
- **Client-side validation** - Immediate feedback for users
- **Server-side validation** - PHP validates submissions before sending mail
- **Honeypot field** - Basic spam protection
- **Submission feedback** - The button is disabled during sending; a thank-you dialog opens only after success

### Setting Up Email Delivery

The form posts to `/contact.php` on the same domain. The single PHP script calls the host's `mail()` function to send to `thepriyam.me@gmail.com`, with the visitor's email as Reply-To. It does not authenticate as Gmail or require Composer. Your hosting must support outgoing PHP mail; a successful `mail()` call means the server accepted the message, not that it reached the inbox. The form cannot send email under `npm run dev`, because Next.js does not execute PHP.

## Deployment

### GoDaddy cPanel

1. Install dependencies with `npm ci --legacy-peer-deps` and build locally with `npm run build`. The output is in `out/`.
2. Upload the **contents** of `out/` (including `_next/` and hidden files, if any) to `public_html/`, not the `out/` folder itself. Do not upload `.next/` or `src/`.
3. Upload `src/api/contact.php` separately as `public_html/contact.php`. Keep this script out of Next.js `public/` because Next.js would serve its PHP source as a static file during development.
4. Ensure PHP `mbstring` and outgoing PHP mail are enabled on the host. Enable HTTPS, submit a real test message, and check the Gmail inbox and spam folder. If `mail()` fails or the message is not delivered, contact GoDaddy about the hosting mail transport; unauthenticated `mail()` cannot guarantee Gmail delivery. PHP-only changes require replacing `public_html/contact.php`, not rebuilding the static site.

The static export does not use a Node.js server. Run `npm run build` and re-upload the contents of `out/` after future changes.

## License

This project is open source and available under the MIT License.

## Contact

For questions or collaboration opportunities, please use the contact form on the website or reach out via [LinkedIn](https://www.linkedin.com/) or [Medium](https://medium.com/@priyam.chakraborty).
