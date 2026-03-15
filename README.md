# 🎬 TappAV — Premium Home Theater & AV E-Commerce

A modern, high-fidelity e-commerce landing page and storefront for **TappAV**, a premium home theater and audio-visual equipment retailer. Built with React, TypeScript, Vite, and Framer Motion — deployed on Vercel. updated readme

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

---

## ✨ Features

### 🏠 Landing Page
- **Animated Hero Section** with background imagery and CTA
- **Experience Cards Carousel** with navigation controls
- **Process Steps**, **Testimonials**, and **CTA Sections**
- Smooth entrance animations powered by Framer Motion

### 🛍️ Store & Navigation
- **Mega-Menu Dropdown** on the "Store" nav item — glassmorphic overlay with category cards, brand tags, hover animations, and a consultation CTA
- **Hash-Based SPA Router** — seamless client-side navigation without a dedicated routing library
- Persistent **Navbar** and **Footer** across all pages

### 📦 Product Listing Page
- **Sidebar Filters** — filter by category (with product counts) and price range
- **Sort Options** — Featured, Price (Low/High), Highest Rated
- **Grid / List View** toggle
- **Compare Functionality** — select up to 3 products; a slide-up compare bar appears at the bottom
- Animated product cards with badges, star ratings, and hover effects
- Empty-state handling when no products match filters

### 🎯 Product Detail Page (e.g. Epson EH-TW9400)
- **Breadcrumb Navigation** — Home > Store > Category > Brand > Product
- **Image Gallery** with animated thumbnail selector
- **Pricing Section** — MRP, discount %, savings, GST breakdown
- **Quantity Selector** and **Add to Cart** button
- **Add to Compare** toggle
- **Key Specifications** quick-view grid
- **Assurance Bar** — 7-Day Returns · Authorized Warranty · Expert Installation
- **Feature Highlights** — animated cards with icons
- **Technical Specifications** — collapsible full specs table
- **Bottom CTA** — Book Free Consultation + Continue Shopping

---

## 🛠️ Tech Stack

| Layer        | Technology                                                                  |
|--------------|-----------------------------------------------------------------------------|
| Framework    | [React 18](https://react.dev/) + TypeScript                                |
| Build Tool   | [Vite 6](https://vite.dev/)                                                |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) + Inline Styles                   |
| Animations   | [Framer Motion](https://motion.dev/) (`motion/react`)                      |
| Icons        | [Lucide React](https://lucide.dev/)                                        |
| Fonts        | [Gloock](https://fonts.google.com/specimen/Gloock) · [Lora](https://fonts.google.com/specimen/Lora) |
| Deployment   | [Vercel](https://vercel.com/)                                              |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/MaNaa04/tappav.git
cd tappav

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at **http://localhost:3000/**

### Production Build

```bash
npm run build
```

Outputs optimized assets to the `dist/` directory.

---

## 🗺️ Routing

The app uses a lightweight **hash-based router** (`src/hooks/useRouter.ts`). Navigation is handled via `window.location.hash`.

| Route                         | Page                          |
|-------------------------------|-------------------------------|
| `#/` or no hash               | Landing Page                  |
| `#/store`                     | Product Listing (All)         |
| `#/store/projectors`          | Product Listing (Projectors)  |
| `#/store/speakers`            | Product Listing (Speakers)    |
| `#/store/home-theater`        | Product Listing (Home Theater)|
| `#/store/accessories`         | Product Listing (Accessories) |
| `#/product/epson-eh-tw9400`   | Product Detail Page           |

---

## 📁 Project Structure

```
TappAV-main/
│
├── .gitignore                   # Git exclusion rules
├── README.md                    # Project documentation
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Dependency lock file
├── vite.config.ts               # Vite config & path aliases
├── vercel.json                  # Vercel deployment config (SPA rewrite)
│
└── src/
    ├── main.tsx                 # App entry point (renders <App />)
    ├── App.tsx                  # Root component with hash-based routing
    ├── index.css                # Global styles & Tailwind config
    ├── Attributions.md          # Asset attributions
    │
    ├── components/              # UI Components (10 files)
    │   ├── BlueNavbar.tsx       # Primary navbar with mega-menu
    │   ├── SecondaryNav.tsx     # Secondary navigation bar
    │   ├── HeroSection.tsx      # Landing page hero section
    │   ├── ExperienceCards.tsx   # Experience cards carousel
    │   ├── ProcessSteps.tsx     # Process steps section
    │   ├── TestimonialSection.tsx # Customer testimonials
    │   ├── CTASection.tsx       # Call-to-action section
    │   ├── MainFooter.tsx       # Site footer
    │   ├── ProductListingPage.tsx # Store listing with filters & compare
    │   └── ProductDetailPage.tsx  # Product detail with gallery & specs
    │
    ├── data/                    # Data Layer
    │   └── products.ts          # Product types, sample data & utilities
    │
    ├── hooks/                   # Custom React Hooks
    │   └── useRouter.ts         # Hash-based SPA router hook
    │
    ├── styles/                  # Additional Styles
    │   └── globals.css          # Global/supplementary CSS
    │
    └── guidelines/              # Dev Guidelines
        └── Guidelines.md        # Design & development guidelines
```

---

## ☁️ Deployment (Vercel)

This project is configured for **one-click Vercel deployment**:

1. Push code to GitHub (already done → [github.com/MaNaa04/tappav](https://github.com/MaNaa04/tappav))
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** your GitHub repo
3. Vercel auto-detects **Vite** — click **Deploy**
4. Done! Your site is live 🎉

The `vercel.json` file handles:
- **Framework**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **SPA rewrites**: All routes → `index.html` (so hash routing works on refresh)

---

## 🎨 Design System

### Color Palette

| Token           | Value       | Usage                        |
|-----------------|-------------|------------------------------|
| Primary Blue    | `#0066CC`   | CTAs, links, active states   |
| Dark Blue       | `#0052A3`   | Hover states, gradients      |
| Navy            | `#0a1628`   | Dark backgrounds, text       |
| Deep Navy       | `#0d2145`   | Gradient endpoints           |
| Gold            | `#FFD700`   | Badges, accents, highlights  |
| Amber           | `#FFA500`   | Gradient pairs with gold     |

### Typography

- **Headings:** `Gloock` — elegant serif for titles and section headers
- **Body:** `Lora` — refined serif for descriptions, labels, and UI text

### Animation Principles

- Entrance animations via `initial` / `animate` with Framer Motion
- Hover micro-interactions (`whileHover`, `whileTap`)
- `AnimatePresence` for smooth mount/unmount transitions
- Viewport-triggered reveals with `whileInView`

---

## 📄 License

This project is for demonstration purposes. All product names, brands, and images are used for illustrative purposes only.
