# Joel Maison | Portfolio

One portfolio, two pathways: a Data · AI · Analytics homepage and a dedicated Sports & Community page. This is a design iteration; nothing has been deployed or connected to a hosting provider.

## Preview locally

No package installation or build step is required.

- Open `index.html` directly in a browser, or use VS Code’s **Live Server** extension.
- Alternatively, run the following from this folder:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000 for the main portfolio and http://localhost:8000/sports.html for the sports collection. Stop the server with Ctrl+C. Refresh after editing files.

## Architecture

Plain HTML, CSS and JavaScript keep this small site fast, portable and easy to edit. Both pages share the same content and renderer. No framework, external font request, runtime dependency or deployment configuration.

| File | Responsibility |
| --- | --- |
| `index.html` | Main page layout, introduction, about and contact copy |
| `sports.html` | Sports page layout and introduction |
| `styles.css` | Shared design tokens, typography, layouts and responsive rules |
| `data.js` | Projects, experience, community and profile links |
| `app.js` | Rendering, diagrams, filters and mobile navigation |
| `assets/images/joel-studio-portrait.jpg` | Main portfolio hero portrait |
| `assets/images/joel-cultural-portrait.jpeg` | Sports page community portrait |

The visual direction combines warm paper tones, deep teal, large sans-serif headings and italic serif accents. Projects use spacious stories with explanatory diagrams instead of a grid of interchangeable cards. Sports shares the design system, with court geometry used only in the sports pathway.

The page background blends the `--paper` and `--sage` colors defined at the top of `styles.css`. The experience, contact, sports pathway and community sections also use gradients; their color stops are in the corresponding CSS rules. The homepage name size is controlled by `.hero h1` and its mobile rule.

Personal photos live in `assets/images/`, separate from future project visuals in `assets/projects/`. The hero portrait is referenced from `index.html`; the community portrait is referenced from `sports.html`. Update the path, dimensions and alt text in the corresponding page when changing either photo.
The hero photo keeps its original file. A small `filter` on `.hero-portrait img` in `styles.css` reduces its bright studio highlights and can be adjusted without changing the image.

## Add or update a project

Edit `portfolioData.projects` in `data.js`. Array order determines display order.

- Give every project a unique, stable `id` using lowercase letters and hyphens.
- Set `featured: true` to show it on the homepage.
- Add `"sports"` to `category` to also show it on the sports page.
- Supported homepage categories: `ai`, `analytics`, `engineering`. A project can have multiple categories.
- Use `title`, `subtitle`, `eyebrow`, `summary` and `outcome` for the project story. Keep outcomes grounded in evidence.
- `stack` is a list of technology names.
- `details` is a list of `{ label, text }` objects, displayed in native expandable technical notes.
- `github` and `demo` are optional. Missing links produce no disabled or placeholder buttons.
- `visual` selects an existing schematic: `rag`, `air`, `cloud`, `league` or `model`. Omit it if no diagram fits; do not use an unrelated diagram.
- `image` defaults to `null`. To replace a diagram with a real image, use:

```js
image: {
  src: "assets/projects/my-project.webp",
  alt: "Describe the actual interface or visualization shown",
  caption: "Actual project screenshot"
}
```

Create `assets/projects/` when adding real images. Compress images before committing. There are currently no fabricated product screenshots or measured charts: all diagrams are labeled schematics, and the RAG corpus/benchmark counts come from the supplied project facts.

To add a new category, add its filter button in `index.html` using the matching `data-filter` value. Existing filters automatically update counts and visibility.

## Experience, community and links

- Add or reorder entries in `experience` and `community`.
- Set `compact: true` on a community entry to show it on the main page; all community entries appear on the sports page.
- Update contact email and GitHub in `profile`. Keep the HTML contact fallbacks in sync for visitors without JavaScript.
- Set `profile.linkedin` to your confirmed LinkedIn URL when available.
- Set `profile.resume` to a real local PDF path or confirmed URL. The renderer adds these optional links to both contact sections.
- No roles, dates, awards or performance percentages should be added without confirmation.
- Research/blog entries can be added later as another data collection and renderer without changing frameworks. They are not implemented in this iteration.

## Accessibility and behavior

Semantic sections and headings, skip links, visible keyboard focus, native disclosure controls, filter pressed states and live result counts are included. Mobile navigation supports Escape and section-focus movement. Reduced-motion preferences disable smooth scrolling and transitions. Navigation remains available without JavaScript; dynamic projects have a no-script message with repository links. Full project, experience and community rendering requires JavaScript.

## Checks

```powershell
node --check app.js
node --check data.js
git diff --check
```

For visual review, check both pages on desktop and mobile, try all project filters, expand technical notes, and navigate using the keyboard. No deployment steps are required.
