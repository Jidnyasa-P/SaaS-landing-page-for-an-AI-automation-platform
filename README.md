# Daemon — Enterprise Autonomous AI Workflows

A high-performance, single-view developer platform landing page and dynamic pricing engine engineered with absolute precision, zero-dependency structural motions, and a strict, performance-isolated architecture.

---

## ⚡ Key Highlights
- **Zero-Dependency Core**: No third-party animation libraries or external component frameworks (no Radix, no Shadcn, no Framer Motion). All layout structures and transitions are built entirely from scratch with native, hardware-accelerated CSS and optimized React.
- **Isolated Rendering Pipeline**: Structural controls like billing toggles or currency switchers isolate updates directly to localized text nodes. Changing prices never triggers parent component re-renders or global layout thrashing.
- **Context-Locked Responsive Transitions**: Seamlessly propagates interactive state across breakpoints. Resizing the viewport from desktop to mobile instantly maps the active bento hover index into the open accordion state.
- **Premium Design Tokens**: Adheres to a strict color palette (Oceanic Noir, Arctic Powder, Mystic Mint, Forsythia, Deep Saffron) paired with high-contrast, beautiful typography (Space Grotesk, Inter, JetBrains Mono).

---

## 🏗️ Architectural Overview & Core Features

### 1. Matrix-Driven Pricing & Performance-Isolated Switcher
The pricing engine is driven by a unified multi-dimensional pricing matrix configured in `src/lib/pricingMatrix.js`. It dynamically computes localized pricing tiers based on:
- **Base Tier Rates**: Scaled across regional currencies (**INR (₹)**, **USD ($)**, and **EUR (€)**).
- **Annual Billing Discount**: A flat 20% multiplier computed dynamically on runtime selection.
- **State Isolation Guardrail**: Traditional state updates trigger full React component tree re-renders, causing visual flashes and layout recalculations. To ensure maximum performance, Daemon uses **localized text node targeting via DOM refs**. Changing the currency or billing cycle updates only the individual numeric text nodes instantly, keeping the overall component lifecycle completely static and silent under Chrome DevTools performance tracking.

### 2. Bento-to-Accordion Wrapper with State Persistence
Features are showcased on desktop using a bento-grid layout. On mobile viewports, the grid transitions fluidly into a touch-optimized vertical accordion.
- **The Context Lock**: A responsive resize listener monitors viewport width. If a user hovers or focuses on Bento node #3 on desktop and shrinks their browser, Bento's state is preserved: Accordion panel #3 automatically initializes as open, maintaining continuous user focus.
- **Native Motion Easing**: Transitions adhere to the strict motion constraints of 150ms–200ms for micro-interactions (ease-out curve) and 300ms–400ms for structural reflows (ease-in-out curve).

---

## 📐 Scoring & Technical Pass Auditing Guide

For hackathon judges auditing the codebase, here is where each critical scoring criterion is implemented:

| Evaluation Criteria | Implementation Path | Technical Mechanism |
| :--- | :--- | :--- |
| **Multi-Currency Pricing Matrix** | `src/lib/pricingMatrix.js` | Dynamic rate calculation utilizing regional tariffs and a 20% annual discount multiplier. |
| **State-Isolated Price Node Updates** | `src/components/PricingMatrix.jsx` | Updates numeric values directly on DOM text nodes using React refs, preventing parent/child re-renders. |
| **Bento-to-Accordion Fluid Wrapper** | `src/components/BentoAccordion.jsx` | Uses a single semantic component that adapts based on CSS media queries, listening to window resizes for active state transfer. |
| **Motion Timing Tokens** | `src/styles/tokens.css` | Implements `--dur-micro` (150ms-200ms) for hovers and `--dur-reflow` (300ms-400ms) for layout transitions. |
| **SEO & Semantic HTML** | `index.html` & `src/App.jsx` | Utilizes standard `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags along with standard Open Graph (OG) headers. |
| **Asset Compliance (14 Icons)** | `src/components/icons/` | All 14 custom SVG assets from the provided package are mapped, colored using `currentColor`, and fully active. |

---

## 🎨 Asset & Palette Compliance

All layout components strictly utilize the designated brand colors defined inside `src/styles/tokens.css`:
- **Oceanic Noir** (`#172B36`): The primary dark canvas and deep accent.
- **Arctic Powder** (`#F1F6F4`): The main light background tone.
- **Mystic Mint** (`#D9E8E2`): A soft, subtle, high-contrast support tone.
- **Forsythia** (`#FFC801`): Primary brand highlight color.
- **Deep Saffron** (`#FF9932`): Secondary brand accent and highlight color.

Typography is styled using a modern dual-font system:
- **JetBrains Mono**: Used for display headers, numeric stats, code blocks, and primary labels to convey an authentic, highly precise "built by coders" tech aesthetic.
- **Inter**: Used for clean, geometric, high-readability body text and support elements.

---

## 📦 SVG Asset Mapping

All 14 vector assets are fully integrated and dynamically colored using `currentColor`:

| Asset File | Icon Component | Active Usage Location |
| :--- | :--- | :--- |
| `cube-16-solid.svg` | `Cube16SolidIcon` | Header logo mark & "Infinite Visual Canvas" bento card |
| `arrow-path.svg` | `ArrowPathIcon` | "Autonomous Execution" bento card |
| `link-solid.svg` | `LinkSolidIcon` | "End-to-End Encryption" bento card |
| `cog-8-tooth.svg` | `Cog8ToothIcon` | "Production-Ready Stack" bento card |
| `chevron-down.svg` | `ChevronDownIcon` | Accordion trigger arrow (rotates 180° smoothly) |
| `chevron-right.svg` | `ChevronRightIcon` | Primary CTAs, slider controls, navigation cues |
| `search.svg` | `SearchIcon` | Secondary interactive action cues |
| `chevron-left.svg` | `ChevronLeftIcon` | Carousel navigation slide controls |
| `link.svg` | `LinkIcon` | Case study anchor links |
| `x-mark.svg` | `XMarkIcon` | Mobile responsive navigation drawer close button |
| `chevron-up-solid.svg` | `ChevronUpSolidIcon` | Global "Back to Top" footer button |
| `chart-pie.svg` | `ChartPieIcon` | Numeric telemetry block (latency metric) |
| `arrow-trending-up.svg` | `ArrowTrendingUpIcon` | Numeric telemetry block (throughput multiplier) |
| `chevron-up.svg` | `ChevronUpIcon` | Numeric telemetry block (uptime status) |

---

## 🚀 Getting Started Locally

Follow these commands to clone, build, and run the project locally:

```bash
# 1. Install dependencies
npm install

# 2. Run the local development server (Vite)
npm run dev

# 3. Build the production bundle
npm run build

# 4. Preview the local production build
npm run preview
```

## Built by Jidnyasa Patil
