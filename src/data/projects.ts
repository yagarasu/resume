import { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Homelab & agentic automation',
    role: 'Owner',
    dates: '2025 – Present',
    summary:
      'Self-hosted homelab running the household — wiki, task tracking, finances and dashboards — with LLM agents orchestrating crons, email and calendars.',
    bullets: [
      {
        text: 'Built an MCP server in a self-hosted homelab (Docker, Traefik, Tailscale) and wired it into Hermes, exposing home services as tools to an autonomous agent.',
      },
      {
        text: 'Used the break between jobs to move from Copilot autocomplete to delegating complete features to agents — the foundation of the fully agentic workflow I now run at work.',
      },
    ],
  },
  {
    name: 'alexyshegmann.tech — engineering blog',
    role: 'Owner / Author',
    dates: '2024 – Present',
    url: 'https://alexyshegmann.tech',
    summary:
      'Technical blog with 12 published posts on React, TypeScript, browser APIs, Astro, tooling and CI/CD. Built with Astro + TailwindCSS, with search and an automated GitHub Actions deploy pipeline.',
    bullets: [
      {
        text: 'Synchronizing multiple windows in React — cross-window state synchronization with the Broadcast Channel API.',
        url: 'https://alexyshegmann.tech/blog/sync-windows-in-react/',
      },
      {
        text: 'Maze builder in Typescript and React — an infinite maze generator built with React and TypeScript.',
        url: 'https://alexyshegmann.tech/blog/maze-builder/',
      },
      {
        text: 'React mixology: mixing React with Angular — patterns for incrementally modernizing inherited codebases.',
        url: 'https://alexyshegmann.tech/blog/mixing-frameworks-angular/',
      },
      {
        text: 'Astro deployment with rsync and Github Actions — the automated build and deploy pipeline that ships the site.',
        url: 'https://alexyshegmann.tech/blog/github-actions/',
      },
    ],
  },
];
