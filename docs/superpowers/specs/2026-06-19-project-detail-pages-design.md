# Project Detail Pages + Hover-Reveal Cards

**Date:** 2026-06-19
**Status:** Approved

## Goal

Remove the long project descriptions from the landing-page project grid and move
them to dedicated per-project detail pages. On the landing page, each card shows a
category label that, on desktop hover, slides up and away to reveal a clickable
"Show project" call-to-action. The whole card links to the project's detail page.

## Routing & App Structure

- Add `react-router-dom` (v7; compatible with React 19).
- Wrap the app in `<BrowserRouter>` in `src/main.tsx`.
- Routes:
  - `/` — current landing layout (Header + Hero + Services + Skills + Projects +
    Experience + Contact + Toaster).
  - `/projects/:slug` — `ProjectDetail` page (Header + project content + back link).
- Header anchor links (`#projects`, `#contact`, etc.) must resolve to the landing
  page from any route. Point them at `/#projects` so they work from the detail page.

## Data Model

Extract the `myProjects` array out of `Projects.tsx` into `src/data/projects.ts`,
exporting a `Project` type and the `projects` array. Both the landing grid and the
detail page consume this single source.

Add two fields to each project:

- `slug: string` — explicit, stable URL segment (e.g. `"movie-app"`). Not derived
  from titles (titles are inconsistent).
- `category: string` — the default card label.

Proposed categories:

| Project | slug | category |
|---|---|---|
| SOVRN Coaching | `sovrn-coaching` | Web Development |
| Contractor Hero | `contractor-hero` | Web Development |
| Movie App - Mobile | `movie-app` | Mobile App |
| Sababa Nights Dancing | `sababa-nights` | Web Development |
| Arduino Car | `arduino-car` | Hardware / IoT |
| Dungeon Crawler Prototype | `dungeon-crawler` | Game |
| Sobriety Seven - Mobile | `sobriety-seven` | Mobile App |
| 2D Adventure Game | `2d-adventure` | Game |

## Landing Card

Each card is a single `<Link to={`/projects/${slug}`}>`. Contents:

- Image (existing aspect-ratio behavior retained).
- Title.
- Sliding label slot.

Removed from the card: the description paragraph, the inline GitHub/live `<a>` icons
(invalid nested inside a `<Link>` — they move to the detail page), and the tech tags
(moved to the detail page to keep card heights uniform).

### Sliding label slot

A fixed-height, `overflow-hidden` container with two stacked layers driven by Tailwind
`group`/`group-hover`:

- Default: `category` text visible.
- Desktop hover: category slides up and fades out (`group-hover:-translate-y-full`);
  "Show project →" slides up from below into place (`translate-y-full` →
  `group-hover:translate-y-0`), with a transition.
- Touch devices: no hover — the whole card is tappable; the category label stays
  visible (no animation).
- Respects `prefers-reduced-motion`: no slide, instant state.

## Detail Page (`/projects/:slug`)

Full page, consistent with the rest of the site:

- Site `Header` on top.
- Large project image.
- Title.
- Category.
- Full description (the paragraph removed from the card).
- Tech tags.
- GitHub link and live link (each rendered only when present).
- "← Back to projects" link (to `/#projects`).

Look up the project by `slug` from the shared data. Unknown slug → a small
"Project not found" message with a back link.

## Deployment (.htaccess)

Add an SPA fallback rewrite so deep links like `/projects/movie-app` serve
`index.html` on direct load/refresh instead of 404ing. Must be placed so it does not
break the existing Host-aware www-canonical redirect (rewrite conditions should
exclude existing files/directories and run after the canonical redirect). Exact rule
to be confirmed before deploy.

## Testing

- Data: every project has a unique, non-empty `slug` and `category`.
- Detail page: renders the correct project for a valid slug; shows not-found for an
  unknown slug; renders GitHub/live links only when present.
- Card: links to the correct `/projects/:slug`; renders category by default.

## Out of Scope

- Per-page SEO meta tags for detail routes (SPA client-set only; revisit later).
- Image galleries / multiple screenshots per project.
- Contact section on the detail page.
