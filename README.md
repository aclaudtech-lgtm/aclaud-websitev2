# aclaud website

The founding website for Aclaud Technologies LLC. It presents aclaud as a production-engineering company for software, data, cloud, and AI systems, with dedicated engineering, contracting, contact, privacy, and accessibility pages.

## Technology

- Next.js-compatible vinext application
- React and TypeScript
- Cloudflare Worker-compatible deployment output
- Minimal client-side JavaScript
- Semantic, responsive, WCAG 2.2 AA-oriented interface

## Run locally on macOS

Install [nvm](https://github.com/nvm-sh/nvm), then from the project directory run:

```bash
nvm install
nvm use
npm ci --no-audit --no-fund
npm run typecheck
npm run build
npm run dev
```

Open `http://localhost:3000`. If that port is already in use, the development server prints the next available local URL.

Do not edit `next.config.ts`, delete `node_modules`, or run npm installation commands while the development server is active.

## Useful commands

```bash
npm run dev
npm run typecheck
npm run build
npm run lint
```

## Content and assets

- Page content lives under `app/`.
- Shared header, footer, mark, and diagrams live under `app/components/`.
- Public assets, the capabilities statement, icons, and `CNAME` live under `public/`.
- The two-page capabilities statement source generator lives under `scripts/`.

Update the website and PDF together when contracting identifiers, service language, or contact details change.

## Deployment

The repository includes a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`. The included Sites configuration also supports the primary hosted deployment.

For GitHub Pages, set the repository Pages source to **GitHub Actions**, confirm the custom domain is `aclaud.com`, and verify DNS before making the repository’s deployment public.

## Troubleshooting

### Invalid npm registry

Confirm the public npm registry:

```bash
npm config get registry
npm config set registry https://registry.npmjs.org/
```

### Corrupted `node_modules` or `ENOTEMPTY`

Stop the development server before removing generated directories. Use the clean-install sequence below.

### `EPERM uv_cwd`

Your terminal is pointing at a directory that no longer exists or cannot be read. Change to your home directory, then return to the project using a valid path:

```bash
cd ~
cd ~/Downloads/aclaud-website
```

### Wrong Node version

Run:

```bash
nvm install
nvm use
node --version
```

The version should match `.nvmrc`.

### Missing Next binaries

Stop the development server and run a clean install with `npm ci`. Do not copy `node_modules` from another computer.

### Hydration warnings

Stop the server, remove stale build output, and rebuild. Avoid browser-only values, locale-dependent dates, `Date.now()`, or `Math.random()` in server-rendered markup.

### Stale `.next` output

Stop the development server before deleting `.next`, `.vinext`, or `dist`, then run the build again.

## Safe clean-install sequence

This sequence assumes the project is located at `~/Downloads/aclaud-website`:

```bash
cd ~
cd ~/Downloads/aclaud-website
pkill -f "next dev" 2>/dev/null || true
rm -rf node_modules .next out
npm cache verify
npm config set registry https://registry.npmjs.org/
npm ci --no-audit --no-fund
npm run typecheck
npm run build
npm run dev
```

Never remove `node_modules` or start an installation while the development server is active.
