# Travel Agency E-commerce Platform

A modern, full-stack travel agency e-commerce website for booking tour packages in Italy. Built with Next.js 15, React, TypeScript, Tailwind CSS, and Shadcn/ui components.

## Project Overview

This platform facilitates the booking of various tour packages, ranging from cultural explorations to adventure trips, specifically tailored for Italian destinations. It aims to provide a seamless user experience from browsing to booking.

## Tech Stack

-   **Frontend:** Next.js 15 (App Router), React 18, TypeScript
-   **Styling:** Tailwind CSS, Shadcn/ui, `next-themes` (Dark/Light mode)
-   **Icons:** Lucide React
-   **State Management:** TanStack Query (Server State), React hooks (Client State)
-   **Data:** Mock JSON data (no backend initially)
-   **Form Handling:** React Hook Form + Zod
-   **Date Handling:** `date-fns` & `react-day-picker`
-   **UI Notifications:** Sonner (Toast)
-   **Git Hooks:** Husky (Linting on commit)
-   **Deployment:** Vercel (planned)

## Core Features

### 1. Authentication System
-   User registration/signup
-   Login with email/password
-   Forgot password flow
-   Password reset
-   Email verification
-   Protected routes for authenticated users

### 2. Tour Package Browsing
-   **Homepage:** Featured tours showcase.
-   **Tour Listing:** Grid layout for browsing tours.
-   **Tour Details:**
    -   Image gallery
    -   Description and highlights
    -   Itinerary breakdown
    -   Inclusions/Exclusions
    -   Pricing
    -   Reviews and ratings
    -   Related tours

### 3. Search & Discovery
-   **Search:** Query input for finding tours.
-   **Filters:**
    -   Category (adventure, cultural, food, bike, wine)
    -   Price range
    -   Duration
    -   Difficulty level
-   **Sorting:** Price, rating, popularity.

### 4. Booking Flow
1.  **Select:** Choose tour package and dates.
2.  **Details:** Enter traveler information (supports multiple travelers).
3.  **Payment:** Integrated payment form (Stripe planned).
4.  **Confirmation:** Order summary and booking reference.

### 5. User Account/Dashboard
-   View booking history
-   Manage profile information
-   Download booking confirmations
-   Cancel bookings (future feature)

### 6. Information Pages
-   About Us
-   Contact Us (with form)

### 7. Responsive Design
-   Mobile-first approach
-   Optimized for tablet and desktop
-   Hamburger menu for mobile navigation
-   Sticky header/footer

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Git Hooks

This project uses **Husky** to enforce quality checks.
-   **Pre-commit:** Runs `npm run lint` to ensure code quality before every commit.
