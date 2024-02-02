import type { FC } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileInvoice, faHammer, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import ExperienceSection from './components/ExperienceSection';
import { experience } from '../../data/experience';
import SkillsSection from './components/SkillsSection';
import Title from '../../components/Title';
import { softSkills, techSkills } from '../../data/skills';
import LanguagesSection from './components/LanguagesSection';
import { languages } from '../../data/languages';
import ConferencesSection from './components/ConferencesSection';
import { conferences } from '../../data/conferences';
import EducationSection from './components/EducationSection';
import { education } from '../../data/education';
import DownloadResumeButton from './components/DownloadResumeButton';
import styles from './ResumeRoute.module.scss';

export type ResumeRouteProps = {};

const ResumeRoute: FC<ResumeRouteProps> = () => {
  const hndDownloadClick = () => {
    window.print();
  }
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Summary}>
          <Title icon={faFileInvoice} title="Summary" />
          <p>I'm a <strong>Software Engineer</strong> specialized on web apps for mobile and desktop platforms with more than <strong>10 years</strong> of experience creating browser based software. <strong>Frontend development</strong>: React, Redux, Typescript, CSS with Sass. Build tools like Webpack. <strong>Backend development</strong> with Node.js and PHP (Symfony). Secure Restful API consumption. Databases: MySQL, MongoDB. Elastic Search. Version control with Git.</p>
        </div>
        {/* <div className={styles.SocialMedia}>
          <a href="https://github.com/yagarasu" target="_blank" rel="noreferer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/alexyshegmann" target="_blank" rel="noreferer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div> */}
        <hr className={styles.HDivider} />
        <div className={styles.Experience}>
          <ExperienceSection items={experience} />
        </div>
        <div className={styles.Sidebar}>
          <SkillsSection title="Skills" icon={faHammer} skillGroup={techSkills} />
          <SkillsSection title="Soft Skills" icon={faHandsHelping} skillGroup={softSkills} />
          <LanguagesSection languages={languages} />
          <EducationSection education={education} />
          <ConferencesSection conferences={conferences} />
        </div>
      </div>
      <DownloadResumeButton onClick={hndDownloadClick} />
    </>
  );
};

export default ResumeRoute;