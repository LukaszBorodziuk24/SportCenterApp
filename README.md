# SportCenterAppFrontend — React client for a sport-center booking platform

Single-page app where clients find personal trainers (gym, kickboxing, crossfit), book training
slots on their calendars and leave reviews, while trainers manage availability and admins approve
trainer applications. Designed and built solo by Łukasz Borodziuk as the frontend half of the Sport
Center app — the API lives in [SportCenterAppBackend](https://github.com/LukaszBorodziuk24/SportCenterAppBackend).

**Stack:** React 18.3 · Vite 5.4 · React Router 6.28 · Axios 1.11 · Bootstrap 5.3 / React-Bootstrap 2.10 · FullCalendar 6.1 · react-spring 9.7 · Docker (nginx in production)

---

## What it does

- Trainer catalog with infinite scroll — filter by sport, text search, sort by name / last name / rating in either direction; each sport gets its own themed background.
- Trainer profile pages: cover and avatar photos, owner-editable "About me", star-rated reviews with their own paginated infinite scroll.
- Booking calendar built on FullCalendar — trainers create slots by clicking or drag-selecting in day view (or through a manual form), clients reserve and cancel; reserved slots are color-coded and protected from deletion.
- "Become a trainer" flow: multipart application with three photo uploads, reviewed in the admin panel with accept/reject and photo preview.
- Admin area (nested routes): user management list, trainer-request queue, and ranking recalculation with per-sport standings.
- Landing page tile grid: BMI calculator that expands with a react-spring scale transition, top-trainers ranking per sport, and a current-week slots tile that renders a trainer or client variant based on the user's role.
- JWT auth: register/login, roles decoded from the token, automatic logout on any 401.

## Engineering highlights

- A single generic `useFetchData` hook drives every infinite-scroll list (trainers, reviews, admin requests). It tracks page number in a ref to avoid stale-closure bugs, guards against duplicate in-flight requests, threads an `AbortController` signal through every request, and resets cleanly when filters or sort order change. Three thin domain hooks specialize it.
- Two Axios instances (public vs. authenticated) share one response interceptor; the 401 handler is injected via `setUnauthorizedHandler` so `AuthContext` can own logout without a circular import between the API layer and the context.
- Role-aware calendar composition: a `CommonCalendar` wrapper owns FullCalendar config, custom toolbar buttons, and a month → day drill-down; `OwnerCalendar` (slot creation/deletion, two modal flows) and `UserCalendar` (reservations) plug their handlers into it.
- The API returns photos as byte arrays; a converter normalizes byte arrays or base64 strings into data URLs with the correct content type before they hit any component.
- Docker for both loops: production is a multi-stage build (`node:18-alpine` → static bundle served by `nginx:alpine`), development is a compose service with bind-mounted source for HMR — `server.host: true` in the Vite config makes the dev server reachable from outside the container.

## Architecture

```
SportCenterGui/
├── src/
│   ├── App.jsx                  # router: 6 routes incl. nested /admin/{users,requests,ranking}
│   ├── Components/              # 61 components across 7 feature areas
│   │   ├── MainPage/            # tile grid (BMI, rankings, slots) + sport showcase
│   │   ├── TrainerPage/         # catalog, filters, profile, calendar, reviews, become-trainer
│   │   ├── AdminPage/           # user panel, trainer requests, ranking management
│   │   ├── LoginPage/ RegisterPage/
│   │   └── Navbar/ SharedComponents/   # search bar, star rating, image gallery, back button
│   ├── contexts/AuthContext.jsx # JWT storage, role decoding, login/register/logout
│   ├── hooks/                   # 4 hooks: useFetchData + users/reviews/requests variants
│   ├── services/api.js          # 28 endpoint wrappers in 7 modules (auth, bmi, trainer,
│   │                            #   calendar, admin, review, ranking)
│   └── utils/                   # date formatting, sport-background resolver
├── Dockerfile                   # multi-stage: node:18-alpine build → nginx:alpine
├── Dockerfile.dev + docker-compose.dev.yaml    # HMR dev container on 5173
└── docker-compose.prod.yaml     # nginx on port 80
```

## Pages

| Route | Page |
| --- | --- |
| `/` | landing: tile grid + sport showcase |
| `/login`, `/register` | auth forms with per-field errors |
| `/trainer/:sport?` | trainer catalog, optional sport pre-filter |
| `/trainer/profile/:id` | profile, booking calendar, reviews |
| `/admin` → `users` / `requests` / `ranking` | admin panel (nested routes, index redirects to `users`) |

## Running locally

The app expects the [backend API](https://github.com/LukaszBorodziuk24/SportCenterAppBackend) running at `http://localhost:5000/api` (override with `VITE_API_URL`).

Docker:

```bash
cd SportCenterGui
docker compose -f docker-compose.dev.yaml up --build    # dev server → http://localhost:5173
docker compose -f docker-compose.prod.yaml up --build   # nginx build → http://localhost:80
```

Native (Node 18+):

```bash
cd SportCenterGui
npm install
npm run dev        # Vite dev server on 5173
npm run build      # production bundle to dist/
npm run lint       # ESLint (react + react-hooks presets, react-refresh plugin)
```

## Configuration

| Key | Where | Default | Purpose |
| --- | --- | --- | --- |
| `VITE_API_URL` | env (`src/services/api.js`) | `http://localhost:5000/api` | backend API base URL |
| `@assets` alias | `vite.config.js` | `/src/assets` | import path for images |

**Author:** Łukasz Borodziuk — frontend design and implementation.
