import { parse } from 'date-fns';
import { Experience } from '../types/experience';

import fountainLogo from '../assets/fountain.png';
import nextivaLogo from '../assets/nextiva.jpg';
import pslLogo from '../assets/psl.png';
import ahLogo from '../assets/logo.svg';
import unidepLogo from '../assets/unidep.png';

export const experience: Experience[] = [
  {
    place: 'Fountain',
    logo: fountainLogo,
    positions: [
      {
        position: 'Senior Software Engineer',
        startDate: parse('2026-03', 'yyyy-MM', new Date()),
        endDate: new Date(),
        description: `AI-native onboarding product for the global frontline workforce: preboarding and onboarding workflows built from tasks, consumed by new hires through a mobile web app.

* Owns epics end-to-end in a **fully agentic workflow** — Cursor, Claude Code and a proprietary harness built on Open Inspect: uses AI to surface gaps in the spec, closes them in dialogue, then delegates implementation, routes the PR through agent review (including a custom skill I authored) and babysits it to merge; **ships to production hourly**.
* Refactored the onboarding product's **AI agent**, equipping it with tools over **MCP (Model Context Protocol)**, authoring reusable skills and optimizing prompts — improving perceived goal completion across the product.
* Closed a systemic data gap where documents signed in **Dropbox Sign** never marked their task complete in our system (and vice versa), taking recurring production incidents from **~10/month to zero**.
* Shipped new admin-facing capabilities in the pending-tasks view (document review, form approvals), taking the surface from **unused to GA**.
* Validates prompt and agent changes against the team's **perception-based eval framework** before shipping them.

**Skills used**: React, TypeScript, Node.js, MongoDB, MCP (Model Context Protocol), agentic workflows, prompt engineering, evals, observability`,
      },
    ],
  },
  {
    place: 'Nextiva',
    logo: nextivaLogo,
    positions: [
      {
        position: 'Senior Software Engineer (Frontend Focus)',
        startDate: parse('2021-05', 'yyyy-MM', new Date()),
        endDate: parse('2025-11', 'yyyy-MM', new Date()),
        description: `Task automation platform and real-time communication application.

* Architected and led frontend development of a task automation platform and a real-time communication application using **React, Redux and TypeScript**, defining scalable state management and reusable component patterns adopted across the team.
* Designed a **DSL-driven configuration UI** for the automation template builder — choosing extra frontend complexity over hardcoded copy so templates could change without a release, and the team could iterate on the UI quickly.
* Led bundle size optimization initiatives, **reducing the bundle by ~50%** and improving load performance and rendering efficiency across the application.
* Implemented full application observability with **Datadog**, cutting time-to-debug from **1–2 days to ~1 hour** and giving production visibility into errors, performance bottlenecks and user-impacting anomalies.
* Established frontend testing standards with Jest, Vitest and React Testing Library, reaching **80% test coverage** and contributing to the end-to-end strategy with Cypress.
* Modernized the monorepo (**Turborepo/Vite**), standing up CI end-to-end at **~40 minutes** with automatic deploys to staging and moving releases to a weekly cadence.
* Delivered real-time communication features integrating **Amazon Chime SDK, Azure Communication Services and Salesforce OpenCTI**, enabling scalable voice and video experiences.
* Championed code quality and maintainable architecture through structured code reviews, and **mentored 2 junior engineers**.

**Skills used**: React, Redux, TypeScript, TanStack Query, Material UI, Emotion, CSS with BEM, MongoDB, Datadog, Jest, Vitest, Cypress, Turborepo, Vite, pnpm, GitHub Actions, Amazon Chime SDK, Azure Communication Services, Salesforce OpenCTI`,
      },
    ],
  },
  {
    place: 'P/S/L Group',
    logo: pslLogo,
    positions: [
      {
        position: 'Senior Software Engineer',
        startDate: parse('2015-03', 'yyyy-MM', new Date()),
        endDate: parse('2021-05', 'yyyy-MM', new Date()),
        description: `Large-scale content management platform (Drupal → React/Redux migration).

* Led the migration of a large-scale content management platform from Drupal to a **React/Redux** architecture — **~700K articles (10 years of content), ~100K monthly visits** — designing a scalable UI framework and component structure.
* Ran down a production incident in the templated newsletter system (**Elasticsearch + Redis**): the per-user interest cache key was the bottleneck stalling the send, so I replaced it with a faster key-generation model.
* Designed and implemented full-stack features using **Symfony, Node.js, MySQL, MongoDB and ElasticSearch**, supporting high-content, data-intensive workflows.
* Built interactive, data-driven applications and dashboards with **D3.js** and Google Charts, improving the clarity of complex datasets for internal and external users.

**Skills used**: React, Redux, Redux-Saga, TypeScript, CSS+Sass, PHP, Symfony, Node.js, Koa, MySQL, MongoDB, ElasticSearch, Redis, D3.js, Google Charts, Git, Webpack`,
      },
    ],
  },
  {
    place: 'Freelance',
    logo: ahLogo,
    positions: [
      {
        position: 'Software Developer',
        startDate: parse('2014-02', 'yyyy-MM', new Date()),
        endDate: parse('2015-02', 'yyyy-MM', new Date()),
        description: `* Delivered a second, repeat **redesign of UNIDEP's website** as a freelance engagement after returning from Tokyo — the same client coming back.
* Developed full-stack web applications and WordPress solutions for small and mid-sized businesses.
* Built internal tools and data visualization prototypes with interactive graph interfaces using React, Node.js and ElasticSearch.
* Implemented third-party API integrations including Google Geocoder and SOAP-based services.

**Skills used**: PHP, WordPress, CSS+Sass, JavaScript, MySQL, MSSQL Server, Google Analytics, React, Node.js, MongoDB, ElasticSearch, D3.js`,
      },
    ],
  },
  {
    place: 'UNIDEP',
    logo: unidepLogo,
    positions: [
      {
        position: 'Digital Marketing Manager & Development Lead',
        startDate: parse('2011-02', 'yyyy-MM', new Date()),
        endDate: parse('2014-02', 'yyyy-MM', new Date()),
        description: `* Led a cross-functional team of two developers, a project manager, a DBA and a digital media coordinator, owning digital strategy, development and marketing execution across web, social and advertising channels.
* Led the end-to-end **redesign of the university's website**, aligning design, content and engineering stakeholders around a single rebuild.
* Built an in-house **CRM and lead-generation tooling with PHP and MSSQL**, improving visibility into enrollment funnels and driving web-based student acquisition.
* Drove **SEO, UX and analytics** improvements that cut bounce rates and pushed key university pages to top Google rankings.

**Skills used**: PHP, MSSQL Server, WordPress, CSS, JavaScript, Google Analytics, SEO, digital marketing`,
      },
    ],
  },
];
