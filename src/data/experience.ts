import { parse } from 'date-fns';
import { Experience } from '../types/experience';

import nextivaLogo from '../assets/nextiva.jpg';
import pslLogo from '../assets/psl.png';
import ahLogo from '../assets/logo.svg';
import unidepLogo from '../assets/unidep.png';
import unitecLogo from '../assets/unitec.png';

export const experience: Experience[] = [
  {
    place: 'Nextiva',
    logo: nextivaLogo,
    positions: [
      {
        position: 'Senior Software Engineer',
        startDate: parse('2021-05', 'yyyy-MM', new Date()),
        endDate: new Date(),
        description: `* Frontend Lead in the Automation initiative.
* Created a reusable and highly customizable WYSIWYG editor based on draft js capable of exporting HTML and MMS.
* Participated in the maintenance of the videocalls feature of the flagship app.
* Lead the prod deployment process as Release Engineer on multiple occasions.

**Skills used**: Javascript, Typescript, React, Redux, React-query, Material UI, MongoDB, Kibana, Git, Webpack`,
      },
    ]
  },
  {
    place: 'P/S/L Group',
    logo: pslLogo,
    positions: [
      {
        position: 'Senior Application Developer',
        startDate: parse('2019-05', 'yyyy-MM', new Date()),
        endDate: parse('2021-05', 'yyyy-MM', new Date()),
        description: `* Main frontend developer in the rebuild of a large content aggregator app serving tens of thousands of users using React, Redux, Redux Saga and Awilix.
* Participated in the construction of the Backend for the same app using Symfony 5, MySQL and ElasticSearch.
* Worked on a Newsletter building and delivering system using Symfony 5, MySQL and ElasticSearch.
* Created an admin app for this content aggregator using React Admin and Material-UI.
* Mentored a couple of junior developers to help them deliver more maintainable, decoupled code with better practices.
* Worked from home since March 2020 with great success for both my current employer and myself.

**Skills used**: Javascript, React, Redux, Material UI, CSS+Sass, PHP, Symfony, Node.js, MySQL, MongoDB, ElasticSearch, Git, Webpack`,
      },
      {
        position: 'Application Developer',
        startDate: parse('2015-03', 'yyyy-MM', new Date()),
        endDate: parse('2019-04', 'yyyy-MM', new Date()),
        description: `* Part of a team of developers working on an internal data visualization application using Koa (Node js), MongoDB, ElasticSearch with a React frontend.
* Worked on a survey generation and data visualization application using Symfony 2, MySQL, Google Charts, dynamic SVG via javascript and a prototype using D3.js.
* Maintained a dozen or so content aggregator websites in Drupal 7 and a legacy website in Drupal 5.

**Skills used**: Javascript, React, Redux, CSS+Sass, Drupal 7, Node.js, PHP, Symfony, Node.js, Koa.js, MySQL, MongoDB, ElasticSearch, Git, Webpack`,
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
        description: `On and off since 2006, but I tried to be a full time freelance in this period.

* Developed WordPress based websites for different small and medium sized companies and groups.
* Developed an embeddable cost calculator for a University as a conversion tool integrating with HubSpot API and an internal tool via SOAP.
* Developed a CLI command to transform addresses in Excel files to geolocation points using Google geocoder.
* Developed the prototype of a data visualization tool using D3.js, React, Node, MongoDB and ElasticSearch.

**Skills used**: PHP, Wordpress, CSS+Sass, Javascript, MySQL, MsSQL Server, Google Analytics, Node.js, MongoDB, ElasticSearch, Excel, D3.js`
      }
    ]
  },
  {
    place: 'UNIDEP',
    logo: unidepLogo,
    positions: [
      {
        position: 'Digital Marketing Manager',
        startDate: parse('2013-09', 'yyyy-MM', new Date()),
        endDate: parse('2014-02', 'yyyy-MM', new Date()),
        description: `* Planned the Digital Strategy for the commercialization of different products, being responsible for University's online presence performance and results (website, landing pages, microsites, social media, display and search campaigns, etc.).
* Optimized conversion tools and user experience through web analysis, reducing bouncing rates and increasing lead flow.
* Implemented better practices regarding digital infrastructure security, software development processes and Search Engine Optimization (taking campi pages and landing pages to Google's first page).
* Supervising the optimization and national support of tools like: the CRM, the labour exchange system and others.

**Skills used**: PHP, Wordpress, CSS, Javascript, MySQL, MsSQL Server, Google Analytics, Excel, MsProject`,
      },
      {
        position: 'Web Development Coordinator',
        startDate: parse('2012-03', 'yyyy-MM', new Date()),
        endDate: parse('2013-09', 'yyyy-MM', new Date()),
        description: `* Generated digital strategies based on web statistic analysis, dramatically reducing the overall bouncing rate from 75% to 13%.
* Developed new lead obtaining tools, increasing Web share in New Enrollment.
* Developed and maintained an in-house CRM web app using PHP MsSQL Server and Bootstrap, increasing business visibility over the sales funnel.

**Skills used**: PHP, Wordpress, CSS, Javascript, MySQL, MsSQL Server, Google Analytics, Excel`,
      },
      {
        position: 'Web Programmer',
        startDate: parse('2011-02', 'yyyy-MM', new Date()),
        endDate: parse('2012-03', 'yyyy-MM', new Date()),
        description: `* Developed and maintained a new website focused on lead obtention using WordPress with a custom theme.
* Implemented web analytics tools for the first time in the University's marketing department.
* Developed a complex follow-up system connecting web, mailing and the call center, boosting new enrollment. This system was built with PHP and MySQL.

**Skills used**: PHP, Wordpress, CSS, Javascript, MySQL`,
      },
    ]
  },
  {
    place: 'UNITEC',
    logo: unitecLogo,
    positions: [
      {
        position: 'Intern',
        startDate: parse('2010-04', 'yyyy-MM', new Date()),
        endDate: parse('2010-12', 'yyyy-MM', new Date()),
        description: `* Built and maintained microsites and landing pages for lead obtention in WordPress and HTML + CSS + JS.
* Developed a Facebook game using Flash and ActionScript 3 for the University alongside other 5 team members in a multidisciplinary team of interns.

**Skills used**: PHP, Wordpress, CSS, Javascript, MySQL, ActionScript 3, FB Graph API`
      }
    ]
  },
];