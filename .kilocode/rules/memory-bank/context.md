# Active Context: Muvy - Mototaxi App

## Current State

**Project Status**: ✅ Full app demo built

The template is a clean Next.js 16 starter with TypeScript and Tailwind CSS 4. It's ready for AI-assisted expansion to build any type of application.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Muvy mototaxi app - full mobile UI demo with 10 screens

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Renders MuvyApp | ✅ Ready |
| `src/app/layout.tsx` | Root layout (Muvy metadata) | ✅ Ready |
| `src/app/globals.css` | Global styles | ✅ Ready |
| `src/components/MuvyApp.tsx` | Phone frame + screen router | ✅ Ready |
| `src/components/MapView.tsx` | SVG fake map component | ✅ Ready |
| `src/components/screens/SplashScreen.tsx` | Splash/intro screen | ✅ Ready |
| `src/components/screens/LoginScreen.tsx` | Login (rider/driver toggle) | ✅ Ready |
| `src/components/screens/RegisterScreen.tsx` | 3-step registration | ✅ Ready |
| `src/components/screens/HomeScreen.tsx` | Rider home w/ map | ✅ Ready |
| `src/components/screens/RequestRideScreen.tsx` | Destination + price offer | ✅ Ready |
| `src/components/screens/NegotiateScreen.tsx` | InDrive-style negotiation | ✅ Ready |
| `src/components/screens/DriverSearchScreen.tsx` | Connecting animation | ✅ Ready |
| `src/components/screens/ActiveRideScreen.tsx` | Ride in progress + rating | ✅ Ready |
| `src/components/screens/DriverHomeScreen.tsx` | Driver dashboard + earnings | ✅ Ready |
| `src/components/screens/DriverOfferScreen.tsx` | Driver receives/counters offer | ✅ Ready |

## Current Focus

Muvy is a complete mobile app demo (rendered as a phone mockup in browser). Features include:
- Splash screen auto-advancing to login
- Login with passenger/driver toggle + Google/Facebook options
- 3-step registration with role selection
- Rider home with SVG map + quick destinations
- Price negotiation system (like InDrive) - low fares from $2,000 COP
- Driver dashboard with online/offline toggle + earnings
- Full ride flow: request → negotiate → connect → active ride → rating

## Quick Start Guide

### To add a new page:

Create a file at `src/app/[route]/page.tsx`:
```tsx
export default function NewPage() {
  return <div>New page content</div>;
}
```

### To add components:

Create `src/components/` directory and add components:
```tsx
// src/components/ui/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}
```

### To add a database:

Follow `.kilocode/recipes/add-database.md`

### To add API routes:

Create `src/app/api/[route]/route.ts`:
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
```

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Add more recipes (auth, email, etc.)
- [ ] Add example components
- [ ] Add testing setup recipe

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-03-24 | Built Muvy mototaxi app - 10 screens, phone mockup, SVG map, price negotiation system |
