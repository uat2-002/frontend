# Frontend Setup and Troubleshooting

## Install dependencies

After cloning the repository, install the frontend dependencies:

```bash
cd frontend
npm install
```

If the project fails to build because modules are missing, reinstall the dependencies:

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Common issue fix for the team

If TypeScript or Vite reports missing packages or a broken local environment:

```bash
cd frontend
npm install
npm run build
```

If the installation is stale or partially broken:

```bash
rm -rf node_modules package-lock.json
npm install
```
