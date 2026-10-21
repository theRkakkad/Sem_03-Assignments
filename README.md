<div align="center">

# 🎓 Semester 03 — Academic Assignments & Practicals
### Computer Science & Engineering | Academic Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Pure_Plain_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

<p align="center">
  A curated, production-ready repository of <b>Semester 3</b> coursework, practical lab assignments, and academic projects.<br>
  Built with a focus on clean architecture, solid engineering fundamentals, and comprehensive documentation.
</p>

[Explore Assignments](#-assignments-directory) • [Featured Project](#-featured-project-student-directory) • [Quick Start](#-quick-start) • [Author](#-author)

---

</div>

## 📑 Table of Contents
- [📌 Repository Overview](#-repository-overview)
- [📚 Assignments Directory](#-assignments-directory)
- [🌟 Featured Project: Campus Student Directory](#-featured-project-campus-student-directory)
  - [Key Architecture & Features](#-key-architecture--features)
  - [Routes Overview](#-routes-overview)
- [🚀 Quick Start Guide](#-quick-start)
- [📁 Repository Structure](#-repository-structure)
- [🎯 Learning Objectives & Highlights](#-learning-objectives--highlights)
- [👤 Author & Acknowledgments](#-author)

---

## 📌 Repository Overview

This repository hosts all practical programming coursework, laboratory implementations, and term assignments for **Semester 3**. Every project is organized into self-contained directories with independent configuration, typed schemas, and detailed study notes to ensure ease of learning, evaluation, and future reference.

---

## 📚 Assignments Directory

| Subject / Track | Assignment Name | Technology Stack | Path / Link | Status |
|:---|:---|:---|:---|:---:|
| **Advanced Web Dev** | **Campus Student Directory** | Next.js (App Router), TypeScript, CSS3 | [`/NEXT_JS/Student_Directory`](./NEXT_JS/Student_Directory) | ✅ Complete |
| **Advanced Web Dev** | *Component & Routing Labs* | React Server Components, TypeScript | [`/NEXT_JS`](./NEXT_JS) | ✅ Complete |
| **Core Computing** | *Data Structures & Algorithms* | C++ / TypeScript | *Curriculum Modules* | 🔄 Ongoing |
| **Database Systems** | *Relational Schemas & Queries* | SQL / Relational Modeling | *Curriculum Modules* | 🔄 Ongoing |

---

## 🌟 Featured Project: Campus Student Directory

A fast, lightweight, and responsive **Campus Student Directory Portal** built from scratch using **Next.js App Router** and **TypeScript**.

> 🔗 **Direct Link:** [NEXT_JS/Student_Directory](./NEXT_JS/Student_Directory)

### 💡 Key Architecture & Features
- **Zero Heavy UI Libraries:** Crafted entirely with semantic HTML5 and **plain, standard CSS** (`src/app/globals.css`). No class soup, no external styling runtimes.
- **Server Components by Default:** Uses fast React Server Components for pages, isolating browser interaction (`"use client"`) strictly to interactive search filters.
- **Static Site Generation (SSG):** Implements `generateStaticParams()` to pre-render all student profile pages into pure static HTML at build time for instant delivery.
- **Dynamic Routing & Graceful 404:** Handles individual student profiles via `/students/[id]` and automatically delegates unknown IDs (`/students/999`) to a custom, user-friendly `not-found.tsx`.
- **Built-in Resilience:** Features native React Suspense loading skeletons (`loading.tsx`) and client-side error boundaries with retry mechanisms (`error.tsx`).

### 🧭 Routes Overview

```text
/                      -> Home portal with directory stats & featured profiles
/students              -> Interactive directory with real-time search & department filtering
/students/[id]         -> Dynamic individual profile (SSG pre-rendered at build time)
/departments           -> Academic faculties overview with active enrollment counts
/_not-found            -> Custom 404 fallback page with recovery navigation
```

---

## 🚀 Quick Start

Run the featured **Student Directory** web application locally:

```bash
# 1. Clone the repository
git clone https://github.com/theRkakkad/Sem_03-Assignments.git

# 2. Navigate to the project directory
cd Sem_03-Assignments/NEXT_JS/Student_Directory

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build Verification (Production)
```bash
# Validates TypeScript, executes generateStaticParams, and builds static pages
npm run build
npm run start
```

---

## 📁 Repository Structure

```text
Sem_03-Assignments/
├── README.md                           # Master repository documentation (this file)
├── tsconfig.json                       # Root workspace TypeScript configuration
└── NEXT_JS/
    └── Student_Directory/              # Campus Directory Next.js Project
        ├── README.md                   # Dedicated project documentation
        ├── package.json                # Project dependencies & scripts
        ├── tsconfig.json               # Next.js TypeScript config
        ├── next.config.ts              # Next.js build configuration
        ├── eslint.config.mjs           # Code quality & linting configuration
        ├── public/                     # Static icons & assets
        └── src/
            ├── app/
            │   ├── layout.tsx          # Shared root layout (Navbar + Footer)
            │   ├── page.tsx            # Home landing page
            │   ├── globals.css         # Clean, plain CSS styling
            │   ├── not-found.tsx       # Custom 404 error page
            │   ├── departments/
            │   │   └── page.tsx        # Academic faculties list
            │   └── students/
            │       ├── page.tsx        # Students directory listing
            │       ├── loading.tsx     # Instant Suspense skeleton loading
            │       ├── error.tsx       # Segment error boundary with retry
            │       └── [id]/
            │           └── page.tsx    # Dynamic profile with SSG pre-rendering
            ├── components/
            │   ├── Navbar.tsx          # Top navigation header
            │   ├── Footer.tsx          # Bottom academic footer
            │   ├── StudentCard.tsx     # Reusable student summary card
            │   ├── StudentFilter.tsx   # Client component for search & filter
            │   └── DepartmentCard.tsx  # Reusable faculty card
            ├── data/
            │   ├── students.ts         # 10 realistic student mock profiles
            │   └── departments.ts      # 3 academic department records
            └── types/
                ├── student.ts          # Student TypeScript interface
                └── department.ts       # Department TypeScript interface
```

---

## 🎯 Learning Objectives & Highlights

1. **Modern Framework Mastery:** Practical experience with Next.js App Router conventions, file-based routing, and layout nesting.
2. **Performance & SSG:** Understanding when to pre-render static HTML (`generateStaticParams`) vs client-side state.
3. **Clean Code & Modularity:** Strict separation of concerns between types (`types/`), mock data (`data/`), reusable UI (`components/`), and route pages (`app/`).
4. **Accessible Styling:** Demonstrating that clean, responsive user interfaces can be built using pure CSS without relying on heavy utility abstractions.

---

## 👤 Author

**Rachit Kakkad**
- GitHub: [@theRkakkad](https://github.com/theRkakkad)
- Repository: [Sem_03-Assignments](https://github.com/theRkakkad/Sem_03-Assignments)

---

<div align="center">
  <sub>Academic submission repository for Semester 3. Maintained with ❤️ by <a href="https://github.com/theRkakkad">Rachit Kakkad</a>.</sub>
</div>
