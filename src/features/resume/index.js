import moment from 'moment'
import React from 'react'
import Section from '../../components/Section'
import Timeline from '../../components/Timeline'
import TimelineItem from '../../components/TimelineItem'
import pslLogo from '../../assets/psl.png'

const ResumePage = props => {
  return (
    <div>
      <Section title="Summary">
        <p>Planned the Digital Strategy for the commercialization of different products, being responsible for University's on line presence performance and results (website, landing pages, microsites, social media, display and search campaigns, etc.).</p>
      </Section>
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
    </div>
  )
}

export default ResumePage
