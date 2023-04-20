# React Data Fetching with React-Query + TypeScript

A demo react app with [TanStack Query](https://tanstack.com/query/latest/) data-fetching library.

## Getting Started

### Prerequisites

##### Node.js

Install and choose `Node.js` version. It's recommended to install node.js with `nvm` package [here](https://github.com/nvm-sh/nvm).

install Node.js with nvm:

```
nvm install 18.10.0
nvm alias default 18.10.0
nvm use default
node -v
```

##### PNPM Package Manager

install pnpm:

```
corepack enable
corepack prepare pnpm@latest --activate
pnpm -v
```

##### VS Code (recommended)

Please install `eslint` and `prettier` plugins on VS Code to apply code consistency and autoformatting.

### Installing

Fork or download the project to your machine. Then open the project's folder and start installation.

install project:

```
pnpm install
```

### Run server

This project use [json-server](https://github.com/typicode/json-server) to implement fake REST API with `database.json` as a DB file.

running server:
```
pnpm run server
```

### Run project

running development:

```
pnpm run dev
```

build production:

```
pnpm run build
```

## Built With

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Tailwind](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Authors

- **[Kuntiarso](https://github.com/kuntiarso)** - _2023_

