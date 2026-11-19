# Portfolio Review — efilonaru.me

Review date: 2026-11-12

## Summary

The site is fast, accessible, and free of bloat. The problems are mostly about **content**: the bio doesn't match the projects, there are only two projects, and some branding is still template default. On the code side there's leftover scaffolding and an outdated stack.

---

## Content issues (highest impact)

### 1. Bio contradicts projects
- Hero/config says: *"building creative things with **Swift** and JavaScript."*
- Projects listed: BudgetBonsai (Kotlin), Kumpul (Next.js / TypeScript).
- There are **no Swift projects**, which stands out for an Apple Developer Academy learner.
- **Fix:** add an iOS/Swift project, or rewrite the bio to match what you've shipped.

### 2. Only two projects
- BudgetBonsai links to a GitHub repo, not something people can try or see.
- **Fix:** add 2–4 more projects. Give each a live link, a screenshot, or a short demo. Academy challenge projects count.

### 3. Default Astro favicon
- `public/favicon.svg` is still the Astro logo.
- **Fix:** replace it with your own mark (initials, a simple glyph).

### 4. No social preview image
- `twitter:card` is `summary`, but there's no `og:image`, so shared links render blank.
- **Fix:** add a 1200×630 `og:image` and set `twitter:card` to `summary_large_image`.

### 5. Split domains
- Main site is on `efilonaru.me`, while Kumpul is on `kumpul.efilonaru.com`.
- **Fix:** pick one domain family and stick with it.

---

## Code issues

### 6. Over-engineered components
- `src/components/Hero.astro` takes `title` / `description` props, but they're never passed.
- `src/components/Links.astro` reads `links` from `Astro.props`, but it's never passed and there's no `Props` interface.
- **Fix:** hardcode the values, or pull them from `siteConfig`. Drop the unused props.

### 7. Duplicated description
- The same bio string is in both `src/config.ts` and the `Hero.astro` defaults.
- **Fix:** keep one source of truth (`siteConfig.description`) and import it in `Hero`.

### 8. Unused dependency
- `@tailwindcss/typography` is installed and registered in `tailwind.config.mjs`, but `prose` isn't used anywhere (it's a leftover from the deleted blog).
- **Fix:** `npm uninstall @tailwindcss/typography` and remove the plugin line.

### 9. Redundant wrapper
- In `src/layouts/Layout.astro`, `max-w-4xl` wraps `max-w-2xl`, so the outer container does nothing.
- **Fix:** collapse it to a single `max-w-2xl mx-auto px-4 sm:px-6` container.

### 10. Custom scrollbar CSS on a page that barely scrolls
- `src/styles/globals.css` has about 30 lines of scrollbar styling.
- **Fix:** optional. Keep it if you plan to add content, otherwise delete it.

### 11. Outdated stack
- Astro 4 and Tailwind 3.
- `package.json` still has `"name": "astro-portfolio"` and `"version": "0.0.1"`.
- **Fix:** upgrade to current Astro and Tailwind v4 (`@tailwindcss/vite`). Rename the package.

### 12. Template leftovers
- `.github/workflows/deploy.yml` still has the starter comments ("Using a different branch name?...").
- `CNAME` is at the repo root. With Actions-based Pages deploys, the custom domain comes from repo settings, so the file has no effect.
- **Fix:** strip the comments. Delete `CNAME`, or move it to `public/` if you want it in the build output.

### 13. Small details
- "Github" should be "GitHub" in `Links.astro`.
- Commit history has three "initial commit"s and a commit named `3`. You can't fix the past, but write descriptive messages from here on.

---

## What's good (keep it)
- Zero client JS, fast load.
- Good a11y: `aria-labelledby`, `focus-visible` rings, `aria-label` on nav, `rel="noopener noreferrer"`.
- Canonical URL and OG title/description are set.
- Clean monochrome style with readable contrast.

---

## Action checklist

- [x] Add a Swift/iOS project or fix the bio
- [x] Add 2–4 more projects with live links or screenshots
- [ ] Replace the favicon
- [ ] Add `og:image` and switch to `summary_large_image`
- [ ] Remove unused props from `Hero` / `Links`
- [ ] Single source for the description (`siteConfig`)
- [ ] Uninstall `@tailwindcss/typography`
- [ ] Collapse the double container in `Layout.astro`
- [ ] Upgrade Astro and Tailwind, rename the package
- [ ] Clean up `deploy.yml` comments and the root `CNAME`
- [ ] "Github" → "GitHub"
