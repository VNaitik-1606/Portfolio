# Portfolio Frontend — Dev Boy

React (Vite) frontend for the Game Boy–themed portfolio. Fetches profile,
projects, skills, and certifications from your backend API and renders them
inside a functional Game Boy shell.

## Setup

1. **Install dependencies**
   ```
   npm install
   ```

2. **Point it at your backend**
   Copy `.env.example` to `.env`. It defaults to
   `http://localhost:5000/api`, which matches the backend's default port —
   change it if you're running the backend elsewhere.

3. **Make sure the backend is running** (in the other project folder):
   ```
   npm run dev
   ```

4. **Start the frontend**
   ```
   npm run dev
   ```
   Vite will print a local URL (usually `http://localhost:5173`) — open it
   in your browser.

## How the Game Boy shell works

- **Screen** — everything scrolls inside the green LCD area, with a faint
  scanline overlay for texture.
- **D-pad** — up/left scroll to the previous section, down/right scroll to
  the next. It tracks which section is currently near the top of the screen.
- **START** — jumps back to the top (Home).
- **SELECT** — jumps straight to the Contact form.
- **B** — opens your GitHub profile (from `profile.githubUrl`) in a new tab.
- **A** — opens your resume/CV (from `profile.resumeUrl`) in a new tab.

If `resumeUrl` or `githubUrl` aren't set on your profile document yet, A/B
just won't do anything — no error, they're no-ops until you fill those in.

## Where placeholder content lives

Right now everything you see (bio text, 3 sample projects, 6 skills, 1
certification) comes straight from the `npm run seed` script in the
backend. To swap in your real content:

- **Fastest**: edit `seed/seed.js` in the backend with your real data, then
  re-run `npm run seed`.
- **Alternative**: use the Postman collection to `PUT`/`POST` real data
  directly against the running API.

Nothing in this frontend needs to change either way — it just renders
whatever the API returns.

## Known gaps to revisit

- **Images** — `avatarUrl`, `imageUrl` (per project), `imageUrl` (per
  certification), and `githubQrUrl` are all just URL strings right now.
  You'll need somewhere to host the actual image files (e.g. Cloudinary,
  or serving them as static files from the backend) — say if you want help
  wiring that up.
- **Mobile layout** — the console shell reflows at 640px, but give it a
  real pass on your phone once there's real content in it; pixel-heavy
  layouts often need a second look at small sizes.
- **Contact form spam** — there's no rate-limiting or CAPTCHA on
  `POST /api/contact` yet. Fine for now; worth adding before this goes
  fully public.
