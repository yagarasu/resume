import { faCss3, faGitAlt, faNodeJs, faPhp, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { Skill, SkillGroup } from "../types/skill";
import { faBrain, faChalkboardTeacher, faCube, faDatabase, faDiagramProject, faFileCode, faLaptopHouse, faSearch, faTerminal } from "@fortawesome/free-solid-svg-icons";

export const feSkills: Skill[] = [
  {
    name: 'React',
    icon: faReact,
    description: 'Using it since 2016',
  },
  {
    name: 'Redux',
    icon: faFileCode,
    description: 'With redux-saga and redux-thunk',
  },
  {
    name: 'React Query',
    icon: faDiagramProject,
    description: 'Also known as Tanstack Query',
  },
  {
    name: 'Typescript',
    icon: faFileCode,
  },
  {
    name: 'Javascript',
    icon: faSquareJs,
    description: 'ES6+, Vanilla and jQuery',
  },
  {
    name: 'CSS',
    icon: faCss3,
    description: 'Latest CSS: Flexbox, Grid, etc',
  },
  {
    name: 'Sass',
    icon: faSass,
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
    name: 'Node.js',
    icon: faNodeJs,
  },
  {
    name: 'Koa.js',
    icon: faNodeJs,
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
    name: 'Webpack',
    icon: faCube,
    description: 'config.js creation'
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
      {
        name: 'Problem Solving',
        icon: faBrain,
        description: 'From initial requirements analysis to prod troubleshooting'
      },
      {
        name: 'Remote work',
        icon: faLaptopHouse,
        description: 'Self driven and good at communicating with remote coworkers'
      },
    ]
  }
];
