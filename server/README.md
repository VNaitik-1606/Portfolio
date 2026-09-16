# Portfolio Backend

Express + MongoDB API for the gaming-themed portfolio. Serves projects,
skills, certifications, and profile/academic data, and accepts contact
form submissions.

## Setup

1. **Install dependencies**
   ```
   npm install
   ```

2. **Configure environment**
   Copy `.env.example` to `.env` and fill in your MongoDB connection string.
   - Local MongoDB: `mongodb://127.0.0.1:27017/portfolio`
   - MongoDB Atlas (free tier is fine): get the connection string from your
     cluster's "Connect" button in the Atlas dashboard.

3. **Seed placeholder data**
   ```
   npm run seed
   ```
   This wipes and repopulates `projects`, `skills`, `certifications`, and
   `profile` with placeholder content so you have something to hit
   immediately. Re-run it any time to reset.

4. **Start the server**
   ```
   npm run dev
   ```
   (uses nodemon — restarts on file changes). Or `npm start` for a plain run.
   You should see `Server running on http://localhost:5000` and a MongoDB
   connected log line.

## Verify with Postman before touching the frontend

Import `portfolio-api.postman_collection.json` (Postman → Import → this file).
It's pre-loaded with every route below.

1. **GET** `/api/health` → confirms the server is up: `{ status: "ok" }`
2. **GET** `/api/profile` → should return the seeded profile doc
3. **GET** `/api/projects` → should return 3 seeded projects
4. **GET** `/api/skills` → should return 6 seeded skills
5. **GET** `/api/certifications` → should return 1 seeded certification
6. **POST** `/api/contact` with body:
   ```json
   { "name": "Test User", "email": "test@example.com", "subject": "Hi", "body": "Testing the contact form" }
   ```
   → should return `201` with the saved message
7. **GET** `/api/contact` → should show the message you just sent

Once all of these return what you expect, the API is solid and we can wire
up the React frontend to it.

## Routes reference

| Method | Route                        | Purpose                         |
|--------|-------------------------------|----------------------------------|
| GET    | /api/health                   | Server health check              |
| GET    | /api/profile                  | Fetch profile + academic details |
| PUT    | /api/profile                  | Update profile (upserts)         |
| GET    | /api/projects                 | List all projects                |
| GET    | /api/projects/:id             | Get one project                  |
| POST   | /api/projects                 | Create a project                 |
| PUT    | /api/projects/:id             | Update a project                 |
| DELETE | /api/projects/:id             | Delete a project                 |
| GET    | /api/skills                   | List all skills                  |
| POST   | /api/skills                   | Create a skill                   |
| PUT    | /api/skills/:id               | Update a skill                   |
| DELETE | /api/skills/:id               | Delete a skill                   |
| GET    | /api/certifications           | List all certifications          |
| POST   | /api/certifications           | Create a certification           |
| PUT    | /api/certifications/:id       | Update a certification           |
| DELETE | /api/certifications/:id       | Delete a certification           |
| POST   | /api/contact                  | Submit contact form (public)     |
| GET    | /api/contact                  | List received messages           |
| PUT    | /api/contact/:id/read         | Mark a message as read           |

## Note on the contact/profile/write routes

There's no authentication on the write routes (`POST`/`PUT`/`DELETE`) yet —
anyone who finds the URL could technically add a project or read messages.
That's fine while you're developing locally. Before you deploy this
publicly, we should add a simple admin auth check (e.g. a shared secret
header or JWT login) on everything except `GET` on projects/skills/
certifications/profile and `POST /api/contact`. Flag it when we get to
deployment and we'll add it.
