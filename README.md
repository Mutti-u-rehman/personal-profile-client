


# ---------------------------- Custom Docs --------------------
## Details for folder structure
src/
│
├── assets/              # Images, fonts, and other static assets
│
├── components/          # Reusable UI components (buttons, modals, etc.)
│   ├── common/          # Truly reusable (across pages/modules)
│   └── shared/          # Semi-reusable, used by 2–3 areas
│
├── features/            # Feature-based structure (each has UI + logic)
│   ├── auth/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── authSlice.ts  # If using Redux or Zustand, etc.
│   │   └── index.ts
│   ├── profile/
│   │   ├── ProfilePage.tsx
│   │   ├── profileAPI.ts
│   │   └── profileSlice.ts
│   └── ...
│
├── hooks/               # Custom hooks
│   └── useAuth.ts
│
├── layout/              # Layout components (Sidebar, Navbar, Wrapper)
│   ├── MainLayout.tsx
│   └── AuthLayout.tsx
│
├── pages/               # Page-level components (route targets)
│   ├── Home.tsx
│   ├── About.tsx
│   ├── NotFound.tsx
│   └── ...
│
├── routes/              # Central routing setup
│   └── AppRoutes.tsx
│
├── services/            # API calls and service layers
│   └── userService.ts
│
├── store/               # State management (Redux, Zustand, Context)
│   ├── store.ts
│   └── rootReducer.ts
│
├── types/               # Global TypeScript types/interfaces
│   └── user.ts
│
├── utils/               # Helper functions
│   ├── formatDate.ts
│   └── validators.ts
│
├── App.tsx              # Root component
├── main.tsx             # App entry (or index.tsx in CRA)
└── vite.config.ts       # or CRA config files
