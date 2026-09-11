# Try to install shadcn, no tailwind and problems with alias:

`PS D:\UAT2\frontend> npx --yes shadcn@latest init -d`

```
- ✔ Preflight checks.
- ✔ Verifying framework. Found Vite.
- ✖ Validating Tailwind CSS.
- ✖ Validating import alias.

No Tailwind CSS configuration found at D:\UAT2\frontend.
It is likely you do not have Tailwind CSS installed or have an invalid configuration.
Install Tailwind CSS then try again.
Visit https://tailwindcss.com/docs/guides/vite to get started.

Could not find valid path aliases or package imports for init.
Configure path aliases in tsconfig.json or imports in package.json, then run init again.
Learn more at https://ui.shadcn.com/docs/installation/manual#configure-import-aliases.
```

# Solving: 

Using instructions from https://tailwindcss.com/docs/installation/using-vite

install tailwind
```
npm install tailwindcss @tailwindcss/vite
```

edit vite.config.ts and add 
```
import tailwindcss from '@tailwindcss/vite'

plugins: [
    tailwindcss(),
  ],
```

also edit index.css
```
@import "tailwindcss";
```

# Alias problem: 

`PS D:\UAT2\frontend> npx --yes shadcn@latest init -d`       

```
- ✔ Preflight checks.
- ✔ Verifying framework. Found Vite.
- ✔ Validating Tailwind CSS. Found v4.
- ✖ Validating import alias.

Could not find valid path aliases or package imports for init.
Configure path aliases in tsconfig.json or imports in package.json, then run init again.
Learn more at https://ui.shadcn.com/docs/installation/manual#configure-import-aliases.
```

# Sloving: 

from guidance on https://ui.shadcn.com/docs/installation/manual#configure-import-aliases

Edit tsconfig.json
adding paths

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

# Solved:

`PS D:\UAT2\frontend> npx --yes shadcn@latest init -d`

```
- ✔ Preflight checks.
- ✔ Verifying framework. Found Vite.
- ✔ Validating Tailwind CSS. Found v4.
- ✔ Validating import alias.
- ✔ Checking registry.
- ✔ Writing components.json.
- ✔ Installing dependencies.
- ✔ Created 2 files:
  - components\ui\button.tsx
  - lib\utils.ts
- ✔ Updating src\index.css

Project initialization completed.
You may now add components.
```

Also automatically created components.json, utils.ts & button.tsx as example.