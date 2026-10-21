# Campus Directory — Next.js College Assignment

A simple, beginner-friendly **Student Directory** web application built with **Next.js (App Router)**, **React**, and **TypeScript**.

---

## 📌 Project Description

This project demonstrates core Next.js App Router concepts for a college assignment:
- **No external state libraries**, **no complex UI frameworks**, and **no external databases**.
- Built with **React Server Components** by default, using `"use client"` only for interactive search and error boundaries.
- **Plain CSS**: Clean, semantic class names in `src/app/globals.css` (no complex utility soup).
- Local dummy data containing 10 realistic student profiles and academic departments.

---

## 🚀 How to Run the Project

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 3. Build for production (SSG Validation)
```bash
npm run build
npm run start
```

---

## 🧭 Routes & Rendering Strategies

| Route | Type | Rendering Strategy | Description |
|---|---|---|---|
| `/` | Static | SSG (Prerendered at build time) | Home landing page with directory overview and stats |
| `/students` | Static | SSG (Prerendered at build time) | Full student listing with interactive search & filter |
| `/students/[id]` | Dynamic Route | SSG (`generateStaticParams`) | Pre-builds static HTML pages for all student profiles at build time |
| `/departments` | Static | SSG (Prerendered at build time) | Faculty departments and student count breakdown |
| `/_not-found` | Fallback | Static | Custom 404 page for missing students or broken URLs |

### ⚡ Rendering Strategy Note (`generateStaticParams`)
In `src/app/students/[id]/page.tsx`, we implement `generateStaticParams()`. This tells Next.js at build time to look through all student IDs in `src/data/students.ts` and pre-render each profile as a static HTML file (Static Site Generation / SSG). This provides lightning-fast loading speeds and eliminates server rendering overhead.

### ❓ Why We Don't Need Catch-All Routes (`[...slug]`)
Catch-all routes like `[...slug]` or `[[...slug]]` are designed for unknown, arbitrarily deep URLs (such as documentation trees or nested file explorers). In this directory, every route is clearly known and shallow (`/students/[id]`), so a single dynamic parameter `[id]` is the cleanest and most appropriate design.

---

## 📁 Folder Structure

```text
src/
├── app/
│   ├── layout.tsx             # Shared root layout with Navbar and Footer
│   ├── page.tsx               # Home landing page
│   ├── not-found.tsx          # Custom 404 page (triggered by notFound())
│   ├── globals.css            # Plain CSS styling with clear, readable classes
│   ├── departments/
│   │   └── page.tsx           # Academic faculties directory
│   └── students/
│       ├── page.tsx           # Students directory listing page
│       ├── loading.tsx        # Suspense loading state for students route
│       ├── error.tsx          # Client-side error boundary with retry button
│       └── [id]/
│           └── page.tsx       # Dynamic route with generateStaticParams() (SSG)
├── components/
│   ├── Navbar.tsx             # Main navigation header
│   ├── Footer.tsx             # Shared academic footer
│   ├── StudentCard.tsx        # Reusable card component for students
│   ├── StudentFilter.tsx      # Client component ("use client") for search/filter
│   └── DepartmentCard.tsx     # Reusable card component for departments
├── data/
│   ├── students.ts            # Local dummy data array of 10 student profiles
│   └── departments.ts         # Local dummy data array of academic departments
└── types/
    ├── student.ts             # TypeScript type definition for Student
    └── department.ts          # TypeScript type definition for Department
```

---

## 💡 Why Each Next.js Special File is Used

1. **`layout.tsx` (Shared Root Layout)**:
   - Wraps every page in the app with the common Navbar and Footer.
   - Prevents re-rendering common chrome elements during route navigation.

2. **`loading.tsx` (Instant Loading UI with React Suspense)**:
   - Next.js automatically wraps `page.tsx` in a `<React.Suspense>` boundary using `loading.tsx` as the fallback UI.
   - When navigating to `/students`, the user sees an immediate loading placeholder.

3. **`error.tsx` (Error Boundary)**:
   - Must be a Client Component (`"use client"`).
   - Catches unexpected runtime errors inside route segments and provides a `reset()` button to retry rendering without crashing the whole app.

4. **`not-found.tsx` (Custom 404 Page)**:
   - Automatically displayed when the Next.js `notFound()` function is triggered (e.g. invalid student ID like `/students/999` or `/students/abc`).

5. **`[id]/page.tsx` (Dynamic Route Segment)**:
   - Uses square brackets `[id]` to capture the student ID parameter from the URL.
   - Combined with `generateStaticParams()`, it pre-generates static HTML for every student profile at build time.
