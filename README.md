This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Overview

This project is the first frontend to a project I'm doing where I make roughly the same application (or as close as I can get) in multiple frameworks/languages/libraries to compare and contrast them. Each project should show:

## State 
	- initialization
	- update performance 
	- shared state (if possible)

## Data fetching
	- caching data that won't often change (static generation that revalidates) 
	- caching data that will change (server side generation that has caching + invalidation)
	- build time data fetching

## Performance
	- How quickly does a static page render in a prod build?
	- How large is the bundle of a static page in a prod build?
	- How quickly does a dynamic page render on first load (no cache)?
	- How quickly does a dynamic page render on first load (cached)?
	- How quickly does a massive page load (static or unstatic, cached or uncached).
	- (Bonus) Can a page that depends on SEO leverage Server Side Rendering / another mechanism?

## Styling
	- How diverse are the styling options? 
	- Does it support tailwind out of the box?

## Bonus
	- Does the framework support static typing out of the box?
	- Does the framework have an authentication solution?
	- What else does the framework do?
