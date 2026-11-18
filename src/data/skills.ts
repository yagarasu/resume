import { faCss3, faDocker, faGitAlt, faNodeJs, faPhp, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { Skill, SkillGroup } from "../types/skill";
import { faChalkboardTeacher, faChartLine, faCode, faCube, faDatabase, faEye, faFileCode, faFlask, faGears, faLaptopHouse, faRobot, faSearch, faServer } from "@fortawesome/free-solid-svg-icons";

export const aiSkills: Skill[] = [
  {
    name: 'MCP (Model Context Protocol)',
    icon: faRobot,
    description: 'Tooling for agents in production',
  },
  {
    name: 'Agentic workflows',
    icon: faRobot,
    description: 'Cursor, Claude Code, custom harness on Open Inspect',
  },
  {
    name: 'Prompt engineering',
    icon: faRobot,
  },
  {
    name: 'LLM skills & agent tooling',
    icon: faRobot,
    description: 'Authoring skills and tools for agents',
  },
];

export const feSkills: Skill[] = [
  {
    name: 'React',
    icon: faReact,
    description: 'Using it since 2016',
  },
  {
    name: 'TypeScript',
    icon: faFileCode,
    description: 'Strict typing, generics, complex types',
  },
  {
    name: 'Redux',
    icon: faFileCode,
    description: 'With Redux Toolkit',
  },
  {
    name: 'JavaScript (ES6+)',
    icon: faSquareJs,
    description: 'No frameworks',
  },
  {
    name: 'Tailwind CSS',
    icon: faCss3,
  },
  {
    name: 'CSS',
    icon: faSass,
    description: 'Sass, responsive design, component systems',
  },
  {
    name: 'Astro',
    icon: faCode,
  },
  {
    name: 'D3.js',
    icon: faChartLine,
    description: 'Data visualization',
  },
  {
    name: 'Accessibility',
    icon: faCode,
  },
];

export const beSkills: Skill[] = [
  {
    name: 'Node.js',
    icon: faNodeJs,
  },
  {
    name: 'PHP',
    icon: faPhp,
  },
  {
    name: 'Symfony',
    icon: faPhp,
  },
  {
    name: 'Laravel',
    icon: faPhp,
  },
  {
    name: 'Koa',
    icon: faNodeJs,
  },
  {
    name: 'REST APIs',
    icon: faServer,
  },
];

export const dbSkills: Skill[] = [
  {
    name: 'MongoDB',
    icon: faDatabase,
  },
  {
    name: 'MySQL',
    icon: faDatabase,
  },
  {
    name: 'Microsoft SQL Server',
    icon: faDatabase,
  },
  {
    name: 'ElasticSearch',
    icon: faSearch,
  },
];

export const testingSkills: Skill[] = [
  {
    name: 'Jest',
    icon: faFlask,
  },
  {
    name: 'Vitest',
    icon: faFlask,
  },
  {
    name: 'React Testing Library',
    icon: faFlask,
  },
  {
    name: 'Cypress',
    icon: faFlask,
  },
];

export const devopsSkills: Skill[] = [
  {
    name: 'Git / GitHub',
    icon: faGitAlt,
    description: 'Git CLI, GitHub, Bitbucket, Gitflow',
  },
  {
    name: 'GitHub Actions',
    icon: faCube,
  },
  {
    name: 'Docker',
    icon: faDocker,
    description: 'Docker & Docker Compose',
  },
  {
    name: 'Vite',
    icon: faCube,
  },
  {
    name: 'Turborepo',
    icon: faCube,
  },
  {
    name: 'CI/CD',
    icon: faGears,
  },
  {
    name: 'Monorepos',
    icon: faCube,
  },
  {
    name: 'Feature flags (LaunchDarkly)',
    icon: faGears,
  },
];

export const observabilitySkills: Skill[] = [
  {
    name: 'Datadog',
    icon: faEye,
  },
  {
    name: 'SigNoz',
    icon: faEye,
  },
  {
    name: 'Sentry',
    icon: faEye,
  },
];

export const growthSkills: Skill[] = [
  {
    name: 'SEO',
    icon: faChartLine,
  },
  {
    name: 'Google Analytics',
    icon: faChartLine,
  },
  {
    name: 'WordPress',
    icon: faCode,
  },
  {
    name: 'Digital marketing & campaigns',
    icon: faChartLine,
  },
];

export const techSkills: SkillGroup[] = [
  {
    name: 'AI & Agentic Engineering',
    skills: aiSkills,
  },
  {
    name: 'Frontend',
    skills: feSkills,
  },
  {
    name: 'Backend',
    skills: beSkills,
  },
  {
    name: 'Databases',
    skills: dbSkills,
  },
  {
    name: 'Testing',
    skills: testingSkills,
  },
  {
    name: 'DevOps & Tooling',
    skills: devopsSkills,
  },
  {
    name: 'Monitoring & Observability',
    skills: observabilitySkills,
  },
  {
    name: 'Web, SEO & Analytics',
    skills: growthSkills,
  },
];

export const softSkills: SkillGroup[] = [
  {
    skills: [
      {
        name: 'Mentorship',
        icon: faChalkboardTeacher,
        description: 'I love to share what I\'ve learned in the past 15 years'
      },
      {
        name: 'Remote work',
        icon: faLaptopHouse,
        description: 'Self driven and good at communicating with remote coworkers'
      },
    ]
  }
];
