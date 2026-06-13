# Installation

## Requirements

- Node.js 18+ (LTS recommended)
- npm, yarn, หรือ pnpm
- Git

## Create New Project

```bash
npm init -y
npm install electron --save-dev
```

## Add Scripts to package.json

```json
{
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  }
}
```

## Verify Installation

```bash
npm start
```

## Project Structure

```
project/
├── package.json
├── main.js           # Main process
├── preload.js        # Preload script
├── index.html        # Renderer
└── renderer.js       # Renderer logic
```
