# Grace Community Church Website

A React + Tailwind CSS church website, deployable to GitHub Pages.

---

## 🚀 Getting Started

### 1. Install Node.js
Download from https://nodejs.org (LTS version recommended).

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm start
```
Opens at http://localhost:3000

---

## ✏️ Editing Your Church Info

**All church details are in one file:**

```
src/config.js
```

Edit this file to update:
- Church name, tagline, description
- Service schedule
- Contact info (address, phone, email)
- Social media links
- Giving/support details
- Navigation links

---

## 📄 Adding a New Page

**Step 1 — Create the page file**

Copy `src/pages/_PageTemplate.jsx` and rename it, e.g. `src/pages/Sermons.jsx`.
Edit the content inside.

**Step 2 — Add a route in `src/App.jsx`**

Uncomment or add:
```jsx
import Sermons from './pages/Sermons';
// ...
<Route path="/sermons" element={<Sermons />} />
```

**Step 3 — Add a nav link in `src/config.js`**

Uncomment or add to `navLinks`:
```js
{ label: "Sermons", path: "/sermons" },
```

That's it! The nav and footer update automatically.

---

## 🌐 Deploying to GitHub Pages

### 1. Create a GitHub Repository
Go to https://github.com/new and create a new repository (e.g. `church-website`).

### 2. Set the homepage URL in `package.json`

Open `package.json` and update the `"homepage"` field:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"
```

Example:
```json
"homepage": "https://gracecommunitychurch.github.io/church-website"
```

### 3. Initialize git and push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 4. Deploy
```bash
npm run deploy
```

This runs the build and pushes to the `gh-pages` branch automatically.

### 5. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Set source branch to `gh-pages`
- Your site will be live at the homepage URL you set!

### Updating the Site
Whenever you make changes:
```bash
npm run deploy
```
That's all — it rebuilds and republishes automatically.

---

## 📁 Project Structure

```
src/
├── config.js          ← EDIT THIS — all church info lives here
├── App.jsx            ← Routes (add new pages here)
├── index.js           ← Entry point
├── index.css          ← Tailwind base styles
├── components/
│   ├── Navbar.jsx     ← Navigation bar
│   └── Footer.jsx     ← Footer
└── pages/
    ├── Home.jsx       ← Homepage
    ├── About.jsx      ← About page
    ├── Support.jsx    ← Support/Giving page
    └── _PageTemplate.jsx  ← Copy this to add new pages
```

---

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.js` — the `gold`, `earth`, and `cream` color scales.
- **Fonts**: Change the Google Fonts import in `public/index.html` and update `tailwind.config.js` `fontFamily`.
- **Hero background**: Edit the gradient in `src/pages/Home.jsx` (look for `background: 'linear-gradient(...)'`).

---

Built with ❤️ for the local church.
