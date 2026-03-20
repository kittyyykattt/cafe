# Cafe Template (Reusable)

Production-ready reusable website template for cafes, bakeries, dessert shops, and other local businesses.

## Stack

- Next.js App Router
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Template Architecture

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Menu.tsx
    Gallery.tsx
    Testimonials.tsx
    Visit.tsx
    Footer.tsx
    SectionWrapper.tsx
  data/
    siteConfig.ts
  lib/
    animations.ts
```

## Rebrand in Minutes

Everything is controlled from `src/data/siteConfig.ts`:

- business details (name, tagline, phone, address, hours, socials)
- section content (about, menu, gallery, testimonials, visit)
- section visibility toggles
- theme preset (colors + typography)

Change the config and the whole website updates.

## Section Toggles

Enable or disable sections in:

- `siteConfig.sections.about`
- `siteConfig.sections.menu`
- `siteConfig.sections.gallery`
- `siteConfig.sections.testimonials`
- `siteConfig.sections.visit`

Navigation links automatically update based on enabled sections.

## Gallery Modes

Set `siteConfig.gallery.layout` to:

- `"grid"` for masonry-like card grid
- `"carousel"` for horizontal scroll-snap slider

## Animation System

Reusable animation variants are in `src/lib/animations.ts`:

- `fadeUp`
- `staggerContainer`
- `hoverLift`
- `softZoom`

## Deploy to GitHub Pages (`kittyyykattt.github.io/cafe`)

This project uses a **static export** (`output: "export"`) so it can live on GitHub Pages.

### One-time GitHub setup

1. Push these files to your repo (`main` branch).
2. Open the repo on GitHub → **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
4. Commit and push to `main` (or run the workflow manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**).

After the workflow succeeds, the site will be at:

**https://kittyyykattt.github.io/cafe/**

### If you rename the repository

Update **both**:

- `NEXT_BASE_PATH` in `.github/workflows/deploy-github-pages.yml` (must match the repo name, e.g. `/my-new-name`).
- The `build:github` script in `package.json` (same path).

### Local “GitHub-style” build

```bash
npm run build:github
npx serve out
```

Then open the URL `serve` prints (paths will include `/cafe`).

### Notes

- `public/.nojekyll` is required so GitHub Pages does not ignore Next’s `_next` assets.
- Images use `unoptimized: true` (required for static export).

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Build command: `npm run build`
4. This app exports static files to the `out` folder; if Vercel asks for output directory, use **`out`** (or leave default if auto-detected).
5. Deploy.

No additional runtime services are required.
