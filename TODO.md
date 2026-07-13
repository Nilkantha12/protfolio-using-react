# TODO - Rebranding & GitHub Ownership Refresh

## Step 1 — Branding replacement (Nilkantha)
- [ ] package.json: remove `portafolio-nahuel61920` from name
- [ ] package.json: remove/update `homepage` URL pointing to Nahuel61920
- [ ] HeaderPage.jsx: replace logo text with `Nilkantha`
- [ ] HeaderPage.jsx: replace external language flag URLs that reference `nahuel61920.github.io`
- [ ] AboutPage.jsx: remove hardcoded author name references in defaults
- [ ] language/en.json & language/es.json: remove any remaining author/previous-owner strings

## Step 2 — Social media disable
- [ ] Footer.jsx: disable/remove social icon links (LinkedIn, GitHub, Instagram, WhatsApp)
- [ ] Contact section(s): disable/remove any social/contact links if present

## Step 3 — CV replacement
- [ ] Add `Nilkantha_CV.pdf` into the React project (replace current `src/cv/cv.pdf`)
- [ ] AboutPage.jsx: ensure “Download CV” downloads `Nilkantha_CV.pdf`
- [ ] remove previous CV references/paths

## Step 4 — Project GitHub setup
- [ ] Remove existing .git directory (fresh history)
- [ ] git init
- [ ] git remote add origin https://github.com/Nilkantha12/protfolio-using-react
- [ ] git add/commit
- [ ] push to origin (force if needed)

## Step 5 — Final verification
- [ ] Search repo for `Nahuel`, `Nahuel61920`, `portafolio-Nahuel`, old URLs, and old social links
- [ ] Verify header/footer/meta use Nilkantha only
- [ ] Build/start works


