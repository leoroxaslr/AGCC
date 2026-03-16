# Assembly of God Community Church — AGCC Marikina

Website: [agccph.org](https://agccph.org)

---

## Run Locally

```bash
npm install
npm start
```

## Update Church Info

All church details are in one file: `src/config.js`

Edit it to update name, address, phone, email, service schedule, social links, and giving info.

## Deploy

```bash
npm run deploy
```

Builds and publishes to GitHub Pages automatically.

## Add a New Page

1. Copy `src/pages/_PageTemplate.jsx` and rename it (e.g. `Sermons.jsx`)
2. Add a route in `src/App.jsx`
3. Add a nav link in `src/config.js` under `navLinks`
