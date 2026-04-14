# Deploying “Uncle Birthday” (static site)

This project is a static site (plain HTML/CSS/JS). You can deploy it on any static host.

## Option A — GitHub Pages (recommended)

1. Create a GitHub repo and push this folder (root must contain `index.html`).
2. In GitHub: **Settings → Pages**
   - **Build and deployment**: choose **GitHub Actions**.
3. Make sure your default branch is `main`.
4. Push any change to `main`.

This repo already includes a workflow: `.github/workflows/pages.yml`.

## Option B — Netlify Drop (fastest)

1. Go to Netlify and use “Deploy manually” / “Drag & drop”.
2. Drag the entire folder contents (must include `index.html` and `assets/`).

## Option C — Vercel

1. Import the repo in Vercel.
2. Framework preset: “Other”.
3. Build command: none. Output: root.

---

# Updating photos later (easy path)

All images are tagged in HTML with a stable key like:

- `data-image-key="cover-portrait"`

The URLs live in one file:

- `assets/images.config.js`

To change images later:

1. Replace the URL for the key in `assets/images.config.js`.
2. Re-deploy (push to GitHub, or redeploy on your host).

Tip: You can also point a key to a relative path like `assets/images/dad.jpg` if you prefer uploading images into the repo.
