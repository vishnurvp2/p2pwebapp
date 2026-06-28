# Frontend

This directory contains the React frontend for the P2P Web App.

## Technology

- React
- Vite
- JavaScript (ES Modules)

## Responsibilities

The frontend is responsible for:

- User Interface
- Application State
- Peer Connection UI
- Messaging Interface
- File Transfer Interface
- Call Interface
- Settings
- Progressive Web App features

The frontend does **not** contain signaling or STUN logic. Those services belong to the backend.

## Development

Install dependencies

```
npm install
```

Run development server

```
npm run dev
```

Build production bundle

```
npm run build
```

Preview production build

```
npm run preview
```

## Deployment

The production build is deployed using Cloudflare Pages.

Only the contents of this directory are deployed.
