# Priyam Portfolio

A portfolio built with React 18, TypeScript, and Vite, with a PHP contact form for shared hosting.

## Local development

Use Node.js 22 LTS or newer with npm:

```sh
npm install
npm run dev
```

Open the URL printed by Vite. The development server does not execute PHP.

## Production build

```sh
npm run build
```

This type-checks the project and creates an upload-ready `dist/` directory containing:

```text
dist/
  index.html
  contact.php
  assets/
  ...public assets
```

Use `npm run preview` to inspect the static build locally. Vite preview does not execute PHP either; test the contact form only on a PHP-enabled server.

This is a single-page site using section anchors; no SPA rewrite rule or custom `.htaccess` is required. Preserve unrelated hosting configuration and files.

Section navigation, brand links, and hero action links scroll without changing the browser URL or adding history entries. Active navigation highlighting follows the visible section. Scrolling respects the reduced-motion preference.

### Optional ZIP packaging on Windows

After building, run this in PowerShell from the project directory (using the `tar` included with modern Windows):

```powershell
tar -a -c -f .\portfolio-cpanel.zip -C .\dist .
```

The ZIP has `index.html` at its root and portable paths for Linux hosting, ready to extract into the domain's document root.

## Contact

Use the website contact form, [LinkedIn](https://www.linkedin.com/in/priyam16/), or [the blog](https://priyamjots.blogspot.com/).
