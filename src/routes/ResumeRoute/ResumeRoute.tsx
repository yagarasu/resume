import type { FC } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faFileInvoice,
  faHammer,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import ExperienceSection from "./components/ExperienceSection";
import { experience } from "../../data/experience";
import SkillsSection from "./components/SkillsSection";
import Title from "../../components/Title";
import { softSkills, techSkills } from "../../data/skills";
import LanguagesSection from "./components/LanguagesSection";
import { languages } from "../../data/languages";
import ConferencesSection from "./components/ConferencesSection";
import { conferences } from "../../data/conferences";
import EducationSection from "./components/EducationSection";
import { education } from "../../data/education";
import DownloadResumeButton from "./components/DownloadResumeButton";
import styles from "./ResumeRoute.module.scss";

export type ResumeRouteProps = {};

const ResumeRoute: FC<ResumeRouteProps> = () => {
  const hndDownloadClick = () => {
    window.print();
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Summary}>
          <Title icon={faFileInvoice} title="Summary" />
          <p>
            Passionate <strong>Senior Software Engineer</strong> with over{" "}
            <strong>10 years of experience</strong> building high-performance
            <strong>web applications</strong> for both mobile and desktop
            platforms. Specialized in{" "}
            <strong>React, TypeScript, and CSS (Sass)</strong> with expertise in
            crafting scalable and maintainable frontend architectures. Skilled
            in <strong>backend development</strong> with{" "}
            <strong>Node.js and PHP (Symfony)</strong>, consuming secure{" "}
            <strong>RESTful APIs</strong>, and working with databases like{" "}
            <strong>MySQL, MongoDB, and ElasticSearch</strong>. Proficient in{" "}
            <strong>build tools (Webpack, Vite)</strong> and{" "}
            <strong>version control (Git)</strong>. Dedicated to writing clean,
            efficient code and delivering exceptional user experiences.
          </p>
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
          <SkillsSection
            title="Skills"
            icon={faHammer}
            skillGroup={techSkills}
          />
          <SkillsSection
            title="Soft Skills"
            icon={faHandsHelping}
            skillGroup={softSkills}
          />
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
