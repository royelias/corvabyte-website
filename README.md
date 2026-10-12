# corvabyte-web

The corvabyte.com homepage as a React app (Vite). Dark theme, electric-blue raven identity, Saira headlines with Geist body text.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Structure

```
src/
  App.jsx                 page order
  styles.css              design tokens (:root) and all styles
  data/content.js         every piece of copy, metric, service and case study
  hooks/
    useReducedMotion.js   respects the OS reduced-motion setting
    useCanvas.js          sizes a canvas and runs its animation loop
  components/
    Logo.jsx              RavenMark (SVG) and Wordmark
    Nav.jsx, Hero.jsx, Metrics.jsx, ProcessStory.jsx,
    ServicesTour.jsx, CaseStudies.jsx, Closing.jsx, Footer.jsx   page sections
    FlockCanvas.jsx       hero node network
    MorphCanvas.jsx       particles that re-form for each process stage
    CountUp.jsx, LogoMarquee.jsx, ServiceMock.jsx, CaseCard.jsx,
    SectionHead.jsx, Button.jsx, Chip.jsx, PrototypeBanner.jsx   small building blocks
```

To change text, edit `src/data/content.js`. To change colors or fonts, edit the tokens at the top of `src/styles.css`.

All copy, client names and figures are placeholders until the real content is confirmed. Remove `PrototypeBanner` from `App.jsx` once they are.
