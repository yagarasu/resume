import moment from 'moment'
import React from 'react'
import classnames from 'classnames/bind'
import Section from '../../components/Section'
import Timeline from '../../components/Timeline'
import TimelineItem from '../../components/TimelineItem'
import SkillList from '../../components/SkillList'
import ConferenceList from '../../components/ConferenceList'
import LanguageList from '../../components/LanguageList'
import Accordion from '../../components/Accordion'
import ViewMore from '../../components/ViewMore'
import pslLogo from '../../assets/psl.png'
import unidepLogo from '../../assets/unidep.png'
import unitecLogo from '../../assets/unitec.png'
import cemLogo from '../../assets/cem.png'
import ahLogo from '../../assets/logo.svg'
import styles from './Resume.module.css'
import SocialIcons from '../../components/SocialIcons'
import {
  faHammer,
  faFileInvoice,
  faBriefcase,
  faGraduationCap,
  faHandsHelping,
  faMicrophoneAlt,
  faGlobeAmericas,
  faFileCode,
  faDatabase,
  faSearch,
  faTerminal,
  faCube,
  faChartBar,
  faFileExcel,
  faTasks,
  faGamepad,
  faMicrochip,
  faProjectDiagram,
  faChalkboardTeacher,
  faBrain,
  faUserTie,
  faUserCheck
} from '@fortawesome/free-solid-svg-icons'
import {
  faJs,
  faReact,
  faPhp,
  faNodeJs,
  faCss3Alt,
  faSass,
  faGitAlt,
  faWordpress,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'

const cx = classnames.bind(styles)

const ResumePage = props => {
  return (
    <div className={cx('Resume')}>
      <div className={cx('two-thirds')}>
        <Section title="Summary" icon={faFileInvoice} className={cx('big')}>
          <p>I am a <strong>Web Developer</strong> specialized in <strong>Frontend</strong> (but capable of doing Backend) based in <strong>Queretaro, Mexico</strong>. I have more than <strong>10 years</strong> of experience working with user facing and internal apps, websites and tools. I majored in <strong>Graphic Design</strong>, but I have been a <strong>passionate developer</strong> since my hands first touched a keyboard as a kid.</p>
        </Section>
      </div>
      <div className={cx('third')}>
        <Section className={cx('small', 'no-title')}>
          <SocialIcons size="2x" />
          {/* <p>I am open for the next challenge where I could keep writing code in the latest technologies to build amazing products alongside great developers. And after a year working from home with great success for both my current employer and myself, I expect to keep working remotely.</p> */}
        </Section>
      </div>
      <hr className={cx('full')} />
      <div className={cx('half')}>
        <Section title="Experience" icon={faBriefcase} >
          <Timeline>
            <TimelineItem
              title="Senior Application Developer"
              subtitle="P/S/L Group"
              subtitleLink="https://www.pslgroup.com"
              dateStart={moment('2019-05')}
              dateEnd="present"
              icon={<img src={pslLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="P/S/L Group" />}
            >
              <ul>
                <li>Main developer in the rebuild of a large content aggregator app serving tens of thousands of users using React, Redux, Redux Saga and Awilix.</li>
                <li>Participated in the construction of the Backend for the same app using Symfony 5, MySQL and ElasticSearch.</li>
                <li>Worked on a Newsletter building and delivering system using Symfony 5, MySQL and ElasticSearch.</li>
                <li>Created an admin app for this content aggregator using React Admin and Material-UI.</li>
                <li>Mentored a couple of junior developers to help them deliver more maintainable, decoupled code with better practices.</li>
              </ul>
              <Accordion title="Tech used" icon={faMicrochip}>
                <SkillList compact items={[
                  { name: 'Javascript', icon: faJs },
                  { name: 'React', icon: faReact },
                  { name: 'Redux', icon: faFileCode },
                  { name: 'CSS+Sass', icon: faSass },
                  { name: 'Symfony', icon: faPhp },
                  { name: 'Node.js', icon: faNodeJs },
                  { name: 'MySQL', icon: faDatabase },
                  { name: 'MongoDB', icon: faDatabase },
                  { name: 'ElasticSearch', icon: faSearch },
                  { name: 'Git', icon: faGitAlt },
                  { name: 'Webpack', icon: faCube }
                ]} />
              </Accordion>
            </TimelineItem>
            <TimelineItem
              title="Application Developer"
              subtitle="P/S/L Group"
              subtitleLink="https://www.pslgroup.com"
              dateStart={moment('2015-03')}
              dateEnd={moment('2019-04')}
              icon={<img src={pslLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="P/S/L Group" />}
            >
              <ul>
                <li>Part of a team of developers working on an internal data visualization application using Koa (Node js), MongoDB, ElasticSearch with a React frontend.</li>
                <li>Worked on a survey generation and data visualization application using Symfony 2, MySQL, Google Charts, dynamic SVG via javascript and a prototype using D3.js.</li>
                <li>Maintained a dozen or so content aggregator websites in Drupal 7 and a legacy website in Drupal 5.</li>
              </ul>
              <Accordion title="Tech used" icon={faMicrochip}>
                <SkillList compact items={[
                  { name: 'Javascript', icon: faJs },
                  { name: 'React', icon: faReact },
                  { name: 'Redux', icon: faFileCode },
                  { name: 'CSS+Sass', icon: faSass },
                  { name: 'Drupal 7', icon: faPhp },
                  { name: 'Node.js', icon: faNodeJs },
                  { name: 'Koa', icon: faNodeJs },
                  { name: 'MySQL', icon: faDatabase },
                  { name: 'MongoDB', icon: faDatabase },
                  { name: 'ElasticSearch', icon: faSearch },
                  { name: 'Git', icon: faGitAlt },
                  { name: 'Webpack', icon: faCube }
                ]} />
              </Accordion>
            </TimelineItem>
            <TimelineItem
              title="Freelance"
              dateStart={moment('2014-02')}
              dateEnd={moment('2013-09')}
              icon={<img src={ahLogo} style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f1f1f1' }} alt="unidep" />}
            >
              <ul>
                <li>Developed WordPress based websites for different small and medium sized companies and groups.</li>
                <li>Developed an embeddable cost calculator for a University as a conversion tool integrating with HubSpot API and an internal tool via SOAP.</li>
                <li>Developed a CLI command to transform addresses in Excel files to geolocation points using Google geocoder.</li>
                <li>Developed the prototype of a data visualization tool using D3.js, React, Node, MongoDB and ElasticSearch.</li>
              </ul>
              <Accordion title="Tech used" icon={faMicrochip}>
                <SkillList compact items={[
                  { name: 'PHP', icon: faPhp },
                  { name: 'WordPress', icon: faWordpress },
                  { name: 'CSS+Sass', icon: faSass },
                  { name: 'Javascript', icon: faJs },
                  { name: 'MySQL', icon: faDatabase },
                  { name: 'MsSQL Server', icon: faDatabase },
                  { name: 'G Analytics', icon: faChartBar },
                  { name: 'Node.js', icon: faNodeJs },
                  { name: 'MongoDB', icon: faDatabase },
                  { name: 'ElasticSearch', icon: faSearch },
                  { name: 'Excel', icon: faFileExcel },
                  { name: 'D3.js', icon: faProjectDiagram }
                ]} />
              </Accordion>
            </TimelineItem>
            <ViewMore>
              <TimelineItem
                title="Digital Marketing Manager"
                subtitle="Professional Develoment University"
                subtitleLink="https://unidep.mx/"
                dateStart={moment('2014-02')}
                dateEnd={moment('2013-09')}
                icon={<img src={unidepLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="unidep" />}
              >
                <ul>
                  <li>Planned the Digital Strategy for the commercialization of different products, being responsible for University's online presence performance and results (website, landing pages, microsites, social media, display and search campaigns, etc.).</li>
                  <li>Optimized conversion tools and user experience through web analysis, reducing bouncing rates and increasing lead flow.</li>
                  <li>Implemented better practices regarding digital infrastructure security, software development processes and Search Engine Optimization (taking campi pages and landing pages to Google's first page).</li>
                  <li>Supervising the optimization and national support of tools like: the CRM, the labour exchange system and others.</li>
                </ul>
                <Accordion title="Tech used" icon={faMicrochip}>
                  <SkillList compact items={[
                    { name: 'PHP', icon: faPhp },
                    { name: 'WordPress', icon: faWordpress },
                    { name: 'CSS+Sass', icon: faSass },
                    { name: 'Javascript', icon: faJs },
                    { name: 'MySQL', icon: faDatabase },
                    { name: 'MsSQL Server', icon: faDatabase },
                    { name: 'G Analytics', icon: faChartBar },
                    { name: 'Excel', icon: faFileExcel },
                    { name: 'Project', icon: faTasks }
                  ]} />
                </Accordion>
              </TimelineItem>
              <TimelineItem
                title="Web Development Coordinator"
                subtitle="Professional Develoment University"
                subtitleLink="https://unidep.mx/"
                dateStart={moment('2014-02')}
                dateEnd={moment('2013-09')}
                icon={<img src={unidepLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="unidep" />}
              >
                <ul>
                  <li>Generated digital strategies based on web statistic analysis, dramatically reducing the overall bouncing rate from 75% to 13%.</li>
                  <li>Developed new lead obtaining tools, increasing Web share in New Enrollment.</li>
                  <li>Developed and maintained an in-house CRM web app using PHP MsSQL Server and Bootstrap, increasing business visibility over the sales funnel.</li>
                </ul>
                <Accordion title="Tech used" icon={faMicrochip}>
                  <SkillList compact items={[
                    { name: 'PHP', icon: faPhp },
                    { name: 'WordPress', icon: faWordpress },
                    { name: 'CSS+Sass', icon: faSass },
                    { name: 'Javascript', icon: faJs },
                    { name: 'MySQL', icon: faDatabase },
                    { name: 'MsSQL Server', icon: faDatabase },
                    { name: 'G Analytics', icon: faChartBar },
                    { name: 'Excel', icon: faFileExcel }
                  ]} />
                </Accordion>
              </TimelineItem>
              <TimelineItem
                title="Web Programmer"
                subtitle="Professional Develoment University"
                subtitleLink="https://unidep.mx/"
                dateStart={moment('2014-02')}
                dateEnd={moment('2013-09')}
                icon={<img src={unidepLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="unidep" />}
              >
                <ul>
                  <li>Developed and maintained a new website focused on lead obtention using WordPress with a custom theme.</li>
                  <li>Implemented web analytics tools for the first time in the University's marketing department.</li>
                  <li>Developed a complex follow-up system connecting web, mailing and the call center, boosting new enrollment. This system was built with PHP and MySQL.</li>
                </ul>
                <Accordion title="Tech used" icon={faMicrochip}>
                  <SkillList compact items={[
                    { name: 'PHP', icon: faPhp },
                    { name: 'WordPress', icon: faWordpress },
                    { name: 'CSS+Sass', icon: faSass },
                    { name: 'Javascript', icon: faJs },
                    { name: 'MySQL', icon: faDatabase }
                  ]} />
                </Accordion>
              </TimelineItem>
              <TimelineItem
                title="Internship"
                subtitle="Technological University of Mexico"
                subtitleLink="https://unitec.mx/"
                dateStart={moment('2014-02')}
                dateEnd={moment('2013-09')}
                icon={<img src={unitecLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="unitec" />}
              >
                <ul>
                  <li>Built and maintained microsites and landing pages for lead obtention in WordPress and HTML + CSS + JS.</li>
                  <li>Developed a Facebook game using Flash and ActionScript 3 for the University alongside other 5 team members in a multidisciplinary team of interns.</li>
                </ul>
                <Accordion title="Tech used" icon={faMicrochip}>
                  <SkillList compact items={[
                    { name: 'PHP', icon: faPhp },
                    { name: 'WordPress', icon: faWordpress },
                    { name: 'CSS+Sass', icon: faSass },
                    { name: 'Javascript', icon: faJs },
                    { name: 'MySQL', icon: faDatabase },
                    { name: 'ActionScript 3', icon: faGamepad },
                    { name: 'FB Graph API', icon: faFacebook }
                  ]} />
                </Accordion>
              </TimelineItem>
            </ViewMore>
          </Timeline>
        </Section>
      </div>
      <div className={cx('half')}>
        <Section title="Skills" icon={faHammer} className={cx('b-left')}>
            <h2 className={cx('subtitle')}>Frontend</h2>
            <SkillList items={[
              { name: 'Javascript', icon: faJs, description: 'ES6, Vanilla and jQuery' },
              { name: 'React', icon: faReact, description: 'Using it since 2016' },
              { name: 'Redux', icon: faFileCode, description: 'With redux-saga and redux-thunk' },
              { name: 'CSS', icon: faCss3Alt, description: 'Version 3' },
              { name: 'Sass', icon: faSass, description: '' }
            ]} />
            <hr className={cx('full')} />
            <h2 className={cx('subtitle')}>Backend</h2>
            <SkillList items={[
              { name: 'PHP', icon: faPhp, description: 'Version 7.3' },
              { name: 'Symfony', icon: faPhp, description: 'Version 5.x' },
              { name: 'Node.js', icon: faNodeJs, description: 'For CLI and servers' },
              { name: 'Koa', icon: faNodeJs }
            ]} />
            <hr className={cx('full')} />
            <h2 className={cx('subtitle')}>Database</h2>
            <SkillList items={[
              { name: 'MySQL', icon: faDatabase, description: 'Version 5.7' },
              { name: 'MongoDB', icon: faDatabase, description: 'Direct or with Mongoose; aggregations' },
              { name: 'ElasticSearch', icon: faSearch, description: 'Mappings, aggregations, complex queries' }
            ]} />
            <hr className={cx('full')} />
            <h2 className={cx('subtitle')}>Other</h2>
            <SkillList items={[
              { name: 'Linux', icon: faTerminal, description: 'Debian and CentOS based' },
              { name: 'Git', icon: faGitAlt, description: 'Git CLI; Github, Bitbucket and Stash' },
              { name: 'Webpack', icon: faCube, description: 'config.js creation' }
            ]} />
        </Section>
        <hr className={cx('full')} />
        <Section title="Soft Skills" icon={faHandsHelping} className={cx('b-left')}>
          <SkillList items={[
              { name: 'Willingness to learn', icon: faGraduationCap, description: 'New tech, new frameworks, new skills, even new languages' },
              { name: 'Mentorship', icon: faChalkboardTeacher, description: 'I love to share what I\'ve learned in the past 10 years' },
              { name: 'Organized', icon: faTasks, description: 'From task lists to kanban; I have a couple of tricks under my sleeve' },
              { name: 'Problem Solving', icon: faBrain, description: 'From initial requirements analysis to prod troubleshooting' },
              { name: 'Integrity', icon: faUserTie, description: 'The truth is my compass' },
              { name: 'Responsible', icon: faUserCheck, description: 'Fulfilling my duties and going above and beyond' }
            ]} />
        </Section>
        <hr className={cx('full')} />
        <Section title="Languages" icon={faGlobeAmericas} className={cx('b-left')}>
          <LanguageList items={[
            { name: 'Spanish', countryCode: 'MX', level: 'Native' },
            { name: 'English', countryCode: 'US', level: 'Cambridge First Certificate' },
            { name: 'Japanese', countryCode: 'JP', level: 'JLPT N5 + 3 months in Japan' },
          ]} />
        </Section>
        <hr className={cx('full')} />
        <Section title="Attended Conferences" icon={faMicrophoneAlt} className={cx('b-left')}>
          <ConferenceList items={[
            { name: 'ConFoo Montreal', year: '2020', link: 'https://confoo.ca/en/yul2020' },
            { name: 'ConFoo Montreal', year: '2019', link: 'https://confoo.ca/en/yul2019' },
            { name: 'ConFoo Montreal', year: '2017', link: 'https://confoo.ca/en/yul2017' },
            { name: 'Campus Party Mexico 4', year: '2013', link: 'https://www.campus-party.org/' },
            { name: 'Campus Party Mexico 3', year: '2011', link: 'https://www.campus-party.org/' },
            { name: 'Campus Party Mexico 2', year: '2010', link: 'https://www.campus-party.org/' },
          ]} />
        </Section>
        <hr className={cx('full')} />
        <Section title="Education" icon={faGraduationCap}>
          <Timeline>
            <TimelineItem
              title="Bachelor's Degree, Graphic Design"
              subtitle="Technological University of Mexico"
              dateStart={moment('2019-05')}
              dateEnd="present"
              icon={<img src={unitecLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="unitec" />}
            />
            <TimelineItem
              title="Technical Course, Graphic Design"
              subtitle="Montreal Education Center (Mexico)"
              dateStart={moment('2019-05')}
              dateEnd="present"
              icon={<img src={cemLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="C.E.M." />}
            />
          </Timeline>
        </Section>
        <hr className={cx('full')} />
      </div>
    </div>
  )
}

export default ResumePage
