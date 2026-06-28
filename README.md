# P2P Web App

A peer-to-peer web communication platform built using modern web technologies.

## Vision

The goal of this project is to build a decentralized communication platform that minimizes server dependency while remaining accessible from a standard web browser.

The application is designed around WebRTC peer-to-peer communication. Servers are used only where necessary, such as signaling and STUN, while all user communication occurs directly between peers whenever possible.

## Project Structure

```
p2pwebapp/
├── frontend/
└── backend/
```

### Frontend

- React
- Vite
- Cloudflare Pages

### Backend (Planned)

- Signaling Server
- STUN Server
- Session Management
- Future supporting services

## Current Status

Project initialization.

The frontend is currently being developed and deployed independently. Backend services will be introduced incrementally as the application architecture evolves.

## Long-Term Goals

- Anonymous account creation using randomly generated IDs
- Direct peer-to-peer messaging
- File transfer
- Voice and video communication
- Progressive Web App (PWA)
- Minimal server dependency
- Cross-platform browser support

## Development Philosophy

- Keep the frontend and backend independent.
- Build modular components.
- Avoid unnecessary complexity.
- Favor browser-native technologies whenever possible.

This repository represents the complete source code for the project.
