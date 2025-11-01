# Little Print — Single Page Gallery Site

This is a single-page, responsive gallery website for the brand "Little Print". It features a fixed navigation bar with scroll-spy, a full-width hero, a responsive image gallery, and a footer with contact info. Built with plain HTML, CSS, and JavaScript for easy deployment on GitHub Pages.

## Quick start

1. Open `index.html` in a browser to preview locally.
2. Deploy to GitHub Pages (instructions below).

## Structure

- `index.html` — page markup and SEO metadata
- `styles.css` — layout, typography, responsive design, hover effects
- `script.js` — mobile nav toggle, smooth scroll behavior, scroll-spy
- `.nojekyll` — ensures GitHub Pages doesn’t run Jekyll
- `CNAME.sample` — template for custom domain (rename to `CNAME` when ready)

## Deploy to GitHub Pages

1. Create a new GitHub repository and push this project.
2. In GitHub, go to Settings → Pages.
3. Under “Build and deployment”, choose “Deploy from a branch”.
4. Select branch `main` and folder `/root` (or `/`), then Save.
5. Wait for Pages to publish. Your site will be available at the GitHub Pages URL.

## Custom domain

1. Buy a domain from your registrar.
2. In your DNS settings, create the following records:
   - For apex domain (`example.com`): set 4 A records to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - For `www.example.com`: add a CNAME record pointing to `<your-username>.github.io`.
3. In this repo, duplicate `CNAME.sample` to `CNAME` and replace the placeholder with your domain (e.g., `www.example.com`). Commit and push.
4. In GitHub → Settings → Pages, set your custom domain and enforce HTTPS.

Notes:
- Only put your domain (no protocol) inside the `CNAME` file, e.g., `www.example.com`.
- DNS can take minutes to hours to propagate.

## SEO

- `index.html` includes title, description, Open Graph, and Twitter card metadata.
- Replace the social preview image URL (`og:image`) with your branded image for best results.
- Consider adding a `sitemap.xml` and `robots.txt` in production.

## Adding Your Logo

1. Add your logo image file named `logo.png` to the root directory.
2. The logo should be a circular design (Tree of Life) with a deep pink/maroon background.
3. Recommended size: 32x32px or larger (will be scaled automatically).
4. Supported formats: PNG, SVG, JPG
5. If the logo file is not found, a fallback circular icon will be displayed.

## Editing content

- Logo: Add `logo.png` to the root directory (see above).
- Hero section: The hero uses a gradient background. Adjust `.hero-gradient` in `styles.css` if needed.
- Gallery images: Replace the image URLs in the gallery section of `index.html`.
- Colors and fonts: Adjust CSS variables at the top of `styles.css`.
- Contact info: Update email and Instagram link in the contact section of `index.html`.

## License

All rights reserved by Little Print unless otherwise specified.


