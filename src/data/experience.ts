import { parse } from 'date-fns';
import { Experience } from '../types/experience';

import nextivaLogo from '../assets/nextiva.jpg';
import pslLogo from '../assets/psl.png';
import ahLogo from '../assets/logo.svg';
import unidepLogo from '../assets/unidep.png';
// import unitecLogo from '../assets/unitec.png';

export const experience: Experience[] = [
  {
    place: 'Nextiva',
    logo: nextivaLogo,
    positions: [
      {
        position: 'Senior Software Engineer',
        startDate: parse('2021-05', 'yyyy-MM', new Date()),
        endDate: new Date(),
        description: `* Led a frontend team of up to four developers, guiding architecture decisions and best practices.
* Designed and built from scratch the frontend for a task automation designer web application (similar to Make.com or IFTTT) using React, Redux, TanStack Query, DraftJS, and TypeScript.
* Developed a Softphone integration with Salesforce’s OpenCTI.
* Enhanced reliability and performance of a Video Calls web application by delivering critical bug fixes, ensuring stability for small and medium-sized businesses.
* Quickly adapted to new technologies, learning and implementing Amazon Chime SDK and Azure Communication Services to build scalable real-time communication features.
* Collaborated cross-functionally with UX designers, product managers, and backend engineers to refine and optimize video call functionality.
* Contributed to the setup and optimization of the main monorepo, improving build chains, CI/CD pipelines, static analysis tools, and code coverage, boosting developer experience and team productivity.

**Skills used**: React, Redux, React-query (Tanstack Query), Typescript, Material UI, Emotion, CSS with BEM, MongoDB, Git, Webpack, Vite, pnpm with turbo, Github, Azure Communication Services`,
      },
    ]
  },
  {
    place: 'P/S/L Group',
    logo: pslLogo,
    positions: [
      {
        position: 'Senior Software Engineer',
        startDate: parse('2019-05', 'yyyy-MM', new Date()),
        endDate: parse('2021-05', 'yyyy-MM', new Date()),
        description: `* Led the frontend migration from Drupal to React for a content management app serving tens of thousands of users, utilizing React, Redux, Redux-Saga, and Awilix to securely consume RESTful APIs.
* Developed high-performance, scalable backend features with Symfony, MySQL, and ElasticSearch, ensuring zero downtime.
* Designed and built a custom newsletter system from scratch using Twig, Symfony, MySQL, and ElasticSearch, streamlining content distribution.
* Created an admin portal for content management using React and Material-UI, eliminating countless hours of manual database updates.
* Mentored and guided three junior developers, improving their ability to write maintainable, decoupled code following best practices.

**Skills used**: React, Redux, Material UI, CSS+Sass, PHP, Symfony, Node.js, MySQL, MongoDB, ElasticSearch, Git, Webpack`,
      },
      {
        position: 'Software Engineer',
        startDate: parse('2015-03', 'yyyy-MM', new Date()),
        endDate: parse('2019-04', 'yyyy-MM', new Date()),
        description: `* Developed an internal data visualization application with Koa (Node.js), MongoDB, ElasticSearch, and a React frontend.
* Built a dynamic survey generation and visualization platform using Symfony 2, MySQL, Google Charts, dynamic SVG (JavaScript), and a D3.js prototype.
* Maintained and improved the frontend of multiple content aggregator websites in Drupal 7 and a legacy site in Drupal 5, ensuring continued functionality and user experience improvements.

**Skills used**: React, Redux, CSS+Sass, Drupal 7, jQuery, jQuery UI, Node.js, PHP, Symfony, Node.js, Koa.js, MySQL, MongoDB, ElasticSearch, Git, Webpack, Gulp`,
      },
    ]
  },
  {
    place: 'Freelance',
    logo: ahLogo,
    positions: [
      {
        position: '',
        startDate: parse('2014-02', 'yyyy-MM', new Date()),
        endDate: parse('2015-02', 'yyyy-MM', new Date()),
        description: `With side projects since 2006.

* Developed WordPress-based websites for small and medium-sized businesses, delivering customized solutions.
* Built an embeddable cost calculator for a university, integrating with the HubSpot API and an internal tool via SOAP to improve conversion rates.
* Created a CLI tool to convert Excel-based addresses into geolocation points using the Google Geocoder API, automating and streamlining location data processing.
* Developed an interactive graph data visualization prototype using D3.js, React, Node.js, MongoDB, and ElasticSearch.

**Skills used**: PHP, Wordpress, CSS+Sass, Javascript, MySQL, MsSQL Server, Google Analytics, Node.js, MongoDB, ElasticSearch, Excel, D3.js`
      }
    ]
  },
  {
    place: 'UNIDEP',
    logo: unidepLogo,
    positions: [
      {
        position: 'Digital Marketing Manager & Development Lead',
        startDate: parse('2011-02', 'yyyy-MM', new Date()),
        endDate: parse('2014-02', 'yyyy-MM', new Date()),
        description: `* Led a multidisciplinary team of five, overseeing digital strategy and development.
* Developed new lead generation tools, increasing web-driven student enrollments.
* Built and maintained an in-house CRM web app using PHP, MSSQL Server, and Bootstrap, improving visibility into the sales funnel.
* Designed and executed digital marketing strategies, managing the university’s online presence, including websites, landing pages, social media, and digital advertising.
* Optimized conversion tools and user experience through web analytics, reducing bounce rates and increasing lead generation.
* Implemented security best practices and SEO strategies, boosting campus and landing pages to Google's first page.

**Skills used**: PHP, Wordpress, CSS, Javascript, MySQL, MsSQL Server, Google Analytics, Excel, MsProject`,
      }
    ],
  },
];