# FocusFor100

Single-page React site for FocusFor100, a student-led portal for Super 100, Mission Buniyaad and Focus 400 aspirants in Haryana.

Stack: React 18, Vite, Tailwind CSS 3, lucide-react.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
```

## Where things live

| File | What it holds |
| --- | --- |
| `src/config.js` | Site name, nav links, programme details (seats, selection, results), sources, admin credential hash |
| `src/components/Site.jsx` | Public page: hero, about, programs, updates, study materials, footer |
| `src/components/Admin.jsx` | Login dialog and the admin dashboard |
| `src/lib/auth.js` | Admin sign-in (PBKDF2 hash check, 5-attempt lockout, 30-minute session) |
| `src/lib/storage.js` | Every read and write of content. The only file to change when you add a backend |
| `public/` | Focus 400 logo and the Super 100 group photo |

## Admin login

The admin email and password are not stored in the code, only a salted hash.
To set your own:

```bash
npm run hash -- you@example.com "a long, unique password"
```

Paste the printed block over `ADMIN` in `src/config.js`.

## Before you go live

1. **Content is stored in each visitor's browser.** Updates, tests and PDFs an admin publishes are saved in that browser only, so students on other devices will not see them. To publish to everyone, replace the functions in `src/lib/storage.js` with calls to a shared backend (Firebase or Supabase work well). The rest of the app stays the same.
2. **The admin check runs in the browser.** It keeps casual visitors out, but anyone can read or change front-end code. With a backend, move sign-in there (Firebase Auth or Supabase Auth) and let the server decide who can write.
3. **Sample content.** Preview builds show clearly labelled "Sample" entries. In a normal build `DEMO_SEED` is off and the site starts empty.
4. **Programme facts change each year.** Check seat numbers and dates in `src/config.js` against the Haryana School Education Department's notices.
