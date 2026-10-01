# Comfy Store

An e-commerce furniture store built with **React 19**, **TypeScript**, **Redux Toolkit** and **React Router** data APIs, styled with **Tailwind CSS v4** and **shadcn/ui**.

Users can browse and filter products, add them to a cart, register or log in (including as a guest), place orders and view their order history. Data comes from a public Strapi API.

**Live demo:** https://dmitriyyaroshchuk.github.io/comfy-store/

> Built while completing John Smilga's React & TypeScript course on Udemy.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

<!-- Add a screenshot: save it as docs/screenshot.png and uncomment the line below -->
<!-- ![Comfy Store screenshot](docs/screenshot.png) -->

## Features

- **Landing page** with a hero carousel and featured products
- **Product catalog** with search, category / company filters, sorting, price range, free-shipping filter and pagination
- **Grid / list view** toggle for products
- **Product details** with color and quantity selection
- **Shopping cart** with quantity editing, removal, tax and shipping totals, persisted in `localStorage`
- **Authentication**: register, log in, or log in as a guest user (JWT stored in `localStorage`)
- **Checkout** and **order history** with pagination — available to logged-in users only
- **Light / dark / system theme** toggle
- Toast notifications, loading skeletons and route-level error pages

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, TypeScript |
| Routing & data loading | React Router 6 (`createBrowserRouter`, loaders, actions) |
| State | Redux Toolkit, React Redux |
| Styling | Tailwind CSS 4, shadcn/ui (Radix UI), lucide-react icons |
| HTTP | Axios |
| Other | Embla Carousel, Sonner (toasts) |
| Tooling | Vite 8, ESLint 9, typescript-eslint |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **20.19+** or **22.12+** (required by Vite 8)
- npm (ships with Node.js)

No environment variables or local backend are needed — the app uses the public API at `https://strapi-store-server.onrender.com/api`.

> The API is hosted on a free Render instance, so the **first request may take 30–60 seconds** while the server wakes up.

### Installation

```bash
git clone https://github.com/DmitriyYaroshchuk/comfy-store.git
cd comfy-store
npm install
```

### Run in development

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build     # type-check and build to ./dist
npm run preview   # serve the production build locally
```

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check with `tsc` and create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Demo Account

Click **Guest User** on the login page, or log in manually:

- **Email:** `test@test.com`
- **Password:** `secret`

## Project Structure

```
src/
├── assets/              # Hero carousel images
├── components/
│   ├── cart/            # Cart items and totals
│   ├── form/            # Reusable form controls (input, select, range, checkbox)
│   ├── orders/          # Orders table
│   ├── product/         # Product color & amount selectors
│   ├── ui/              # shadcn/ui components
│   └── ...              # Navbar, Header, Filters, pagination, etc.
├── engine/
│   ├── hooks/           # Typed Redux hooks (useAppDispatch, useAppSelector)
│   └── store/           # Redux store configuration
├── features/            # Redux slices: cart, theme, user
├── lib/                 # shadcn `cn` helper
├── pages/               # Route components
├── utils/               # API client, loaders, actions, types, helpers
├── App.tsx              # Router configuration
├── main.tsx             # App entry point
└── index.css            # Tailwind and theme variables
```

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/` | Landing | Public |
| `/products` | Product catalog | Public |
| `/products/:id` | Product details | Public |
| `/cart` | Shopping cart | Public |
| `/about` | About | Public |
| `/login`, `/register` | Authentication | Public |
| `/checkout` | Checkout | Logged-in users |
| `/orders` | Order history | Logged-in users |

## Deployment

The app is deployed to GitHub Pages by the [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow on every push to `main`. It lints, builds with `BASE_PATH=/comfy-store/` and copies `index.html` to `404.html` so client-side routes work on page refresh.

## Acknowledgements

- [John Smilga](https://www.udemy.com/user/janis-smilga-3/) — course and project idea
- [Strapi Store Server](https://strapi-store-server.onrender.com/api/products) — demo API
- [shadcn/ui](https://ui.shadcn.com/) — UI components
