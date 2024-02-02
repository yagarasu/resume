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
        description: `* Frontend Lead of a team of up to 4 developers.
* Built from scratch the frontend for a task automation designer web application (similar to make.com or ifttt) using React, Redux, Tanstack Query, DraftJS and Typescript.
* Created a Softphone integration with Salesforce's OpenCTI.
* Delivered bugfixes and new features to a Video Calls web application using React, Amazon Chime SDK and websockets.

**Skills used**: React, Redux, React-query (Tanstack Query), Typescript, Material UI, Emotion, CSS with BEM, MongoDB, Git, Webpack`,
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
        description: `* Frontend Lead in the Drupal to React migration of a content management app serving tens of thousands of users using React, Redux, Redux Saga and Awilix consuming securely RESTful APIs.
* Delivered performant and stable backend features with zero downtime under Symfony 5, MySQL and ElasticSearch.
* Built from scratch a Newsletter building system using Twig templating engine, Symfony 5, MySQL and ElasticSearch.
* Built an admin front app for the content management system using React and Material-UI, freeing countless hours of manual database updates.
* Mentored three junior developers to help them deliver more maintainable, decoupled code with better practices.

**Skills used**: React, Redux, Material UI, CSS+Sass, PHP, Symfony, Node.js, MySQL, MongoDB, ElasticSearch, Git, Webpack`,
      },
      {
        position: 'Software Engineer',
        startDate: parse('2015-03', 'yyyy-MM', new Date()),
        endDate: parse('2019-04', 'yyyy-MM', new Date()),
        description: `* Delivered features for an internal data visualization application using Koa (Node js), MongoDB, ElasticSearch with a React frontend.
* Built a survey generation and data visualization application using Symfony 2, MySQL, Google Charts, dynamic SVG via javascript and a prototype using D3.js.
* Maintained the frontend of a dozen or so content aggregator websites in Drupal 7 and a legacy website in Drupal 5.

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
        description: `On and off since 2006 as a side job. I became full time freelance in this period.

* Developed WordPress based websites for different small and medium sized companies and groups.
* Developed an embeddable cost calculator for a University as a conversion tool integrating with HubSpot API and an internal tool via SOAP.
* Developed a CLI command to transform addresses in Excel files to geolocation points using Google geocoder.
* Developed the prototype of a graph data visualization tool using D3.js, React, Node, MongoDB and ElasticSearch.

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
        description: `* Lead a multidisciplinary team of up to five members.
* Developed new lead obtaining tools, increasing Web share in New Enrollment.
* Developed and maintained an in-house CRM web app using PHP MsSQL Server and Bootstrap, increasing business visibility over the sales funnel.
* Planned the Digital Strategy for the commercialization of different products, being responsible for University's on line presence performance and results (website, landing pages, microsites, social media, display and search campaigns, etc.).
* Optimized conversion tools and user experience through web analysis, reducing bouncing rates and increasing lead flow.
* Implemented better practices regarding digital infrastructure security, software development processes and Search Engine Optimization (taking campi pages and landing pages to Google's first page).

**Skills used**: PHP, Wordpress, CSS, Javascript, MySQL, MsSQL Server, Google Analytics, Excel, MsProject`,
      }
    ],
  },
];