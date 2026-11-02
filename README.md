# react-app

React + TypeScript front end (Vite) with React Router and an Express API on Node.js.

## Prerequisites

- Node.js 20 or newer

## Setup

```bash
npm install
```

## Development

Runs the Vite dev server and Express API together:

```bash
npm run dev
```

- **Client:** http://localhost:5173 (API requests to `/api/*` are proxied to Express)
- **API:** http://localhost:3001

## Type checking

```bash
npm run typecheck
```

## Production

```bash
npm run build
npm start
```

Open http://localhost:3001 — Express serves the built app and `/api/hello`.

Or use `npm run preview` to build and start in one step.
