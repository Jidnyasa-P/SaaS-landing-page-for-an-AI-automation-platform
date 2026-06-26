# Daemon — AI Platform Landing Page (Hackathon Scaffold)

A Vite + React starter purpose-built for the "Next-Gen AI Platform Speed Run"
brief. Zero UI/animation dependencies — only `react` + `react-dom`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> /dist
npm run preview  # serve the build locally
```

## SVG asset mapping (all 14 provided icons are wired in — none unused)

| File | Component | Used in |
|---|---|---|
| `cube-16-solid.svg` | `Cube16SolidIcon` | Header logo mark + "Infinite Visual Canvas" bento card |
| `arrow-path.svg` | `ArrowPathIcon` | "Autonomous Execution" bento card |
| `link-solid.svg` | `LinkSolidIcon` | "End-to-End Encryption" bento card |
| `cog-8-tooth.svg` | `Cog8ToothIcon` | "Production-Ready Stack" bento card |
| `chevron-down.svg` | `ChevronDownIcon` | Accordion trigger (rotates 180° when open) |
| `chevron-right.svg` | `ChevronRightIcon` | Hero CTA, pricing CTAs, social-proof "next" |
| `search.svg` | `SearchIcon` | Hero secondary CTA ("See how it works") |
| `chevron-left.svg` | `ChevronLeftIcon` | Social-proof "prev" scroll control |
| `link.svg` | `LinkIcon` | Per-logo case-study link in social proof |
| `x-mark.svg` | `XMarkIcon` | Mobile nav close state |
| `chevron-up-solid.svg` | `ChevronUpSolidIcon` | Footer "back to top" |
| `chart-pie.svg` | `ChartPieIcon` | Stats strip (latency stat) |
| `arrow-trending-up.svg` | `ArrowTrendingUpIcon` | Stats strip (throughput stat) |
| `chevron-up.svg` | `ChevronUpIcon` | Stats strip (uptime stat) |

All 14 were recolored from hardcoded `#000000` to `currentColor` so they inherit
text color and theme correctly on both light and dark sections — see
`src/components/icons/`. The mobile hamburger ("open" state) is a plain CSS
construct since no hamburger SVG was in the pack; only the "close" state uses
`x-mark.svg`.

## What's already done

| Scoring item | Where |
|---|---|
| Matrix-driven pricing, no hardcoded values | `src/lib/pricingMatrix.js` |
| Re-render isolation (currency/billing) | `src/components/PricingMatrix.jsx` — refs only, no `setState` on toggle |
| Bento -> Accordion + index context transfer | `src/components/BentoAccordion.jsx` |
| Motion timing tokens (150-200ms / 300-400ms) | `src/styles/tokens.css` |
| Sub-500ms entry orchestration | `src/main.jsx` + `.hero-enter` keyframes |
| Semantic HTML (`header/main/section/footer`) | `src/App.jsx` + component files |
| SEO / OG / Twitter metadata | `index.html` |
| Color palette (exact hex from colorPallet.pdf) | `src/styles/tokens.css` |
| Two-font system (JetBrains Mono + Inter) | `index.html` (Google Fonts link) + `tokens.css` |
| Provided SVG pack, fully integrated | `src/components/icons/` — see mapping table above |

## What YOU still need to do before submitting

1. **Self-host the fonts** if you want to drop the Google Fonts network
   request entirely: put the two `.woff2` files in `/public/fonts/` and
   swap the `<link>` in `index.html` for local `@font-face` rules.
2. **Verify re-render isolation yourself**: open React DevTools Profiler,
   record, toggle currency/billing — confirm zero commits. This is worth
   15 points and is graded mechanically, so don't skip checking it.
3. **Verify zero-dependency rule**: `package.json` should never gain a
   third dependency beyond `react`/`react-dom` (and Vite's own
   `@vitejs/plugin-react`, which is a build tool, not a runtime UI lib).
4. **Run Lighthouse** for the SEO/semantic pass — fix anything it flags
   before you stop.
5. **Test the actual resize transfer**: hover bento card #3 on desktop,
   shrink the window below 768px, confirm panel #3 opens in the accordion.
6. **Record demo.mp4** (<100MB) showing this exact resize behavior plus the
   pricing toggle, matching the motion pacing from the reference video.
7. **Deploy** (Vercel is fastest for a Vite app — `vercel --prod`, zero
   config needed) and confirm the live link loads with no console errors
   before you submit it.
8. Push to a **public** GitHub repo — double check the visibility setting,
   since a private repo is an instant disqualification.
