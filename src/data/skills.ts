import { faCss3, faDocker, faGitAlt, faNodeJs, faPhp, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { Skill, SkillGroup } from "../types/skill";
import { faBrain, faChalkboardTeacher, faCube, faDatabase, faDiagramProject, faFileCode, faLaptopHouse, faSearch, faTerminal } from "@fortawesome/free-solid-svg-icons";

export const feSkills: Skill[] = [
  {
    name: 'Typescript',
    icon: faFileCode,
  },
  {
    name: 'React',
    icon: faReact,
    description: 'Using it since 2016',
  },
  {
    name: 'Tanstack Query',
    icon: faDiagramProject,
    description: 'Also known as React Query',
  },
  {
    name: 'Redux',
    icon: faFileCode,
    description: 'With Redux Toolkit',
  },
  {
    name: 'Javascript',
    icon: faSquareJs,
    description: 'No frameworks',
  },
  {
    name: 'Sass',
    icon: faSass,
  },
  {
    name: 'Tailwind CSS',
    icon: faCss3,
  }
];

export const beSkills: Skill[] = [
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
    name: 'Node.js',
    icon: faNodeJs,
  },
  {
    name: 'Koa.js',
    icon: faNodeJs,
  },
  {
    name: 'Mongoose',
    icon: faDatabase,
  },
];

export const dbSkills: Skill[] = [
  {
    name: 'MySQL',
    icon: faDatabase,
  },
  {
    name: 'MongoDB',
    icon: faDatabase,
  },
  {
    name: 'ElasticSearch',
    icon: faSearch,
  },
];

export const otherSkills: Skill[] = [
  {
    name: 'Linux',
    icon: faTerminal,
    description: 'Debian and CentOS based'
  },
  {
    name: 'Git',
    icon: faGitAlt,
    description: 'Git CLI; Github, Bitbucket; Gitflow'
  },
  {
    name: 'Docker',
    icon: faDocker,
    description: 'Docker & Docker Compose'
  },
  {
    name: 'Webpack',
    icon: faCube,
  },
  {
    name: 'Vite',
    icon: faCube,
  },
];

export const techSkills: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: feSkills,
  },
  {
    name: 'Backend',
    skills: beSkills,
  },
  {
    name: 'Database',
    skills: dbSkills,
  },
  {
    name: 'Other',
    skills: otherSkills,
  },
];

export const softSkills: SkillGroup[] = [
  {
    skills: [
      {
        name: 'Mentorship',
        icon: faChalkboardTeacher,
        description: 'I love to share what I\'ve learned in the past 10 years'
      },
      // {
      //   name: 'Problem Solving',
      //   icon: faBrain,
      //   description: 'From initial requirements analysis to prod troubleshooting'
      // },
      {
        name: 'Remote work',
        icon: faLaptopHouse,
        description: 'Self driven and good at communicating with remote coworkers'
      },
    ]
  }
];
