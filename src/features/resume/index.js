import moment from 'moment'
import React from 'react'
import classnames from 'classnames/bind'
import Section from '../../components/Section'
import Timeline from '../../components/Timeline'
import TimelineItem from '../../components/TimelineItem'
import SkillList from '../../components/SkillList'
import pslLogo from '../../assets/psl.png'
import styles from './Resume.module.css'
import { faMask, faFileInvoice, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {
  faFileCode,
  faDatabase,
  faSearch,
  faTerminal,
  faCube
} from '@fortawesome/free-solid-svg-icons'
import {
  faJs,
  faReact,
  faPhp,
  faNodeJs,
  faCss3Alt,
  faSass,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'

const cx = classnames.bind(styles)

const ResumePage = props => {
  return (
    <div className={cx('Resume')}>
      <Section title="Summary" icon={faFileInvoice} className={cx('full')}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec iaculis diam. Duis aliquam urna eget diam feugiat posuere. Suspendisse et blandit ante. Ut sed lorem libero. Quisque at risus eu est luctus tincidunt sit amet non erat. Aliquam in mi volutpat nisl lobortis varius. Nunc pulvinar luctus lectus, vitae pellentesque lacus posuere sit amet.</p>
      </Section>
      <hr className={cx('full')} />
      <Section title="Experience" icon={faBriefcase} className={cx('half')}>
        <Timeline>
          <TimelineItem
            title="Senior Application Developer"
            subtitle="P/S/L Group"
            subtitleLink="https://www.pslgroup.com"
            dateStart={moment('2019-05')}
            dateEnd="present"
            icon={<img src={pslLogo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />}
          >
            <p>Frontend and backend development of various content centered web apps for the medical and pharma industry. Responsible for designing the overall implementation of diverse features and mentoring junior developers.</p>
            <SkillList compact items={[
              { name: 'Javascript', icon: faJs },
              { name: 'React', icon: faReact },
              { name: 'Redux', icon: faFileCode },
              { name: 'CSS+Sass', icon: faSass },
              { name: 'Symfony', icon: faPhp },
              { name: 'Node.js', icon: faNodeJs },
              { name: 'Koa', icon: faNodeJs },
              { name: 'MySQL', icon: faDatabase },
              { name: 'MongoDB', icon: faDatabase },
              { name: 'ElasticSearch', icon: faSearch },
              { name: 'Git', icon: faGitAlt },
              { name: 'Webpack', icon: faCube }
            ]} />
          </TimelineItem>
          <TimelineItem
            title="Application Developer"
            subtitle="P/S/L Group"
            dateStart={moment('2015-03')}
            dateEnd={moment('2019-04')}
          >
            <p>Frontend and backend development of varied web apps related to market segments in the medical industry and content indexing for the pharma industry.</p>
          </TimelineItem>
          <TimelineItem
            title="Digital Marketing Manager"
            subtitle="Professional Develoment University"
            dateStart={moment('2014-02')}
            dateEnd={moment('2013-09')}
          >
            <p>Planned the Digital Strategy for the commercialization of different products, being responsible for University's on line presence performance and results (website, landing pages, microsites, social media, display and search campaigns, etc.).</p>
            <p>Optimized conversion tools and user experience through web analysis, reducing bouncing rates and increasing lead flow.</p>
            <p>Implemented better practices regarding digital infrastructure security, software development processes and Search Engine Optimization (taking campi pages and landing pages to Google's first page).</p>
            <p>Supervising the optimization and national support of tools like: the CRM, the labour exchange system and others.</p>
          </TimelineItem>
        </Timeline>
      </Section>
      <Section title="Superpowers" icon={faMask} className={cx('half')}>
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
    </div>
  )
}

export default ResumePage
